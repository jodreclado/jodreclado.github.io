import React, { useEffect } from 'react';

// pictures (3:2 aspect ratios)
import photonic from '../assets/images/photonic.jpg';
import creature from '../assets/images/creature.jpg';
import baroque from '../assets/images/baroque.jpg';
import medical from '../assets/images/medical.jpg';
import risc from '../assets/images/risc.jpg';
import interlock from '../assets/images/interlock.jpg';

const imgStyle = {
  "width": "90%",
  "maxHeight": "60%",
  "object-fit": "cover",
};

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);
 
  return (
    <div className='page'>
      <h2>Projects</h2>
      <div className="row">
        <div className="column">
          <img src={photonic} alt="Industry capstone" style={imgStyle}></img>
          <h3>Photonic Sentry</h3>
          <div className="content">
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className="column">
          <img src={creature} alt="Embedded capstone" style={imgStyle}></img>
          <h3>Creatures</h3>
          <div className="content">
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className="column">
          <img src={baroque} alt="Ultima agent" style={imgStyle}></img>
          <h3>Baroque Chess Agent</h3>
          <div className="content">
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className="column">
          <img src={medical} alt="Medical system" style={imgStyle}></img>
          <h3>Medical Monitoring System</h3>
          <div className="content">
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={risc} alt="Microprocessor" style={imgStyle}></img>
          <h3>RISC Microprocessor</h3>
          <div className="content">
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className="column">
          <img src={interlock} alt="Interlock system" style={imgStyle}></img>
          <h3>Interlock System</h3>
          <div className="content">
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;