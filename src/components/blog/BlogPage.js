import React from 'react';

import {useQuery} from '@apollo/client'
import { useParams } from 'react-router-dom';
import { GET_POST_INFO } from '../graphql/queries';

import Loader from '../shared/Loader';

const BlogPage = () => {

    const {slug}= useParams();

    const {loading, data, errors}= useQuery(GET_POST_INFO, {
        variables: {slug}
    })

    if (loading) return <h1><Loader /></h1>

    if (errors) return <h3>Ooops...</h3>


    return (
        <div>
            
        </div>
    );
};

export default BlogPage;