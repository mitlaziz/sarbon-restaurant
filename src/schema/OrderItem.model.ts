import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema(
  {
    itemQuantity: {
      type: Number,
      required: true,
    },

    itemPrice: {
      type: Number,
      required: true,
    },

    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },

    productId: {
      //qaysi productdan hosil boldi deb kelayapti.ya'ni producttId prodect collectionga boglangan.shuni belgilayapmiz
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true, collection: "orderItems" }
); // default holatda mongodb collectionni kichik harflar bn koplida yasab beradi. biz shuni ozimiz "orderItems" deb camelcase da qilib qoyamaiz

export default mongoose.model("OrderItem", orderItemSchema);
