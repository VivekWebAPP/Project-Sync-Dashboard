import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../redux';
import AuthContext from '../context/AuthContext';

const useLogin = () => {
    const dispatch = useDispatch();
    const loginToken = useSelector((state) => state.authonication);
    const context = useContext(AuthContext);
    const { setauthToken } = context;
    const login = (loginComponents) => {
        dispatch(action.login(loginComponents.name, loginComponents.email, loginComponents.password));
    }
    useEffect(() => {
        if (loginToken) {
            localStorage.setItem('jwtToken', loginToken);
            setauthToken(loginToken);
            console.log(loginToken);
        }
    }, [loginToken])
    return {login};
}

export default useLogin
