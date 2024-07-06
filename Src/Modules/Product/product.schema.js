import joi from 'joi';

//createProduct
export const createProduct = joi.object({
    name : joi.string().max(50).required(),
    description : joi.string().max(200).required(),
    price : joi.number().min(1).required(),
    stock : joi.number().min(0).required(),
}).required();

//updateProduct
export const updateProduct = joi.object({
    name : joi.string().max(50),
    description : joi.string().max(200),
    price : joi.number().min(1),
    stock : joi.number().min(0),
    id : joi.string().required(),
}).required();

//deleteProduct
export const deleteProduct = joi.object({
    id : joi.string().required(),
}).required();

//getproduct
export const getProduct = joi.object({
    id : joi.string().required(),
}).required();