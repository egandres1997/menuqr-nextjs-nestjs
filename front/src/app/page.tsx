import { prefetchProducts } from '@/infra/queries/getProducts.query';
import { prefetchProductsCategories } from '@/infra/queries/getProductsCategories.query';
import queryClient from '@/infra/query.client';
import AppBar from '@/ui/components/AppBar';
import ProductsList from '@/ui/modules/products-list';
import getDomain from '@/utils/getDomain';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

export default async function HomePage() {
  const url = getDomain();
  await prefetchProducts()();
  await prefetchProductsCategories()();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AppBar url={url} />
      <ProductsList />
    </HydrationBoundary>
  );
}
