// app-reducer.js

const DEFAULT_STATE = {
	projects: [],
	projectsLoaded: false,
	selectedTags: [],
	highlightedTags: []
};

export default (
	state = DEFAULT_STATE,
	{ type, newSelectedTags, newHighlightedTags, projects }
) => {
	switch (type) {
		case "UPDATE_PROJECTS":
			return Object.assign({}, state, { projects, projectsLoaded: true });
		case "UPDATE_SELECTED_TAGS":
			return Object.assign({}, state, { selectedTags: newSelectedTags });
		case "UPDATE_HIGHLIGHTED_TAGS":
			return Object.assign({}, state, {
				highlightedTags: newHighlightedTags
			});

		default:
			return state;
	}
};
