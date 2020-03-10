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
      <p>Undergoing renovation...</p>
      <div className="row">
        <div className="column">
          <img src={photonic} alt="Industry capstone" style={imgStyle}></img>
          <h3>Photonic Sentry</h3>
          <div className="content">
            <p>
              <a href="https://photonicsentry.com/">Photonic Sentry</a> has created a laser-based insect monitoring and eradication system called the Photonic Fence.<br /><br />
              The <a href="https://www.engr.washington.edu/industry/capstone/2018-2019-projects/">capstone team</a> worked to classify irregularities in the Photonic Fence's tracking system and deliver a solution. <br />
              <ul>
                <li>Developed a computer vision algorithm to improve target tracking under
varying lighting conditions.</li>
                <li>Built an image analyzer for classifying data with Python 3, OpenCV, and Pandas</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="column">
          <img src={creature} alt="Embedded capstone" style={imgStyle}></img>
          <h3>Creatures</h3>
          <div className="content">
            <p>Embedded Systems Capstone<br /><br />
            The “Creatures” constitute a multi-nodal mesh radio-controlled
set that lives in a large public space. The creatures produce light
and sound effects via emergent behavior to create an interactive
environment that is pleasing, relaxing, and more entertaining
than the usual background music. <br /><br />
Technologies such as mesh
networking, interrupt-driven multi-threaded processing, power-saving techniques, and rule-making are used to achieve this
emergent behavior.</p>
          </div>
        </div>
        <div className="column">
          <img src={baroque} alt="Ultima agent" style={imgStyle}></img>
          <h3>Ultima Agent</h3>
          <div className="content">
            <p>placeholder text</p>
          </div>
        </div>
        <div className="column">
          <img src={medical} alt="Medical Monitor" style={imgStyle}></img>
          <h3>Medical System</h3>
          <div className="content">
            <p>placeholder text</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={risc} alt="Microprocessor" style={imgStyle}></img>
          <h3>RISC Microprocessor</h3>
          <div className="content">
            <p>placeholder text</p>
          </div>
        </div>
        <div className="column">
          <img src={interlock} alt="Interlock system" style={imgStyle}></img>
          <h3>Interlock System</h3>
          <div className="content">
            <p>placeholder text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;