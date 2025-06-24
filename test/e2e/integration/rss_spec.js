describe('the RSS feed', () => {
	beforeEach(() => {
		cy.request('/rss.xml').then(res => Cypress.$(Cypress.$.parseXML(res.body))).as('feed');
	});

	it('has the correct title', () => {
		cy.get('@feed').should(feed => {
			expect(feed.find('channel > title').text()).to.equal('Martin');
		});
	});
});
