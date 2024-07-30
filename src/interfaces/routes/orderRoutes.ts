import express from "express";
import OrderController from "../controllers/OrderController";

const router = express.Router();

router.get("/", OrderController.fetchOrders);

export default router;
