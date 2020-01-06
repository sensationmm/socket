import global from '../../utils';
import bloglist from './blog-list.page';

describe('blog list page', () => {
  before(() => {
    cy.visit('/blog/');
  });

  it('should have a header', () => {
    global.header.should('be.visible');
  });

  it('should have the first h1 tag to have text "Musings & News-things."', () => {
    bloglist.pageH1Header.should('contain.text', 'Musings & News-things.');
  });

  it('should have a sub page heading "It’s the latest info, news and updates from the Socket Team."', () => {
    bloglist.pageSubheader.should('contain.text', 'It’s the latest info, news and updates from the Socket Team.');
  });

  it('should have a footer', () => {
    global.footer.should('be.visible');
  });
});
