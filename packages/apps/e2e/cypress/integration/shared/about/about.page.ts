export default class AboutUsPage {
  public static get pageHeader() {
    return cy.get('h1');
  }

  public static get pageSubHeaderOne() {
    return cy.get('h2:eq(0)');
  }

  public static get pageSubHeaderTwo() {
    return cy.get('h2:eq(1)');
  }

  public static get pageSubHeaderThree() {
    return cy.get('h2:eq(2)');
  }

  public static get communityButton() {
    return cy.get('button');
  }
}
