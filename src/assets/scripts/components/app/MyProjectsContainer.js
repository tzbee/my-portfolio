import MyProjects from "./MyProjects";

import { connect } from "react-redux";
import {
	loadProjectsAction,
	updateSelectedTagsAction,
	updateHighlightedTagsAction
} from "../../actions/actions";

import React, { Component } from "react";
import PropTypes from "prop-types";

const Loader = () => (
	<div className="MyProjectsContainer-loader">Loading...</div>
);

class MyProjectsContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { projectsLoaded, loadProjects } = this.props;
		if (!projectsLoaded) {
			loadProjects();
		}
	}

	render() {
		const {
			className = "",
			projectsLoaded,
			loadProjects,
			...rest
		} = this.props;
		return (
			<div className={`MyProjectsContainer ${className}`}>
				{projectsLoaded ? <MyProjects {...rest} /> : <Loader />}
			</div>
		);
	}
}

MyProjectsContainer.displayName = "MyProjectsContainer";

MyProjectsContainer.propTypes = {
	className: PropTypes.string,
	projectsLoaded: PropTypes.bool,
	loadProjects: PropTypes.func
};

const mapDispatchToProps = dispatch => {
	return {
		loadProjects: () => dispatch(loadProjectsAction()),
		onSelectedTagsChange: newSelectedTags =>
			dispatch(updateSelectedTagsAction(newSelectedTags)),
		onProjectMouseOver: project =>
			dispatch(updateHighlightedTagsAction(project.tags)),
		onProjectMouseOut: () => dispatch(updateHighlightedTagsAction([]))
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
	highlightedTags,
	projectsLoaded = false
}) => ({
	projects: filterProjects(projects, selectedTags),
	selectedTags,
	highlightedTags,
	tags: getAllTagsFromProjects(projects),
	projectsLoaded
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyProjectsContainer);
