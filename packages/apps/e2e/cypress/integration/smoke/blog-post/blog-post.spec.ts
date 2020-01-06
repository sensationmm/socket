import global from '../../utils';
import bloglist from './blog-post.page';

describe('blog post page', () => {
  before(() => {
    cy.visit('/post/ready-to-plug-in/');
  });

  it('should have a header', () => {
    global.header.should('be.visible');
  });

  it('should have a h1', () => {
    bloglist.pageH1Header.should('be.visible');
  });

  it('should have a footer', () => {
    global.footer.should('be.visible');
  });
});
