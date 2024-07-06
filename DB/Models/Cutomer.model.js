import mongoose , {Schema , model , Types} from "mongoose";

const customerSchema = new Schema({
    name  : {
        type : String,
        required : true,
        max : 50,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    phone : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
        min : 18,
    }
},{timestamps : true , toJSON : {virtuals : true} , toObject : {virtuals : true}})

const customerModel = mongoose.model.Customer || model("Customer" , customerSchema);
export default customerModel;