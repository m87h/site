describe('the resume page', () => {
  beforeEach(() => {
    cy.visit('/resume').waitForAPI('onRouteUpdate');
  });

  it('has the correct title', () => {
    cy.title().should('eq', 'Resume | Martin');
  });

  it('has the correct canonical url', () => {
    cy.get('head link[rel="canonical"]').should('have.attr', 'href', 'https://ma.rtin.foo/resume/');
  });

  /*
  FIXME: This test started timing out after a Cypress upgrade. But only when run via the CLI.

  it('links to the PDF version', () => {
    cy.get('a[href="/resume.pdf"]').should('be.visible').click();
    cy.wait(4000);
    cy.matchImageSnapshot();
  });
  */
});
