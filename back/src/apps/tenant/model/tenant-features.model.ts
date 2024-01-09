import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class TenantFeatures {
  @Prop({ type: mongoose.Schema.Types.Boolean })
  news: boolean;
  @Prop({ type: mongoose.Schema.Types.Boolean })
  featured: boolean;
}
