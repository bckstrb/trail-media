import './App.css';
import React, { useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import PostProvider, { PostContext } from './utils/postContext';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});
console.log(httpLink);
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // trailSearch(40.76,-111.89);
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange}/>
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
    <ApolloProvider client={client}>
      <PostProvider>
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      </PostProvider>
    </ApolloProvider>
  );
}

export default App;
