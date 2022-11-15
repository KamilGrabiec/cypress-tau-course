/// <reference types="cypress" />

it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    },{
      body: [
          {
            "name": "new create boards",
            "user": 0,
            "id": 86399967781,
            "starred": false,
            "created": "2022-10-19"
          },
          {
            "name": "sadasd",
            "user": 0,
            "id": 5856761249,
            "starred": false,
            "created": "2022-10-19"
          }]
    }).as('boardList')

  cy
    .visit('/')

});