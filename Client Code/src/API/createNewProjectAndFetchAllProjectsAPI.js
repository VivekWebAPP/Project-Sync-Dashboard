export const newEmployeerProject= async (token,CompanyName,ProjectName,ProjectType,ProjectPrice,ProjectBudget,FromDate,ToDate,StatusOfTheProject,Location,Priority)=>{
    try {
        const response = await fetch(`http://localhost:5000/project/createNewProject`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify({CompanyName:CompanyName,ProjectName:ProjectName,ProjectType:ProjectType,ProjectPrice:ProjectPrice,ProjectBudget:ProjectBudget,FromData:FromDate,ToDate:ToDate,StatusOfTheProject:StatusOfTheProject,Location:Location,Priority:Priority}),
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


export const newEmployeeProject= async (token,ProjectName,ProjectType,ProjectPrice,Expenses,ExpensesName,Budget,AdditionalBudgetName,AdditionalBudget,FromDate,ToDate,StatusOfTheProject,Location,Priority)=>{
    try {
        const response = await fetch(`http://localhost:5000/employer/createNewProject`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify({ProjectName:ProjectName,ProjectType:ProjectType,ProjectExpense:ProjectPrice,Expenses:Expenses,ExpensesName:ExpensesName,Budget:Budget,AdditionalBudgetName:AdditionalBudgetName,AdditionalBudget:AdditionalBudget,FromData:FromDate,ToDate:ToDate,StatusOfTheProject:StatusOfTheProject,Location:Location,Priority:Priority}),
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
}


export const newTeacherProject= async (token,CourseName,NoOfStudentEnrolled,CourseType,CourseExpense,CourseBudget,FromData,ToDate,StatusOfTheCourse,OverallGradesInTheCourse,Priority)=>{
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


export const newStudentProject= async (token,TeacherName,AssignmentName,Subject,CoursePrice,ExpensesName,Expenses,Budget,AdditionalBudgetName,AdditionalBudget,FromDate,ToDate,StatusOfTheAssignment,Grades,Priority)=>{
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


export const fetchAllEmployeerProjects = async (token)=>{
    try {
        const response = await fetch(`http://localhost:5000/project/getAllData`,{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        });
        const json = await response.json();
        if (response.ok) {
            return json;
        } else {
            throw new Error('Fetching Data Failed');
        }
    } catch (error) {
        throw new Error('Internal Error Occurred');
    }
};


export const fetchAllEmployeeProjects = async (token)=>{
    try {
        const response = await fetch(`http://localhost:3000/employer/getAllData`,{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        });
        const json = await response.json();
        if (response.ok) {
            return json;
        } else {
            throw new Error('Fetching Data Failed');
        }
    } catch (error) {
        throw new Error('Internal Error Occurred');
    }
};


export const fetchAllTeacherCourses = async (token)=>{
    try {
        const response = await fetch(`http://localhost:5000/teacher/getAllSubjects`,{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        });
        const json = await response.json();
        if (response.ok) {
            return json;
        } else {
            throw new Error('Fetching Data Failed');
        }
    } catch (error) {
        throw new Error('Internal Error Occurred');
    }
};


export const fetchAllStudentsAssignments = async (token)=>{
    try {
        const response = await fetch(`http://localhost:5000/student/getAllAssignments`,{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        });
        const json = await response.json();
        if (response.ok) {
            return json;
        } else {
            throw new Error('Fetching Data Failed');
        }
    } catch (error) {
        throw new Error('Internal Error Occurred');
    }
};


