import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()
const connectionURL=process.env.CONNECTION_STRING;

const connectWithDatabase= async ()=>{
    try {
        await mongoose.connect(connectionURL);
        console.log("Connected with mongooDB");
    } catch (error) {
        console.log("Internal error occured");
    }
}

export default connectWithDatabase;
