class Order {
  id: string;
  amount: number;
  date: Date;
  products: string[];

  constructor(data: any) {
    this.id = data.id;
    this.amount = data.amount;
    this.date = new Date(data.date);
    this.products = data.products;
  }

  isWeekday(): boolean {
    const day = this.date.getDay();
    return day >= 1 && day <= 4;
  }

  isWeekdayNight(): boolean {
    return this.isWeekday() && this.date.getHours() >= 20;
  }

  isWeekend(): boolean {
    const day = this.date.getDay();
    return day === 5 || day === 6;
  }
}

export default Order;
