describe('Blog page', () => {
  const img = 'blog.png'

  it('Meta tags has a correct image URL', () => {
    cy.visit('/blog/')

    cy.get('head meta[property="og:image"]').should('have.attr', 'content', `https://maddevs.io/${img}`)
    cy.get('head meta[property="twitter:image:src"]').should('have.attr', 'content', `https://maddevs.io/${img}`)
  })

  it('Preview image exists with given url', () => {
    cy.request(`/${img}`).should(response => {
      expect(response.status).to.eq(200)
    })
  })
})
