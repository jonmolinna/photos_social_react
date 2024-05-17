import { useAuthDispatch } from '../context/authentication.context';

const useToken = () => {
    const dispatch = useAuthDispatch();
    const tokenString = localStorage.getItem('photos_token')
    const token = JSON.parse(tokenString);

    const getToken = async () => {
        dispatch({
            type: 'ADD_TOKEN',
            payload: token,
        })
    };

    return getToken;
}

export default useToken;