import 'reflect-metadata';
import { randomUUID } from 'crypto';

export const EXCEPTION_DECORATOR_METADATA = 'exception-decorator-metadata';

export interface ExceptionDecoratorMetadata {
  /**
   * Defines the decorator identifier
   */
  id?: string;
  /**
   * Defines the exception http status code.
   */
  statusCode: number;
}

export const Exception = ({
  statusCode,
}: Omit<ExceptionDecoratorMetadata, 'id'>) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return <T extends Function>(target: T) => {
    const metadata: ExceptionDecoratorMetadata = {
      id: randomUUID(),
      statusCode,
    };
    Reflect.defineMetadata(EXCEPTION_DECORATOR_METADATA, metadata, target);
  };
};
