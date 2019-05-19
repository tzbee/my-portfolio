// App.js

import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import MenuItems from './MenuItems';
import MyProjects from './MyProjects';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import path from 'path';

const PROJECT_DIR = path.join('img', 'projects');

// Project data
// [todo] store later
const projects = [
	{
		id: 1,
		title: 'Nutricount',
		thumbnail: path.join(PROJECT_DIR, 'pj1.png'),
		url: 'http://www.nutricount.info'
	},
	{
		id: 2,
		title: 'Connect 4',
		thumbnail: path.join(PROJECT_DIR, 'pj2.png'),
		url: 'http://c4-webapp.herokuapp.com/'
	},
	{
		id: 3,
		title: 'Project 3',
		thumbnail: path.join(PROJECT_DIR, 'pj3.png')
	},
	{
		id: 4,
		title: 'Other projects',
		thumbnail: path.join(PROJECT_DIR, ''),
		url: 'https://github.com/tzbee'
	}
];

const tags = ['Javascript', 'React', 'Responsive'];

const resumeURL = 'resources/resume.pdf';

const App = () => {
	return (
		<Router>
			<div className="App">
				<div className="App-content">
					<div className="App-menu">
						<div className="menu">
							<Route path="/:id*" component={MenuItems} />
						</div>
					</div>
					<Route
						path="/"
						exact
						component={() => (
							<div className="App-aboutMe">
								<AboutMe />
							</div>
						)}
					/>
					<Switch>
						<Route
							path="/projects"
							component={() => (
								<div className="App-projects">
									<MyProjects
										tags={tags}
										projects={projects}
									/>
								</div>
							)}
						/>
						<Route
							path="/contact"
							component={() => (
								<div className="App-contact">
									<Contact />
								</div>
							)}
						/>
						<Route
							component={() => (
								<div className="App-aboutMe">
									<AboutMe resumeURL={resumeURL} />
								</div>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
