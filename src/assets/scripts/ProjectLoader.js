// ProjectLoader.js;

import axios from "axios";

const apiURL = "https://portfolio-with-service.herokuapp.com/api/projects";

export default class ProjectLoader {
	load() {
		return axios.get(apiURL).then(({ data }) => data);
	}
}
