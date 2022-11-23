/// <reference types="cypress" />

// beforeEach(() => {
//   cy.request('POST', '/api/reset')
// })

Cypress.Commands.add('take', {prevSubject: 'optional'}, (subject, input) =>{

  if (subject){
    cy
      .wrap(subject)
      .find(`[data-cy=${input}]`)
  }else {
  cy
    .get(`[data-cy=${input}]`)
  }

})

it('Custom commands', () => {

  cy
    .visit('/board/69411047945');

  // cy
  //   .addBoard('board name')

  cy
    .take('list')
    .eq(0)
    .take('task')


  cy.api(

  )
  cy.a
});