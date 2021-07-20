import React, { useState } from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import Posts from './Posts';

const Author = ({ name, posts }) => {
  const [value, setValue] = useState(false);

  const handleClick = (event) => {
    if (event.target.value === value) {
      setValue('');
    } else {
      setValue(event.target.value);
    }
  };

  const posted = posts.filter((post) => post.author.name === value);

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="authors" name="authors" value={value}>
          <FormControlLabel
            value={name}
            control={<Radio onClick={handleClick} />}
            label={name}
          />
        </RadioGroup>
      </FormControl>
      {value ? <Posts posts={posted} /> : ''}
    </div>
  );
};

export default Author;
