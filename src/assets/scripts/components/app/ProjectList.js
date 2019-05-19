// MyProjects.js;

import React from 'react';
import PropTypes from 'prop-types';

const ProjectList = ({ className = '', projects = [] }) => {
	return (
		<div className={`ProjectList ${className}`}>
			{projects.map(project => (
				<Project key={'pj-' + project.id} project={project} />
			))}
		</div>
	);
};

const Project = ({ className = '', project = {} }) => {
	const { title, thumbnail, url } = project;
	return (
		<div className={`Project ${className}`}>
			<a
				className="Project-url"
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="Project-thumbnail">
					<img
						className="Project-thumbnail-img"
						src={thumbnail}
						alt={title}
					/>
				</div>
			</a>
			<div className="Project-footer">
				<div className="Project-title">{title}</div>
			</div>
		</div>
	);
};

Project.displayName = 'Project';

Project.propTypes = {
	className: PropTypes.string,
	project: PropTypes.object
};

ProjectList.displayName = 'MyProjects';

ProjectList.propTypes = {
	className: PropTypes.string,
	projects: PropTypes.array
};

export default ProjectList;