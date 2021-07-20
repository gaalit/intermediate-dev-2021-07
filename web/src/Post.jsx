import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Post = (props) => {
  console.log('PRROOOPS', props);
  return (
    <Card>
      <CardContent>
        <div>
          <Typography variant="body2" color="textSecondary">
            {props.date}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {props.author.name}
          </Typography>
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="body2">{props.body}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
