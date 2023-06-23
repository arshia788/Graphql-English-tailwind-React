import React from 'react';

import Layout from '../layout'
import Blogs from '../blog/Blogs';
import Authors from '../author/Authors';

const HomePage = () => {
    return (
        <div className='grid grid-cols-12 p-20'>

            <div className='xs:col-span-12 md:col-span-10'>
                <h3 className='xs:mx-0 xs:my-4 sm:my-2 sm:mx-3 font-semibold text-2xl ml-8 '>Blogs</h3>
                <Blogs />
            </div>

            <div className='xs:col-span-12 md:col-span-2'>
                <h3  className='xs:mx-0 xs:my-4 text-2xl font-semibold'>Authors</h3>
                <Authors />
            </div>

        </div>
    );
};

export default HomePage;