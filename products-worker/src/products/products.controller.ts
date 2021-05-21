import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('products')
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
  @MessagePattern('product.*')
  async findById(
    @Payload() data: string,
    @Ctx() context: NatsContext,
  ): Promise<Product> {
    return this.productsService.findById(context.getSubject().split('.')[1]);
  }
}
