import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.mongodb_uri)
        console.log("mongodb connected");
    } catch(e){
        console.error("Database connection error:", e)
        process.exit(1)
    }
}
export default connectDB;