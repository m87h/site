const ghpages = require('gh-pages');
const execa = require('execa');

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
			prepare: () => execa('npm', ['run', 'build'], { stdio: 'inherit' }),
			publish: () => ghpages.publish('public', {
				repo: `https://${process.env.GITHUB_TOKEN}@github.com/kvadevack/kvadevack.github.io.git`,
				silent: true,
			}),
		},
	],
};
