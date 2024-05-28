import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { TiHeartFullOutline } from "react-icons/ti";
import ButtonIcon from './ButtonIcon';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { usePostDispatch } from '../context/post.context';

const LikeButton = ({ user, likes, postId }) => {
    const [liked, setLiked] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const dispatch = usePostDispatch();

    useEffect(() => {
        user && likes.find(like => like.user._id === user._id) ? setLiked(true) : setLiked(false);
    }, [likes, user]);

    const handleLike = async () => {
        try {
            const res = await axiosPrivate.post(`posts/post_like/${postId}`)
            dispatch({ type: 'LIKE_POST', payload: { idPost: postId, like: res.data } })
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
                        textColor='text-red-600'
                        handleClick={handleLike}
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