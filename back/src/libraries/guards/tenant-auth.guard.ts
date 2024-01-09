import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '@libraries/decorators/is-public.decorator';

@Injectable()
export class TenantAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(
      IS_PUBLIC_KEY,
      context.getHandler(),
    );
    if (isPublic) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    // const token = req.headers.authorization?.split(' ')?.[1] || '';

    req.user = {
      tenant_id: '65872697f6abf1ef3ded1a9b',
    };

    return true;
  }
}
