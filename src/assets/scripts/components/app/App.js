// App.js

import React from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Contact from './Contact';
import MenuItems from './MenuItems';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
									<MyProjects />
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
									<AboutMe />
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
