import { Controller, Get, Param } from '@nestjs/common';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Observable<Product[]> {
    return this.productsService.sendToProductsQueue();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Observable<Product> {
    return this.productsService.sendToProductIdQueue(id);
  }
}
