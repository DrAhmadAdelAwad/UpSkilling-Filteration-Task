import joi from "joi";

export const createCustomer = joi.object({
    name : joi.string().max(50).required(),
    email : joi.string().email().required(),
    phone : joi.string().min(11).max(11).required(),
    age : joi.number().integer().min(18).max(100).required(),
}).required();
