import global from '../../utils';
import home from './home.page';

describe('home page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have a header', () => {
    global.header.should('be.visible');
  });

  it('should have the first h1 tag to have text "Hey there, we’re Socket!"', () => {
    home.pageH1Header.should('contain.text', 'Take control. Own your energy.');
  });

  it('should have a footer', () => {
    global.footer.should('be.visible');
  });
});
