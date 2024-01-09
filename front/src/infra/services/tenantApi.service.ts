import { Tenant } from '@/domain/model/tenant.model';
import { API } from '../axios.client';
import { ApiDirectory } from '../api.directory';

export class TenantApiService {
  static async getTenantByUrl(url: string): Promise<Tenant> {
    const response = await API.get<Tenant>(
      ApiDirectory.Tenant.GetTenantByUrl(url)
    );
    return response.data;
  }
}
