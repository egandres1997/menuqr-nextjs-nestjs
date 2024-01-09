import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tenant } from './model/tenant.model';
import { Model } from 'mongoose';
import { TenantMapper } from './tenant.mapper';

@Injectable()
export class TenantRepository {
  constructor(
    @InjectModel(Tenant.name)
    private readonly _model: Model<Tenant>,
  ) {}

  public async getTenantById(id: string) {
    return TenantMapper.toDomainFromPersistence(
      await this._model.findById(id).lean(),
    );
  }

  public async getTenantByUrl(url: string) {
    return TenantMapper.toDomainFromPersistence(
      await this._model.findOne({ url }).lean(),
    );
  }
}
