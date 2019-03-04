describe('the RSS feed', () => {
	it('is present and valid', () => {
		cy
			.request('/rss.xml')
			.then(response => {
				const feed = Cypress.$.parseXML(response.body);
				const title = Cypress.$(feed).find('channel > title').text();
				expect(title).to.equal('Martin Häger');
			});
	});
});
