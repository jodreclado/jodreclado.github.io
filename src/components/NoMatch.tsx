import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const NoMatch = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let interval = setInterval(() => setSeconds(seconds => seconds - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  
  return (
    (seconds === 0) ? (
      <Redirect to="/" />
    ) : (
      <div className='page'>
        <h2>404</h2>
        <p>page not found, returning to index in {seconds} second{seconds !== 1 ? "s" : ""}...</p>
      </div>
    )
  );
}

export default NoMatch;