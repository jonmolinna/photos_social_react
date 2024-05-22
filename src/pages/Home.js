import React, { useEffect, useState } from 'react';
import BodyPages from '../Layout/BodyPages';
import Card from '../components/Card';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [error, seterror] = useState(null);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        console.log('Home Photos');

        const getAllPost = async () => {
            try {
                const response = await axiosPrivate('posts/posts');
                setPosts(response.data);
                console.log('Posts', response.data);
            } catch (error) {
                console.log('Error', error);
            } finally {
                setIsLoading(false)
            }
        }

        getAllPost();

    }, []);

    return (
        <BodyPages>
            <div className='pt-20'>
                <div className='space-y-4'>
                    {
                        posts && posts.map((post, index) => (
                            <Card key={index} post={post} />
                        ))
                    }
                </div>
            </div>
        </BodyPages>
    )
};

export default Home;