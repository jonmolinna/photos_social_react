import { useEffect } from 'react';
import { axiosPrivate } from '../utils/axios';

const useAxiosPrivate = () => {
    const token = localStorage.getItem('photos_token');
    console.log('aQUI', token);

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }

                return config;
            },
            error => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => {
                return response;
            }
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [token])

    return axiosPrivate;
};

export default useAxiosPrivate;