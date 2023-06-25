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
        <div className='grid grid-col-12 shadow-md shadow-gray-400 p-3 rounded-sm my-4'>
            
            <p className='text-blue-700 text-xl font-bold'>Comments</p>

            <div className='col-span-12 my-4 py-1  rounded '>
                {data.comments.map(item => {    

                    return (
                        <div key={item.id} className='flex flex-col rounded-sm p-1 mb-3 
                        border border-gray-400 px-2'>
                            <div className='flex'> 
                                

                                <p>{item.name}</p>

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