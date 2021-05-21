import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductRepositoryMock } from '../../utils/unit-tests/product.repository.mock';
import { ProductsService } from '../products.service';
import { Product } from '../schemas/product.schema';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(Product.name),
          useClass: ProductRepositoryMock,
        },
        ProductsService,
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('when call findAll', () => {
    it('should return array of products', () => {
      return service.findAll().then(res => {
        expect(res.length).toBeGreaterThan(0);
      });
    });
  });
  describe('when call findById', () => {
    it('should return particular product', () => {
      return service.findById('3').then(res => {
        expect(res.id).toEqual(3);
      });
    });
  });
});
