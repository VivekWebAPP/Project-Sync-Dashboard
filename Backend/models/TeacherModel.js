import mongoose from "mongoose";

const TeacherModel=new mongoose.Schema({
    CourseName:{
        type:String,
        require:true,
    },
    NoOfStudentEnrolled:{
        type:String,
        require:true,
    },
    CourseType:{
        type:String,
        require:true,
    },
    CourseExpense:{
        type:Number,
        require:true,
    },
    CourseBudget:{
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
    StatusOfTheCourse:{
        type:String,
        require:true,
    },
    OverallGradesInTheCourse:{
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

const TeacherModelDeploy=mongoose.model("Teacher",TeacherModel);

export default TeacherModelDeploy;
