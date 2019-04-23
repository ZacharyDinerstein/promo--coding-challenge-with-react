import React from 'react';
import ReactDOM from 'react-dom';

export class ButtonCallToAction extends React.Component {

	render() {
		return (
			<div className="call-to-action">
				<button id="btn--modal" 
					className="btn" 
					onClick={this.props.onButtonCallToActionClick} >Start Now!</button>
			</div>
		);
	}

}