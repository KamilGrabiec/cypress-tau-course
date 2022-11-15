/// <reference types="cypress" />

it('Intercept requests', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boardList')

  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }).as('createBoard')

  cy
    .visit('/')

 

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('new create boards{enter}')



  cy
    .wait('@createBoard')
    .then( (board) => {
      expect(board.response.statusCode).to.eq(201)
      expect(board.request.body.name).to.eq('new create boards')
    })

  cy
    .visit('/')

  cy
    .wait('@boardList')
    .its('response.statusCode')
    .should('eq', 200) 

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 1)

});