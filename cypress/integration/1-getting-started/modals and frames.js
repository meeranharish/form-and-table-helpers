/// <reference types="cypress" />


describe('trials in demoqa', () => {
  it('check frame', () => {
    cy.visit('https://demoqa.com/frames')
    cy.get('iframe[id="frame1"]')
      .its('0.contentDocument.body').should('not.be.empty')
  })
  it('check modal',()=>{
    cy.visit('https://demoqa.com/modal-dialogs')
    cy.get('#showSmallModal').click();
    cy.get('.modal-body').should('have.text','This is a small modal. It has very less content')
  })
})