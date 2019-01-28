import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = '/public';

Given(`I go to /public url`, () => {
  cy.visit(url);
});

Then(`I see "Public" on the page`, () => {
  cy.url().should('include', '/public');
  cy.url().should('not.include', '/login');
});
