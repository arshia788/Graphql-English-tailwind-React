import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/clj5eru8202m801unfmluby99/master',
  cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

