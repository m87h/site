import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Menu, Button } from 'semantic-ui-react';

const Pagination = ({ activePage, totalPages, urlForPage, maxVisibleRange }) => {
  const basePage = Math.floor((activePage - 1) / maxVisibleRange) * maxVisibleRange + 1;
  const prevPage = Math.max(1, activePage - 1);
  const nextPage = Math.min(totalPages, activePage + 1);

  return (
    <>
      <Menu pagination size='large' className='mobile hidden'>
        <Menu.Item as={Link} to={urlForPage(1)} icon='angle double left' disabled={activePage === 1} />
        <Menu.Item as={Link} to={urlForPage(prevPage)} icon='angle left' disabled={activePage === 1} />
        {basePage > maxVisibleRange &&
        <Menu.Item as={Link} to={urlForPage(activePage - maxVisibleRange)} icon='ellipsis horizontal' title='' />
        }
        {Array.apply(0, Array(Math.min(maxVisibleRange, Math.max(totalPages - basePage + 1, 1)))).map((_, i) => (
          <Menu.Item
            key={i}
            as={Link}
            to={urlForPage(basePage + i)}
            activeClassName='active'>
            {basePage + i}
          </Menu.Item>
        ))}
        {totalPages - basePage > maxVisibleRange &&
        <Menu.Item as={Link} to={urlForPage(Math.min(activePage + maxVisibleRange, totalPages))} icon='ellipsis horizontal' />
        }
        <Menu.Item as={Link} to={urlForPage(nextPage)} icon='angle right' disabled={activePage === totalPages} />
        <Menu.Item as={Link} to={urlForPage(totalPages)} icon='angle double right' disabled={activePage === totalPages} />
      </Menu>
      <Button.Group className='mobile only' fluid>
        {activePage > 1 && <Button as={Link} to={urlForPage(prevPage)} content='Previous' floated='left' />}
        {activePage < totalPages && <Button as={Link} to={urlForPage(nextPage)} content='Next' floated='right' />}
      </Button.Group>
    </>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number.isRequired,
  urlForPage: PropTypes.func.isRequired,
  maxVisibleRange: PropTypes.number,
};

Pagination.defaultProps = {
  activePage: 1,
  maxVisibleRange: 10,
};

export default Pagination;
