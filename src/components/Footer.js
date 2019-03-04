import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Segment } from 'semantic-ui-react';
import moment from 'moment';

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

				latestPost: allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1
				) {
					edges {
						node {
							frontmatter {
								date
							}
						}
					}
				}
			}
		`}
		render={({ site, latestPost }) => {
			const { author, repositoryUrl } = site.siteMetadata;
			const latestPostYear = latestPost.edges.length > 0 && moment(latestPost.edges[0].node.frontmatter.date).year();
			const copyrightRange = `2018${latestPostYear && latestPostYear > 2018 ? ` - ${latestPostYear}` : ''}`;

			return (
				<Segment basic {...props}>
					<p>&copy; {author}, {copyrightRange}. Some rights reserved. The <a href={repositoryUrl}>
						site source</a> is available under the MIT license.</p>
					<p>
						Built with <a href="https://graphql.org/">GraphQL</a>
						, <a href="https://reactjs.org/">React</a> and <a href="https://semantic-ui.com/">Semantic UI</a>.
					</p>
				</Segment>
			);
		}}
	/>
);

export default Footer;
