import React from 'react'

const useFetchAllEmployeeProjects = () => {
    const fetchAllEmployeeProjects = async (token) => {
        try {
            const response = await fetch(`http://localhost:3000/employer/getAllData`, {
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
    return {fetchAllEmployeeProjects}
}

export default useFetchAllEmployeeProjects
