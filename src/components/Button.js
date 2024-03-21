import React from 'react';

const Button = ({ text, type, disabled }) => {

    return (
        <button
            type={type}
            disabled={disabled}
            className='w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-md text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:bg-pink-500'
        >
            {text}
        </button>

    )
};

export default Button;