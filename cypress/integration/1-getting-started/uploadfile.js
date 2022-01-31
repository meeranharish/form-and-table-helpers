/// <reference types="cypress" />

describe('map', () => {
    // before(function () {
    //     cy.visit('https://the-internet.herokuapp.com/upload')
    // })

    // it('File Upload using cypress-file-upload npm package', () => {
    //     const filepath = '/cypress sample test.pdf'
    //     cy.get('input[type="file"]').attachFile(filepath)
    //     cy.get('#file-submit').click()
    //     cy.get('#uploaded-files').contains('cypress sample test.pdf')
    // })
    it('check map', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://app.mapmycustomers.me/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0YWciOiI4Y2U5ZjJiZi0wNzg4LTQyMTctYTQyNS01NzYyYWVjNTU0YTUiLCJhdCI6InUiLCJpYWNpZCI6MjI4LCJjbGllbnRUeXBlIjoiV2ViIiwib3JnIjoyMjA1OCwidXNlcm5hbWUiOiJvZmZpY2VAdGVzdHRoZXRlc3QuY29tIiwiaWF0IjoxNjQwNjUyMzU0LCJleHAiOjE2NDExNzA3NTQsImF1ZCI6Im1tYy13ZWIyLWNsaWVudC1pZCIsImlzcyI6Im1tYy1zZXJ2ZXIiLCJzdWIiOiIxNzA4MjAzIn0.BHYHeeDEtNh6yG4H4LBJQckcQuam3FfYkKqRL8oN3X4#/deals/map')
        cy.wait(10000)
        cy.get('[src="./images/pins-large/marker_orange.png"]').should('exist')
            // cy.get('#file-submit').click()
            // cy.get('#uploaded-files').contains('cypress sample test.pdf')
    })
    
})