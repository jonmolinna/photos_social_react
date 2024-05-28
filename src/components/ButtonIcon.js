import React from 'react';
import classNames from 'classnames';

const ButtonIcon = ({ Icon, handleClick, textColor = 'text-gray-600' }) => {

    const btnStyle = classNames(
        'h-8',
        'w-8',
        textColor,
    )

    return (
        <button
            onClick={() => handleClick()}
        >
            <Icon className={btnStyle} />
        </button>
    )
}

export default ButtonIcon;