// pages.js

const APP_TITLE = 'My portfolio';

const common = {
	title: APP_TITLE,
	banner: { title: APP_TITLE }
};

module.exports = [
	{
		id: 'index',
		data: {
			common,
			content: require('./page-content')
		}
	}
];
