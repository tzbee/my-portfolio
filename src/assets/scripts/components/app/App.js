// App.js

import React from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';

const App = () => {
	return (
		<div className="App">
			<div className="App-content">
				<div className="App-menu">
					<div className="menu">
						<div className="menu-items">
							<div className="menu-item">ME</div>
							<div className="menu-item">PROJECTS</div>
							<div className="menu-item">CONTACT</div>
						</div>
					</div>
				</div>
				<div className="App-projects">
					<MyProjects />
				</div>
				<div className="App-aboutMe">{/* <AboutMe /> */}</div>
			</div>
		</div>
	);
};

export default App;
