import React, { useState } from 'react';
import BodyPages from '../Layout/BodyPages';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { axiosPrivate } from '../utils/axios';
import Loading from '../components/Loading';

const Upload = () => {
    const [imagen, setImagen] = useState(null);
    const [showImagen, setShowImagen] = useState(null);
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const file = event.target.files[0];

        if (/^image\/[png | jpg | jpeg]/.test(file?.type)) {
            setShowImagen(URL.createObjectURL(file));
            setImagen(file);
        } else {
            setShowImagen(null)
            setImagen(null);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const url = 'posts/upload';
            const formData = new FormData();
            formData.append('file', imagen);
            formData.append('comment', comment);

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            };

            const response = await axiosPrivate.post(url, formData, config);
            setComment("");
            setImagen(null);
            setShowImagen(null)
            console.log('YOOO', response);

        } catch (error) {
            console.log('Error', error);
        } finally {
            setLoading(false)
        }
    }


    return (
        <BodyPages>
            <div className='pt-24 w-full'>
                {
                    loading && (
                        <div className='mb-5'>
                            <Loading />
                        </div>
                    )
                }
                <div className='flex flex-col items-center'>
                    {
                        loading ? (
                            <div className='flex justify-center w-[250px] border border-gray-500 py-2 px-4 space-x-2 rounded-md bg-teal-500'>
                                <p className='text-white font-medium'>Cargando ...</p>
                            </div>
                        ) : (
                            <label htmlFor="file-input" className='flex justify-center w-[250px] border border-gray-500 py-2 px-4 space-x-2 rounded-md bg-teal-600 hover:bg-teal-700 hover:cursor-pointer'>
                                <ArrowUpTrayIcon className='w-5 h-5 text-white' />
                                <p className='text-white font-medium'>Cargar un Imagen</p>
                            </label>
                        )
                    }
                </div>
                <input
                    type="file"
                    id='file-input'
                    className='hidden'
                    onChange={handleChange}
                    accept='.png, .jpeg, .jpg'
                />
                <div className='mt-3 flex justify-center'>
                    <ul className='flex items-center space-x-12 list-disc'>
                        <li className='text-gray-500 text-sm'>Formato: jpg, jpeg, png</li>
                        <li className='text-gray-500 text-sm'>Tamaño maximo: 2MB</li>
                    </ul>
                </div>

                {
                    showImagen && (
                        <div className='mt-5 mb-5 flex flex-col justify-center w-full'>
                            <img src={showImagen} alt="imagen" className='object-cover object-center' />
                            <textarea
                                name='comment'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className='block resize-none mt-5 outline-none p-2 w-full text-sm font-medium text-gray-600 rounded-md bg-white border border-gray-300'
                                rows="5"
                                cols="50"
                                placeholder='Escribe un comentario'
                            ></textarea>
                            <button
                                type='submit'
                                onClick={(event) => handleSubmit(event)}
                                disabled={loading}
                                className='mt-5 text-white bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 disabled:bg-teal-500 font-medium rounded-md text-sm px-5 py-2'
                            >
                                {
                                    loading ? 'Cargando ...' : 'Subir Imagen'
                                }
                            </button>
                        </div>
                    )
                }
            </div>
        </BodyPages>
    )
}

export default Upload;