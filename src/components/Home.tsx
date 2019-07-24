import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  let junkPage = "/" + (+new Date()).toString(36).slice(-5);

  return (
    <div>
      <h2>Home</h2>
      <p>TS.23.060</p>
      <h2>Tests</h2>
      <ul>
        <li><Link to={junkPage}>404</Link></li>
        <li>Error boundary?</li>
      </ul>
    </div>
  );
}

export default Home;