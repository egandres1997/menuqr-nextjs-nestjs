export const ApiDirectory = {
  Tenant: {
    GetTenantByUrl: (url: string) => `/tenants/url/${encodeURIComponent(url)}`,
  },
  Product: {
    GetProducts: () => '/products',
    GetProductsCategoriesCount: () => '/products/categories',
  },
};
