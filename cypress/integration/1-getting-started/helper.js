module.exports = {
    fillForm: function (type, value, id, condition, locator) {
        switch (locator) {
            case 'id':
                id = '#' + id;
                break;
            case 'class':
                id = '.' + id;
                break;
            default:
                id = '#' + id;
                break;
        }

        switch (type) {
            case 'text':
                cy.get(id).type(value, condition);
                break;
            case 'button':
                cy.get(id).click(condition);
                break;
            case 'submit':
                cy.get(id).submit();
                break;
            case 'url':
                cy.visit(value);
                break;
        }
    },
    checkTableEntry: function (id, row, column, value, locator) {
        switch (locator) {
            case 'id':
                id = '#' + id;
                break;
            case 'class':
                id = '.' + id;
                break;
            default:
                id = '.' + id;
                break;
        }

        switch (true) {
            case (row === 0 ):
                cy.get(id+'th').eq(column).should('have.text',value)
                break;
            case (row > 0):
                cy.get(id+'tr').eq(row).within(()=>{
                    cy.get(id+'td').eq(column)
                      .should('have.text',value)
                    })
                break;
        }

    }
}

Cypress.Commands.add("getTomorrow", () => {
  var date = new Date();
  // add a day
  date.setDate(date.getDate() + 1);
  cy.wrap(date.toLocaleString('en-US', {
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 4-digit
    month: 'short', // numeric, 2-digit, long, short, narrow
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
  })).as('tomorrow');
  //ad an hour
  var newDate = new Date(date.getTime() + 60 * 60 * 1000)
  cy.wrap((newDate.toLocaleString('en-US', {
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: 'short', // numeric, 2-digit, long, short, narrow
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
  }))).as('tomorrow1h')
})
