import { graphql } from 'gatsby';
import { Segment, Header } from 'semantic-ui-react';

import { capitalizeFirstLetter } from '../util';

import Layout from '../components/Layout';
import Head from '../components/Head';

const PageTemplate = ({ pageContext, data, location }) => {
  const page = data.markdownRemark;
  const title = page.frontmatter.title ? page.frontmatter.title : capitalizeFirstLetter(pageContext.slug.toLowerCase());
  const isChangelogPage = pageContext.slug === 'changelog';

  return (
    <Layout>
      <Head title={title} location={location} noindex={isChangelogPage} nofollow={isChangelogPage} />
      <Segment raised>
        <Header as='h1'>{title}</Header>
        <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
      </Segment>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
