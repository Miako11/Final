// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('register', (register) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register') 
    cy.get('input[name=first_name]').type(register.username)
    cy.get('input[name=reg_email]').type(register.email)
    cy.get('input[name=personal_id]').type(register.ID) 
    cy.get('input[name=phone]').type(register.phone) 
    cy.get('input[name=reg_password]').type(register.password)
    cy.get('input[name=reg_password_confirmation]').type(register.password)
    cy.get('#Rectangle_517').click({ force: true })
    cy.get('.regsub').should('be.visible').click()
  })

  Cypress.Commands.add('Authorization', (register) => {
    cy.get('input[name=login_email]').type(register.email)
    cy.get('input[name=login_password]').type(register.password)
    cy.get('button.form-button[type="submit"]').click({ multiple: true, force: true })
  })