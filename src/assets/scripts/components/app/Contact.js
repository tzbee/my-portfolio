// Contact.js;

import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ className = '' }) => {
	return (
		<div className={`Contact ${className}`}>
			<h2>CONTACT ME</h2>
			<p>
				<strong>email</strong>{' '}
				<a href="#" rel="noopener noreferrer" target="_blank">
					aminetolba29@gmail.com
				</a>
			</p>
			<p>
				<strong>github</strong>{' '}
				<a
					href="https://github.com/tzbee"
					rel="noopener noreferrer"
					target="_blank"
				>
					https://github.com/tzbee
				</a>
			</p>
			<p>
				<strong>linkedin</strong>{' '}
				<a
					href="https://linkedin.com/in/amine-tolba"
					rel="noopener noreferrer"
					target="_blank"
				>
					https://linkedin.com/in/amine-tolba
				</a>
			</p>
		</div>
	);
};

Contact.displayName = 'Contact';

Contact.propTypes = {
	className: PropTypes.string
};

export default Contact;
