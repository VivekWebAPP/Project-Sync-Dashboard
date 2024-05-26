import mongoose from "mongoose";

const connectionURL="mongodb+srv://vivekphadake17:Vivek%402019@projectsyncdashboardapp.4kvwwok.mongodb.net/Project_Sync_Dashboard";

const connectWithDatabase= async ()=>{
    try {
        await mongoose.connect(connectionURL);
        console.log("Connected with mongooDB");
    } catch (error) {
        console.log("Internal error occured");
    }
}

export default connectWithDatabase;
