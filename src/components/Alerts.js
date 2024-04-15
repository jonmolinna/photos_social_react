import React from 'react';

const Alerts = ({ message, textColor = 'text-green-800', bgColor = 'bg-green-50' }) => {
    return (
        <div className={`p-4 text-sm rounded-md text-center ${textColor} ${bgColor}`} >
            <span className='font-medium'>
                {message}
            </span>
        </div >
    )
};

export default Alerts;