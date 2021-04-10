const { promisify } = require('util');
const ghpages = require('gh-pages');
const execa = require('execa');

const headerPartial = `## {{version}}
{{~#if title}} "{{title}}"
{{~/if}}
{{~#if date}} ({{date}})
{{/if}}
`;

const commitPartial = `*{{#if scope}} **{{scope}}:**
{{~/if}} {{#if subject}}
  {{~subject}}
{{~else}}
  {{~header}}
{{~/if}}

`;

module.exports = {
	plugins: [
		'@semantic-release/commit-analyzer',
		['@semantic-release/release-notes-generator', {
			linkCompare: false,
			linkReferences: false,
			writerOpts: { headerPartial, commitPartial },
		}],
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
