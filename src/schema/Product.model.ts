import mongoose, {Schema} from 'mongoose';
import { ProductCollection, ProductSize, ProductStatus, ProductVolume } from '../libs/enums/product.enum';

const productSchema = new Schema( {
    productStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
    },

    productCollection: {
        type: String,
        enum: ProductCollection,
        required: true,
    },

    productName: {
        type: String,
        required: true,
    },

    productPrice: {
        type: Number,
        required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productSize: {
        type: String,
        enum: ProductSize,
        default: ProductSize.NORMAL,
    },


    productVolume: {
        type: String,
        enum: ProductVolume,
        default: ProductVolume.ONE,
    },

    productDesc: {
        type: String,
        required: true,
    },

    productImages: {
        type: [String],
        required: []
    },

    productViews: {
        type: Number,
        default: 0,
    }

},
  {timestamps: true}    //updatedAt, createdAt
);

productSchema.index(
    {productname: 1, productsize: 1, productvolume: 1}, 
    {unique: true}
    );
export default mongoose.model('Product', productSchema);