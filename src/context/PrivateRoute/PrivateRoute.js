import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className='h-screen flex justify-center items-center '>
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
    }
    else if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;