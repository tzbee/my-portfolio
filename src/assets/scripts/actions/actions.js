// actions.js

import ProjectLoader from "../ProjectLoader";

const projectLoader = new ProjectLoader();

const _updateProjectsAction = projects => {
	return { type: "UPDATE_PROJECTS", projects };
};

export const loadProjectsAction = () => dispatch => {
	return projectLoader
		.load()
		.then(projects => dispatch(_updateProjectsAction(projects)));
};

export const updateSelectedTagsAction = newSelectedTags => ({
	type: "UPDATE_SELECTED_TAGS",
	newSelectedTags
});

export const updateHighlightedTagsAction = newHighlightedTags => ({
	type: "UPDATE_HIGHLIGHTED_TAGS",
	newHighlightedTags
});
