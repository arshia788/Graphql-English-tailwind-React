import React from 'react';

import { Link } from 'react-router-dom'

import { FaCommentAlt } from "react-icons/fa";


const CartEl = ({ title, slug, coverPhoto, author, comments }) => {



    return (
        <div className='
        shadow-md
        shadow-gray-400
        rounded-md mb-12 overflow-hidden
        '>

            {
                author &&
                <div className='flex items-center mb-4 px-1'>
                    <img
                        className='rounded-full w-9 h-9 mr-4'
                        src={author.avatar.url}
                    />
                    <h5>{author.name}</h5>
                </div>
            }


            <img src={coverPhoto.url} alt={slug}
                className='w-full h-40 mb-4'
            />
            <div className='flex items-center justify-between px-2'>

                <h4 className='ml-1 lg:text-xl font-semibold mr-4'>{title}</h4>

                <div className='flex items-center justify-center'>
                    <FaCommentAlt className=' text-pink-600 mr-2' />
                    <p className='text-lg'> : {comments ? comments.length :0 } </p>
                </div>
            </div>
            <hr
                className='h-0.5 my-3 bg-gray-200 mb-2 w-11/12 m-auto'
            />
            <div className='text-center mb-2'>

                <Link to={`/blogs/${slug}`}

                    className=''>

                    <button
                        className='w-6/12 rounded-lg py-0.5
                    text-white bg-blue-700
                    focus:bg-pink-600
                    '
                    >Details</button>
                </Link>
            </div>

        </div>
    );
};

export default CartEl;