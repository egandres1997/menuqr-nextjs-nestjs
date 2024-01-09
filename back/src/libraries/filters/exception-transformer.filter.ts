import { EXCEPTION_DECORATOR_METADATA } from '@libraries/decorators/exception.decorator';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { HttpAdapterHost } from '@nestjs/core';
import { throwError } from 'rxjs';

interface Exception {
  message: string;
  exception?: string;
  statusCode?: number;
  errorCode?: string;
  response?: {
    message?: string;
  };
  getStatus?: () => number;
}

@Catch()
export class ExceptionTransformerFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: Exception, host: ArgumentsHost) {
    console.log({ exception });
    return host.getType() === 'http'
      ? this._transformToHttp(exception, host.switchToHttp())
      : this._transformToRcp(exception);
  }

  private _transformToHttp(exception: Exception, ctx: HttpArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const metadata = Reflect.getMetadata(
      EXCEPTION_DECORATOR_METADATA,
      exception.constructor,
    );

    const responseBody = this._getResponseBody(exception, metadata);

    httpAdapter.reply(ctx.getResponse(), responseBody, responseBody.statusCode);
  }

  private _transformToRcp(exception: Exception) {
    const metadata = Reflect.getMetadata(
      EXCEPTION_DECORATOR_METADATA,
      exception.constructor,
    );

    return throwError(() => this._getResponseBody(exception, metadata));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _getResponseBody(exception: Exception, metadata: any) {
    return {
      exception: exception.exception ?? exception.constructor.name,
      message: exception.response?.message ?? exception.message,
      errorCode: exception.errorCode,
      statusCode:
        exception.statusCode ??
        exception.getStatus?.() ??
        metadata?.statusCode ??
        HttpStatus.INTERNAL_SERVER_ERROR,
    };
  }
}
