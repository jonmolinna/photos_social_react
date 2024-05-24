import React from 'react';
import ButtonIcon from './ButtonIcon';
import { CiChat1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiPaperplane } from "react-icons/ci";
import { CapitalizeLetter } from '../utils/capitalize.letter';
import { FirstLetter } from '../utils/first.letter';
import moment from 'moment';
import 'moment/locale/es';
import LikeButton from './LikeButton';
import { useAuthState } from '../context/authentication.context';

const Card = ({ post }) => {
    const { auth } = useAuthState();

    return (
        <div className='bg-white border border-gray-200 rounded-md shadow overflow-hidden'>
            <div className='px-1 my-2 flex justify-between items-center'>
                <div className='flex items-center space-x-2'>
                    <div className='relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full'>
                        <span className='font-medium text-gray-600'>
                            {FirstLetter(post.user.name)}
                        </span>
                    </div>
                    <p className='text-sm font-medium text-gray-900 truncate'>
                        {CapitalizeLetter(post.user.name)}
                    </p>
                </div>
                <p className='text-sm text-gray-500 truncate'>
                    {moment(post.createdAt).format('L')}
                </p>
            </div>
            <img src={post.img_url} alt="" className='w-full h-full object-cover object-center' />
            <div className='px-1'>
                <div className='mt-2 flex justify-between'>
                    <div className='space-x-3'>
                        <LikeButton
                            user={auth}
                            likes={post.likes}
                            postId={post._id}
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