import React, { useEffect, useState } from 'react';
import BodyPages from '../Layout/BodyPages';
import Card from '../components/Card';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { usePostDispatch, usePostState } from '../context/post.context';
import Loading from '../components/Loading';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, seterror] = useState(null);
    const axiosPrivate = useAxiosPrivate();
    const dispatch = usePostDispatch();
    const { posts } = usePostState();

    useEffect(() => {
        console.log('Home Photos');

        const getAllPost = async () => {
            try {
                const response = await axiosPrivate('posts/posts');
                dispatch({ type: 'GET_ALL_POSTS', payload: response.data })
            } catch (error) {
                // seterror(error)
            } finally {
                setIsLoading(false)
            }
        }

        getAllPost();

    }, [axiosPrivate, dispatch]);

    return (
        <BodyPages>
            <div className='pt-20'>
                {
                    isLoading ? (
                        <div className='flex items-center justify-center w-56 h-[calc(100vh-80px)] mx-auto'>
                            <Loading />
                        </div>
                    ) : (
                        <div className='space-y-4'>
                            {
                                posts && posts.map((post, index) => (
                                    <Card key={index} post={post} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </BodyPages>
    )
};

export default Home;