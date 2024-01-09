import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true, autoIndex: true, strict: false })
export class Product {
  _id: string;
  id: string;

  @Prop({ type: mongoose.Schema.Types.String })
  tenant_id: string;

  @Prop({ type: mongoose.Schema.Types.String })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String })
  cover: string;

  @Prop({ type: mongoose.Schema.Types.String })
  category: string | null;

  @Prop({ type: mongoose.Schema.Types.String })
  description: string;

  @Prop({ type: mongoose.Schema.Types.Number })
  price: number;

  createdAt: string;
  updatedAt: string;

  static build(product: Partial<Product>): Product {
    const entity = new Product();
    Object.keys(product).map((k) => {
      entity[k] = product[k];
    });
    return entity;
  }
}

export const ProductSchema = SchemaFactory.createForClass(Product);
