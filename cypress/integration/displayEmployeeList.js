describe('Display list of employees', () => {
  it('when a user visits the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('section[id="header"]').should('contain', 'Employee list')
    
  });

  it('lists 5 employee data in ul -> li ', () => {
    cy.visit('http://localhost:3000')
    cy.get('section[id="main"]').within(() => {
      cy.get('li').should('have.length', 5)
    })
    
  });
});