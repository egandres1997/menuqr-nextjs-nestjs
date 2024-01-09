import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './model/product.model';
import { Model } from 'mongoose';
import { ProductMapper } from './product.mapper';
import { TProduct } from '@libraries/typing/product.typing';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly _model: Model<Product>,
  ) {}

  public async getProductById(id: string): Promise<Product | null> {
    return ProductMapper.toDomainFromPersistence(
      await this._model.findById(id),
    );
  }

  public async getProducts(tenant_id: string) {
    const products = await this._model.find({ tenant_id }).sort({
      createdAt: 'desc',
    });
    return products.map(ProductMapper.toDomainFromPersistence);
  }

  public async getProductCategories(tenant_id: string) {
    return await this._model.aggregate<TProduct.DTO.ProductCategoryCount[]>([
      { $match: { tenant_id } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $project: { _id: 0, category: '$_id', count: 1 } },
    ]);
  }

  public async createBulkProducts(products: Product[]) {
    const created = await this._model.create(products);
    return created.map(ProductMapper.toDomainFromPersistence);
  }
}
