// pages.js

const APP_TITLE = 'React Web App';

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
