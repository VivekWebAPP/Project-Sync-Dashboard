import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {action} from '../redux/index.js';

const DataCollection = () => {
    const UserDetails=useSelector((state)=>state.authonication);
    
    const dispatch=useDispatch();
    
    const token=localStorage.getItem('jwtToken');

    if(token!=null){
        dispatch(action.userDetail(token));
    }
    else{
        console.log("Error Occurred");
    }
    useEffect(()=>{
        console.log(UserDetails);
        // eslint-disable-next-line
    },[]);
    
    return UserDetails;
}

export default DataCollection
