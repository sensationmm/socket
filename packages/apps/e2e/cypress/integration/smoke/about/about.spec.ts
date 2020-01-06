import global from '../../utils';
import about from './about.page';

describe('about page', () => {
  before(() => {
    cy.visit('/about/');
  });

  it('should have a header', () => {
    global.header.should('be.visible');
  });

  it('should have the first h1 tag to have text "Hey there, we’re Socket!"', () => {
    about.pageHeader.should('contain.text', 'Hey there, we’re Socket!');
  });

  it('should have in the first section a h2', () => {
    about.pageSubHeaderOne.should('be.visible');
    about.pageSubHeaderOne.should('contain.text', 'We were fed up with the old-fashioned energy market.');
  });

  it('should have in the second section a h2', () => {
    about.pageSubHeaderTwo.should('be.visible');
    about.pageSubHeaderTwo.should('contain.text', 'A really good bunch.');
  });

  it('should have in the second section a link to the community', () => {
    about.communityButton.should('be.visible');
    about.communityButton.should('contain.text', 'Join the community');
  });

  it('should have in the third section a h2', () => {
    about.pageSubHeaderThree.should('be.visible');
    about.pageSubHeaderThree.should('contain.text', "Wow, we're real actual people not stock images!");
  });

  it('should have a footer', () => {
    global.footer.should('be.visible');
  });
});
