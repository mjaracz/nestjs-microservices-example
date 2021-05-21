import { NatsContext } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../products.controller';
import { ProductsService } from '../products.service';
import { ProductsServiceMock } from '../../utils/unit-tests/product.service.mock';

describe('Products Controller', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock,
        },
      ],
      controllers: [ProductsController],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('when call findAll', () => {
    it('should return array of product', () => {
      return controller.findAll().then(res => {
        expect(res.length).toBeGreaterThan(0);
      });
    });
  });
  describe('when call findById', () => {
    it('should return product object', () => {
      return controller
        .findById('', {
          getSubject: () => 'product.2',
        } as NatsContext)
        .then(res => {
          expect(res.id).toEqual(2);
        });
    });
  });
});
