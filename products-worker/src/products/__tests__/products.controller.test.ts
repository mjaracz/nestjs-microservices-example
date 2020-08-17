import {Test, TestingModule} from '@nestjs/testing'
import {ProductsController} from '../products.controller'
import {ProductsService} from '../products.service'
import {MongooseModule} from '@nestjs/mongoose'
import {ProductsSchema} from '../schemas/products.schema'
import {NatsContext} from '@nestjs/microservices'

describe('Products Controller', () => {
  let controller: ProductsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/db', {useNewUrlParser: true}),
        MongooseModule.forFeature([{name: 'products', schema: ProductsSchema}])
      ],
      controllers: [ProductsController],
      providers: [ProductsService]
    }).compile()

    controller = module.get<ProductsController>(ProductsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  describe('when call findAll', () => {
    it('should return array of product', () => {
      controller.findAll('', {} as NatsContext).then(res => {
        expect(res.length).toBeTruthy()
      })
    })
  })
  describe('when call findById', () => {
    it('should return product object', function () {
      controller.findById('', {
        getSubject: () => 'product.2'
      } as NatsContext)
        .then(res => {
          expect(res[0]._id).toBeTruthy()
        })

    })
  })
})
