import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
  ) {}

  sendToProductsQueue(): Observable<Product[]> {
    const startTime = Date.now();
    return this.natsClient.send('products', {}).pipe(
      map(message => ({
        duration: Date.now() - startTime,
        ...message,
      })),
    );
  }
  sendToProductIdQueue(productId: string): Observable<Product> {
    const startTime = Date.now();
    return this.natsClient.send(`product.${productId}`, {}).pipe(
      map(message => ({
        duration: Date.now() - startTime,
        ...message,
      })),
    );
  }
}
