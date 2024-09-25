import React, { useCallback, useEffect, useState } from 'react';
import { axiosPrivate } from '../utils/axios';
import { useProfileState } from '../context/profile.context';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const { profile } = useProfileState();


    const getAllPostUserById = useCallback(async (id) => {
        try {
            setLoading(true)
            const response = await axiosPrivate(`posts/post_user/${id}`);
            setPosts(response.data);
        } catch (error) {
            console.log('Posts Pages', error.response)
        } finally {
            setLoading(false)
        }
    }, []);

    useEffect(() => {
        if (profile) {
            getAllPostUserById(profile?._id)
        }

    }, [getAllPostUserById, profile]);

    return (
        <div className='mt-3 '>
            {
                loading ? (
                    <div>
                        <Loading />
                    </div>
                ) : (
                    <div>
                        {
                            posts?.length > 0 ? (
                                <div className='grid grid-cols-3 gap-1'>
                                    {
                                        posts && posts.map(post => (
                                            <Link key={post._id} to={`/p/${post._id}`} >
                                                <img src={post.img_url} alt="" className='h-40 w-full object-cover object-center' />
                                            </Link>
                                        ))
                                    }
                                </div>
                            ) : (
                                <div>
                                    <p className='text-xl text-center text-gray-900'>
                                        Aún no hay publicaciones
                                    </p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Posts;