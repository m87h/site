describe('the home page', () => {
	beforeEach(() => {
		cy.visit('/').waitForAPI('onRouteUpdate');
	});

	it('has the correct title', () => {
		cy.title().should('eq', 'Blog | ma.rtin.foo');
	});
});
