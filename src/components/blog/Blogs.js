import React from 'react';

import { useQuery } from '@apollo/client'

import CartEl from '../shared/CartEl';

import Loader from '../shared/Loader';

const Blogs = ({ allBlogs, check,slugItem  }) => {

    const { loading, data, errors } = useQuery(allBlogs, {
        variables:{slug:slugItem}
    })


    if (!check) {
        const itemC = data && data.author.posts.filter(item => item.title !== 'best-laptop')

        if (loading) return <h1><Loader /></h1>
        if (errors) return <h3>Ooops...</h3>

        return (
            <div className='grid grid-cols-12  flex-wrap justify-between items-center 
            xs:p-0 sm:py-4 sm:px-2 box-border '>
                {
                    itemC.map(item => {
                        return (
                            <div key={item.id} className='xs:col-span-12 md:col-span-6 m-1 lg:col-span-4'>
                                <CartEl key={item.id} {...item} />

                            </div>
                        )
                    })
                }
            </div>
        )
    }

    if(check){
        const itemA = data && data.posts.filter(item => item.title !== 'best-laptop')

        if (loading) return <h1><Loader /></h1>
        if (errors) return <h3>Ooops...</h3>

        return (
            <div className='grid grid-cols-12 flex-wrap justify-between items-center 
            xs:p-0 sm:py-4 sm:px-2 box-border '>
                {
                    itemA.map(item => {
                        return (
                            <div key={item.id} className='xs:col-span-12 md:col-span-6 m-1 lg:col-span-4'>
                                <CartEl key={item.id} {...item} />

                            </div>
                        )
                    })
                }
            </div>
        )
    }

};

export default Blogs;