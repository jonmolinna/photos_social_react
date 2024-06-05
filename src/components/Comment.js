import React from 'react';
import { CiTrash } from "react-icons/ci";
import { FirstLetter } from '../utils/first.letter';
import { CapitalizeLetter } from '../utils/capitalize.letter';
import moment from 'moment';
import 'moment/locale/es';

const Comment = ({ comment }) => {

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
                    <div>
                        <button>
                            <CiTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Comment;