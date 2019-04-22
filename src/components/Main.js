import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIconsContainer } from './SocialIconsContainer.js';

export class Main extends React.Component {
	render(){
		return (
			<div>	
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
		      <SocialIconsContainer socialIconImg={this.props.socialIconImgs} />
		    </main>
		</div>
		);
	}
}