import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../products.controller';
import { ProductsService } from '../products.service';
import { ProductsServiceMock } from '../../utils/unit-test/products.service.mock';

describe('Products Controller', () => {
  let productsController: ProductsController;

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

    productsController = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });
  describe('getProducts method', () => {
    it('should return array of products', () => {
      return productsController
        .getProducts()
        .toPromise()
        .then(products => {
          expect(products.length).toBeGreaterThan(0);
        });
    });
  });
  describe('getProductById method', () => {
    it('should return product by id', () => {
      return productsController
        .getProductById('2')
        .toPromise()
        .then(productById => {
          expect(productById.id).toEqual(2);
        });
    });
  });
});
