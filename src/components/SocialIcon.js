import React from 'react';
import ReactDOM from 'react-dom';

/* 'props' here are the properties that are on the <Square /> component when it's rendered. */
export function SocialIcon(props) {

	return (
		<div className="social-icons__icon-container">
			<img src={props.imgSrc} alt="" className="social-icons__icon" />
		</div>
	);

}