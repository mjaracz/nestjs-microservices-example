import {Controller} from '@nestjs/common'
import {ProductsService} from './products.service'
import {Ctx, MessagePattern, NatsContext, Payload} from '@nestjs/microservices'

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @MessagePattern('products')
  async findAll(@Payload() data: string, @Ctx() context: NatsContext) {
    return this.productsService.findAll()
  }
  @MessagePattern('product.*')
  async findById(@Payload() data: string, @Ctx() context: NatsContext) {
    const productId = context.getSubject().split('.')[1]
    return this.productsService.findById(productId)
  }
}
