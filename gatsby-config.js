module.exports = {
	siteMetadata: {
		title: 'Martin Häger',
		description: 'Full-stack software developer with DevOps experience. Blogging about programming, video games, music, electronics engineering, and all things DIY.',
		siteUrl: 'https://kvadevack.se',
		repositoryUrl: 'https://github.com/kvadevack/site',
		author: 'Martin Häger',
		email: 'martin.haeger@gmail.com',
		social: {
			twitter: 'kvadevack',
			github: 'kvadevack',
			matrix: 'kvadevack:kvadevack.se'
		},
		repo: 'kvadevack/site',
	},
	plugins: [
		'gatsby-plugin-feed',
		'gatsby-plugin-less',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Kvadevack',
				display: 'standalone',
				start_url: '/',
				background_color: 'floralwhite',
				theme_color: 'aliceblue',
				icon: `${__dirname}/assets/images/icon.png`,
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'assets',
				path: `${__dirname}/assets/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/posts/`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				excerpt_separator: '<!-- jump -->',
				plugins: [
					'gatsby-remark-embed-video',
					'gatsby-remark-responsive-iframe',
					{
						resolve: 'gatsby-remark-draw',
						options: {
							mermaid: {
								theme: 'forest',
							},
						},
					},
					{
						resolve: 'gatsby-remark-embed-snippet',
						options: {
							directory: `${__dirname}/examples/`,
						},
					},
					'gatsby-remark-prismjs',
					{
						resolve: 'gatsby-remark-images',
						options: {
							showCaptions: true,
						},
					},
					'gatsby-remark-copy-linked-files',
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_self',
						},
					},
				],
			},
		},
		'gatsby-plugin-sitemap',
		'gatsby-transformer-sharp',
	],
};
