export const updateEmployeerProject= async (token,id,ProjectName,ProjectType,ProjectPrice,FromDate,ToDate,StatusOfTheProject,Location,Priority)=>{
    try {
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/project/updateProject/${id}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify({ProjectName:ProjectName,ProjectType:ProjectType,ProjectPrice:ProjectPrice,FromData:FromDate,ToDate:ToDate,StatusOfTheProject:StatusOfTheProject,Location:Location,Priority:Priority}),
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


export const updateEmployeeProject= async (token,id,ProjectName,ProjectType,ProjectPrice,FromDate,ToDate,StatusOfTheProject,Location,Priority)=>{
    try {
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/employer/updateProject/${id}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify({ProjectName:ProjectName,ProjectType:ProjectType,ProjectExpense:ProjectPrice,FromData:FromDate,ToDate:ToDate,StatusOfTheProject:StatusOfTheProject,Location:Location,Priority:Priority}),
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


export const updateTeacherProject= async (token,id,CourseName,NoOfStudentEnrolled,CourseType,CourseExpense,FromDate,ToDate,StatusOfTheCourse,OverallGradesInTheCourse,Priority)=>{
    try {
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/teacher/updateCourseDetails/${id}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify({CourseName:CourseName,NoOfStudentEnrolled:NoOfStudentEnrolled,CourseType:CourseType,CourseExpense:CourseExpense,FromData:FromDate,ToDate:ToDate,StatusOfTheCourse:StatusOfTheCourse,OverallGradesInTheCourse:OverallGradesInTheCourse,Priority:Priority}),
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


export const updateStudentProject= async (token,id,TeacherName,AssignmentName,Subject,CoursePrice,FromDate,ToDate,StatusOfTheAssignment,Grades,Priority)=>{
    try {
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/student/updateProject/${id}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify({TeacherName:TeacherName,AssignmentName:AssignmentName,Subject:Subject,CoursePrice:CoursePrice,FromData:FromDate,ToDate:ToDate,StatusOfTheAssignment:StatusOfTheAssignment,Grades:Grades,Priority:Priority}),
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