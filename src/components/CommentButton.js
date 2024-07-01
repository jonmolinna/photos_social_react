import React from 'react';
import ButtonIcon from './ButtonIcon';
import { CiChat1 } from "react-icons/ci";

const CommentButton = () => {
    const handleComment = () => {
        console.log('YOOO this is a comment');
    };

    return (
        <ButtonIcon
            Icon={CiChat1}
            handleClick={handleComment}
        />
    )
};

export default CommentButton;