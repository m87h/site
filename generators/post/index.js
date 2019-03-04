const Generator = require('yeoman-generator');
const slugify = require('slugify');

module.exports = class extends Generator {
	async prompting () {
		this.answers = await this.prompt([
			{
				type: 'input',
				name: 'title',
				message: 'What is the title of the post?'
			},
			{
				type: 'input',
				name: 'tags',
				message: 'Which tags apply to this post? (comma-separated)',
				filter: i => i.split(',').map(t => t.trim()),
			},
			{
				type: 'confirm',
				name: 'hasExample',
				message: 'Does the post contain example code?',
				default: false,
			},
		]);

		this.slug = slugify(this.answers.title, { lower: true });

		if (this.answers.hasExample) {
			this.composeWith(require.resolve('../example'), {
				slug: this.slug,
			});
		}
	}

	writing () {
		const { title, tags } = this.answers;
		this.fs.copyTpl(
			this.templatePath('index.md'),
			this.destinationPath(`posts/${this.slug}/index.md`),
			{ title, tags }
		);
	}
};
