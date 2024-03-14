import React from 'react';

const Button = ({ text, type }) => {

    return (
        <button
            type={type}
            className='w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-md text-sm px-5 py-2.5 text-center'
        >
            {text}
        </button>

    )
};

export default Button;