import mongoose , {Schema , model , Types} from "mongoose";

const orderSchema = new Schema({
    customerId : {
        type : Types.ObjectId,
        ref : "Customer",
        required : true
    },
    totalAmount : {
        type : Number,
        required : true
    },
    productId : {
        type : Types.ObjectId,
        ref : "Product",
        required : true
    },
    orderDate : {
        type : Date,
        default : Date.now(),
    }
},{timestamps : true , toJSON : {virtuals : true} , toObject : {virtuals : true}})

const orderModel = mongoose.model.Order || model("Order" , orderSchema);
export default orderModel;