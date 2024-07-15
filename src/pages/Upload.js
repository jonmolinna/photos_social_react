import React, { useState } from 'react';
import BodyPages from '../Layout/BodyPages';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'

const Upload = () => {
    const [file, setFile] = useState();
    const [imagen, setImagen] = useState(null)
    const [uploadedFileURL, setUploadedFileURL] = useState();

    const handleChange = (event) => {
        setFile(event.target.files[0])
        setImagen(URL.createObjectURL(event.target.files[0]))
    }


    return (
        <BodyPages>
            <div className='pt-24 w-full'>
                <div className='flex flex-col items-center'>
                    <label htmlFor="file-input" className='flex justify-center max-w-[250px] border border-gray-500 py-2 px-4 space-x-2 rounded-md bg-teal-600 hover:cursor-pointer'>
                        <ArrowUpTrayIcon className='w-5 h-5 text-white' />
                        <p className='text-white font-medium'>Cargar un Imagen</p>
                    </label>
                </div>
                <input
                    type="file"
                    id='file-input'
                    className='hidden'
                    onChange={handleChange}
                />
                <div className='mt-4 flex justify-center'>
                    <ul className='flex items-center space-x-12 list-disc'>
                        <li className='text-gray-500 text-sm'>Formato: jpg, jpeg, png</li>
                        <li className='text-gray-500 text-sm'>Tamaño maximo: 2MB</li>
                    </ul>
                </div>

                <div className='mt-10 mb-5 flex flex-col justify-center w-full'>
                    <img src={imagen} alt="imagen" />
                    <textarea className='block p-2 w-full text-sm font-medium text-gray-900 rounded-md bg-gray-50 border border-gray-300' name="" id="" placeholder='Escribe un comentario'></textarea>
                    <button className='mt-5 text-white bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 font-medium rounded-md text-sm px-5 py-2'>
                        Subir Imagen
                    </button>
                </div>

            </div>
        </BodyPages>
    )
}

export default Upload;