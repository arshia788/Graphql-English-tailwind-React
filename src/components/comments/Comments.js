import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POST_COMMENTS } from '../graphql/queries';

import Loader from '../shared/Loader';

const Comments = ({ slug }) => {

    const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
        variables: { slug }
    });

    if (loading) return <h1><Loader /></h1>
    if (error) return <h3>Ooops...</h3>


    return (
        <div className='grid grid-col-12 shadow-md shadow-gray-400 p-3 rounded-sm '>
            <p className='text-blue-700 text-xl font-bold'>Comments</p>

            <div className='col-span-12 my-4 py-1 border rounded  border-gray-400 '>
                {data.comments.map(item => {
                    
                    const name= item.name[0]
                    console.log(name);
                    
                    return (
                        <div key={item.id} className='flex flex-col p-1'>
                            <div className='flex'> 
                                <img src={name}
                                className='w-8 h-8'
                                />

                                <p className='mb-4'>{item.name}</p>

                            </div>

                            <span
                                className='mt-4 ml-2 font-semibold text-gray-600'
                            >{item.text}</span>
                        </div>

                    )
                })}
            </div>

        </div>
    );
};

export default Comments;