
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Card, Button } from 'semantic-ui-react';

import Pagination from './Pagination';
import Tag from './Tag';

const PostList = ({ posts, pageNumber, totalPages }) => (
  <>
    {posts.length > 0 ?
      posts.map(({ node }) => {
        const { title, tags } = node.frontmatter;
        const url = `/post/${node.fields.slug}`;

        return (
          <Card raised fluid key={node.fields.slug}>
            <Card.Content>
              <Card.Header as={Link} to={url}>
                <h1>{title}</h1>
              </Card.Header>
              <Card.Description>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {tags.length > 0 &&
              <Tag.Group style={{ float: 'left' }}>
                {tags.map((t, i) => (
                  <Tag key={i} name={t}/>
                ))}
              </Tag.Group>
              }
              <Button as={Link} color='blue' to={url} floated='right' size='tiny'>Read</Button>
            </Card.Content>
          </Card>
        );
      }
      ) : (
        <p>There are no posts to show.</p>
      )
    }

    {totalPages > 1 &&
    <Pagination
      activePage={pageNumber}
      totalPages={totalPages}
      urlForPage={p => p === 1 ? '/' : `/blog/${p}`}
    />
    }
  </>
);

PostList.propTypes = {
  posts: PropTypes.array,
  activePage: PropTypes.number,
  totalPages: PropTypes.number.isRequired,
};

PostList.defaultProps = {
  activePage: 1,
};

export default PostList;
