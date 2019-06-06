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
			<MenuItem title="HOME" url="/" isSelected={id === undefined} />
			<MenuItem
				title="PROJECTS"
				url="/projects"
				isSelected={id === 'projects'}
			/>
			<MenuItem
				className=""
				title="CONTACT"
				url="/contact"
				isSelected={id === 'contact'}
			/>
		</div>
	);
};

MenuItems.displayName = 'MenuItems';

MenuItems.propTypes = {
	className: PropTypes.string,
	match: PropTypes.object
};

const MenuItem = ({ className = '', title, url, isSelected }) => {
	const selectedClass = isSelected ? 'MenuItem--selected' : '';
	return (
		<Link
			className={`MenuItem ${className} ${selectedClass} user-select-disabled`}
			to={url}
		>
			{title}
		</Link>
	);
};

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	isSelected: PropTypes.bool
};

export default MenuItems;
