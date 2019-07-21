// MyProjects.js;tagstags

import React from "react";
import PropTypes from "prop-types";

import TagList from "./TagList";
import ProjectList from "./ProjectList";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

const MyProjects = ({
	className = "",
	projects = [],
	selectedTags = [],
	highlightedTags = [],
	tags,
	onSelectedTagsChange,
	onProjectMouseOver,
	onProjectMouseOut
}) => {
	const handleSelectedTagsChange = newSelectedTags => {
		onSelectedTagsChange(newSelectedTags);
	};

	return (
		<div className={`MyProjects ${className}`}>
			<div className="MyProjects-tagList">
				<TagList
					tags={tags}
					selectedTags={selectedTags.slice()}
					highlightedTags={highlightedTags.slice()}
					onSelectedTagsChange={newSelectedTags =>
						handleSelectedTagsChange(newSelectedTags)
					}
				/>
			</div>
			<div className="MyProjects-list">
				<SimpleBar className="MyProjects-list-scrollBar">
					<ProjectList
						projects={projects}
						onProjectMouseOver={onProjectMouseOver}
						onProjectMouseOut={onProjectMouseOut}
					/>
				</SimpleBar>
			</div>
		</div>
	);
};

MyProjects.displayName = "MyProjects";

MyProjects.propTypes = {
	className: PropTypes.string,
	projects: PropTypes.array,
	selectedTags: PropTypes.array,
	highlightedTags: PropTypes.array,
	tags: PropTypes.array,
	onSelectedTagsChange: PropTypes.func,
	projectsLoaded: PropTypes.bool,
	loadProjects: PropTypes.func,
	onProjectMouseOver: PropTypes.func,
	onProjectMouseOut: PropTypes.func
};

export default MyProjects;
