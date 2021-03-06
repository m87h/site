import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Segment } from 'semantic-ui-react';

import { version } from '../../package';

const Footer = ({ ...props }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						author
						repositoryUrl
					}
				}
			}
		`}
		render={({ site }) => {
			const { author, repositoryUrl } = site.siteMetadata;

			return (
				<Segment basic {...props}>
					<p>&copy; {author}, 2018 - 2021. Some rights reserved. The <a href={repositoryUrl}>
						site source</a> is available under the MIT license.</p>
					<p>
						v{version} (<a href={`${repositoryUrl}/blob/master/CHANGELOG.md`}>changelog</a>). Built with <a href="https://graphql.org/">GraphQL</a>
						, <a href="https://reactjs.org/">React</a> and <a href="https://semantic-ui.com/">Semantic UI</a>.
					</p>
				</Segment>
			);
		}}
	/>
);

export default Footer;
