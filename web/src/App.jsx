import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import publishDateReverseOrder from './helperFunctions/publishDateReverseOrder';
import showUniqueAuthor from './helperFunctions/showUniqueAuthor';
import Posts from './Posts';
import Authors from './Authors';
import { Button } from '@material-ui/core';

export const App = () => {
  const [posts, setPosts] = useState([]);

  // state to toggle view of all posts
  const [viewAllPosts, setViewAllPosts] = useState(false);

  // state to toggle view by author
  const [viewAllAuthors, setViewAllAuthors] = useState(false);

  const viewPosts = () => {
    setViewAllPosts(!viewAllPosts);
  };

  const viewAuthors = () => {
    setViewAllAuthors(!viewAllAuthors);
  };

  // fetches data from api
  const fetchData = () => {
    axios
      .get('http://localhost:4000/posts')
      .then((res) => {
        setPosts(publishDateReverseOrder(res.data));
      })
      .catch((err) => console.log(err));
  };

  // uses data from api to filter through unique authors
  const authors = showUniqueAuthor(posts);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Button onClick={viewPosts} color="secondary">
        View All Posts
      </Button>
      {viewAllPosts && <Posts posts={posts} />}
      <Button onClick={viewAuthors} color="secondary">
        Select by Author
      </Button>
      {viewAllAuthors && <Authors authors={authors} posts={posts} />}
    </>
  );
};
