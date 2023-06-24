import React from 'react';
import { Link } from 'react-router-dom'

import { FaHome } from "react-icons/fa";

const Header = ({ filterBlogs }) => {

    return (
        <nav className='bg-blue-700 flex justify-between items-center py-2 px-20 text-white'>
            <div className='flex justify-between items-center'>
                <Link to='/'
                    onClick={() => filterBlogs('all')}
                >
                    <h1
                        className='text-4xl mr-7 mb-2 font-semibold'>weblog</h1>
                </Link>

            </div>

            <ul className='flex '>
                <Link><li className='mx-2 text-xl'>Blogs</li></Link>
                <Link to='/authors'><li className='mx-2 text-xl'>Authors</li></Link>
            </ul>


        </nav >
    );
};

export default Header;