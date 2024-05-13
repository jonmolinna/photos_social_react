import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useToken from '../hooks/useToken';

const PersistLogin = () => {
    const token = useToken();

    useEffect(() => {
        token();
    }, [token]);

    return (
        <>
            <Outlet />
        </>
    )
}

export default PersistLogin