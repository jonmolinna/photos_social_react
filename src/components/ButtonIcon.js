import React from 'react';
import classNames from 'classnames';

const ButtonIcon = ({ Icon, handleClick, bgColor }) => {

    console.log('YOOO', bgColor);

    const btnStyle = classNames(
        'h-8',
        'w-8',
        { bgcolor: bgColor },
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