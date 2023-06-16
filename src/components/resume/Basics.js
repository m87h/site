import PropTypes from 'prop-types';
import { Header, Grid, Icon } from 'semantic-ui-react';

const Basics = ({ name, label, email, phone, location: { address, postalCode, city, countryCode }, profiles }) => {
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
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	location: PropTypes.shape({
		address: PropTypes.string.isRequired,
		postalCode: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		countryCode: PropTypes.string.isRequired,
	}),
	profiles: PropTypes.arrayOf(PropTypes.shape({
		network: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		username: PropTypes.string,
	})),
};

export default Basics;
