import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const LanguageGroup = ({ children }) => (
	<Item.Group>
		{children}
	</Item.Group>
);

LanguageGroup.propTypes = {
	children: PropTypes.node.isRequired,
};

export default LanguageGroup;
