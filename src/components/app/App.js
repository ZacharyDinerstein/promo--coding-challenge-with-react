import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '../Modal.js';
import { VideoComponent } from '../VideoComponent.js';
import { Main } from '../Main.js';
import logo from '../../logo.svg';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			socialIconImgs: ['https://ak02-cdn.slidely.com/static/junior-fed-test/Google_2015_logo_small.png', 'https://ak03-cdn.slidely.com/static/junior-fed-test/facebook-logo-small.png', 'https://ak04-cdn.slidely.com/static/junior-fed-test/Tesla-logo-small.png', 'https://ak01-cdn.slidely.com/static/junior-fed-test/nike_small.png'],
			modalWindowActive: false
		};
	}

	toggleModalWindowActive() {
        const currentState = this.state.modalWindowActive;
        this.setState({ modalWindowActive: !currentState });
    };

	render() {
		return (
			<div>
				<VideoComponent />
				<Modal modalWindowActive={this.state.modalWindowActive} />
				<Main socialIconImgs={this.state.socialIconImgs} onButtonCallToActionClick={() => this.toggleModalWindowActive()}/>
				<script src="main.js"></script>
			</div>
		);
	}
}

export default App;
