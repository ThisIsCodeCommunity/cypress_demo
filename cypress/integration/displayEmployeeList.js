/// <reference types="cypress" />

describe('Display list of employees', () => {
  beforeEach(() => {
    cy.server()
    cy.route({url: 'https://reqres.in/api/users?per_page=5', method: 'GET', response: 'fixture:employeesMock.json'})
  });

  it('when a user visits the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('section[id="header"]').should('contain', 'Employee list')
    
  });

  it('lists 5 employee data in ul -> li ', () => {
    cy.visit('http://localhost:3000')
    cy.get('section[id="main"]').within(() => {
      cy.get('div[role="listitem"]').should('have.length', 5)
    })
    
  });
});
