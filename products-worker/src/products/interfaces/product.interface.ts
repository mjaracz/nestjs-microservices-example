import {Document} from 'mongoose'
import {Currency} from './currency.interface'

export class Product extends Document {
  readonly id: number
  readonly name: string
  readonly price: number
  readonly quantity: number
  readonly description: string
  readonly currency: Currency
  readonly type: ProductType
}

export enum ProductType {
  furniture = 'furniture ',
  additional = 'additional',
  lamps = 'lamps'
}


