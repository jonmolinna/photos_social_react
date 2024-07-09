import React from 'react';

const Badge = ({ Icon, name, quantity }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-center space-x-1'>
                <Icon className="h-4 w-4" />
                <p className='text-sm text-gray-600'>{name}</p>
            </div>
            <p className='text-base font-medium text-gray-900'>{quantity}</p>
        </div>
    )
}

export default Badge;