import React from 'react';

const useGetUserDetails = () => {
    const userDetails = async (token) => {
        try {
            const response = await fetch(`http://localhost:5000/auth/personalDetails`, {
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
                throw new Error('Authentication Failed');
            }
        } catch (error) {
            throw new Error('Authentication Failed');
        }
    }
    return { userDetails }
}

export default useGetUserDetails
