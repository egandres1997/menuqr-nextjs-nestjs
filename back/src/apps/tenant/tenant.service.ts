import { Injectable, Logger } from '@nestjs/common';
import { TenantRepository } from './tenant.repository';
import { TenantNotFound } from './tenant.exceptions';
import { TenantMapper } from './tenant.mapper';

@Injectable()
export class TenantService {
  private _logger = new Logger();

  constructor(private readonly _repo: TenantRepository) {}

  public async getTenantById(id: string) {
    this._logger.log(`Retrieving tenant by id ${id}`);

    const tenant = await this._repo.getTenantById(id);

    if (!tenant) {
      throw TenantNotFound.withIdOf(id);
    }

    return TenantMapper.toDTOFromDomain(tenant);
  }

  public async getTenantByUrl(url: string) {
    this._logger.log(`Retrieving tenant by url ${url}`);

    const tenant = await this._repo.getTenantByUrl(url);

    if (!tenant) {
      throw TenantNotFound.withUrlOf(url);
    }

    return TenantMapper.toDTOFromDomain(tenant);
  }
}
