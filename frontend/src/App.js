import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Launches from './components/Launches';

import './App.css';

import logo from './logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='app'>
        <img src={logo} className='logo' alt='spacex' />
        <Launches />
      </div>
    </ApolloProvider>
  );
};

export default App;
