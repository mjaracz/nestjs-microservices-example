export class ProductsServiceMock {
  async findAll() {
    return [{ id: 0 }];
  }
  async findById(id: string) {
    return { id: parseInt(id) };
  }
}
