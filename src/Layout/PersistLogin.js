import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useToken from '../hooks/useToken';
import { useAuthState } from '../context/authentication.context';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const token = useToken();
    const { token: isToken } = useAuthState();

    useEffect(() => {
        let isMounted = true;

        const verifyToken = () => {
            try {
                token();

            } catch (error) {
            }
            finally {
                isMounted && setIsLoading(false);
            }
        };

        !isToken ? verifyToken() : setIsLoading(false)

    }, [token, isToken])

    return (
        <>
            {
                isLoading ? <p>Loading ...</p> : <Outlet />
            }
        </>
    )
}

export default PersistLogin