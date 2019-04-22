import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <div className="fullscreen-bg">
          <video loop muted autoplay className="fullscreen-bg__video">
            
          </video>
        </div>
        <section className="modal d-none">
          <div id="modal__wrapper" className="modal__wrapper">
            <div className="modal__container">
              <h3 id="modal__header" className="modal__header">Leave us your email :-)</h3>
            </div> 
          </div>
        </section>
        <main>
          <div className="headlines">
            <h1 className="headlines__main-headline">DON'T PANIC! DON'T PANIC!</h1>
            <h2 className="headlines__sub-headline">Cool stuff here! You've got to see it!'</h2>
          </div>
          <div className="call-to-action">
            <button className="btn btn--modal">
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
      </div>
    );
  }
}

export default App;
