import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = '/protected';

Given(`I go to /protected url`, () => {
  cy.visit(url);
});

Then(`I see "Login" on the page`, () => {
  cy.title().should('include', 'Login');
  cy.url().should('include', '/login');
  cy.url().should('not.include', '/protected');
});
