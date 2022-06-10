import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import './Layout.less';

import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<Grid container stackable>
			<Grid.Row>
				<Grid.Column width={4} id='foo'>
					<Header/>
					<Navigation/>
					<Footer className='mobile hidden' />
				</Grid.Column>
				<Grid.Column width={12}>
					{children}
				</Grid.Column>
			</Grid.Row>
			<Grid.Row className='mobile only'>
				<Grid.Column width={16}>
					<Footer textAlign='center' />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
