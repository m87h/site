import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import LanguageGroup from './LanguageGroup';

const Language = ({ language, fluency }) => (
	<Item>
		<Item.Content>
			<Item.Header>{language}</Item.Header>
			<Item.Description>{fluency}</Item.Description>
		</Item.Content>
	</Item>
);

Language.propTypes = {
	language: PropTypes.string.isRequired,
	fluency: PropTypes.string.isRequired,
};

Language.Group = LanguageGroup;

export default Language;
