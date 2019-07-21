// App.js

import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MenuItems from "./MenuItems";
import MyProjectsContainer from "./MyProjectsContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const resumeURL = "resources/resume.pdf";

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
						render={() => (
							<div className="App-aboutMe">
								<AboutMe />
							</div>
						)}
					/>
					<Switch>
						<Route
							path="/projects"
							render={() => (
								<div className="App-projects">
									<MyProjectsContainer />
								</div>
							)}
						/>
						<Route
							path="/contact"
							render={() => (
								<div className="App-contact">
									<Contact />
								</div>
							)}
						/>
						<Route
							render={() => (
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
