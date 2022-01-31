/// <reference types="cypress" />
const helper = require("./helper")
let form = require('../../fixtures/form')
import "cypress-real-events/support";

describe('signup and login in demoqa', () => {
  let name = 'harish'
  let email = 'harish@harish.com'
  let address = 'Denmark'
  let permAddress = 'India'
  before(() => {
    // visit demo website
    cy.visit('https://demoqa.com')
    cy.clearCookie('https://demoqa.com')
  })

  it('open the elements', () => {
    // navigate to form
    cy.get('.card')
      .contains('Forms').click()
    cy.contains('Elements', { force: true }).click()
  })
  it('fill in the text box', () => {
    cy.contains('Text Box').click()
    cy.get('#userName').type(name)
    cy.get('#userEmail').type(email)
    cy.get('#userForm #currentAddress').type(address)
    cy.get('#userForm #permanentAddress').type(permAddress)
    cy.get('#submit').click()
  })
  it('verify the submission', () => {
    cy.get('#output').within(() => {
      cy.get('#name').should('have.text', 'Name:' + name)
      cy.get('#email').should('have.text', 'Email:' + email)
      cy.get('#currentAddress').should('have.text', 'Current Address :' + address + ' ')
      cy.get('#permanentAddress').should('have.text', 'Permananet Address :' + permAddress)
    })
  })
  it('fill in the check box', () => {
    cy.contains('Check Box').click()
    cy.get('.rct-checkbox').first().click()
  })
  it('verify the submission', () => {
    var str
    cy.get('.rct-option-expand-all').click().then(() => {
      cy.get('.rct-text').first().within((el) => {
        if (el.find('.rct-icon-check').length > 0) {
          cy.get('.rct-title').then((txt) => {
            str = txt.text().split('.')[0]
          })
        }
      })
      cy.get('.rct-text').nextAll().within((el) => {
        if (el.find('.rct-icon-check').length > 0) {
          cy.get('.rct-title').then((txt) => {
            str += txt.text().split('.')[0]
          })
        }
      })
      cy.get('.text-success').then((el) => {
        expect(el.text().toUpperCase()).to.contain  (str.toUpperCase())
      })
    })
  })
  it('fill in the option', () => {
    cy.contains('Radio Button').click()
    cy.get('#yesRadio').click({force:true})
    cy.get('.text-success').should('have.text','Yes')
  })
  it('click', () => {
    cy.contains('Buttons').click()
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#rightClickBtn').rightclick()
    cy.get('[type="button"]').contains(/^Click Me/).click()
    cy.get('#doubleClickMessage').should('have.text','You have done a double click')
    cy.get('#rightClickMessage').should('have.text','You have done a right click')
    cy.get('#dynamicClickMessage').should('have.text','You have done a dynamic click')

  })
  it('dynamic props',()=>{
    cy.visit('https://demoqa.com/dynamic-properties')
    cy.get('#enableAfter')
      .should('be.disabled')
    cy.wait(5000)
    cy.get('#enableAfter').click()    

    cy.reload()
    cy.get('#visibleAfter',{force:true, timeout:100})
    .should('not.exist')
    cy.wait(5000)
    cy.get('#visibleAfter')
    .should('be.visible')
  })
  it('test form without helper',()=>{
    const user = {
       firstName: 'firstName',
       lastName : 'lastName',
       email: 'name@domain.com',
       age: 35,
       salary: 100000,
       department: 'QA'
    }
    cy.visit('https://demoqa.com/webtables')
    cy.get('#addNewRecordButton',{}).click()
    cy.get('#firstName-wrapper [type="text"]').type(user.firstName)
    cy.get('#lastName-wrapper [type="text"]').type(user.lastName)
    cy.get('#userEmail-wrapper [type="text"]').type(user.email)
    cy.get('#age-wrapper [type="text"]').type(user.age)
    cy.get('#salary-wrapper [type="text"]').type(user.salary)
    cy.get('#department-wrapper [type="text"]').type(user.department)
    cy.get('#userForm').submit()
  })

  it('test form with helper', () => {
    form.formFields.forEach(fields => {
      helper.fillForm(fields.type, fields.value, fields.id, fields.condition)
    })
  })

  it('test table entries', () => {
    helper.checkTableEntry('rt-', 0, 0, 'First Name')
    helper.checkTableEntry('rt-', 1, 0, 'Cierra')
    helper.checkTableEntry('rt-', 3, 3, 'kierra@example.com')
  })

  it('selectmenu',()=>{
    cy.visit('https://demoqa.com/select-menu')
    cy.get('#cars').select('Volvo')
    cy.get('#oldSelectMenu').select('Blue')
  })
  it('menu with hover', () => {
    // cy.visit('https://demoqa.com/menu')
    // cy.get('.nav-menu-container li').contains('Main Item 2').realHover('mouse')
    // cy.get('.nav-menu-container li li').contains('Sub Item').should('be.visible')
    cy.visit('https://demoqa.com/tool-tips')
    cy.root().find('.tooltip'). should('not.exist')
    cy.get('#toolTipButton').realHover('mouse')
      .wait(1000)
    cy.get('.tooltip'). should('be.visible')
  })
    it('autocomplete',()=>{
      cy.visit('https://demoqa.com/auto-complete')
      cy.get('#autoCompleteMultipleInput').type('b')
        .wait(1000)
        .type('{downArrow}{enter}')
    })
})