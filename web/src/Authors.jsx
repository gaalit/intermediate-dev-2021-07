import React from 'react';
import Author from './Author';

const Authors = ({ authors, posts }) => {
  return (
    <>
      {authors.map((author, index) => {
        return <Author name={author} key={index} posts={posts} />;
      })}
    </>
  );
};

export default Authors;
