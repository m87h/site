describe('the Matrix delegation', () => {
	it('points clients the correct endpoints', () => {
		cy.request('/.well-known/matrix/client').then(res => JSON.parse(res.body)).should(client => {
			expect(client['m.homeserver'].base_url).to.equal('https://matrix.kvadevack.se');
			expect(client['m.identity_server'].base_url).to.equal('https://vector.im');
		});
	});

	it('points servers to the correct endpoints', () => {
		cy.request('/.well-known/matrix/server').then(res => JSON.parse(res.body)).should(server => {
			expect(server['m.server']).to.equal('matrix-fed.kvadevack.se:443');
		});
	});
});
