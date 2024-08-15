import React, { useCallback, useEffect, useState } from 'react';
import { axiosPrivate } from '../utils/axios';
import { useProfileState } from '../context/profile.context';

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const { profile } = useProfileState();


    const getAllPostUserById = useCallback(async (id) => {
        try {
            const response = await axiosPrivate(`posts/post_user/${id}`);
            setPosts(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error.response)
        }
    }, []);

    useEffect(() => {
        console.log('POSTS PAGES')
        if (profile) {
            getAllPostUserById(profile?._id)
        }

    }, [getAllPostUserById, profile]);

    return (
        <div className='mt-3 grid grid-cols-3 gap-1'>
            {
                posts && posts.map(post => (
                    <div key={post._id}>
                        <img src={post.img_url} alt="" className='h-40 w-full object-cover object-center' />
                    </div>
                ))
            }
        </div>
    )
}

export default Posts;