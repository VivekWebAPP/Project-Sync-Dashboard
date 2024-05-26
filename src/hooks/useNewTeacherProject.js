import React from 'react'

const useNewTeacherProject = () => {
    const newTeacherProject= async (token,CourseName,NoOfStudentEnrolled,CourseType,CourseExpense,CourseBudget,FromData,ToDate,StatusOfTheCourse,OverallGradesInTheCourse,Priority)=>{
        try {
            const response = await fetch(`http://localhost:5000/teacher/createNewSubject`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({CourseName:CourseName,NoOfStudentEnrolled:NoOfStudentEnrolled,CourseType:CourseType,CourseExpense:CourseExpense,CourseBudget:CourseBudget,FromData:FromData,ToDate:ToDate,StatusOfTheCourse:StatusOfTheCourse,OverallGradesInTheCourse:OverallGradesInTheCourse,Priority:Priority}),
            });
            const json = await response.json();
            if (response.ok) {
                return json;
            } else {
                throw new Error('Creation Failed');
            }
        } catch (error) {
            throw new Error('Internal Error Occurred');
        }
    };
    return {newTeacherProject};
}

export default useNewTeacherProject
