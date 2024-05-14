import useAxiosPrivate from "./useAxiosPrivate";


const useProfile = () => {
    const axiosPrivate = useAxiosPrivate();

    const getProfileByUser = async () => {
        try {
            // const res = await axiosPrivate.get('auth/profile');
            console.log('YO0000000');
        } catch (error) {

        }
        console.log('GET PROFILE BY USER');

    }

    return getProfileByUser;
};

export default useProfile;