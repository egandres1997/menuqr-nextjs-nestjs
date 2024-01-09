import { Product, ProductCategoryCount } from '@/domain/model/product.model';
import { API } from '../axios.client';
import { ApiDirectory } from '../api.directory';

export class ProductApiService {
  static async getProducts(): Promise<Product[]> {
    const response = await API.get<Product[]>(
      ApiDirectory.Product.GetProducts()
    );
    return response.data;
  }

  static async getProductsCategories(): Promise<ProductCategoryCount[]> {
    const response = await API.get<ProductCategoryCount[]>(
      ApiDirectory.Product.GetProductsCategoriesCount()
    );
    return response.data;
  }
}
