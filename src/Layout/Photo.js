import React, { useCallback, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { axiosPrivate } from '../utils/axios';
import { usePhotoDispatch } from '../context/photo.context';

const Photo = () => {
    let { postId } = useParams();
    const dispatch = usePhotoDispatch();
    const navigate = useNavigate();

    const getPostById = useCallback(async (postId) => {
        console.log('Hola Photo 1')
        try {
            const response = await axiosPrivate.get(`posts/post/${postId}`);
            dispatch({ type: 'GET_ONE_PHOTO', payload: response.data })

        } catch (error) {
            console.log('error', error.response)
            if (error.response.status === 400) {
                return navigate('/');
            }
        }
    }, [dispatch, navigate])

    useEffect(() => {
        console.log('Hola Photo 2')
        if (postId) {
            getPostById(postId)
        }
    }, [getPostById, postId]);

    return (
        <>
            <Outlet />
        </>
    )
};

export default Photo;