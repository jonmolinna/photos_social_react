import { useEffect } from 'react';
import { axiosPrivate } from '../utils/axios';
import { useAuthState } from '../context/authentication.context';

const useAxiosPrivate = () => {
    const { token } = useAuthState();

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