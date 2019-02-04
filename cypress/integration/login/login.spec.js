describe('User Management', () => {
  it('Should redirect to the login page, if not already logged in', () => {
    cy.visit('/protected');
    // Verify redirection
    cy.url().should('include', '/login');
  });

  it('Should verify text on screen', () => {
    cy.visit('/login');

    // Verify address
    cy.url().should('include', '/login');
    // Verify text on screen.
    cy.contains('Login');
    cy.contains('Email');
    cy.contains('Password');
  });

  xit('Should verify email missing', () => {});

  it('Should verify valid form submission', () => {
    cy.visit('/protected');
    // Verify redirection
    cy.url().should('include', '/login');

    // Verify updating input fields
    const email = 'joe90@supermarionation.com';
    cy.get('[data-cy=email]')
      .type(email)
      .should('have.value', email);
    const password = 'password';
    cy.get('[data-cy=password]')
      .type(password)
      .should('have.value', password);

    cy.get('[data-cy=submit]').click();
    // Verify redirection to referred page.
    cy.url().should('include', '/protected');
  });

  // it('Should verify logout', () => {
  //   cy.visit('/protected');
  //   // Verify redirection
  //   cy.url().should('include', '/login');

  //   // Verify updating input fields
  //   const email = 'joe90@supermarionation.com';
  //   cy.get('[data-cy=email]')
  //     .type(email)
  //     .should('have.value', email);
  //   const password = 'password';
  //   cy.get('[data-cy=password]')
  //     .type(password)
  //     .should('have.value', password);

  //   cy.get('[data-cy=submit]').click();
  //   // Verify redirection to referred page.
  //   cy.url().should('include', '/protected');

  //   cy.get('[data-cy=logout]').click();
  //   cy.url().should('include', '/logout');
  //   // Verify text on screen.
  //   cy.contains('Login');
  //   cy.contains('Email');
  //   cy.contains('Password');
  // });
});
