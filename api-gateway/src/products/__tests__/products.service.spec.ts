import { ProductsService } from '../products.service';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { mock } from '../../utils/unit-test/client-proxy.mock';

describe('ProductsService', () => {
  let productsService: ProductsService;
  let simulationNatsClient: jest.Mocked<ClientProxy>;

  beforeEach(() => {
    simulationNatsClient = mock<ClientProxy>('send');
    productsService = new ProductsService(simulationNatsClient);
  });

  it('should be defined', () => {
    expect(productsService).toBeDefined();
  });
  describe('sendToProductsQueue method', () => {
    it('should send data to queue instance', () => {
      simulationNatsClient.send.mockReturnValueOnce(
        of('mocked data- products queue'),
      );
      productsService.sendToProductsQueue();
      expect(simulationNatsClient.send).toBeCalledWith('products', {});
    });
  });
  describe('sendToProductIdQueue(id)', () => {
    it('should return promise fulfilled with Observable', () => {
      simulationNatsClient.send.mockReturnValueOnce(
        of('mocked data- product.id queue'),
      );
      productsService.sendToProductIdQueue('2');
      expect(simulationNatsClient.send).toBeCalledWith('product.2', {});
    });
  });
});
