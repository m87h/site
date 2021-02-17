const { promisify } = require('util');
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
		['@semantic-release/github', {
			successComment: false,
			releasedLabels: false,
		}],
		{
			prepare: () => execa('npm', ['run', 'build'], { stdio: 'inherit' }),
			publish: () => promisify(ghpages.publish)('public', {
				repo: `https://${process.env.GITHUB_TOKEN}@github.com/kvadevack/kvadevack.github.io.git`,
				branch: 'master',
				silent: true,
				dotfiles: true
			}),
		},
	],
};
