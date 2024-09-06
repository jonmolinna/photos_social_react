import React, { useCallback, useEffect, useState } from 'react';
import { useProfileState } from '../context/profile.context';
import { axiosPrivate } from '../utils/axios';

const Likes = () => {
    const [likes, setLikes] = useState(null);
    const { profile } = useProfileState();

    const getAllPostsLikesByUser = useCallback(async (idUser) => {
        try {
            const response = await axiosPrivate(`posts/posts_user_likes/${idUser}`);
            setLikes(response.data);
            console.log('LIKES');
        } catch (error) {
            console.log('Likes Pages', error.response)
        }
    }, [])

    useEffect(() => {
        if (profile) {
            getAllPostsLikesByUser(profile._id)
        }
    }, [getAllPostsLikesByUser, profile])

    return (
        <div className='mt-3 grid grid-cols-3 gap-1'>
            {
                likes && likes.map(like => (
                    <div key={like._id}>
                        <img src={like.img_url} alt="" className='h-40 w-full object-cover object-center' />
                    </div>
                ))
            }
        </div>
    )
};

export default Likes;