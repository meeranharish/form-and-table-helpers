/// <reference types="cypress" />

describe('signup and login in demoqa', () => {
  before(() => {
    //visit demo website
    cy.visit('https://demoqa.com')
    cy.clearCookie('https://demoqa.com')
  })

  it('open the form', () => {
    // navigate to form
    cy.get('.card')
      .contains('Forms').click()
    cy.contains('Forms',{force:true}).click()
    cy.contains('Practice Form').click()
   })
  it('fill in the form',()=>{
    cy.get('#firstName').type('ab')
    cy.get('#lastName').type('Mohamed')
    cy.get('#userEmail').type('a@b.com')
    cy.get('#genterWrapper [type="radio"]').check({force:true})
    cy.get('#userNumber').type('12344321')
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('May')
    cy.get('.react-datepicker__year-select').select('2000')
    cy.get('.react-datepicker__month-select').select('May')
    cy.get('.react-datepicker__day--018').click();
    cy.get('#hobbiesWrapper [type="checkbox"]').check('1',{force:true})
    cy.get('#state [type=text]').type("NCR {enter}", {force:true})
    cy.get('#city [type=text]').type("Delhi {enter}", {force:true})
    cy.get("#userForm").submit()
  }) 
  it('verified the form',()=>{
    cy.get('.table-responsive td')
      .contains('Student Name').siblings().should('have.text','ab Mohamed')
  })
})
