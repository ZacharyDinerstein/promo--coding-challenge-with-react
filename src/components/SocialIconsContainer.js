import React from 'react';
import ReactDOM from 'react-dom';

export class SocialIconsContainer extends React.Component {

	renderIcons(){
		let iconNum = this.props.socialIconImg.length;
		let icons = [];

		for (let i = 0; i < iconNum; i++){
			let socialIconImg = this.props.socialIconImg[i];

			icons.push(this.renderIcon(socialIconImg))
		}

		return (
			icons
		)
	}

	renderIcon(socialIconImg){
		return (
			<div className="social-icons__icon-container">
				<img src={socialIconImg} alt="" className="social-icons__icon" />
			</div>
		);
	}


	render() {
		return (
			<div className="social-icons">{this.renderIcons()}</div>
		);
	}
}