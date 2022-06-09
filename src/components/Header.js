import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Card, Button } from 'semantic-ui-react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Header = () => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
						description
						social {
							twitter
							github
						}
					}
				}

				avatar: file(relativePath: { eq: "images/shinigami.png" }) {
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED, width: 398)
					}
				}
			}
		`}
		render={({ site, avatar }) => {
			const { title, description, social } = site.siteMetadata;
			const SocialButtons = () => (
				<>
					<Button as='a' basic icon='twitter' href={`https://twitter.com/${social.twitter}`} content='Twitter' />
					<Button as='a' basic icon='github' href={`https://github.com/${social.github}`} content='GitHub' />
				</>
			);

			return (
				<Card raised fluid style={{ overflow: 'hidden' }}>
					<Link to='/' style={{backgroundColor: 'currentcolor'}}>
						<GatsbyImage className='mobile hidden' alt='profile picture' image={avatar.childImageSharp.gatsbyImageData} />
					</Link>
					<Card.Content>
						<Card.Header>{title}</Card.Header>
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
