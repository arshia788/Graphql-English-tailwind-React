import React from 'react';
import Header from './components/Header';
import { gql, useQuery } from '@apollo/client';


const GET = gql`
query{
  authors{
    name
  }
}
`

const App = () => {

  const {data} = useQuery(GET)
  console.log(data);

  return (
    <div>
      <Header />

    </div>
  );
};

export default App;