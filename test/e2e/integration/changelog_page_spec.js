describe('the home page', () => {
	beforeEach(() => {
		cy.visit('/changelog').waitForAPI('onRouteUpdate');
	});

	it('has the correct title', () => {
		cy.title().should('eq', 'Changelog | Martin');
	});
});
