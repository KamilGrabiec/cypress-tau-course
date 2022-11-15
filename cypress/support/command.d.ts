// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * mAKE SURE this is my text
     * @example
     * cy
     *  .mytext
     */
    addBoard()


    /**
     * but what it makes if not declared?
     */
    addTable()
  }
}