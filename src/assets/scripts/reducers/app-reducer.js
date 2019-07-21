// app-reducer.js

const DEFAULT_STATE = {
	projects: [],
	projectsLoaded: false,
	selectedTags: []
};

export default (state = DEFAULT_STATE, { type, newSelectedTags, projects }) => {
	switch (type) {
		case "UPDATE_PROJECTS":
			return Object.assign({}, state, { projects, projectsLoaded: true });
		case "UPDATE_SELECTED_TAGS":
			return Object.assign({}, state, { selectedTags: newSelectedTags });
		default:
			return state;
	}
};
