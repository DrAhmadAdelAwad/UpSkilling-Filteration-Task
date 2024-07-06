import mongoose from "mongoose";

const connectDB = async()=>{
    return await mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("DB Connected Successfully");
    }).catch(()=>{
        console.log("Failed to Connect");
    })
} 

export default connectDB;