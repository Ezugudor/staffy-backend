class FetchOrdersUseCase {
  // TODO
  static async execute() {
    return await OrderRepository.fetchAll();
  }
}

export default FetchOrdersUseCase;
