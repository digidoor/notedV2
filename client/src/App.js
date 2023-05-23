import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './components/Header'
import Login from './pages/Login';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Nutrition from './pages/Nutrition';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Login');


  const renderPage = () => {
    if (currentPage === 'Login') {
      return <Login />;
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
      <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage()}
      </div>
      </>
    );
}

export default App;
