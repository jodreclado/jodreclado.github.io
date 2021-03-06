import React, { useEffect } from "react";

const Recorder = () => {
  useEffect(() => {
    document.title = "Vocaroo";
  }, []);

  return (
    <div className='page'>
      <h2>Sing a Song</h2>
      <object width="400" height="300">
        <param name="movie" value="https://vocaroo.com/mediafoo.swf?playMediaID=0&autoplay=0" />
        <embed 
          src="https://vocaroo.com/mediafoo.swf?playMediaID=0&autoplay=0" 
          width="220" height="140" 
          type="application/x-shockwave-flash" />
      </object>
      <br />
      Powered by <a href="http://vocaroo.com" title="Voice Recorder">Vocaroo.</a>
      <br />
      This widget does not save or store recordings.
      <br />
      {/* <iframe title="recorder" src="https://vocaroo.com/?minimal" width="525" height="450"></iframe> */}
    </div>
  );
}

export default Recorder;