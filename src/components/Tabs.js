import React from 'react';
import { Square2StackIcon, HandThumbUpIcon, BookmarkIcon } from '@heroicons/react/24/outline'

const Tabs = () => {
    return (
        <div className='mt-7 border-b-2 border-gray-300'>
            <ul className='flex items-center justify-around text-sm font-medium text-center text-gray-600 -mb-px'>
                <li>
                    <a href="index.html" className='flex items-center space-x-2 p-2'>
                        <Square2StackIcon className="h-6 w-6" />
                        <p>Publicaciones</p>
                    </a>
                </li>
                <li>
                    <a href="index.html" className='flex items-center space-x-2 p-2'>
                        <HandThumbUpIcon className="h-6 w-6" />
                        <p>Me Gusta</p>
                    </a>
                </li>
                <li >
                    <a href="index.html" className='flex items-center space-x-2 p-2'>
                        <BookmarkIcon className="h-6 w-6" />
                        <p>Guardados</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Tabs;