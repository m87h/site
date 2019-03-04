const Generator = require('yeoman-generator');
const { siteMetadata } = require('../../gatsby-config');

module.exports = class extends Generator {
	constructor (args, opts) {
		super(args, opts);

		this.option('slug', {
			type: String,
			required: true,
		});

		const { author, email, siteUrl } = siteMetadata;
		const { slug } = this.options;
		this.composeWith(require.resolve('generator-license'), {
			name: author,
			website: siteUrl,
			defaultLicense: 'MIT',
			output: `examples/${slug}/LICENSE`,
			licensePrompt: 'Which license do you want to use for the example code?',
			email,
		});
	}

	writing () {
		const { siteUrl } = siteMetadata;
		const { slug } = this.options;

		this.fs.copyTpl(
			this.templatePath('README.md'),
			this.destinationPath(`examples/${slug}/README.md`),
			{ postUrl: `${siteUrl}/post/${slug}` }
		);
	}
};
