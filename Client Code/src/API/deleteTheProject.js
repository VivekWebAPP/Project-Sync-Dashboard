export const deletionOfEmployeerProject= async (token,id)=>{
    try {
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/project/deleteTheProject/${id}`, {
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
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/employer/deleteTheProject/${id}`, {
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
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/teacher/removeTheCourse/${id}`, {
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
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/student/deleteTheProject/${id}`, {
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