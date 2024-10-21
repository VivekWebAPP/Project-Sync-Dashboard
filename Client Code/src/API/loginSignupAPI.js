export const signUpToken = async (name,profession,email,password,country) => {
    try {
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/auth/createNewUser`, {
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
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/auth/verifyUser`, {
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
        const response = await fetch(`https://project-sync-dashboard-backend.onrender.com/auth/personalDetails`, {
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



