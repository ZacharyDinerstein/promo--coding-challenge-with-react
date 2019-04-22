import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIconsContainer } from './SocialIconsContainer.js';
import { headlines } from './headlines.js';

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