import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { useState } from 'react';
import Header from './components/Header'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Nutrition from './pages/Nutrition';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [currentPage, setCurrentPage] = useState('Login');


  const renderPage = () => {
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Signup'){
      return <Signup />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Calendar') {
      return <Calendar />;
    }
    return <Nutrition />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

    return (
      <ApolloProvider client={client}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage()}
      </div>
      </ApolloProvider>
    );
}

export default App;
