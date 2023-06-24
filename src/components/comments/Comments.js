import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POST_COMMENTS } from '../graphql/queries';

import Loader from '../shared/Loader';

const Comments = ({slug}) => {

    const {loading, data ,error}= useQuery(GET_POST_COMMENTS,{
        variables:{slug}
    });

    console.log(data);

    if (loading) return <h1><Loader /></h1>

    if (error) return <h3>Ooops...</h3>


    return (
        <div>
            <p className='text-blue-700'>Comments</p>
            
        </div>
    );
};

export default Comments;