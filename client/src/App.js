import './App.css';
import React, { useState }  from 'react';
// import trailSearch from './utils/API';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  // trailSearch(40.76, -111.89)
  const [currentPage, setCurrentPage] = useState('SignUp'); //Change to Home

  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />
    // }
    if (currentPage === 'SignUp') {
      return <SignUp currentPage={currentPage} handlePageChange={handlePageChange} />
    }
    if (currentPage === 'Login') {
      return <Login currentPage={currentPage} handlePageChange={handlePageChange} />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
