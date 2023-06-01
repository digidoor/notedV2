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
import CalendarPage from './pages/CalendarPage';
import Nutrition from './pages/Nutrition';
import Test from './pages/Test';
import 'rsuite/dist/rsuite.css';

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
})

const App = () => {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header/>
          <Routes>
            <Route 
              path="/home" 
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
              element={<CalendarPage />} 
            />
            <Route
              path="/"
              element={<Login />}
            />
            <Route 
              path="/test" 
              element={<Test />} 
            />
          </Routes>
        </Router>
      </ApolloProvider>
    );
}

export default App;
