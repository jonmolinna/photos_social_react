import React, { useEffect } from 'react';
import BodyPages from '../Layout/BodyPages';
import Badge from '../components/Badge';
import { Square2StackIcon, HandThumbUpIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import Tabs from '../components/Tabs';
import { Link, Outlet } from 'react-router-dom';

import { useAuthState } from '../context/authentication.context';
import { useProfileDispatch, useProfileState } from '../context/profile.context';
import Loading from '../components/Loading';


const Profile = () => {
    const { auth } = useAuthState();
    const { profile } = useProfileState();
    const isUser = profile?._id === auth?._id;
    const dispatch = useProfileDispatch();

    useEffect(() => {
        return () => {
            console.log('CLEAR PAGE PROFILE ')
            dispatch({ type: 'PROFILE_CREAR' })
        }
    }, [dispatch])

    return (
        <BodyPages>
            <div className='pt-20'>
                {
                    profile ? (
                        <div>
                            <div>
                                <div>
                                    <p className='text-center text-2xl text-gray-900 font-normal'>
                                        {profile?.name}
                                    </p>
                                    <small className='block text-center text-gray-700 font-light'>
                                        {profile?.email}
                                    </small>
                                </div>
                                <div className='flex justify-around mt-2'>
                                    <Badge
                                        Icon={Square2StackIcon}
                                        name="Publicaciones"
                                        quantity={10}
                                    />
                                    <Badge
                                        Icon={HandThumbUpIcon}
                                        name="Me Gusta"
                                        quantity={2}
                                    />
                                    <Badge
                                        Icon={BookmarkIcon}
                                        name="Guardados"
                                        quantity={7}
                                    />
                                </div>
                            </div>
                            {
                                isUser && (
                                    <div className='mt-3 flex justify-center'>
                                        <Link to='/upload' className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-md text-sm px-5 py-1.5'>
                                            Subir Publicación
                                        </Link>
                                    </div>
                                )
                            }
                            <div>
                                <Tabs />
                            </div>
                            <Outlet />
                        </div>

                    ) : (
                        <div className='flex items-center justify-center w-56 h-[calc(100vh-80px)] mx-auto'>
                            <Loading />
                        </div>
                    )
                }
            </div>
        </BodyPages >
    )
};

export default Profile;