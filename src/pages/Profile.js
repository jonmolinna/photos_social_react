import React, { useEffect, useState, useCallback } from 'react';
import BodyPages from '../Layout/BodyPages';
import Badge from '../components/Badge';
import { Square2StackIcon, HandThumbUpIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import Tabs from '../components/Tabs';
import { Link, Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';
import { axiosPrivate } from '../utils/axios';
import { useAuthState } from '../context/authentication.context';
const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const Profile = () => {
    const [isLoading, setIsLoading] = useState(false);
    let { email } = useParams();
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const auth = useAuthState();
    const isUser = profile?._id === auth?.auth?._id;

    const getUserById = useCallback(async (email) => {
        console.log('Hola Profile');
        try {
            setIsLoading(true);
            const response = await axiosPrivate(`users/${email}`);
            setProfile(response.data);

        } catch (error) {
            console.log('Error', error.response);
            if (error.response.status === 404) {
                return navigate('/');
            }
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        const isEmail = emailRegex.test(email);

        if (!isEmail) {
            return navigate('/');
        }
        else {
            getUserById(email);
        }

        return () => {
            setIsLoading(false);
        }

    }, [email, getUserById])

    return (
        <BodyPages>
            <div className='pt-20'>
                {
                    isLoading ? (
                        <div className='flex items-center justify-center w-56 h-[calc(100vh-80px)] mx-auto'>
                            <Loading />
                        </div>
                    ) : (
                        <div>
                            {
                                profile && (
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
                                )
                            }
                        </div>
                    )
                }
            </div>
        </BodyPages>
    )
};

export default Profile;