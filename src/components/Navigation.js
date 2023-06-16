import { Segment, Menu } from 'semantic-ui-react';
import { Link } from 'gatsby';

const blogPrefixPattern = /\/(:?blog|post)\//;

const Navigation = () => {
	const blogLinkProps = ({ isCurrent, location }) => (
		isCurrent || blogPrefixPattern.test(location.pathname) ? { className: 'item active' } : null
	);

	const MenuItems = () => (
		<>
			<Menu.Item as={Link} to='/' activeClassName='active' getProps={blogLinkProps}>Blog</Menu.Item>
			<Menu.Item as={Link} to='/resume' activeClassName='active'>Resume</Menu.Item>
			<Menu.Item href='/rss.xml' icon='rss' content='RSS Feed' />
		</>
	);

	return (
		<Segment raised style={{ padding: 0 }}>
			<Menu fluid vertical className='mobile hidden' style={{ border: 'none', boxShadow: 'none', margin: 0 }}>
				<MenuItems />
			</Menu>
			<Menu fluid widths={3} className='mobile only' style={{ border: 'none', boxShadow: 'none', margin: 0 }}>
				<MenuItems />
			</Menu>
		</Segment>
	);
};

export default Navigation;
