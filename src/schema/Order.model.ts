import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";

const orderSchema = new Schema(
  {
    orderTotal: {
      type: Number,
      required: true,
    },

    orderDelivery: {
      type: Number,
      required: true,
    },

    orderStatus: {
      type: String,
      enum: OrderStatus,
      default: OrderStatus.PAUSE,
    },

    memberId: {
      //orderni kim qilayotganini memberid deb belgiladik.
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Member", //member shema modelda MEMBER deb atab olganmiz. va shunga qaratyapmiz.
    },
  },
  { timestamps: true, collection: "orders" }
);

export default mongoose.model("Order", orderSchema);
