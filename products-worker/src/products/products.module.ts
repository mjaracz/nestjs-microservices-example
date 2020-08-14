import {Module} from '@nestjs/common'
import {ProductsService} from './products.service'
import {MongooseModule} from '@nestjs/mongoose'
import {ProductsSchema} from './schemas/products.schema'
import {ProductsController} from './products.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'products', schema: ProductsSchema}])
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
