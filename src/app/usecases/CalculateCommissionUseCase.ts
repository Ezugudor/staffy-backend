import Order from "../../domain/models/Order";
import Commission from "../../domain/models/Commission";

class CalculateCommissionUseCase {
  static execute(order: Order): number {
    const commission = new Commission(order);
    return commission.calculate();
  }
}

export default CalculateCommissionUseCase;
