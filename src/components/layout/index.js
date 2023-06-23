import React from 'react';

import Header from './Header';
import Footer from './Footer';

const index = ({children, filterBlogs}) => {
    return (
        <div>
            <Header filterBlogs={filterBlogs}/>
                {children}
            <Footer />
        </div>
    );
};

export default index;