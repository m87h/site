import React from 'react';
import { graphql } from 'gatsby';
import { Segment, Header, Divider } from 'semantic-ui-react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default ({ pageContext, data }) => {
	const post = data.markdownRemark;
	const { social } = data.site.siteMetadata;
	const { slug, hasExample } = pageContext;

	return (
		<Layout>
			<SEO title={post.frontmatter.title} />
			<Segment raised>
				<Header as='h1'>
					{post.frontmatter.title}
					<Header.Subheader>
						Published on {post.frontmatter.date}
					</Header.Subheader>
				</Header>
				<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
				<Divider />
				<p>
					<em>
						Enjoyed this post? Got feedback?
						Consider following <a href={`https://twitter.com/${social.twitter}`}>@{social.twitter}</a> for the latest updates.
					</em>
				</p>
				<p>
					<em>
						This post{hasExample && <>, excluding sample code,</>} is licensed under a <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
						Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
						{hasExample &&
							<> See the <a href={`https://replit.com/@${social.replit}/${slug}`}>example directory</a> for code licensing.</>
						}
					</em>
				</p>
			</Segment>
		</Layout>
	);
};

export const pageQuery = graphql`
	query($slug: String!) {
		site {
			siteMetadata {
				social {
					twitter
					replit
				}
			}
		}

		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM Do YYYY")
			}
		}
	}
`;
