import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ description, lang, meta, keywords, title }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`}
		render={({ site }) => {
			const metaDescription = description || site.siteMetadata.description;
			return (
				<Helmet
					titleTemplate={`%s | ${site.siteMetadata.title}`}
				>
					<html lang={lang} />
					<title>{title}</title>
					<meta name="description" content={metaDescription} />
					<meta name="og:title" content={title} />
					<meta name="og:description" content={metaDescription} />
					<meta name="og:type" content="website" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:creator" content={site.siteMetadata.author} />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={metaDescription} />
					{keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
					{meta.map(({ name, content }, i) => (
						<meta key={i} name={name} content={content} />
					))}
				</Helmet>
			);
		}}
	/>
);

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.array,
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired
};

SEO.defaultProps = {
	lang: 'en',
	meta: [],
	keywords: []
};

export default SEO;
