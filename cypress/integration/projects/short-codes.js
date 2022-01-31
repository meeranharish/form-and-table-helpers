const helper = require("./helper")

describe('Navbar\'s "quick search" finds existing codes', () => {
    let code = 60000
    before(() => {
        cy.visit('https://dev.short-codes.com/')
    })
    //I am using "it" for every step so the rtest report is more readable. Alternatively, I can write the overall sceanrio in "descrive" and eact test in "it" so code is more readable
    it('Enter a valid code in the navbar search', () => {
        helper.navBarSearchCode(code)
        cy.intercept('GET', '**/codes/*').as('getReq')
        cy.wait('@getReq')
        let selector = '.rdt_TableBody >#row-' + 0
    })
    it('Code shouold be present in the resultant table rows', () => {
        helper.verifyTableEntries(0, 60000)
    })
})

describe('Navbar\'s "quick search" displays error if code is not found', () => {
    let code = 59999
    it('Enter an invalid code in the navbar search', () => {
        helper.navBarSearchCode(code)
    })
    it('Error text should be displayed below the search', () => {
        cy.get('.search-error')
            .should('contain.text', 'The specified code could not be found.')
            .should('have.class', 'text-danger')
    })
})

//I assume this requirement is to check that the resultant table displays 60000 as the first code.
//if the requirement is to check codes less than 60000 as invalis, it is covered in previous case :)
describe('Codes page starts at code 60000', () => {
    it('Choose code ranges of 60000-64999 using predefined button', () => {
        cy.get('[type="button"]')
            .contains('60000-64999')
            .click()
    })
    it('Check if the first code displayed in resultant table is 60000', () => {
        helper.verifyTableEntries(0, 60000)
    })
    it('check if the other codes are also displayed', () => {
        helper.verifyTableEntries(1, 60001)
    })
})

describe('Check if pagination works', () => {
    it('Right button should take to next page and each page should display 10 items, 11th items is displayed in page 2', () => {
        helper.verifyTableEntries(9, 60009)
        cy.get('.rdt_TableBody')
            .children()
            .eq(10)
            .should('not.exist')
        cy.get('.page-link')
            .contains('Next')
            .click({ force: true })
        helper.verifyTableEntries(0, 60010)
    })
    it('Left button should take to previous page', () => {
        cy.get('.page-link')
            .contains('Previous')
            .click({ force: true })
        helper.verifyTableEntries(0, 60000)
    })
    it('Last button should take to last page', () => {
        cy.get('.page-link')
            .contains('Last')
            .click({ force: true })
        helper.verifyTableEntries(9, 64999)
    })
    it('First button should take to First page', () => {
        cy.get('.page-link')
            .contains('1')
            .click({ force: true })
        helper.verifyTableEntries(0, 60000)
    })
})

describe('can use the "jump to code" feature', () => {
    let code = 62111
    it('Enter a code in "jump to code" text box', () => {
        cy.get('[placeholder="Jump to code"]')
            .type(code + '{enter}')
    })
    it('Only that Code shouold be present in the resultant table rows', () => {
        helper.verifyTableEntries(0, code)
        cy.get('.rdt_TableBody')
            .children()
            .eq(2)
            .should('not.exist')
    })
})
