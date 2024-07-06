import orderModel from "../../../DB/Models/Order.model.js";
import productModel from "../../../DB/Models/Product.model.js";
import { asyncHandler } from "../Utils/errorHandling.js";

// create order
export const createOrder = asyncHandler(async(req,res,next)=>{
    const {customerId , productId , totalAmount} = req.body
    const checkProduct = await productModel.findById(productId);
    if(!checkProduct) return next(new Error(`Product not found with id ${productId}` , {cause : 404}));
    const order = await orderModel.create({customerId , productId , totalAmount})
    return res.status(201).json({message : "Order created successfully" , order})
})

// update order
export const updateOrder = asyncHandler(async(req,res,next) => {
    const {id} = req.params
    const order = await orderModel.findByIdAndUpdate(id , {...req.body} , {new : true})
    if(!order) return next(new Error("Order Doesn't Exist" , {cause : 404}))
       return res.status(200).json({message : "Order updated successfully" , order})
})


//delete order
export const deleteOrder = asyncHandler(async(req,res,next) => {
    const {id} = req.params
    const order = await orderModel.findByIdAndDelete(id)
    if(!order) return next(new Error("Order Doesn't Exist" , {cause : 404}))
       return res.status(200).json({message : "Order deleted successfully" , order})
})

// get all orders
export const getAllOrders = asyncHandler(async(req,res,next) => {
    const orders = await orderModel.find()
    return res.status(200).json({message : "All orders" , orders})
})

// get order by id
export const getOrder = asyncHandler(async(req,res,next) => {
    const {id} = req.params
    const order = await orderModel.findById(id)
    if(!order) return next(new Error("Order Doesn't Exist" , {cause : 404}))
       return res.status(200).json({message : "Order found" , order})
})