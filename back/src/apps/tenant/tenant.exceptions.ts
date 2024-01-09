import { Exception } from '@libraries/decorators/exception.decorator';

@Exception({
  statusCode: 404,
})
export class TenantNotFound {
  constructor(readonly message = 'Tenant not found') {}

  static withIdOf(id: string): TenantNotFound {
    return new TenantNotFound(`Tenant with ID of ${id} not found`);
  }

  static withUrlOf(url: string): TenantNotFound {
    return new TenantNotFound(`Tenant with url of ${url} not found`);
  }
}
