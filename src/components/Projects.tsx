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
              The <a href="https://www.engr.washington.edu/industry/capstone/2018-2019-projects/">industry capstone team</a> worked to classify irregularities in the Photonic Fence's tracking system and deliver a solution:<br />
              <ul>
                <li>A computer vision algorithm to improve target tracking under
varying lighting conditions.</li>
                <li>An image analyzer for classifying data with Python 3, OpenCV, and Pandas.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="column">
          <img src={creature} alt="Embedded capstone" style={imgStyle}></img>
          <h3>Creatures</h3>
          <div className="content">
            <p>
              Embedded Systems Capstone<br /><br />
            The “Creatures” constitute a multi-nodal mesh radio-controlled
set that lives in a large public space. The creatures produce light
and sound effects via emergent behavior to create an interactive
environment that is pleasing, relaxing, and more entertaining
than the usual background music. <br /><br />
Technologies such as mesh
networking, interrupt-driven multi-threaded processing, power-saving techniques, and rule-making are used to achieve this
emergent behavior.
            </p>
          </div>
        </div>
        <div className="column">
          <img src={baroque} alt="Ultima agent" style={imgStyle}></img>
          <h3>Ultima Agent</h3>
          <div className="content">
            <p>
              A Python game-playing agent capable of playing Baroque Chess (aka Ultima). Implements the following:<br />
              <ul>
                <li>Iterative deepening minimax search with lookhead and alpha/beta pruning.</li>
                <li>Time limits on moves.</li>
                <li>Custom static evaluation of the given board state (i.e., the crux of the agent).</li>
                <li>Zobrist hashing to cache previous evaluations.</li>
                <li>Specific representation of states to ensure compability with other agents.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="column">
          <img src={medical} alt="Medical Monitor" style={imgStyle}></img>
          <h3>Medical Monitor</h3>
          <div className="content">
            <p>
              A portable medical monitoring system capable of collecting data from various types of sensors, processing/displaying the data, and transmitting it over a local area network:
              <ul>
                <li>Simple kernel and scheduler to manage tasks.</li>
                <li>Messaging system and protocol to support bidirectional
communication with an external computer.</li>
                <li>Annunciation features for unhealthy measurements.</li>
                <li>Transducers, circuits, and a function generator to simulate readings.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={risc} alt="Microprocessor" style={imgStyle}></img>
          <h3>RISC Microprocessor</h3>
          <div className="content">
            <p>
              A simple, 64-bit ARM microprocessor with pipelining. Verilog and Modelsim were used for development and testing. The processor is mostly structural (with explicit gates and Boolean equations), but the control logic is done in RTL ('always' blocks). The primary components include:<br />
              <ul>
                <li>A 32 by 64 register file made using registers composed of D flip-flops, a 5:32 enabled decoder, and two large 32x64 to 64 multiplexors.</li>
                <li>An arithmetic logic unit (ALU).</li>
                <li>A single-cycle CPU with pipelining, implemented using the register file and ALU. </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="column">
          <img src={interlock} alt="Interlock system" style={imgStyle}></img>
          <h3>Interlock System</h3>
          <div className="content">
            <p>
              An interlock system implemented and modeled in Verilog, and then synthesized and ported to the Cyclone V FPGA. Its operation is tested and verified using DE1-SoC board switches and LEDs to model the I/O, control logic, and display system
status.<br /><br />
              Features include a simple SRAM and an asynchronous serial network for communication with similar systems.<br /><br />
              Tools: ModelSim, SignalTap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;