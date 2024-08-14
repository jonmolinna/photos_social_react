import React, { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../utils/axios';
import { useProfileDispatch } from '../context/profile.context';

const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const ProfilePage = () => {
    let { email } = useParams();
    const navigate = useNavigate();
    const dispatch = useProfileDispatch();

    const getUserByEmail = useCallback(async (email) => {
        try {
            const response = await axiosPrivate(`users/${email}`);
            dispatch({ type: 'PROFILE_USER', payload: response.data })
        } catch (error) {
            console.log('Error', error.response);
            if (error.response.status === 404) {
                return navigate('/');
            }
        }
    }, [navigate, dispatch])

    useEffect(() => {
        const isEmail = emailRegex.test(email)

        if (!isEmail) {
            return navigate('/');
        } else {
            getUserByEmail(email);
        }

    }, [email, navigate, getUserByEmail])

    return (
        <>
            <Outlet />
        </>
    )
};

export default ProfilePage;