export type Product = {
  id: string;
  tenant_id: string;
  name: string;
  category: string;
  description: string;
  cover: string;
};

export type ProductCategoryCount = {
  category: string;
  count: number;
};
