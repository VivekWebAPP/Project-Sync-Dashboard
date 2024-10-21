export const signUpToken = async (name,profession,email,password,country) => {
    try {
        const response = await fetch(`http://localhost:5000/auth/createNewUser`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name:name,profession:profession,email:email,password:password,country:country}),
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

export const loginToken = async (name,email,password) => {
    try {
        const response = await fetch(`http://localhost:5000/auth/verifyUser`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name:name,email:email,password:password}),
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Authentication Failed');
        }
    } catch (error) {
        throw new Error('Authentication Failed');
    }
}


export const userDetails= async (token)=>{
    try {
        const response = await fetch(`http://localhost:5000/auth/personalDetails`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "auth-token":token,
            },
        });
        const json= await response.json();
        if (response.ok) {
            return json;
        } else {
            throw new Error('Authentication Failed');
        }
    } catch (error) {
        throw new Error('Authentication Failed');
    }
}



