// App.js

import React from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className="App">
				<div className="App-content">
					<div className="App-menu">
						<div className="menu">
							<div className="menu-items">
								<Link to="/" className="menu-item">
									ME
								</Link>
								<Link to="/projects" className="menu-item">
									PROJECTS
								</Link>
								<Link to="/contact" className="menu-item">
									CONTACT
								</Link>
							</div>
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
								<div className="App-contact">CONTACT</div>
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
