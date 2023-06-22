import React from 'react';

import { useParams } from 'react-router-dom';

const AuthorPage = () => {

    const id= useParams()
    console.log(id.slug);
    
    return (
        <div>
            {id}
        </div>
    );
};

export default AuthorPage;