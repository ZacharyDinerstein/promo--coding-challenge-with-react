import React from 'react';
import ReactDOM from 'react-dom';

export class SocialIconsContainer extends React.Component {

	renderIcon(){
		return (
			<div className="social-icons__icon-container">
				<img src="" alt="" className="social-icons__icon" />
			</div>
		);
	}

	renderIcons(){
		let iconNum = 40;
		let icons = [];

		for (let i = 0; i < iconNum; i++){
			icons.push(this.renderIcon())
		}

		return (
			icons
		)
	}

	render() {
		return (
			<div className="social-icons">{this.renderIcons()}</div>
		);
	}
}