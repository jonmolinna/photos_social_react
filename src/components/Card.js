import React from 'react';
import ButtonIcon from './ButtonIcon';
import { CiHeart } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const Card = () => {
    return (
        <div className='bg-white border border-gray-200 rounded-md shadow overflow-hidden'>
            <img src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1709551831/mz7hzrqnskrpzp3idq93.jpg" alt="" />
            <div className='mt-2 px-1 flex justify-between'>
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
        </div>
    )
};

export default Card;