import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import { Link } from 'gatsby';

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

const Tag = ({ name }) => {
  const nameHash = (hashCode(name) + 2147483647) + 1;
  return (
    <Label as={Link} to={`/tag/${name}`} basic color={colors[nameHash % colors.length]} rel='nofollow'>#{name}</Label>
  );
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

Tag.Group = TagGroup;

export default Tag;
