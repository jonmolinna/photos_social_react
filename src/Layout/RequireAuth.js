import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from '../context/authentication.context';

const RequireAuth = () => {
    const location = useLocation();
    const { auth } = useAuthState();

    return (
        auth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth;