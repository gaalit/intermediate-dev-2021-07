import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import publishDateReverseOrder from './helperFunctions/publishDateReverseOrder';
// import showUniqueAuthor from './helperFunctions/showUniqueAuthor';
import Posts from './Posts';
import './App.css';
import { Button } from '@material-ui/core';

export const App = () => {
  const [posts, setPosts] = useState([]);

  // state to toggle view of all posts
  const [viewAllPosts, setViewAllPosts] = useState(false);

  console.log(posts);

  const viewPosts = () => {
    setViewAllPosts(!viewAllPosts);
  };

  const fetchData = () => {
    axios
      .get('http://localhost:4000/posts')
      .then((res) => {
        setPosts(publishDateReverseOrder(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Button onClick={viewPosts}>View All Posts</Button>
      {viewAllPosts && <Posts posts={posts} />}
    </>
  );
};
