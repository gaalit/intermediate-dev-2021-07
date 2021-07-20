import React from 'react';
import Post from './Post';

const PostsList = (props) => {
  const { posts } = props;
  console.log('POSTS', posts);

  return (
    <>
      <h3>All Posts:</h3>
      {posts.map((post) => {
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

export default PostsList;
