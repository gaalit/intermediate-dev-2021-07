import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import publishDateReverseOrder from './helperFunctions/publishDateReverseOrder';
// import showUniqueAuthor from './helperFunctions/showUniqueAuthor';
import Posts from './Posts';
import './App.css';

export const App = () => {
  const [posts, setPosts] = useState([]);

  console.log(posts);

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

  return <Posts posts={posts} />;
};
