export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: number;
  currency: Currency;
  type: ProductType;
  duration: number;
}

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
