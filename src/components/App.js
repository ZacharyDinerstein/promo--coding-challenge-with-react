import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal.js';
import { VideoComponent } from './VideoComponent.js';
import { Main } from './Main.js';
import logo from '../logo.svg';
import '../scss/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <VideoComponent />
        <Modal />
        <Main />
        <script src="main.js"></script>
      </div>
    );
  }
}

export default App;
