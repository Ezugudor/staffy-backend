import Order from "./Order";

class Commission {
  private order: Order;
  private amount: number;

  constructor(order: Order) {
    this.order = order;
    this.amount = 0;
  }

  calculate(): number {
    const amount = this.order.amount;

    if (this.order.isWeekdayNight()) {
      this.amount =
        0.03 * Math.min(amount, 100) + 0.05 * Math.max(0, amount - 100);
    } else if (this.order.isWeekday()) {
      this.amount = 0.03 * amount;
    } else if (this.order.isWeekend()) {
      const productCommission = Math.min(this.order.products.length * 10, 50);
      this.amount = productCommission > 50 ? 0.03 * amount : productCommission;
    }

    return this.amount;
  }
}

export default Commission;
