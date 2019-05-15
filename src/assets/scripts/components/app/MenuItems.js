// MenuItems.js;

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const tabIDs = ['projects', 'contact', undefined];

const MenuItems = ({
	className = '',
	match: {
		params: { id }
	}
}) => {
	if (!tabIDs.includes(id)) {
		id = undefined;
	}

	return (
		<div className={`MenuItems ${className}`}>
			<Link
				to="/"
				className={`menu-item ${
					id === undefined ? 'menu-item--selected' : ''
				}`}
			>
				HOME
			</Link>
			<Link
				to="/projects"
				className={`menu-item ${
					id === 'projects' ? 'menu-item--selected' : ''
				}`}
			>
				PROJECTS
			</Link>
			<Link
				to="/contact"
				className={`menu-item ${
					id === 'contact' ? 'menu-item--selected' : ''
				}`}
			>
				CONTACT
			</Link>
		</div>
	);
};

MenuItems.displayName = 'MenuItems';

MenuItems.propTypes = {
	className: PropTypes.string,
	match: PropTypes.object
};

export default MenuItems;
