import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { TiHeartFullOutline } from "react-icons/ti";
import ButtonIcon from './ButtonIcon';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const LikeButton = ({ user, likes, postId }) => {
    const [liked, setLiked] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        user && likes.find(like => like.user._id === user._id) ? setLiked(true) : setLiked(false);
        console.log('Hola Like Icon');
    }, [likes, user]);

    const handleLike = async () => {
        try {
            const res = await axiosPrivate.post(`posts/post_like/${postId}`)
            console.log('YOOOOO', res.data);
        } catch (error) {
            console.log('ERROR', error);
        }
    };

    return (
        <React.Fragment>
            {
                liked ? (
                    <ButtonIcon
                        Icon={TiHeartFullOutline}
                        bgColor='text-red-900'
                    />
                ) : (
                    <ButtonIcon
                        Icon={CiHeart}
                        handleClick={handleLike}
                    />
                )
            }
        </React.Fragment>
    )
};

export default LikeButton;