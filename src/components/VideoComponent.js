import React from 'react';
import ReactDOM from 'react-dom';

export function VideoComponent(props) {

  return (
    <div className="fullscreen-bg">
	  <video loop muted autoPlay className="fullscreen-bg__video">
	      <source src="https://ak01-video-cdn.slidely.com/static/junior-fed-test/travel-v2.mp4" />
	  </video>
	</div>
  );
}


