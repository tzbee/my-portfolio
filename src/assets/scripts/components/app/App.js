// App.js

import React from 'react';

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
				<div className="App-body">
					<div className="about-me">
						<p>Hi, </p>
						<p>My name is Amine.</p>
						<div className="about-me-footer">
							<div className="about-me-btn-wrp">
								<button className="about-me-btn">
									Hire me
								</button>
							</div>
							<div className="about-me-btn-wrp">
								<button className="about-me-btn">
									Check my stuff
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
