import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const EducationGroup = ({ children }) => (
	<Item.Group>
		{children}
	</Item.Group>
);

EducationGroup.propTypes = {
	children: PropTypes.node.isRequired
};

export default EducationGroup;
