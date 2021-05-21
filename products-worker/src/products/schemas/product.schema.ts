import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  description: string;

  @Prop()
  currency: Currency;

  @Prop()
  type: ProductType;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

export enum ProductType {
  furniture = 'furniture ',
  additional = 'additional',
  lamps = 'lamps',
}

export enum Currency {
  CAD = 'CAD',
  HKD = 'HKD',
  ISK = 'ISK',
  PHP = 'PHP',
  DKK = 'DKK',
  HUF = 'HUF',
  CZK = 'CZK',
  GBP = 'GBP',
  RON = 'RON',
  SEK = 'SEK',
  IDR = 'IDR',
  INR = 'INR',
  BRL = 'BRL',
  RUB = 'RUB',
  HRK = 'HRK',
  JPY = 'JPY',
  THB = 'THB',
  CHF = 'CHF',
  EUR = 'EUR',
  MYR = 'MYR',
  BGN = 'BGN',
  TRY = 'TRY',
  CNY = 'CNY',
  NOK = 'NOK',
  NZD = 'NZD',
  ZAR = 'ZAR',
  USD = 'USD',
  MXN = 'MXN',
  SGD = 'SGD',
  AUD = 'AUD',
  ILS = 'ILS',
  KRW = 'KRW',
  PLN = 'PLN',
}
