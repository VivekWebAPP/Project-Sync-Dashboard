import React from 'react'

const useNewStudentProject = () => {
    const newStudentProject= async (token,TeacherName,AssignmentName,Subject,CoursePrice,ExpensesName,Expenses,Budget,AdditionalBudgetName,AdditionalBudget,FromDate,ToDate,StatusOfTheAssignment,Grades,Priority)=>{
        try {
            const response = await fetch(`http://localhost:5000/student/createANewAssignment`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({TeacherName:TeacherName,AssignmentName:AssignmentName,Subject:Subject,CoursePrice:CoursePrice,ExpensesName:ExpensesName,Expenses:Expenses,Budget:Budget,AdditionalBudgetName:AdditionalBudgetName,AdditionalBudget:AdditionalBudget,FromData:FromDate,ToDate:ToDate,StatusOfTheAssignment:StatusOfTheAssignment,Grades:Grades,Priority:Priority}),
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
    return {newStudentProject};
}

export default useNewStudentProject
