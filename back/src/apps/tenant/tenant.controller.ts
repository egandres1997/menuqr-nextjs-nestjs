import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseFilters,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { ExceptionTransformerFilter } from '@libraries/filters/exception-transformer.filter';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TTenant } from '@libraries/typing/tenant.typing';

@Controller('tenants')
@ApiTags('Tenants')
@UseFilters(ExceptionTransformerFilter)
export class TenantController {
  constructor(private readonly _service: TenantService) {}

  @Get(':tenant_id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: TTenant.DTO.Tenant,
  })
  public async getTenantById(@Param('tenant_id') id: string) {
    return await this._service.getTenantById(id);
  }

  @Get('url/:tenant_url')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: TTenant.DTO.Tenant,
  })
  public async getTenantByUrl(@Param('tenant_url') url: string) {
    return await this._service.getTenantByUrl(url);
  }
}
