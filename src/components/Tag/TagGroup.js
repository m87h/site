import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const TagGroup = ({ children, ...props }) => (
  <Label.Group {...props}>
    {children}
  </Label.Group>
);

TagGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default TagGroup;
