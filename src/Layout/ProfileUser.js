import React, { useEffect, useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useAuthDispatch, useAuthState } from '../context/authentication.context';
import { Outlet } from 'react-router-dom';

const ProfileUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuthState();
    const dispatch = useAuthDispatch();

    useEffect(() => {
        let isMounted = true;

        const profileUser = async () => {

            try {
                dispatch({ type: 'GET_PROFILE_START' });

                const res = await axiosPrivate.get('auth/profile');
                dispatch({ type: 'GET_PROFILE_SUCCESS', payload: res.data })
                console.log('YOOOO Hola Mundo');

            } catch (error) {
                dispatch({ type: 'GET_PROFILE_USER_FAILURE' })
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        !auth ? profileUser() : setIsLoading(false);

    }, [auth, dispatch, axiosPrivate])

    return (
        <>
            {
                isLoading ? <p>Loading ...</p> : <Outlet />
            }
        </>
    )
}

export default ProfileUser