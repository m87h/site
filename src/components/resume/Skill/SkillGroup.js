import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const SkillGroup = ({ children }) => (
	<Item.Group>
		{children}
	</Item.Group>
);

SkillGroup.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SkillGroup;
