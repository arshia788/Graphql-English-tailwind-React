import React from 'react';

import pic from '../Graphql.png'

const Footer = () => {
    return (
        <footer 
        className=' text-gray-200 text-xl
         bg-pink-600 py-2
         flex justify-center items-center'>
            <p className='mr-5 '>this project is by Graphql</p>
            
            <img src={pic} 
            className='w-12 object-cover h-12 '
            />
        </footer>
    );
};

export default Footer;