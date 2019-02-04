import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const url = '/stadiums';

Given(`I go to /stadiums url`, () => {
  cy.visit(url);
});

When(`I type "joe90@supermarionation.com" into the Email field`, () => {
  const username = 'joe90@supermarionation.com';
  cy.get('[data-cy=email]')
    .type(username)
    .should('have.value', username);
});

When(`I type "password" into the Password field`, () => {
  const password = 'testpassword';
  cy.get('[data-cy=password]')
    .type(password)
    .should('have.value', password);
});

When(`I click "Login" button`, () => {
  cy.get('[data-cy=submit]').click();
});

Then(`I see /stadiums map on the page`, () => {
  // Verify url.
  cy.url().should('contains', '/stadiums');
});
