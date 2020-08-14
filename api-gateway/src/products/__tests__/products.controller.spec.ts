import {Test, TestingModule} from '@nestjs/testing'
import {ProductsController} from '../products.controller'
import {ProductsService} from '../products.service'
import {ClientsModule, Transport} from '@nestjs/microservices'

describe('Products Controller', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: 'NATS_CLIENT',
            transport: Transport.NATS,
            options: {
              url: 'nats://localhost:4222'
            }
          }
        ])
      ],
      controllers: [ProductsController],
      providers: [ProductsService]
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
