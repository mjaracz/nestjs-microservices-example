import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
  ) {}

  async sendToProductsQueue() {
    const startTime = Date.now();
    return this.natsClient.send('products', '').pipe(
      map(message => ({
        duration: Date.now() - startTime,
        ...message,
      })),
    );
  }
  async sendToProductIdQueue(productId: string) {
    const startTime = Date.now();
    return this.natsClient.send(`product.${productId}`, '').pipe(
      map(message => ({
        duration: Date.now() - startTime,
        ...message,
      })),
    );
  }
}
