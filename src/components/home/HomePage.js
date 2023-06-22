import React from 'react';

import Layout from '../layout'
import Blogs from '../blog/Blogs';
import Authors from '../author/Authors';

const HomePage = () => {
    return (
        <div className='grid grid-cols-12 p-20'>

            <div className='xs:col-span-12 sm:col-span-10'>
                <h3 className='ml-8 '>Blogs</h3>
                <Blogs />
            </div>

            <div className='xs:col-span-12 sm:col-span-2'>
                <h3>Authors</h3>
                <Authors />
            </div>

        </div>
    );
};

export default HomePage;