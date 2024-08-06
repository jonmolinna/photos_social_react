import React from 'react';
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import { HomeIcon as HomeIconSolid, UserIcon as UserIconSolid } from '@heroicons/react/24/solid'
import { useAuthState } from '../context/authentication.context';

const Navbar = () => {
    const { auth } = useAuthState();

    return (
        <div className='bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200'>
            <div className='max-w-screen-sm flex flex-wrap items-center justify-around mx-auto p-4'>
                <NavLink to='/'>
                    {
                        ({ isActive }) => (
                            isActive ? (<HomeIconSolid className='w-7 h-7' />) : (<HomeIcon className='w-7 h-7' />)
                        )
                    }
                </NavLink>
                <NavLink to={'/' + auth?.email}>
                    {
                        ({ isActive }) => (
                            isActive ? (<UserIconSolid className='w-7 h-7' />) : (<UserIcon className='w-7 h-7' />)
                        )
                    }
                </NavLink>
                <button>
                    <CiLogout className='w-7 h-7 rotate-180' />
                </button>
            </div>
        </div>
    )
};

export default Navbar;