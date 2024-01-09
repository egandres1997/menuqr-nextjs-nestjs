import { Tenant } from '@/domain/model/tenant.model';
import queryClient from '@/infra/query.client';
import { TenantApiService } from '@/infra/services/tenantApi.service';
import { useQuery } from '@tanstack/react-query';

const getQuery = (url: string) => ({
  queryKey: [TenantApiService.getTenantByUrl.name, url],
  queryFn: () => TenantApiService.getTenantByUrl(url),
});

export const prefetchTenant = (url: string) => {
  const { queryKey, queryFn } = getQuery(url);
  return () =>
    queryClient.prefetchQuery({
      queryKey,
      queryFn,
    });
};

export const getTenant = (url: string) => {
  const { queryKey } = getQuery(url);
  return queryClient.getQueryData<Tenant>(queryKey);
};

export const useGetTenantByUrl = <IsServer extends boolean = true>(
  url: string
) => {
  const { queryKey, queryFn } = getQuery(url);

  const {
    data: tenant,
    isLoading: loadingTenant,
    isError: errorTenant,
  } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    tenant: tenant as IsServer extends true ? Tenant : Tenant | undefined,
    loadingTenant,
    errorTenant,
  };
};
