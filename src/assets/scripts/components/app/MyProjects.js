// MyProjects.js;tagstags

import React, { Component } from "react";
import PropTypes from "prop-types";

import TagList from "./TagList";
import ProjectList from "./ProjectList";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

import { connect } from "react-redux";
import {
	loadProjectsAction,
	updateSelectedTagsAction
} from "../../actions/actions";

class MyProjects extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { projectsLoaded, loadProjects } = this.props;
		if (!projectsLoaded) {
			loadProjects();
		}
	}

	_handleSelectedTagsChange(newSelectedTags) {
		const { onSelectedTagsChange } = this.props;
		onSelectedTagsChange(newSelectedTags);
	}

	render() {
		const {
			className = "",
			projects = [],
			selectedTags,
			tags
		} = this.props;

		return (
			<div className={`MyProjects ${className}`}>
				<div className="MyProjects-tagList">
					<TagList
						tags={tags}
						selectedTags={selectedTags.slice()}
						onSelectedTagsChange={newSelectedTags =>
							this._handleSelectedTagsChange(newSelectedTags)
						}
					/>
				</div>
				<div className="MyProjects-list">
					<SimpleBar className="MyProjects-list-scrollBar">
						<ProjectList projects={projects} />
					</SimpleBar>
				</div>
			</div>
		);
	}
}

MyProjects.displayName = "MyProjects";

MyProjects.propTypes = {
	className: PropTypes.string,
	projects: PropTypes.array,
	selectedTags: PropTypes.array,
	tags: PropTypes.array,
	onSelectedTagsChange: PropTypes.func,
	projectsLoaded: PropTypes.bool,
	loadProjects: PropTypes.func
};

const mapDispatchToProps = dispatch => {
	return {
		loadProjects: () => dispatch(loadProjectsAction()),
		onSelectedTagsChange: newSelectedTags =>
			dispatch(updateSelectedTagsAction(newSelectedTags))
	};
};

const filterProjects = (projects, selectedTags) => {
	return projects.filter(({ tags = [] }) => {
		if (tags.includes("*")) {
			return true;
		}
		return selectedTags.every(selectedTag => tags.includes(selectedTag));
	});
};

const getAllTagsFromProjects = projects => {
	return Object.keys(
		projects
			.map(({ tags = [] }) => tags)
			.reduce((tagMap, tags) => {
				tags.forEach(tag => {
					tagMap[tag] = true;
				});
				return tagMap;
			}, {})
	).sort();
};

const mapStateToProps = ({
	projects,
	selectedTags,
	projectsLoaded = false
}) => ({
	projects: filterProjects(projects, selectedTags),
	selectedTags,
	tags: getAllTagsFromProjects(projects),
	projectsLoaded
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyProjects);
