import React from 'react';

import {useQuery} from '@apollo/client'
import { useParams } from 'react-router-dom';
import { GET_POST_INFO } from '../graphql/queries';

const BlogPage = () => {

    const {slug}= useParams();

    const {loading, data, error}= useQuery(GET_POST_INFO, {
        variables: {slug}
    })
    console.log(data);
    
    return (
        <div>
            
        </div>
    );
};

export default BlogPage;