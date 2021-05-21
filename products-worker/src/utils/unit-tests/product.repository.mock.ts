export class ProductRepositoryMock {
  find() {
    return { exec: () => [{ id: 0 }, { id: 1 }] };
  }

  findOne(filter: { id: number }) {
    return {
      exec: () => ({
        id: filter.id,
      }),
    };
  }
}
