// ProjectLoader.js;

import axios from "axios";

const apiURL = "https://tzbee-portfolio-api.herokuapp.com/api/projects";

export default class ProjectLoader {
	load() {
		return axios.get(apiURL).then(({ data }) => data);
	}
}
