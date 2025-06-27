import PropTypes from 'prop-types';
import { Header, Grid, Icon } from 'semantic-ui-react';

const Basics = ({ name, label, email, phone, location: { city } }) => {
  return (
    <Grid celled='internally' columns={2} className='compact'>
      <Grid.Column style={{ padding: 0 }}>
        <Header as='h1'>
          { name }
          <Header.Subheader>{ label }</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column textAlign='right' style={{ padding: 0 }}>
        <address>
          <Icon name='map marker alternate' />{ city }<br />
          <a href={`mailto:${email}`}>
            <Icon name='mail' /> Email
          </a><br/>
          <a href={`tel:${phone}`}>
            <Icon name='phone' /> Phone
          </a>
        </address>
      </Grid.Column>
    </Grid>
  );
};

Basics.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default Basics;
