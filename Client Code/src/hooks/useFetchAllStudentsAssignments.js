import React from 'react'

const useFetchAllStudentsAssignments = () => {
    const fetchAllStudentsAssignments = async (token) => {
        try {
            const response = await fetch(`http://localhost:5000/student/getAllAssignments`, {
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
    return { fetchAllStudentsAssignments }
}

export default useFetchAllStudentsAssignments
