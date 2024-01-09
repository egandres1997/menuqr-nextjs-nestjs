import { Product } from '@/domain/model/product.model';
import queryClient from '@/infra/query.client';
import { ProductApiService } from '../services/productApi.service';
import { useQuery } from '@tanstack/react-query';

const getQuery = () => ({
  queryKey: [ProductApiService.getProductsCategories.name],
  queryFn: () => ProductApiService.getProductsCategories(),
});

export const prefetchProductsCategories = () => {
  const { queryKey, queryFn } = getQuery();
  return () =>
    queryClient.prefetchQuery({
      queryKey,
      queryFn,
    });
};

export const getProductsCategories = () => {
  const { queryKey } = getQuery();
  return queryClient.getQueryData<Product[]>(queryKey);
};

export const useGetProductsCategories = () => {
  const { queryKey, queryFn } = getQuery();

  const {
    data: productsCategories = [],
    isLoading: loadingProductsCategories,
    isError: errorProductsCategories,
  } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    productsCategories,
    loadingProductsCategories,
    errorProductsCategories,
  };
};
