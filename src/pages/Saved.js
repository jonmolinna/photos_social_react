import React, { useCallback, useEffect, useState } from 'react';
import { useProfileState } from '../context/profile.context';
import { axiosPrivate } from '../utils/axios';

const Saved = () => {
    const [books, setBooks] = useState(null);
    const { profile } = useProfileState();

    const getAllPostsBooksByUser = useCallback(async (idUser) => {
        try {
            const response = await axiosPrivate(`posts/posts_user_bookMark/${idUser}`)
            setBooks(response.data)
            console.log('BookMark')
        } catch (error) {
            console.log('Book Error', error.response)
        }
    }, [])

    useEffect(() => {
        if (profile) {
            getAllPostsBooksByUser(profile._id)
        }
    }, [getAllPostsBooksByUser, profile])

    return (
        <div className='mt-3 grid grid-cols-3 gap-1'>
            {
                books && books.map(book => (
                    <div key={book._id}>
                        <img src={book.img_url} alt="" className='h-40 w-full object-cover object-center' />
                    </div>
                ))
            }
        </div>
    )
}

export default Saved;