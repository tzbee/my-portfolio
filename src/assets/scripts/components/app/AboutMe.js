// AboutMe.js;

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

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
				<Link
					to="/projects"
					className="AboutMe-btn AboutMe-checkStuff-btn"
				>
					Check my stuff
				</Link>
				<button className="AboutMe-btn AboutMe-hire-btn">
					Hire me
				</button>
			</div>
		</div>
	);
};

AboutMe.displayName = 'AboutMe';

AboutMe.propTypes = {
	className: PropTypes.string
};

export default AboutMe;
