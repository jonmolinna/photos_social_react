import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useToken from '../hooks/useToken';
import useProfile from '../hooks/useProfile';

const PersistLogin = () => {
    const token = useToken();
    const profile = useProfile();

    useEffect(() => {
        token();
        profile();
    }, [token, profile]);

    return (
        <>
            <Outlet />
        </>
    )
}

export default PersistLogin