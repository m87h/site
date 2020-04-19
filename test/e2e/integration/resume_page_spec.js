describe('the resume page', () => {
	beforeEach(() => {
		cy.visit('/resume').waitForAPI('onRouteUpdate');
	});

	it('has the correct title', () => {
		cy.title().should('eq', 'Resume | Martin Häger');
	});
});
