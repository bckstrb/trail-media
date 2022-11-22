import './App.css';
import React, { useState }  from 'react';
// import trailSearch from './utils/API';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // trailSearch(40.76, -111.89)
  const [currentPage, setCurrentPage] = useState('Profile');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />
    }
    if (currentPage === 'Profile') {
      return <Profile />
    }
    if (currentPage === 'Posts') {
      return <Posts />
    }
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
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}

export default App;
