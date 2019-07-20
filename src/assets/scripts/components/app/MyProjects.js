// MyProjects.js;tagstags

import React, { Component } from "react";
import PropTypes from "prop-types";

import TagList from "./TagList";
import ProjectList from "./ProjectList";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

import ProjectLoader from "../../ProjectLoader";

const DEFAULT_STATE = {
	projects: [],
	tags: [],
	selectedTags: [],
	filteredProjects: []
};

const projectLoader = new ProjectLoader();

class MyProjects extends Component {
	constructor(props) {
		super(props);
		this.state = DEFAULT_STATE;
	}

	componentDidMount() {
		this._loadProjects().then(() => {
			this._filterProjects();
		});
	}

	_filterProjects() {
		this.setState(state => {
			const { selectedTags, projects } = state;

			const filteredProjects = projects.filter(({ tags = [] }) => {
				if (tags.includes("*")) {
					return true;
				}
				return selectedTags.every(selectedTag =>
					tags.includes(selectedTag)
				);
			});

			return Object.assign({}, state, { filteredProjects });
		});
	}

	_loadProjects() {
		return projectLoader.load().then(projects => {
			const tags = Object.keys(
				projects
					.map(({ tags = [] }) => tags)
					.reduce((tagMap, tags) => {
						tags.forEach(tag => {
							tagMap[tag] = true;
						});
						return tagMap;
					}, {})
			).sort();

			this.setState(state => {
				return Object.assign({}, state, { projects, tags });
			});
		});
	}

	_handleSelectedTagsChange(newSelectedTags) {
		this.setState(state =>
			Object.assign({}, state, { selectedTags: newSelectedTags })
		);
		this._filterProjects();
	}

	render() {
		const { filteredProjects, selectedTags, tags } = this.state;
		return (
			<div className="MyProjects">
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
						<ProjectList projects={filteredProjects} />
					</SimpleBar>
				</div>
			</div>
		);
	}
}

MyProjects.propTypes = {
	tags: PropTypes.array,
	projects: PropTypes.array
};
export default MyProjects;
