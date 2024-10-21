import React from 'react';

const useDeletionOfEmployeeProject = () => {
    const deletionOfEmployeeProject = async (token, id) => {
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
    return { deletionOfEmployeeProject }
}

export default useDeletionOfEmployeeProject
