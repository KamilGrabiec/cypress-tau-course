/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/35179722010");
});

it("Chaining commands", () => {
  cy.get('[data-cy="task"]')
  .eq(1)
  .should("contain.text", "milk");

  cy
    .get('[data-cy=list]')
    .eq(1)
    .contains('milk')
    .should('contain.text', 'milk')
});
