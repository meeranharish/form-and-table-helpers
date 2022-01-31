/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('find car in google', () => {
  before(() => {
    //visit google website, clear cookies and accept cookies for the first time
    cy.visit('https://google.com')
    cy.clearCookie('https://google.com')
    cy.get('button').contains('Jeg accepterer').click()
  })

  it('search for citroen cars', () => {
    // choose citroen as car maker and hit the search button
    cy.get('[title="Søg"]').type('Citroen {enter}')
    cy.contains('Web result').should('exist')
   })
})
