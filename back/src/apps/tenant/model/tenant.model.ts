import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { TenantCustomization } from './tenant-customization.model';
import { TenantFeatures } from './tenant-features.model';

export type TenantDocument = HydratedDocument<Tenant>;

@Schema({ timestamps: true, autoIndex: true, strict: false })
export class Tenant {
  _id: string;
  id: string;

  @Prop({ type: mongoose.Schema.Types.String })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String, index: true })
  url: string;

  @Prop({ type: mongoose.Schema.Types.String })
  logo: string;

  @Prop({ type: TenantFeatures })
  features: TenantFeatures;

  @Prop({ type: TenantCustomization })
  customization: TenantCustomization;

  createdAt: string;
  updatedAt: string;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
