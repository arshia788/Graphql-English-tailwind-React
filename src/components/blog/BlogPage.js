import React from 'react';

import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';

import { GET_POST_INFO } from '../graphql/queries';


import Loader from '../shared/Loader';
import { FaArrowLeft } from "react-icons/fa";
import CommentForm from '../comments/CommentForm';
import Comments from '../comments/Comments';


const BlogPage = () => {

    const { slug } = useParams();

    const { loading, data, errors } = useQuery(GET_POST_INFO, {
        variables: { slug }
    })

    if (loading) return <h1><Loader /></h1>

    if (errors) return <h3>Ooops...</h3>


    return (
        <div>
            <div className='mt-8 w-10/12 m-auto 
            
            flex justify-between items-center'>
                <Link to='/'>
                    <FaArrowLeft />
                </Link>
                <h3
                    className='text-3xl text-blue-700 font-semibold'
                >{data.post.title}</h3>
            </div>


            <img
                className=' sm:w-10/12 sm:mx-auto sm:h-auto xs:my-8 xs:h-72 xs:w-10/12 xs:m-auto  rounded-md'
                src={data.post.coverPhoto.url} />



            <div className='xs:flex xs:flex-col xs:justify-center xs:items-center xs:text-center xs:gap-y-2
            sm:flex sm:flex-row sm:text-left sm:justify-start 
            w-10/12 mx-auto my-8'>
                <img src={data.post.author.avatar.url}
                    alt={data.post.id}
                    className='sm:w-24 sm:h-24 rounded-full mr-4 
                    xs:w-32 xs:h-32
                '
                />

                {/* this is for the name and field */}
                <div className='flex flex-col text-xl mb-4'>
                    <p>
                        {data.post.author.name}
                    </p>
                    <p className='text-gray-500 text-sm'>
                        {data.post.author.field}
                    </p>
                </div>
            </div>


            <div
                className='shadow-md rounded.md
            shadow-gray-400 w-10/12 mx-auto px-2 py-3 text-xl'
                dangerouslySetInnerHTML={{ __html: data.post.content.html }}
            >


            </div>

            <div className='mt-8 w-10/12 m-auto '>
                <CommentForm slug={slug} />
            </div>

            <div className='mt-8 w-10/12 m-auto '>
                <Comments slug={slug} />
            </div>


        </div >
    );
};

export default BlogPage;