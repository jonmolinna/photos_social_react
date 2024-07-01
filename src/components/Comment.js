import React from 'react';
import { CiTrash } from "react-icons/ci";
import { FirstLetter } from '../utils/first.letter';
import { CapitalizeLetter } from '../utils/capitalize.letter';
import moment from 'moment';
import 'moment/locale/es';
import { useAuthState } from '../context/authentication.context';
import { axiosPrivate } from '../utils/axios';
import { usePostDispatch } from '../context/post.context';

const Comment = ({ postId, comment }) => {
    const { auth } = useAuthState();
    const isUser = auth?._id === comment?.user?._id;
    const idComment = comment._id;
    const dispatch = usePostDispatch()

    const handleDeleteComment = async () => {
        try {
            const response = await axiosPrivate.put(`posts/post_comment/${postId}/${idComment}`);
            const comments = response.data;
            dispatch({
                type: 'DELETE_COMMENT_TO_POST',
                payload: {
                    comments,
                    postId,
                }
            });

        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <div className='flex'>
            <div className='mr-3'>
                <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-200 rounded-full">
                    <span className="font-medium text-gray-600">
                        {FirstLetter(comment.user.name)}
                    </span>
                </div>
            </div>
            <div className='w-full'>
                <p className='text-gray-700 text-sm'>
                    <span className='font-medium text-gray-900 mr-1'>{CapitalizeLetter(comment.user.name)}</span>
                    {comment.comment}
                </p>
                <div className='flex justify-between items-center'>
                    <span className='font-medium text-xs text-gray-500'>
                        {moment(comment.createdAt).format('L')}
                    </span>
                    {
                        isUser && (
                            <div>
                                <button onClick={() => handleDeleteComment()}>
                                    <CiTrash className='text-gray-700' />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Comment;