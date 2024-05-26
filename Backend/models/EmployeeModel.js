import mongoose from "mongoose";

const EmployeeModel=new mongoose.Schema({
    ProjectManagerName:{
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
    ProjectExpense:{
        type:Number,
        require:true,
    },
    ExpensesName:{
        type:String,
        require:true,
    },
    Expenses:{
        type:Number,
        require:true,
    },
    Budget:{
        type:Number,
        require:true,
    },
    AdditionalBudgetName:{
        type:String,
        require:true,
    },
    AdditionalBudget:{
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

const EmployeeModelExport= mongoose.model('Employee',EmployeeModel);

export default EmployeeModelExport;
