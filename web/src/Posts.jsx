import React from 'react';
import Post from './Post';

const Posts = (props) => {
  const { posts } = props;

  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              author={post.author}
              date={post.publishedAt}
            />
          );
        })}
    </>
  );
};

export default Posts;
