import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {Route, Routes} from 'react-router-dom'

import HomePage from './components/home/HomePage';
import Layout from './components/layout'
import AuthorPage from './components/author/AuthorPage';
import BlogPage from './components/blog/BlogPage';

const App = () => {


  return (
    <Layout>
      <Routes>
        <Route path='/blogs/:slug' element={<BlogPage />}/>
        <Route path='/authors/:slug' element={<AuthorPage />}/>
        <Route path='/' element={<HomePage />}/>

      </Routes>
    </Layout>
  );
};

export default App;