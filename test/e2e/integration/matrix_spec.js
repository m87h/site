describe('the Matrix delegation file', () => {
	beforeEach(() => {
		cy.request('/.well-known/matrix/server').then(res => JSON.parse(res.body)).as('server');
	});

	it('points to the correct server', () => {
		cy.get('@server').should(server => {
			expect(server['m.server']).to.equal('matrix-fed.kvadevack.se:443');
		});
	});
});
