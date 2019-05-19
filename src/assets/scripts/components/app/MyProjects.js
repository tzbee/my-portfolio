// MyProjects.js;tagstags

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TagList from './TagList';
import ProjectList from './ProjectList';

const DEFAULT_STATE = {
	selectedTags: [],
	filteredProjects: []
};

class MyProjects extends Component {
	constructor(props) {
		super(props);
		this.state = DEFAULT_STATE;
	}

	componentDidMount() {
		this._filterProjects();
	}

	_filterProjects() {
		this.setState(state => {
			const { projects } = this.props;
			const { selectedTags } = state;

			const filteredProjects = projects.filter(({ tags = [] }) => {
				if (tags.includes('*')) {
					return true;
				}
				return selectedTags.every(selectedTag =>
					tags.includes(selectedTag)
				);
			});

			return Object.assign({}, state, { filteredProjects });
		});
	}

	_handleSelectedTagsChange(newSelectedTags) {
		this.setState(state =>
			Object.assign({}, state, { selectedTags: newSelectedTags })
		);
		this._filterProjects();
	}

	render() {
		const { tags } = this.props;
		const { filteredProjects, selectedTags } = this.state;
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
					<ProjectList projects={filteredProjects} />
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
