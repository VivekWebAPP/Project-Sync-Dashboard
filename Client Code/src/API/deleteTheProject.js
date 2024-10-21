export const deletionOfEmployeerProject= async (token,id)=>{
    try {
        const response = await fetch(`http://localhost:5000/project/deleteTheProject/${id}`, {
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

export const deletionOfEmployeeProject= async (token,id)=>{
    try {
        const response = await fetch(`http://localhost:5000/employer/deleteTheProject/${id}`, {
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


export const deletionOfTeacherProject= async (token,id)=>{
    try {
        const response = await fetch(`http://localhost:5000/teacher/removeTheCourse/${id}`, {
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


export const deletionOfStudentProject= async (token,id)=>{
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