import React from 'react';

import { Link } from 'react-router-dom'

const CartEl = ({ data }) => {


    return (
        <div className='
        xs:w-screen 
        sm:w-2/5
        md:w-3/12
        md:mr-1
        shadow-md
        shadow-gray-400
        rounded-lg mb-12 py-5
        '>

            <div className='flex items-center mb-4 px-1'>
                <img
                    className='rounded-full w-9 h-9 mr-4'
                    src={data.author.avatar.url}
                />
                <h5>{data.author.name}</h5>

            </div>

            <img src={data.coverPhoto.url} alt={data.slug}
                className='w-full h-40 mb-4'
            />
            <h4 className='mb-4 ml-1 lg:text-xl font-semibold'>{data.title}</h4>

            <hr
                className='h-0.5 bg-gray-200 mb-2 w-11/12 m-auto'
            />
            <Link
                // to='/'
                className='w-8/12  text-center'>

                <button
                    className='w-full rounded-full
            text-white bg-blue-700 border
            transition-all duration-150'
                >Details</button>
            </Link>

        </div>
    );
};

export default CartEl;