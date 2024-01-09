import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ExceptionTransformerFilter } from '@libraries/filters/exception-transformer.filter';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TProduct } from '@libraries/typing/product.typing';
import { TenantAuthGuard } from '@libraries/guards/tenant-auth.guard';
import { Request } from 'express';

@UseGuards(TenantAuthGuard)
@Controller('products')
@ApiTags('Products')
@UseFilters(ExceptionTransformerFilter)
export class ProductController {
  constructor(private readonly _service: ProductService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: TProduct.DTO.Product,
    isArray: true,
  })
  public async getProducts(@Req() req: Request) {
    return await this._service.getProducts(req.user.tenant_id);
  }

  @Get('/categories')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: TProduct.DTO.ProductCategoryCount,
    isArray: true,
  })
  public async getProductsCategories(@Req() req: Request) {
    return await this._service.getProductsCategories(req.user.tenant_id);
  }

  @Get(':product_id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: TProduct.DTO.Product,
  })
  public async getProductById(@Param('product_id') id: string) {
    return await this._service.getProductById(id);
  }

  @Post('bulk')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: TProduct.DTO.Product,
    isArray: true,
  })
  public async createBulkProducts(
    @Body() products: TProduct.DTO.CreateProduct[],
    @Req() req: Request,
  ) {
    return await this._service.createBulkProducts(products, req.user.tenant_id);
  }
}
