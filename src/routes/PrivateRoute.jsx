import React, { use } from 'react';
import { AuthContext } from '../context/AUthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)

    if(loading){
        return <p>loading</p>
    }

    if(user){
        return {children}
    }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateRoute;