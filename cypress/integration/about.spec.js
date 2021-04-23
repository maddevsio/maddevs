describe('About page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should anchor links in the header works correctly', () => {
    cy.get('.navigation-item').should('have.length', 4)
    cy.get('.navigation-item').first().click({ force: true })
    cy.url().should('include', '/services/#remote-tech-staff')
  })
})
