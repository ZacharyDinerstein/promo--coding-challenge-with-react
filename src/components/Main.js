import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIconsContainer } from './SocialIconsContainer.js';
import { Headlines } from './Headlines.js';
import { ButtonCallToAction } from './ButtonCallToAction.js';

export class Main extends React.Component {
	render(){
		return (
			<div>	
				<main>
					<Headlines />
					<ButtonCallToAction />
					<SocialIconsContainer socialIconImg={this.props.socialIconImgs} />
				</main>
			</div>
		);
	}
}