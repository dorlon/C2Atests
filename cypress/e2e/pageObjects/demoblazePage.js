import selectors from '../../fixtures/selectors.json';

class DemoblazePage {
  login(userName, password) {
    cy.get(selectors.login.loginButton).click();
    cy.wait(1000);
    cy.get(selectors.login.loginUsername).type(userName);
    cy.get(selectors.login.loginPassword).type(password);
    return cy.get(selectors.login.loginCommand).click();
  }

  placeOrder(name, country, city, creditCard, month, year) {
    cy.contains('Place Order').click();
    cy.wait(1000);
    cy.get(selectors.orderDetails.name).type(name);
    cy.get(selectors.orderDetails.country).type(country);
    cy.get(selectors.orderDetails.city).type(city);
    cy.get(selectors.orderDetails.creditCard).type(creditCard);
    cy.get(selectors.orderDetails.month).type(month);
    cy.get(selectors.orderDetails.year).type(year);
    cy.contains('Purchase').click();
  }
}

export default DemoblazePage;
