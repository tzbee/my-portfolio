// AboutMe.js;

import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({ className = '' }) => {
	return (
		<div className={`AboutMe ${className}`}>
			<p>Hi, </p>
			<p>My name is Amine.</p>
			<p>
				I am a <strong>software enthousiast</strong> and{' '}
				<strong>full stack web developer</strong>.
			</p>
			<div className="AboutMe-footer">
				<div className="AboutMe-btn-wrp">
					<button className="AboutMe-btn">Check my stuff</button>
				</div>
				<div className="AboutMe-btn-wrp">
					<button className="AboutMe-btn AboutMe-hire-btn">
						Hire me
					</button>
				</div>
			</div>
		</div>
	);
};

AboutMe.displayName = 'AboutMe';

AboutMe.propTypes = {
	className: PropTypes.string
};

export default AboutMe;
