import { graphql, Link } from 'gatsby';
import { Grid, GridColumn, Segment, Header } from 'semantic-ui-react';
import { GatsbyImage } from 'gatsby-plugin-image';

const NotFoundPage = ({ data }) => (
	<div style={{ position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw' }}>
		<Grid style={{ height: '100%' }} verticalAlign='middle' textAlign='center' columns={1}>
			<GridColumn>
				<Segment basic>
					<GatsbyImage image={data.godzilla.childImageSharp.gatsbyImageData} alt='godzilla' style={{ display: 'inline-block' }} />
					<Header as='h1'>That page doesn't exist!</Header>
					<p>Maybe it never did, or maybe it was destroyed by a fearsome beast.</p>
					<p><Link to='/'>Go to the start page</Link></p>
				</Segment>
			</GridColumn>
		</Grid>
	</div>
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
