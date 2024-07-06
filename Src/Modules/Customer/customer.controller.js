import {asyncHandler} from "../Utils/errorHandling.js"
import customerModel from "../../../DB/Models/Cutomer.model.js"

export const createCustomer = asyncHandler(async(req,res,next)=>{
    const {name,email,phone,age} = req.body
    const checkEmail = await customerModel.findOne({email}) 
    if(checkEmail) return next(new Error(`Customer with email ${checkEmail.email} already exists`))
        const customer = await customerModel.create({name,email,phone,age})
        return res.status(200).json({message:"Customer created successfully", customer})
})