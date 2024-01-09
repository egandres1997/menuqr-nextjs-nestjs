import { Product } from '@/domain/model/product.model';
import queryClient from '@/infra/query.client';
import { ProductApiService } from '../services/productApi.service';
import { useQuery } from '@tanstack/react-query';

const getQuery = () => ({
  queryKey: [ProductApiService.getProducts.name],
  queryFn: () => ProductApiService.getProducts(),
});

export const prefetchProducts = () => {
  const { queryKey, queryFn } = getQuery();
  return () =>
    queryClient.prefetchQuery({
      queryKey,
      queryFn,
    });
};

export const getProducts = () => {
  const { queryKey } = getQuery();
  return queryClient.getQueryData<Product[]>(queryKey);
};

export const useGetProducts = () => {
  const { queryKey, queryFn } = getQuery();

  const {
    data: products = [],
    isLoading: loadingProducts,
    isError: errorProducts,
  } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    products,
    loadingProducts,
    errorProducts,
  };
};
