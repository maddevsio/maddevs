describe('NambaFood case page', () => {
  const img = 'namba-food.png'

  it('Meta tags has a correct image URL', () => {
    cy.visit('/case-studies/namba-food/')

    cy.get('head meta[property="og:image"]').should('have.attr', 'content', `https://maddevs.io/${img}`)
    cy.get('head meta[property="twitter:image:src"]').should('have.attr', 'content', `https://maddevs.io/${img}`)
  })

  it('Preview image exists with given url', () => {
    cy.request(`/${img}`).should(response => {
      expect(response.status).to.eq(200)
    })
  })
})
