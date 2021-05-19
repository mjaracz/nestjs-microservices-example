import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsSchema } from '../schemas/products.schema';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/db', {
          useNewUrlParser: true,
        }),
        MongooseModule.forFeature([
          { name: 'products', schema: ProductsSchema },
        ]),
      ],
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('when call findAll', () => {
    it('should return array of products from DB', async () => {
      await service.findAll().then(res => {
        expect(res.length).toBeTruthy();
      });
    });
  });
  describe('when call findById', () => {
    it('should return object of product from DB', async () => {
      await service.findById('3').then(res => {
        expect(res[0]._id).toBeTruthy();
      });
    });
  });
});
