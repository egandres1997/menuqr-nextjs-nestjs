import { Injectable, Logger } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductNotFound } from './product.exceptions';
import { ProductMapper } from './product.mapper';
import { TProduct } from '@libraries/typing/product.typing';

@Injectable()
export class ProductService {
  private _logger = new Logger();

  constructor(private readonly _repo: ProductRepository) {}

  public async getProductById(id: string) {
    this._logger.log(`Retrieving product by id ${id}`);

    const product = await this._repo.getProductById(id);

    if (!product) {
      throw ProductNotFound.withIdOf(id);
    }

    return ProductMapper.toDTOFromDomain(product);
  }

  public async getProducts(tenant_id: string) {
    this._logger.log(`Retrieving products for tenant id ${tenant_id}`);

    const products = await this._repo.getProducts(tenant_id);

    return products.map(ProductMapper.toDTOFromDomain);
  }

  public async getProductsCategories(tenant_id: string) {
    this._logger.log(
      `Retrieving product categories for tenant id ${tenant_id}`,
    );

    return await this._repo.getProductCategories(tenant_id);
  }

  public async createBulkProducts(
    products: TProduct.DTO.CreateProduct[],
    tenant_id: string,
  ) {
    this._logger.log(`Creating bulk products`);

    const created = await this._repo.createBulkProducts(
      products.map((p) => ProductMapper.toDomainFromCreate(p, tenant_id)),
    );

    return created.map(ProductMapper.toDTOFromDomain);
  }
}
