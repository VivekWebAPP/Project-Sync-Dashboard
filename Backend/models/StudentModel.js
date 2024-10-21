import mongoose from "mongoose";

const StudentModel=new mongoose.Schema({
    TeacherName:{
        type:String,
        require:true,
    },
    AssignmentName:{
        type:String,
        require:true,
    },
    Subject:{
        type:String,
        require:true,
    },
    CoursePrice:{
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
    StatusOfTheAssignment:{
        type:String,
        require:true,
    },
    Grades:{
        type:String,
        require:true,
    },
    Priority:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
    },
});

const StudentModelDeploy=mongoose.model("Student",StudentModel);

export default StudentModelDeploy;
