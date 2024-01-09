import { TTenant } from '@libraries/typing/tenant.typing';
import { Tenant, TenantDocument } from './model/tenant.model';

export class TenantMapper {
  static toDTOFromDomain(t: Tenant): TTenant.DTO.Tenant {
    return {
      id: t.id,
      name: t.name,
      url: t.url,
      logo: t.logo,
      features: t.features,
      customization: t.customization,
      created_at: t.createdAt,
      updated_at: t.updatedAt,
    };
  }

  static toDomainFromPersistence(t: TenantDocument | null): Tenant | null {
    return t ? { ...t, id: t._id.toString() } : null;
  }
}
