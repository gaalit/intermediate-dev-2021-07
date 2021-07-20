/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Posts from './Posts';
import Authors from './Authors';
import Post from './Post';
import Author from './Author';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('snapshot testing', () => {
  test('snappshot for App component', () => {
    const renderedComponent = renderer.create(<App />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test('snappshot for Posts component', () => {
    const renderedComponent = renderer.create(<Posts />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test('snappshot for Authors component', () => {
    const renderedComponent = renderer.create(<Authors />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test('snappshot for Post component', () => {
    const renderedComponent = renderer.create(<Post />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test('snappshot for Author component', () => {
    const renderedComponent = renderer.create(<Author />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
