import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {Product} from './interfaces/product.interface'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products') private readonly productModel: Model<Product>
  ) {}

  async findAll() {
    return this.productModel.find().exec()
  }
  async findById(id: string) {
    return this.productModel.find({ id: id }).exec()
  }
}
