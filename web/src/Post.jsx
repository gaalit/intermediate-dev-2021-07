import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, Typography, Link } from '@material-ui/core';

const Post = (props) => {
  const [markdown, setMarkDown] = useState(false);

  const clickTitle = () => {
    setMarkDown(!markdown);
  };

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
          <Typography variant="h5">
            <Link onClick={clickTitle}>{props.title}</Link>
            {markdown && (
              <>
                <ReactMarkdown>{props.title}</ReactMarkdown>
                <ReactMarkdown>{props.body}</ReactMarkdown>
              </>
            )}
          </Typography>
          <Typography variant="body2">{props.body}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
