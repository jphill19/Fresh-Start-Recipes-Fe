describe('Recipe Page', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
    //   statusCode: 200,
    //   fixture: 'recipe-data'
    // }).as('recipe-data')
    cy.intercept('GET', 'http://localhost:3001/api/v1/recipe/1', {
      statusCode: 200,
      fixture: 'recipe-page-data'
    }).as('page-data')
    // cy.visit('http://localhost:3001')
    cy.visit('http://localhost:3001/recipe/1')
    cy.wait('@page-data')
  })

  it('Checks the page content on load', () => {
    cy.get('.header-section').should('be.visible')
    .get('.location-icon').should('be.visible')
    .get('.logo').should('be.visible')
    .get('.home-icon').should('be.visible')
    .get('.recipe-page-container').should('be.visible').children().should('have.length', 5)
    .get('.recipe-page-container > .recipe-image-container > img').should('be.visible')
    .get('.recipe-page-container > .recipe-page-title').should('contain', 'Hamburger Potato Soup')
    .get('.recipe-page-container > .ingredients-container').children().should('have.length', 6)
    .get('.recipe-page-container > .ingredients-container > :nth-child(1)').should('contain', 'Ingredient List')
    .get('.recipe-page-container > .ingredients-container > :nth-child(2) > .ingredient-button > p').should('contain', 'Russett Potato', '3 lbs', '$1.00')
    .get('.recipe-page-container > .ingredients-container > :nth-child(3) > .ingredient-button > p').should('contain', 'Ground Beef', '2 lbs', '$6.00')
    .get('.recipe-page-container > .ingredients-container > :nth-child(4) > .ingredient-button > p').should('contain', 'Onion', '1 Medium Sized', '$1.00')
    .get('.recipe-page-container > .ingredients-container > :nth-child(5) > .ingredient-button > p').should('contain', 'Olive Oil', '2 Tablespoons', '$4.00')
    .get('.recipe-page-container > .ingredients-container > .total-price').should('contain', 'Total Price: $12.00')
    .get('.recipe-page-container > .cookwares-container').should('contain', 'Cookware')
    .get('.recipe-page-container > .cooking-style').should('contain', 'Cooking Style: 3')
  })
})

// http://localhost:3001/