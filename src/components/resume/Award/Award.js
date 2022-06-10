import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Item } from 'semantic-ui-react';

import AwardGroup from './AwardGroup';

const formatDate = d => moment(d).format('MMM YYYY');

const Award = ({ title, date, awarder, summary }) => (
	<Item style={{marginBottom: '2em'}}>
		<Item.Content>
			<Item.Header>{title}</Item.Header>
			<Item.Meta>{awarder}</Item.Meta>
			<Item.Description>{summary}</Item.Description>
			<Item.Extra>{formatDate(date)}</Item.Extra>
		</Item.Content>
	</Item>
);

Award.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	awarder: PropTypes.string.isRequired,
	summary: PropTypes.string,
};

Award.Group = AwardGroup;

export default Award;
