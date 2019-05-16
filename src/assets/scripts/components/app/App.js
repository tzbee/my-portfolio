// App.js

import React from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Contact from './Contact';
import MenuItems from './MenuItems';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import path from 'path';

const PROJECT_DIR = path.join('img', 'projects');

// Project data
// [todo] store later
const projects = [
	{
		id: 1,
		title: 'Project 1',
		thumbnail: path.join(PROJECT_DIR, 'pj1.png'),
		url: 'http://www.nutricount.info'
	},
	{ id: 2, title: 'Project 2', thumbnail: path.join(PROJECT_DIR, 'pj2.png') },
	{ id: 3, title: 'Project 3', thumbnail: path.join(PROJECT_DIR, 'pj3.png') }
];

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
									<MyProjects projects={projects} />
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
