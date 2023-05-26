import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Nutrition from './pages/Nutrition';
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header/>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
            <Route 
              path="/nutrition" 
              element={<Nutrition />} 
            />
            <Route 
              path="/calendar" 
              element={<Calendar />} 
            />
          </Routes>
        </Router>
      </ApolloProvider>
    );
}

export default App;
