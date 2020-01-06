export default class BlogList {
  public static get pageH1Header() {
    return cy.get('h1');
  }

  public static get pageSubheader() {
    return cy
      .get('h1')
      .parent()
      .next()
      .children('span');
  }
}
