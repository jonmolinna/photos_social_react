import React from 'react';
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200'>
            <div className='max-w-screen-sm flex flex-wrap items-center justify-around mx-auto p-4'>
                <button>
                    <CiHome className='w-7 h-7' />
                </button>
                <button>
                    <CiUser className='w-7 h-7' />
                </button>
                <button>
                    <CiLogout className='w-7 h-7 rotate-180' />
                </button>
            </div>
        </div>
    )
};

export default Navbar;