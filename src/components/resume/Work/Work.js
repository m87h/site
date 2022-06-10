import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Item, Button } from 'semantic-ui-react';

import WorkGroup from './WorkGroup';

const formatDate = d => moment(d).format('MMM YYYY');

const Work = ({ company, position, website, startDate, endDate, summary, highlights }) => (
	<Item style={{marginBottom: '2em'}}>
		<Item.Content>
			<Item.Header>
				{company}
			</Item.Header>
			<Item.Meta>{position}</Item.Meta>
			<Item.Description>{summary}</Item.Description>
			<Item.Extra>
				<p>{formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Now'}</p>
				{website && <Button as='a' href={website} basic size='mini' color='blue' icon='external' content='Visit website' />}
			</Item.Extra>
		</Item.Content>
	</Item>
);

Work.propTypes = {
	company: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	website: PropTypes.string,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string,
	summary: PropTypes.string,
	highlights: PropTypes.array,
};

Work.defaultProps = {
	highlights: []
};

Work.Group = WorkGroup;

export default Work;
