import React from 'react';

const useSignIn = () => {
    const signUpToken = async (name, profession, email, password, country) => {
        try {
            const response = await fetch(`http://localhost:5000/auth/createNewUser`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name, profession: profession, email: email, password: password, country: country }),
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
    return { signUpToken }
}

export default useSignIn
