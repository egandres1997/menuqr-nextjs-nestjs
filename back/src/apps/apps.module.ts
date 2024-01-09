import { Module } from '@nestjs/common';
import { TenantModule } from './tenant/tenant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_DB_URL'),
      }),
      inject: [ConfigService],
    }),

    TenantModule,
    ProductModule,
  ],
})
export class AppsModule {}
