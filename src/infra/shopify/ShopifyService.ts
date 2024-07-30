import axios from "axios";
import OrderModel from "../database/models/OrderModel";

class ShopifyService {
  private static SHOPIFY_API_URL = "";

  static async fetchOrders(): Promise<void> {
    try {
      const response = await axios.get(ShopifyService.SHOPIFY_API_URL);
      const orders = response.data;

      // Save or update orders in the database
      for (const order of orders) {
        await OrderModel.findOneAndUpdate(
          { id: order.id },
          {
            orderDate: new Date(order.date),
            customerName: order.customerName,
            attributedStaffName: order.attributedStaffName,
            total: order.total,
            commissionInDollars: order.commissionInDollars,
          },
          { upsert: true }
        );
      }
    } catch (error) {
      console.error("Error fetching orders from Shopify:", error);
      throw new Error("Failed to fetch orders from Shopify.");
    }
  }
}

export default ShopifyService;
