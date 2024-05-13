import { useAuthDispatch } from '../context/authentication.context';
import useAxiosPrivate from './useAxiosPrivate';

const useToken = () => {
    const dispatch = useAuthDispatch();
    const axiosPrivate = useAxiosPrivate();


    const getToken = async () => {
        try {
            const res = await axiosPrivate.get('auth/profile');
            console.log('YOOOO', res);


        } catch (error) {
            console.log('ERROR', error);

        }
        console.log('Hola Mundo de Use Token');
    };

    return getToken;
}

export default useToken;