import React from 'react';
import { CiPaperplane } from "react-icons/ci";
import useForm from '../hooks/useForm';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Comment from './Comment';
import { usePostDispatch } from '../context/post.context';

const initialForm = {
    comment: '',
};

const initialFormFocus = {
    comment: false,
};

const Comments = ({ postId, comments }) => {
    const { form, handleChange, creanForm } = useForm(initialForm, initialFormFocus);
    const axiosPrivate = useAxiosPrivate()
    const dispatch = usePostDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPrivate.post(`posts/post_comment/${postId}`, JSON.stringify({ comment: form.comment }));
            dispatch({
                type: 'ADD_COMMENT_TO_POST',
                payload: {
                    idPost: postId,
                    comment: response.data,
                }
            });
            creanForm();
        } catch (err) {
            console.log('Error', err);
        }
    };

    return (
        <React.Fragment>
            <div className='space-y-2 max-h-[120px] overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                {
                    comments && comments.map(comment => (
                        <Comment key={comment._id} comment={comment} />
                    ))
                }
            </div>
            <form onSubmit={handleSubmit} className='mt-1 mb-1 flex items-center'>
                <input
                    type="text"
                    name='comment'
                    value={form.comment}
                    onChange={handleChange}
                    autoComplete='off'
                    placeholder='Agrega un comentario...'
                    className='block w-full p-2 text-gray-900 text-sm ring-0 outline-none'
                />
                <button
                    disabled={!form.comment}
                    className='text-cyan-500 disabled:text-gray-400'
                >
                    <CiPaperplane className='w-6 h-6' />
                </button>
            </form>
        </React.Fragment>
    )
};

export default Comments;