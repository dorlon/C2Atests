/// <reference types = "cypress"/>
import DemoblazePage from '../pageObjects/demoblazePage';
import data from '../../fixtures/data.json';
import selectors from '../../fixtures/selectors.json';

describe('Demoblaze Test', function () {
  it('Login', function () {
    cy.visit('https://www.demoblaze.com/');

    const demoBlazePage = new DemoblazePage();
    demoBlazePage.login(data.login.userName, data.login.password);
    cy.get('#nameofuser').should('have.text', 'Welcome ' + data.login.userName);
  });

  it('Get the cheapest phone', function () {
    var cheapestTitle = null;
    var minPrice = null;
    var minPicture = null;
    var cheapestPhone = {}; // Object to store price and title

    cy.contains('Phones').click();

    cy.get(selectors.device.prices)
      .each(($el, index) => {
        const amount = $el.text();
        var priceNumber = Number(amount.split('$')[1]);

        if (index === 0 || priceNumber < minPrice) {
          minPrice = priceNumber;
          cy.get(selectors.device.title)
            .eq(index)
            .invoke('text')
            .then((title) => {
              cheapestTitle = title;
              cheapestPhone = {
                title: cheapestTitle,
                price: minPrice,
                image: minPicture,
              };
            });
        }
      })
      .then(function () {
        const demoBlazePage = new DemoblazePage();
        // 'cheapestPhone' object now contains the title and price of the cheapest mobile
        cy.log('Cheapest Mobile:', cheapestPhone);
        cy.contains(cheapestPhone.title).click();
        cy.contains('Add to cart').click();
        cy.contains('Cart').click();
        demoBlazePage.placeOrder(
          'Dor',
          'Israel',
          'Megadim',
          '12345',
          '12',
          '2026'
        );
        cy.get('.sweet-alert > h2').should(
          'have.text',
          'Thank you for your purchase!'
        );
        cy.wait(1000);
        cy.contains('OK').click();
        cy.get('#logout2').click();
      });
  });
});
