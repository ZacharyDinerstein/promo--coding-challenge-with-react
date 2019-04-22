import React from 'react';
import ReactDOM from 'react-dom';

export function Main(props) {

  return (
    <main>
      <div className="headlines">
        <h1 className="headlines__main-headline">DON'T PANIC! DON'T PANIC!</h1>
        <h2 className="headlines__sub-headline">Cool stuff here! You've got to see it!'</h2>
      </div>
      <div className="call-to-action">
        <button id="btn--modal" className="btn">
          Start Now!
        </button>
      </div>
      <div className="social-icons">
        <div className="social-icons__icon-container">
          <img src="https://ak02-cdn.slidely.com/static/junior-fed-test/Google_2015_logo_small.png" alt="" className="social-icons__icon" />
        </div>
        <div className="social-icons__icon-container">
          <img src="https://ak03-cdn.slidely.com/static/junior-fed-test/facebook-logo-small.png" alt="" className="social-icons__icon" />
        </div>
        <div className="social-icons__icon-container">
          <img src="https://ak04-cdn.slidely.com/static/junior-fed-test/Tesla-logo-small.png" alt="" className="social-icons__icon" />
        </div>
        <div className="social-icons__icon-container">
          <img src="https://ak01-cdn.slidely.com/static/junior-fed-test/nike_small.png" alt="" className="social-icons__icon" />
        </div>
      </div>
    </main>
  );
}



		