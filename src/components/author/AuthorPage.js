import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_AUTHORS } from '../graphql/queries';

import CartEl from '../shared/CartEl'

import Loader from '../shared/Loader';

const AuthorPage = () => {

    const { loading, data, error } = useQuery(GET_AUTHORS);

    if (loading) return <h1><Loader /></h1>
    if (error) return <h3>Ooops...</h3>


    return (
        <>
            <h1 className='my-6 text-center font-bold text-3xl'>Our Authors</h1>

            <div className='grid grid-cols-12 p-2 xs:px-4'>
                {data.authors.map(item => {
                    console.log(item);
                    return (
                        <div key={item.id}
                            className='col 
                            
                            xs:col-span-12 md:col-span-6 lg:col-span-4
                            xs:mb-8
                            md:mb-4 md:mx-4
                            py-2
                            shadow-md
                          shadow-gray-400
                            flex flex-col items-center
                            overfelow-hidden
                            hover:bg-pink-600
                            hover:!text-gray-50
                            transition-all duration-100
                            cursor-pointer
                            rounded-md
                            '
                        >
                            <img
                                className='rounded-full w-40 h-40
                                mb-4'
                                src={item.avatar.url} alt={item.slug} />
                            <p
                                className='text-xl font-semibold mb-4'
                            >{item.name}</p>

                            <p
                                className='hover:text-white  text-lg'
                            >
                                {item.field}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default AuthorPage;