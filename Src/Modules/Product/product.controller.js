import productModel from "../../../DB/Models/Product.model.js";
import { asyncHandler } from "../Utils/errorHandling.js";

//createProduct
export const createProduct = asyncHandler(async(req,res,next)=>{
    const {name,description,price,stock} = req.body;
    const checkName = await productModel.findOne({name})
    if(checkName) return next (new Error (`Product ${name} already exists`) , {cause : 409})
    const product = await productModel.create({name,description,price,stock})
    return res.status(200).json({message : "Product created successfully" , product})
})

//updateProduct
export const updateProduct = asyncHandler(async(req,res,next)=>{
    const {id } = req.params
    const product = await productModel.findByIdAndUpdate(id , {...req.body} , {new : true})
    if(!product) return res.status(404).json({message : "Product not found"})
       return res.status(200).json({message : "Product updated successfully" , product})
})

//deleteProduct
export const deleteProduct = asyncHandler(async(req,res,next)=>{
    const {id } = req.params
    const product = await productModel.findByIdAndDelete(id)
    if(!product) return res.status(404).json({message : "Product not found"})
       return res.status(200).json({message : "Product deleted successfully" , product})
})


//getproducts
export const getProducts = asyncHandler(async(req,res,next)=>{
    const products = await productModel.find()
    return res.status(200).json({message : "All products" , products})
})

//getProduct

export const getProduct = asyncHandler(async(req,res,next)=>{
    const {id } = req.params
    const product = await productModel.findById(id)
    if(!product) return res.status(404).json({message : "Product not found"})
       return res.status(200).json({message : "Product found" , product})
})
