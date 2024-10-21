import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthContextProvider = (props) => {
    const [authToken, setauthToken] = useState('')
    return (
        <AuthContext.Provider value={{ authToken, setauthToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
