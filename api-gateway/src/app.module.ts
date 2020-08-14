import {Module} from '@nestjs/common'
import {SenderMailModule} from './sender-mail/sender-mail.module'
import {ProductsModule} from './products/products.module';

@Module({
  imports: [
    SenderMailModule,
    ProductsModule
  ],
})
export class AppModule {}
