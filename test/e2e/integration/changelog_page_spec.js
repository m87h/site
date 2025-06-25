describe('the home page', () => {
  beforeEach(() => {
    cy.visit('/changelog').waitForAPI('onRouteUpdate');
  });

  it('has the correct title', () => {
    cy.title().should('eq', 'Changelog | Martin');
  });

  it('has the correct canonical url', () => {
    cy.get('head link[rel="canonical"]').should('have.attr', 'href', 'https://ma.rtin.foo/changelog/');
  });
});
