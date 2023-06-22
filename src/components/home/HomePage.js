import React from 'react';

import Layout from '../layout'
import Blogs from '../blog/Blogs';
import Authors from '../author/Authors';

const HomePage = () => {
    return (
        <div className='grid grid-cols-12 p-20'>

            <div className='xs:col-span-12 sm:col-span-9'>
                <h3>Blogs</h3>
                <Blogs />
            </div>

            <div className='xs:col-span-12 sm:col-span-3'>
                <h3>Authors</h3>
            </div>

        </div>
    );
};

export default HomePage;