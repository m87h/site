import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label } from 'semantic-ui-react';
import { ALL_ICONS_IN_ALL_CONTEXTS } from 'semantic-ui-react/dist/commonjs/lib/SUI';

import SkillGroup from './SkillGroup';

const Skill = ({ name, level, keywords }) => (
	<Item style={{marginBottom: '2em'}}>
		<Item.Content>
			<Item.Header>{ name }</Item.Header>
			<Item.Description>{level}</Item.Description>
			<Item.Extra>
				{keywords.map((k, i) => {
					const icon = k.toLowerCase();
					return (
						<Label
							key={i}
							content={k}
							icon={ALL_ICONS_IN_ALL_CONTEXTS.indexOf(icon) >= 0 ? icon : 'lightning'}
						/>
					);
				})}
			</Item.Extra>
		</Item.Content>
	</Item>
);

Skill.propTypes = {
	name: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired,
	keywords: PropTypes.array,
};

Skill.defaultProps = {
	keywords: []
};

Skill.Group = SkillGroup;

export default Skill;
