import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const WorkGroup = ({ children }) => (
	<Item.Group>
		{children}
	</Item.Group>
);

WorkGroup.propTypes = {
	children: PropTypes.node.isRequired
};

export default WorkGroup;
