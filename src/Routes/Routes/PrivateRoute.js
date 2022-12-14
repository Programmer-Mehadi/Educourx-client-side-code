import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    
    const location = useLocation();
    const { user,loading } = useContext(AuthContext);
    // if (user && user.uid) {
    //     return children;
    // }
    if (loading) {
        return <div>loading....</div>
    }
    if (!user) {
        return <Navigate to='/login' state={{form:location}} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;