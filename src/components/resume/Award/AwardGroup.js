import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const AwardGroup = ({ children }) => (
	<Item.Group>
		{children}
	</Item.Group>
);

AwardGroup.propTypes = {
	children: PropTypes.node.isRequired
};

export default AwardGroup;
