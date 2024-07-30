import { Request, Response } from "express";
import OrderModel from "../../infra/database/models/OrderModel";
import Order from "../../domain/models/Order";
import CalculateCommissionUseCase from "../../app/usecases/CalculateCommissionUseCase";
import ShopifyService from "../../infra/shopify/ShopifyService";

class OrderController {
  static async fetchOrders(req: Request, res: Response) {
    try {
      const orders = await OrderModel.find().exec();
      const ordersWithCommission = orders.map((order) => {
        const orderModel = new Order(order.toObject());
        const commission = CalculateCommissionUseCase.execute(orderModel);
        return {
          ...order.toObject(),
          commissionInDollars: commission,
        };
      });
      res.json(ordersWithCommission);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching orders." });
    }
  }

  static async syncOrders(req: Request, res: Response) {
    try {
      await ShopifyService.fetchOrders(); //TODO: I intend to have a DI container e.g inversify or Awilix to resolve this
      res.status(200).send("Orders synced successfully.");
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while syncing orders." });
    }
  }
}

export default OrderController;
