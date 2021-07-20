import React from 'react';

const Post = (props) => {
  console.log('PRROOOPS', props);
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.body}</h2>
      <h3>{props.date}</h3>
      <h4>{props.author.name}</h4>
    </div>
  );
};

export default Post;
