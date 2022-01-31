/// <reference types="cypress" />
const helper = require("./helper")
let form = require('../../fixtures/form')
import "cypress-real-events/support";

describe('signup and login in demoqa', () => {

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

})