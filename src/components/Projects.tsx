import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);
 
  return (
    <div className='page'>
      <h2>Projects</h2>
      <p>Undergoing renovation...</p>
    </div>
  );
}

export default Projects;