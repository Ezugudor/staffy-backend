import mongoose, { Document, Schema } from "mongoose";

interface IOrder extends Document {
  id: string;
  orderDate: Date;
  customerName: string;
  attributedStaffName: string;
  total: number;
  commissionInDollars: number;
}

const OrderSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  orderDate: { type: Date, required: true },
  customerName: { type: String, required: true },
  attributedStaffName: { type: String, required: true },
  total: { type: Number, required: true },
  commissionInDollars: { type: Number, required: true },
});

const OrderModel = mongoose.model<IOrder>("Order", OrderSchema);

export default OrderModel;
