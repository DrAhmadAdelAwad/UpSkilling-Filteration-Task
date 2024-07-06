import mongoose, { model, Schema, Types } from "mongoose";

const productSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
        max : 50,
    },
    description : {
        type : String,
        required : true,
        max : 250,
    },
    price : {
        type : Number,
        required : true,
        min : 0,
    },
    stock : {
        type : Number,
        required : true,
        min : 0,
    }
} , {timestamps : true , toJSON : {virtuals : true} , toObject : {virtuals : true}});

const productModel = mongoose.models.Product || model("Product" , productSchema);
export default productModel;