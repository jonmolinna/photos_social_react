import React, { useEffect, useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import ButtonIcon from './ButtonIcon';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { usePostDispatch } from '../context/post.context';

const BookMarkButton = ({ user, bookMark, postId }) => {
    const [bookMarked, setBookMarked] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const dispatch = usePostDispatch();

    useEffect(() => {
        user && bookMark.find(book => book.user._id === user._id) ? setBookMarked(true) : setBookMarked(false)
    }, [bookMark, user]);

    const handleBookMark = async () => {
        try {
            const response = await axiosPrivate.post(`posts/post_bookmark/${postId}`)
            dispatch({
                type: 'BOOK_MARK_POST',
                payload: { idPost: postId, bookmark: response.data }
            });
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <React.Fragment>
            {
                bookMarked ? (
                    <ButtonIcon
                        Icon={PiBookmarkSimpleFill}
                        handleClick={handleBookMark}
                        textColor='text-black'
                    />
                ) : (
                    <ButtonIcon
                        Icon={CiBookmark}
                        handleClick={handleBookMark}
                    />
                )
            }
        </React.Fragment>
    )
};

export default BookMarkButton;