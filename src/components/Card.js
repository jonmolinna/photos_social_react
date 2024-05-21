import React from 'react';
import ButtonIcon from './ButtonIcon';
import { CiHeart } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiPaperplane } from "react-icons/ci";

const Card = () => {

    return (
        <div className='bg-white border border-gray-200 rounded-md shadow overflow-hidden'>
            <div className='px-1 my-2 flex justify-between items-center'>
                <div className='flex items-center space-x-2'>
                    <div className='relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full'>
                        <span className='font-medium text-gray-600'>
                            KC
                        </span>
                    </div>
                    <p className='text-sm font-medium text-gray-900 truncate'>
                        Kendra Contreras
                    </p>
                </div>
                <p className='text-sm text-gray-500 truncate'>
                    21/05/2024
                </p>
            </div>
            <img src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1709551831/mz7hzrqnskrpzp3idq93.jpg" alt="" />
            <div className='px-1'>
                <div className='mt-2 flex justify-between'>
                    <div className='space-x-3'>
                        <ButtonIcon
                            Icon={CiHeart}
                        />
                        <ButtonIcon
                            Icon={CiChat1}
                        />
                    </div>
                    <ButtonIcon
                        Icon={CiBookmark}
                    />
                </div>
                <p className='text-gray-900 font-normal'>
                    <span className='font-medium'>129</span> Me gusta
                </p>
                <div>
                    <p className='text-gray-900 font-normal text-sm'>
                        <span className='font-medium mr-1'>Kendra Contreras</span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, autem.
                    </p>
                </div>
                <p className='text-sm text-gray-500'>
                    Ver los 24 comentarios
                </p>
                <div className='mt-1 mb-1 flex items-center'>
                    <input
                        type="text"
                        placeholder='Agrega un comentario...'
                        className='block w-full p-2 text-gray-900 text-sm ring-0 outline-none'
                    />
                    <button>
                        <CiPaperplane className='w-6 h-6 text-gray-500' />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card;