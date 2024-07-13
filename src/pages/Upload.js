import React from 'react';
import BodyPages from '../Layout/BodyPages';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'

const Upload = () => {
    return (
        <BodyPages>
            <div className='pt-32'>
                <div className='flex flex-col items-center'>
                    <label htmlFor="file-input" className='flex justify-center max-w-[250px] border border-gray-500 py-2 px-4 space-x-2 rounded-md bg-teal-600 hover:cursor-pointer'>
                        <ArrowUpTrayIcon className='w-5 h-5 text-white' />
                        <p className='text-white font-medium'>Cargar un Imagen</p>
                    </label>
                </div>
                <input type="file" id='file-input' className='hidden' />
                <div className='mt-4 flex justify-center'>
                    <ul className='flex items-center space-x-12 list-disc'>
                        <li className='text-gray-500 text-sm'>Formato: jpg, jpeg, png</li>
                        <li className='text-gray-500 text-sm'>Tamaño maximo: 2MB</li>
                    </ul>
                </div>
            </div>
        </BodyPages>
    )
}

export default Upload;