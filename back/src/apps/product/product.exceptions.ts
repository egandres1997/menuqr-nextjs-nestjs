import { Exception } from '@libraries/decorators/exception.decorator';

@Exception({
  statusCode: 404,
})
export class ProductNotFound {
  constructor(readonly message = 'Product not found') {}

  static withIdOf(id: string): ProductNotFound {
    return new ProductNotFound(`Product with ID of ${id} not found`);
  }
}
