import React from 'react';
import { gql, useQuery } from '@apollo/client';

import HomePage from './components/home/HomePage';
import Layout from './components/layout'

const App = () => {


  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;