import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from './SocialIcon.js';

export class SocialIconsContainer extends React.Component {

	renderIcons(){
		let iconNum = this.props.socialIconImg.length;
		let icons = [];

		for (let i = 0; i < iconNum; i++){
			let socialIconImg = this.props.socialIconImg[i];
			icons.push(this.renderIcon(socialIconImg, i))
		}

		return (
			icons
		)
	}

	renderIcon(socialIconImg, i){
		return (
			<SocialIcon imgSrc={socialIconImg} key={i}/>
		);
	}


	render() {
		return (
			<div className="social-icons">{this.renderIcons()}</div>
		);
	}
}