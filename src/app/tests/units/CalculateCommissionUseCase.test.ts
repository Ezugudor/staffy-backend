import CalculateCommissionUseCase from "../../usecases/CalculateCommissionUseCase";
import Order from "../../../domain/models/Order";

test("should calculate commission for weekday night orders", () => {
  const orderData = {
    id: "1",
    amount: 150,
    date: "2023-07-27T21:00:00.000Z",
    orders: [""],
  };
  const order = new Order(orderData);
  const commission = CalculateCommissionUseCase.execute(order);
  expect(commission).toBe(8); // 3% of 100 + 5% of 50
});
