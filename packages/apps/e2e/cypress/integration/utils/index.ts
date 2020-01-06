export default class HomePage {
  public static get header() {
    return cy.get('header');
  }

  public static get footer() {
    return cy.get('footer');
  }
}
