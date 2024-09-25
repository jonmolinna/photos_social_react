import React, { useCallback, useEffect, useState } from 'react';
import { useProfileState } from '../context/profile.context';
import { axiosPrivate } from '../utils/axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const Likes = () => {
    const [likes, setLikes] = useState(null);
    const [loading, setLoading] = useState(false);
    const { profile } = useProfileState();

    const getAllPostsLikesByUser = useCallback(async (idUser) => {
        try {
            setLoading(true)
            const response = await axiosPrivate(`posts/posts_user_likes/${idUser}`);
            setLikes(response.data);
            console.log('LIKES');
        } catch (error) {
            console.log('Likes Pages', error.response)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (profile) {
            getAllPostsLikesByUser(profile._id)
        }
    }, [getAllPostsLikesByUser, profile])

    return (
        <div className='mt-3'>
            {
                loading ? (
                    <div>
                        <Loading />
                    </div>
                ) : (
                    <div>
                        {
                            likes?.length > 0 ? (
                                <div className='grid grid-cols-3 gap-1'>
                                    {
                                        likes && likes.map(like => (
                                            <Link key={like._id} to={`/p/${like._id}`}>
                                                <img src={like.img_url} alt="" className='h-40 w-full object-cover object-center' />
                                            </Link>
                                        ))
                                    }
                                </div>
                            ) : (
                                <div>
                                    <p className='text-xl text-center text-gray-900'>
                                        Aún no hay Likes
                                    </p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
};

export default Likes;