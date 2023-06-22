import React from 'react';

import { useQuery } from '@apollo/client'

import CartEl from '../shared/CartEl';

import { GET } from '../graphql/queries';

const Blogs = () => {

    const { loading, data, errors } = useQuery(GET)

    const itemA = data&& data.posts.filter(item => item.title !== 'best-laptop')

    console.log(itemA);


    if (loading) return <h1>loading..</h1>

    if (errors) return <h3>Ooops...</h3>

    return (
        <div className='inline-flex flex-wrap gap-1 justify-between items-center py-4 px-1 '>
            {
                itemA.map(item => <CartEl key={item.id} data={item} />)
            }
        </div>
    )
};

export default Blogs;