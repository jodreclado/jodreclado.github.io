import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className='page'>
      <h2>Rogers Xiang</h2>
      <p>
        B.S. in Electrical Engineering, University of Washington, 2019 <br />
        <b>Email:</b> <a href="mailto:rogersxiang@gmail.com">rogersxiang@gmail.com</a> <br />
        <b>Phone:</b> (425) 922-5957 <br />
        <a href="https://github.com/jodreclado/">Github</a>
      </p>
    </div>
  );
}

export default Home;