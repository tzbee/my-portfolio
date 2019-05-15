// MyProjects.js;

import React from 'react';
import PropTypes from 'prop-types';

const MyProjects = ({ className = '' }) => {
	return (
		<div className={`MyProjects ${className}`}>
			<div className="Project">
				<div className="Project-thumbnail" />
			</div>
			<div className="Project">
				<div className="Project-thumbnail" />
			</div>
			<div className="Project">
				<div className="Project-thumbnail" />
			</div>
		</div>
	);
};

MyProjects.displayName = 'MyProjects';

MyProjects.propTypes = {
	className: PropTypes.string
};

export default MyProjects;
