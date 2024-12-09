describe('Filtering Functionality', () => {
  it('returns an empty array when the BE has no data', () => {
    cy.intercept(
      'GET',
      'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?',
      {
        statusCode: 200,
        fixture: 'no-data'
      }
    ).as('no-data')

    cy.visit('http://localhost:3001/')
    cy.wait('@no-data')

    cy.get('.recipes-container').should('contain', 'No recipes available.')
  })
})
