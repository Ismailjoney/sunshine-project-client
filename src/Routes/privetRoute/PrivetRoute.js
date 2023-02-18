import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthorContext } from '../../context/Context';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthorContext)
    const location = useLocation()
   
    if(loading){
        return <p>Loadding----------</p>
    } 

    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    else{
        return children;
    }

    
};

export default PrivetRoute;