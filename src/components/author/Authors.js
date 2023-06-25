import React from 'react';

import { useQuery } from '@apollo/client'
import { GET_AUTHORS } from '../graphql/queries';
import { Link } from 'react-router-dom';
import Loader from '../shared/Loader';

const Authors = ({ filterBlogs }) => {

    const { loading, data, error } = useQuery(GET_AUTHORS);

    if (loading) return <h1><Loader /></h1>

    if (error) return <h1>Ooops..</h1>



    return (
        <div className='shadow-md
        rounded-md
        w-full
        shadow-gray-400
        overflow-hidden
        '>
            <button className='w-full border-none outline-none
            transition-all bg-white 
            duration-300 focus:bg-pink-600 focus:text-white
            cursor-pointer text-center text-2xl'
                onClick={() => filterBlogs('all')}
            >
                <h3>All</h3>
                <hr />
            </button>
            {
                data.authors.map((item, index) => {
                    return (
                        <React.Fragment key={item.id}>
                            
                                <button className='w-full border-none outline-none
                                transition-all bg-white duration-300 focus:bg-blue-600 focus:text-white
                                mb-5 py-1.5 px-2 flex items-center
                                '
                                onClick={() => filterBlogs(item)}
                                >
                                    <img
                                        src={item.avatar.url}
                                        alt={item.slug}
                                        className='w-10 h-10 rounded-full mr-4'
                                    />

                                    <p className='text-lg'>{item.name}</p>
                                </button>
                                {
                                    index !== item.length - 1 && <hr
                                        className='bg-gray-200 h-0.5 w-1/2 m-auto'
                                    />
                                }
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
};

export default Authors;