import React from 'react';
import { Square2StackIcon, HandThumbUpIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const Tabs = () => {

    return (
        <div className='mt-7 border-b-2 border-gray-300'>
            <ul className='flex items-center justify-around text-sm font-medium text-center text-gray-600 -mb-px'>
                <li>
                    <Link to="/kendra.contreras@dallase.pe/" className='flex items-center space-x-2 p-2'>
                        <Square2StackIcon className="h-6 w-6" />
                        <p>Publicaciones</p>
                    </Link>
                </li>
                <li>
                    <Link to="/kendra.contreras@dallase.pe/likes" className='flex items-center space-x-2 p-2'>
                        <HandThumbUpIcon className="h-6 w-6" />
                        <p>Me Gusta</p>
                    </Link>
                </li>
                <li >
                    <Link to="/kendra.contreras@dallase.pe/saved" className='flex items-center space-x-2 p-2'>
                        <BookmarkIcon className="h-6 w-6" />
                        <p>Guardados</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Tabs;