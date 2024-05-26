import mongoose from "mongoose";
const Employeer=new mongoose.Schema({
    CompanyName:{
        type:String,
        require:true,
    },
    ProjectName:{
        type:String,
        require:true,
    },
    ProjectType:{
        type:String,
        require:true,
    },
    ProjectPrice:{
        type:Number,
        require:true,
    },
    ProjectBudget:{
        type:Number,
        require:true,
    },
    FromData:{
        type:String,
        require:true,
    },
    ToDate:{
        type:String,
        require:true,
    },
    StatusOfTheProject:{
        type:String,
        require:true,
    },
    Location:{
        type:String,
        require:true,
    },
    Priority:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
    },
});

const ProductModel = mongoose.model("Employeer", Employeer);

export default ProductModel;