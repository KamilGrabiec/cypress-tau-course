/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('');

});

it('Changing the DOM by trigger', () => {

  cy
    .get('[data-cy="board-item"]')
    .trigger("mouseover")

  cy
    .get('[data-cy="star"]')
    .should('be.visible')


  cy
    .get('[data-cy="board-item"]')
    .trigger("mouseout")

  cy
    .get('[data-cy="star"]')
    .should('not.be.visible')

})

it('Changing the Dom by invoke', () =>{

  cy
    .get('[data-id="board_59195351742"]')
    .click()

  cy
    .get('[data-cy="task"]')
    .eq(0)
    .invoke('addClass', 'overDue')

})

it('Accessing the Dom with force', () => {
  cy
    .get('[data-cy="star"]')
    .click({force:true})
})