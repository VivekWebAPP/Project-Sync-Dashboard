import React from 'react'

const useUpdateStudentProject = () => {
    const updateStudentProject = async (token, id, TeacherName, AssignmentName, Subject, CoursePrice, FromDate, ToDate, StatusOfTheAssignment, Grades, Priority) => {
        try {
            const response = await fetch(`http://localhost:5000/student/updateProject/${id}`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({ TeacherName: TeacherName, AssignmentName: AssignmentName, Subject: Subject, CoursePrice: CoursePrice, FromData: FromDate, ToDate: ToDate, StatusOfTheAssignment: StatusOfTheAssignment, Grades: Grades, Priority: Priority }),
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
    return { updateStudentProject }
}

export default useUpdateStudentProject
