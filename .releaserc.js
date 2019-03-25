const ghpages = require('gh-pages');

module.exports = {
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		['@semantic-release/git', {
			assets: ['CHANGELOG.md', 'package.json', 'package-lock.json']
		}],
		'@semantic-release/github',
		{
			publish: () => ghpages.publish('public', {
				repo: `https://${process.env.GITHUB_TOKEN}@github.com/kvadevack/kvadevack.github.io.git`,
				silent: true,
			}),
		},
	],
};
