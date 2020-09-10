import {Test, TestingModule} from '@nestjs/testing'
import {ProductsService} from '../products.service'
import {ClientsModule, Transport} from '@nestjs/microservices'

describe('ProductsService', () => {
  let productsService: ProductsService

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
      providers: [
        ProductsService
      ],
    }).compile();

    productsService = module.get<ProductsService>(ProductsService);
  })

  it('should be defined', () => {
    expect(productsService).toBeDefined();
  });

})
