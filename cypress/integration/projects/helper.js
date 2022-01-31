module.exports = {
    navBarSearchCode: function (code) {
        //using attribute name as locator as placeholder text is more prone to change. 
        //Though the most preferred way is to have a separate identifier as testId, so we can always rely on it and ensure high level of modularization
        cy.get('.form-control[name="searchText"][type="text"]')
            .clear()
            .type(code + '{enter}')
    },
    verifyTableEntries: function (row, code) {
        let selector = '.rdt_TableBody >#row-' + row
        cy.get(selector)
            .should('exist')
            .children()
            .eq(0)
            .should('have.text',code)
    }   
}