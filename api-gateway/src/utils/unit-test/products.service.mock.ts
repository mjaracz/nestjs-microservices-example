import { of } from 'rxjs';

export class ProductsServiceMock {
  sendToProductsQueue() {
    return of([{ id: 0 }]);
  }

  sendToProductIdQueue(paramId: string) {
    return of({ id: parseInt(paramId) });
  }
}
