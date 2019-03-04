import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import TagGroup from './TagGroup';
import { hashCode } from '../../util';

const colors = [
	'red',
	'orange',
	'yellow',
	'olive',
	'green',
	'teal',
	'blue',
	'violet',
	'purple',
	'pink',
	'brown',
	'grey',
	'black',
];

const Tag = ({ name, ...props }) => {
	const nameHash = (hashCode(name) + 2147483647) + 1;
	return (
		<Label basic color={colors[nameHash % colors.length]}>#{name}</Label>
	);
};

Tag.propTypes = {
	name: PropTypes.string.isRequired,
};

Tag.Group = TagGroup;

export default Tag;
