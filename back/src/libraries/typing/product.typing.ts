import { ApiProperty } from '@nestjs/swagger';

export namespace TProduct {
  export namespace DTO {
    export class Product {
      @ApiProperty()
      id: string;
      @ApiProperty()
      tenant_id: string;
      @ApiProperty()
      name: string;
      @ApiProperty()
      cover: string;
      @ApiProperty()
      category: string | null;
      @ApiProperty()
      description: string;
      @ApiProperty()
      price: number;
      @ApiProperty()
      created_at: string;
      @ApiProperty()
      updated_at: string;
    }

    export class ProductCategoryCount {
      @ApiProperty()
      category: string;
      @ApiProperty()
      count: number;
    }

    export class CreateProduct {
      @ApiProperty()
      name: string;
      @ApiProperty()
      cover: string;
      @ApiProperty()
      category: string | null;
      @ApiProperty()
      description: string;
      @ApiProperty()
      price: number;
    }
  }
}
