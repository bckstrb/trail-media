import React, { useState } from 'react';

export const PostContext = React.createContext();

const PostProvider = (props) => {
  const [currentPost, setCurrentPost] = useState({
    id: '7',
    name: 'Zach',
    city: 'Salt Lake City',
  });

  return (
    <PostContext.Provider value={{ currentPost: currentPost, setCurrentPost: setCurrentPost }} {...props}  />
  );
};

export default PostProvider;
