import React, {useState} from 'react';
import { gql, useQuery } from '@apollo/client';
import { Route, Routes } from 'react-router-dom'

import { GET, GET_AUTHOR_INFO } from './components/graphql/queries';

import HomePage from './components/home/HomePage';
import Layout from './components/layout'
import AuthorPage from './components/author/AuthorPage';
import BlogPage from './components/blog/BlogPage';

const App = () => {

  const [allBlogs, setAllBlogs] = useState(GET);
  const [check, setCheck] = useState(true);
  const [slugItem, setSlugItem] = useState('');

  const filterBlogs=(e)=>{

    
    if(e === 'all'){
        setAllBlogs(GET)
        setCheck(true)
    }
    else{
        setAllBlogs(GET_AUTHOR_INFO)
        setCheck(false)
        setSlugItem(e)
    }
}


  return (
    <Layout filterBlogs={filterBlogs}>
      <Routes>
        <Route path='/blogs/:slug' element={<BlogPage />} />
        <Route path='/authors' element={<AuthorPage />} />
        <Route path='/' element={<HomePage 
        allBlogs={allBlogs}
        check={check}
        slugItem={slugItem}
        filterBlogs={filterBlogs}
        />} />

      </Routes>
    </Layout>
  );
};

export default App;