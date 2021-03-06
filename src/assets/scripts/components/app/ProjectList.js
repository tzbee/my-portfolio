// MyProjects.js;

import React from "react";
import PropTypes from "prop-types";

const ProjectList = ({
	className = "",
	projects = [],
	onProjectMouseOver,
	onProjectMouseOut
}) => {
	return (
		<div className={`ProjectList ${className}`}>
			<div className="ProjectList-content">
				{projects.map(project => (
					<Project
						key={"pj-" + project.id}
						project={project}
						onMouseOver={onProjectMouseOver}
						onMouseOut={onProjectMouseOut}
					/>
				))}
			</div>
		</div>
	);
};

const Project = ({ className = "", project = {}, onMouseOver, onMouseOut }) => {
	const { title, thumbnail, url, tags } = project;

	const additionalThumbnailClasses = {};

	if (tags.includes("GitHub")) {
		additionalThumbnailClasses["Project-thumbnail-smallLogo"] = true;
		additionalThumbnailClasses["Project-thumbnail-logo"] = true;
	} else if (tags.includes("*")) {
		additionalThumbnailClasses["Project-thumbnail-bigLogo"] = true;
		additionalThumbnailClasses["Project-thumbnail-logo"] = true;
	}

	const handleOnMouseOver = () => {
		onMouseOver(project);
	};

	const handleOnMouseOut = () => {
		onMouseOut(project);
	};

	return (
		<div
			className={`Project ${className}`}
			onMouseOver={handleOnMouseOver}
			onMouseOut={handleOnMouseOut}
		>
			<a
				className="Project-url"
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="Project-header">
					<div className="Project-title">{title}</div>
				</div>
				<div
					className={
						"Project-thumbnail " +
						Object.keys(additionalThumbnailClasses).join(" ")
					}
				>
					<img
						className="Project-thumbnail-img"
						src={thumbnail}
						alt={title}
					/>
				</div>
			</a>
		</div>
	);
};

Project.displayName = "Project";

Project.propTypes = {
	className: PropTypes.string,
	project: PropTypes.object,
	onMouseOver: PropTypes.func,
	onMouseOut: PropTypes.func
};

ProjectList.displayName = "MyProjects";

ProjectList.propTypes = {
	className: PropTypes.string,
	projects: PropTypes.array,
	onProjectMouseOver: PropTypes.func,
	onProjectMouseOut: PropTypes.func
};

export default ProjectList;
