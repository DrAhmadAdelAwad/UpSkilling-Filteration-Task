import joi from 'joi';

export const createOrder = joi.object({
    customerId : joi.string().required(),
    productId : joi.string().required(),
    totalAmount : joi.number().required(),
    orderDate : joi.date().default(new Date())
}).required();

// update order
export const updateOrder = joi.object({
    customerId : joi.string(),
    productId : joi.string(),
    totalAmount : joi.number(),
    orderDate : joi.date().default(new Date()),
    id : joi.string(),
}).required();

// delete order
export const deleteOrder = joi.object({
    id : joi.string(),
}).required();

//getOrderById

export const getOrder = joi.object({
    id : joi.string().required(),
}).required();

// getAllOrders