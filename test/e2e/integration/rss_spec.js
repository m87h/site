describe('the RSS feed', () => {
	const { $ } = Cypress;

	beforeEach(() => {
		cy.request('/rss.xml').then(res => $($.parseXML(res.body))).as('feed');
	});

	it('has the correct title', () => {
		cy.get('@feed').should(feed => {
			expect(feed.find('channel > title').text()).to.equal('Martin');
		});
	});

	it('only contains posts', () => {
		cy.get('@feed').should(feed => {
			feed.find('channel item link').each((_, link) => {
				expect($(link).text()).to.match(/^https:\/\/ma.rtin.foo\/post\//);
			});
		});
	});
});
