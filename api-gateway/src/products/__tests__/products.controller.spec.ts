import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../products.controller';
import { ProductsService } from '../products.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

describe('Products Controller', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: 'NATS_CLIENT',
            transport: Transport.NATS,
            options: {
              url: 'nats://localhost:4222',
            },
          },
        ]),
      ],
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productsController = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });
  describe('sendToProductsQueue()', () => {
    it('should return any products array ', async () => {
      jest
        .spyOn(productsService, 'sendToProductsQueue')
        .mockImplementation(
          () => (['product1'] as undefined) as Promise<Observable<any>>,
        );
      expect(await productsService.sendToProductsQueue()).toEqual(['product1']);
    });
  });
  describe('sendToProductIdQueue()', () => {
    it('should return any product by id', async () => {
      jest
        .spyOn(productsService, 'sendToProductIdQueue')
        .mockImplementation(
          () => ('product by id' as undefined) as Promise<Observable<any>>,
        );
      expect(await productsService.sendToProductIdQueue('2')).toEqual(
        'product by id',
      );
    });
  });
});
