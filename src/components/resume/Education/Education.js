import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import moment from 'moment';

import EducationGroup from './EducationGroup';

const formatDate = d => moment(d).format('MMM YYYY');

const Education = ({ institution, area, studyType, startDate, endDate }) => (
  <Item style={{marginBottom: '2em'}}>
    <Item.Content>
      <Item.Header>{institution}</Item.Header>
      <Item.Meta>{studyType} {area}</Item.Meta>
      <Item.Extra>
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Now'}
      </Item.Extra>
    </Item.Content>
  </Item>
);

Education.propTypes = {
  institution: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  studyType: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string
};

Education.Group = EducationGroup;

export default Education;
