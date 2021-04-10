import posts from '../fixtures/posts.json';

describe('Posts', () => {
	posts.forEach(post => {
		describe(`/post/${post.slug}`, () => {
			beforeEach(() => {
				cy.visit(`/post/${post.slug}`).waitForAPI('onRouteUpdate');
			});

			if (post.hasExample) {
				it('has a working example link', () => {
					cy.get('a[href^="https://replit.com"]').should('be.visible').and('have.attr', 'href').then(href => {
						cy.request(href);
					});
				});
			}
		});
	});
});
