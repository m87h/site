import { StaticQuery, graphql } from 'gatsby';
import { Segment } from 'semantic-ui-react';

const Footer = ({ ...props }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						version
						author
					}
				}
			}
		`}
		render={({ site }) => {
			const { version, author } = site.siteMetadata;

			return (
				<Segment basic {...props}>
					<p>&copy; {author}, 2018 - {new Date().getFullYear()}.</p>
					<p>
						v{version} (<a href='/changelog'>changelog</a>). Built with <a href="https://graphql.org/">GraphQL</a>
						, <a href="https://reactjs.org/">React</a> and <a href="https://semantic-ui.com/">Semantic UI</a>.
					</p>
				</Segment>
			);
		}}
	/>
);

export default Footer;
