import posts from '../fixtures/posts.json';

describe('Posts', () => {
	posts.forEach(post => {
		describe(`/post/${post.slug}`, () => {
			beforeEach(() => {
				cy.visit(`/post/${post.slug}`).waitForAPI('onRouteUpdate');
			});

			it('has the correct canonical url', () => {
				cy.get('head link[rel="canonical"]').should('have.attr', 'href', `https://ma.rtin.foo/post/${post.slug}/`);
			});

			if (post.hasExample) {
				it('has a working example link', () => {
					cy.get('a[href^="https://replit.com"]').should('be.visible').and('have.attr', 'href').then(href => {
						cy.request({ url: href, failOnStatusCode: false }).its('status').should('not.eq', 404);
					});
				});
			}
		});
	});
});
