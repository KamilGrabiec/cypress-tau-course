/// <reference types="cypress" />

it('Sending requests', () => {

  cy
    .visit('/')

  // cy
  //   .request({
  //     method: 'POST',
  //     url: '/api/boards',
  //     body: {
  //       name: "board created by .request() command"
  //     }
  //   })

  cy
    .request({
      method: 'PATCH',
      url: '/api/boards/11996225305',
      body: {
        "name": "board created by .request() command edit2",
      }
    })

  cy
    .request({
      method: 'DELETE',
      url: '/api/boards/11996225305',
    })

});