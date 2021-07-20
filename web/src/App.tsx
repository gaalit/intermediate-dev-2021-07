import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

export function App() {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    axios
      .get('http://localhost:4000/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
