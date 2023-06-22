import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {Route, Routes} from 'react-router-dom'

import HomePage from './components/home/HomePage';
import Layout from './components/layout'
import AuthorPage from './components/author/AuthorPage';

const App = () => {


  return (
    <Layout>
      <Routes>
        <Route path='/authors/:slug' element={<AuthorPage />}/>
        <Route path='/' element={<HomePage />}/>

      </Routes>
    </Layout>
  );
};

export default App;