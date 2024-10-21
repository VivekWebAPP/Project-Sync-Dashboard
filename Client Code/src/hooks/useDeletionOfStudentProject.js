import React from 'react'

const useDeletionOfStudentProject = () => {
    const deletionOfStudentProject= async (token,id)=>{
        try {
            const response = await fetch(`http://localhost:5000/student/deleteTheProject/${id}`, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({}),
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
    return {deletionOfStudentProject}
}

export default useDeletionOfStudentProject
