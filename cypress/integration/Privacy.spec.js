describe('Privacy page', () => {
  const img = 'Open-Graph.png'

  it('Meta tags has a correct image URL', () => {
    cy.visit('/privacy/')

    cy.get('head meta[property="og:image"]').should('have.attr', 'content', `https://maddevs.io/${img}`)
    cy.get('head meta[property="twitter:image:src"]').should('have.attr', 'content', `https://maddevs.io/${img}`)
  })

  it('Preview image exists with given url', () => {
    cy.request(`/${img}`).should(response => {
      expect(response.status).to.eq(200)
    })
  })
})
