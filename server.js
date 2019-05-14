const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

if (app.get('env') == 'development') {
	var browserSync = require('browser-sync');
	var config = {
		files: [
			'server.js',
			'public/**/*.{js,css}',
			'src/**/*.js',
			'src/**/*.scss'
		],
		logLevel: 'debug',
		logSnippet: false,
		reloadDelay: 1000,
		reloadOnRestart: true
	};
	var bs = browserSync(config);
	app.use(require('connect-browser-sync')(bs));
}

app.use('/', express.static('public'));

app.listen(port, () => console.log(`Server started on port ${port}`));
