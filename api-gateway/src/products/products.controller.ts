import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async sendToProductsQueue() {
    return this.productsService.sendToProductsQueue();
  }
  @Get(':id')
  async sendToProductIdQueue(@Param('id') id: string) {
    return this.productsService.sendToProductIdQueue(id);
  }
}
