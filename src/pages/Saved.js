import React, { useCallback, useEffect, useState } from 'react';
import { useProfileState } from '../context/profile.context';
import { axiosPrivate } from '../utils/axios';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const Saved = () => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(false);
    const { profile } = useProfileState();

    const getAllPostsBooksByUser = useCallback(async (idUser) => {
        try {
            setLoading(true)
            const response = await axiosPrivate(`posts/posts_user_bookMark/${idUser}`)
            setBooks(response.data)
        } catch (error) {
            console.log('Book Error', error.response)
        }
        finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (profile) {
            getAllPostsBooksByUser(profile._id)
        }
    }, [getAllPostsBooksByUser, profile])

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
                            books?.length > 0 ? (
                                <div className='grid grid-cols-3 gap-1'>
                                    {
                                        books && books.map(book => (
                                            <Link key={book._id} to={`/p/${book._id}`}>
                                                <img src={book.img_url} alt="" className='h-40 w-full object-cover object-center' />
                                            </Link>
                                        ))
                                    }
                                </div>
                            ) : (
                                <div>
                                    <p className='text-xl text-center text-gray-900'>
                                        Aún no hay Fotos Guardados
                                    </p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div >
    )
}

export default Saved;