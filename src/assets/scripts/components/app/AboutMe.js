// AboutMe.js;

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const AboutMe = ({ className = '', resumeURL }) => {
	return (
		<div className={`AboutMe ${className}`}>
			<p>Hi, </p>
			<p>My name is Amine.</p>
			<p>
				I am a <strong>software enthusiast</strong> and{' '}
				<strong>full stack web developer</strong>.
			</p>
			<div className="AboutMe-footer">
				<Link
					to="/projects"
					className="AboutMe-btn AboutMe-checkStuff-btn"
				>
					<span className="AboutMe-checkStuff-btn-text">
						Check my work
					</span>
					<span className="AboutMe-checkStuff-btn-chevron fas fa-chevron-right" />
				</Link>
			</div>
		</div>
	);
};

AboutMe.displayName = 'AboutMe';

AboutMe.propTypes = {
	className: PropTypes.string,
	resumeURL: PropTypes.string
};

export default AboutMe;
