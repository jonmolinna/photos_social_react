import React from 'react';
import BodyPages from '../Layout/BodyPages';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { usePhotoState } from '../context/photo.context';
import Card from '../components/Card'

const Post = () => {
    const { photo } = usePhotoState();

    return (
        <BodyPages>
            <div className='pt-20'>
                <div className='flex justify-end'>
                    <ArrowLeftIcon className='h-7 w-7' />
                </div>
                <div>
                    {
                        photo ? (
                            <Card post={photo} />

                        ) : (
                            <div>
                                <p>No hay posts</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </BodyPages>
    )
}

export default Post;