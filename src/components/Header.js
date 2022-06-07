import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Card, Button } from 'semantic-ui-react';
import Img from 'gatsby-image';

const Header = () => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						author
						description
						social {
							twitter
							github
							matrix
						}
					}
				}

				avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 398, quality: 100) {
							...GatsbyImageSharpFluid_noBase64
						}
					}
				}
			}
		`}
		render={({ site, avatar }) => {
			const { author, description, social } = site.siteMetadata;
			const SocialButtons = () => (
				<>
					<Button as='a' basic icon='twitter' href={`https://twitter.com/${social.twitter}`} content='Twitter' />
					<Button as='a' basic icon='github' href={`https://github.com/${social.github}`} content='GitHub' />
				</>
			);

			return (
				<Card raised fluid style={{ overflow: 'hidden' }}>
					<Link to='/'>
						<Img className='mobile hidden' fluid={avatar.childImageSharp.fluid} />
					</Link>
					<Card.Content>
						<Card.Header>{author}</Card.Header>
						<Card.Description>{description}</Card.Description>
					</Card.Content>
					<Card.Content extra style={{ textAlign: 'center' }}>
						<Button.Group vertical className='mobile hidden'>
							<SocialButtons />
						</Button.Group>
						<Button.Group widths={2} className='mobile only'>
							<SocialButtons />
						</Button.Group>
					</Card.Content>
				</Card>
			);
		}}
	/>
);

export default Header;
