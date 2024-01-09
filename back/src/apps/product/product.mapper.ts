import { TProduct } from '@libraries/typing/product.typing';
import { Product, ProductDocument } from './model/product.model';

export class ProductMapper {
  static toDTOFromDomain(p: Product): TProduct.DTO.Product {
    return {
      id: p.id,
      tenant_id: p.tenant_id,
      name: p.name,
      cover: p.cover,
      category: p.category,
      description: p.description,
      price: p.price,
      created_at: p.createdAt,
      updated_at: p.updatedAt,
    };
  }

  static toDomainFromCreate(
    p: TProduct.DTO.CreateProduct,
    tenant_id: string,
  ): Product {
    return Product.build({
      ...p,
      tenant_id,
    });
  }

  static toDomainFromPersistence(p: ProductDocument | null): Product | null {
    return p ? { ...p.toJSON(), id: p._id.toString() } : null;
  }
}
