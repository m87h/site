import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import PostList from '../components/PostList';

const TagTemplate = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const { pageNumber, totalPages, tag } = pageContext;

  return (
    <Layout>
      <Head title={`Posts tagged "${tag}"`} location={location} noindex nofollow />
      <PostList posts={posts} pageNumber={pageNumber} totalPages={totalPages} />
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "posts" } }
        frontmatter: { tags: { in: [ $tag ] } }
      }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 300, format: HTML)
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
