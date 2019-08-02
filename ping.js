const http = require("http");
const urls = [
	"http://www.aminetolba.me/",
	"http://tzbee-portfolio-api.herokuapp.com/api/projects"
];

const log = msg => {
	const fullMsg = `[${new Date().toLocaleString()}] ${msg}`;
	console.log(fullMsg);
};

const pingURLs = () => {
	for (let url of urls) {
		log("Pinging " + url);
		http.get(url);
	}
};

module.exports = () => {
	log("Starting pings");
	pingURLs();
	setInterval(pingURLs, 1200000);
};
