import React from 'react';

import { useQuery } from '@apollo/client'
import { GET_AUTHORS } from '../graphql/queries';
import { Link } from 'react-router-dom';

const Authors = () => {

    const { loading, data, error } = useQuery(GET_AUTHORS);

    if (loading) return <h1>loading...</h1>

    if (error) return <h1>Ooops..</h1>



    return (
        <div className='shadow-md
        mt-4
        shadow-gray-400'>
            {
                data.authors.map((item, index) => {
                    return (
                        <React.Fragment key={item.id}>
                            <Link to={`/authors/${item.slug}`}>
                                <div className='mb-4 p-2 flex items-center'>
                                    <img
                                        src={item.avatar.url}
                                        alt={item.slug}
                                        className='w-10 h-10 rounded-full mr-4'
                                    />

                                    <p>{item.name}</p>
                                </div>
                                {
                                    index !== item.length - 1 && <hr
                                        className='bg-gray-200 h-0.5 w-1/2 m-auto'
                                    />
                                }
                            </Link>
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
};

export default Authors;