import React from 'react';
import BodyPages from '../Layout/BodyPages';
import Badge from '../components/Badge';
import { Square2StackIcon, HandThumbUpIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import Tabs from '../components/Tabs';

const Profile = () => {
    return (
        <BodyPages>
            <div className='pt-20'>
                <div>
                    <div>
                        <p className='text-center text-2xl text-gray-900 font-normal'>
                            Kendra Contreras
                        </p>
                        <small className='block text-center text-gray-700 font-light'>
                            kendra.contreras@dallase.pe
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
                    <div className='mt-3 flex justify-center'>
                        <button className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-md text-sm px-5 py-1.5'>
                            Subir Publicación
                        </button>
                    </div>
                </div>
                <div>
                    <Tabs />
                </div>
                <p>Profile Pages</p>
                <p>Profile Pages</p>
                <p>Profile Pages</p>
                <p>Profile Pages</p>
                <p>Profile Pages</p>
                <p>Profile Pages</p>
                <p>Profile Pages</p>
            </div>
        </BodyPages>
    )
};

export default Profile;