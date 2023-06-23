import React from 'react';
import { useQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../graphql/queries';

import CartEl from '../shared/CartEl'

import sanatizeHtml from 'sanitize-html'
import Loader from '../shared/Loader';

const AuthorPage = () => {

    const { slug } = useParams();

    const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
        variables: { slug }
    })

    if (loading) return <h1><Loader /></h1>

    if (error) return <h1>Ooops..</h1>


    const itemA = data && data.author.posts.filter(item => item.title !== 'best-laptop')
    console.log(itemA);


    return (
        <div className='max-w-8xl '>

            <div className=' flex flex-col items-center'>
                <div className='mt-12'>
                    <img src={data.author.avatar.url}
                        alt={data.slug}
                        className='rounded-full w-44 h-44'
                    />
                    <h3 className='text-2xl my-4 font-semibold'>{data.author.name}</h3>
                    <h2 className='text-center text-xl text-gray-600'>{data.author.field}</h2>
                </div>
            </div>
            <div className=' mt-8'>
                <p className='text-center text-lg xs:px-4'
                    dangerouslySetInnerHTML={{ __html: sanatizeHtml(data.author.description.html) }}
                >
                </p>

            </div>

            <p className='xs:px-4 mt-16 pl-8 text-2xl font-bold '>blogs of <span className='text-pink-600'>{data.author.name}</span> </p>

            <div className='spacing-13 
            xs:px-4
            flex-wrap mt-8 pl-8 flex justify-between items-center'>

                {itemA.map(item => {
                    return (
                        <div className='xs:col-span-12 md:col-span-6 m-1 lg:col-span-4 xs:w-full sm:w-auto'>

                            <CartEl title={item.title}
                                slug={item.slug}
                                coverPhoto={item.coverPhoto}

                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default AuthorPage;