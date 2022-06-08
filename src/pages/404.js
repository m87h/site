import React from 'react';
import { graphql, Link } from 'gatsby';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { GatsbyImage } from 'gatsby-plugin-image';

const NotFoundPage = ({ data }) => (
	<Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center' columns={1}>
		<Grid.Column stretched>
			<Segment basic>
				<GatsbyImage image={data.godzilla.childImageSharp.gatsbyImageData} alt='godzilla' />
				<Header as='h1'>Godzilla has obliterated this page</Header>
				<p>I'm truly sorry about that. Please <Link to='/'>go back</Link> and try one of the others.</p>
				<p>(404)</p>
			</Segment>
		</Grid.Column>
	</Grid>
);

export default NotFoundPage;

export const pageQuery = graphql`
	query {
		godzilla: file(relativePath: { eq: "images/godzilla.png" }) {
			childImageSharp {
				gatsbyImageData(layout: FIXED, width: 398)
			}
		}
	}
`;
