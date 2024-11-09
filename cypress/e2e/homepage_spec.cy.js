describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data')
    
    cy.visit('http://localhost:3001/')
    cy.wait('@recipe-data')
  })
  
  it('DISPLAYS all elements on the home page', () => {
    cy.get('.header-section').should('exist')
    .get('.location-icon').should('exist')
    .get('.location-icon').should('be.visible')
    .get('.logo').should('exist')
    .get('.logo').should('be.visible')
    .get('.search-icon').should('exist')
    .get('.search-icon').should('be.visible')
    .get('.search-container').should('exist')
    .get('.filter-bar-container').should('exist')
    .get('.filter-bar-container').should('be.visible')
    .get('.filter-bar-container > :nth-child(1)').should('contain', 'Ingredient')
    .get('.filter-bar-container > :nth-child(2)').should('contain', 'Cooking Style')
    .get('.filter-bar-container > :nth-child(3)').should('contain', 'Servings')
    .get('.filter-bar-container > :nth-child(4)').should('contain', 'Price')
    .get('.recipes-container').should('exist')
    .get('.recipes-container').children().should('have.length', 10)
    .get('.recipes-container > :nth-child(1) > .recipe-link > .recipe-title').should('contain', 'Baked Potato')
    .get('.recipes-container > :nth-child(1) > .recipe-link > .recipe-image').should('exist')
    .get('.recipes-container > :nth-child(1) > .ingredients-box').children().should('have.length', 3)
    .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(1) > .ingredient-button').should('contain', 'Russett Potato')
    .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(1) > .ingredient-price').should('contain', '$1.00')
    .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(2) > .ingredient-button').should('contain', '16oz Bag of Shredded Cheddar Cheese')
    .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(2) > .ingredient-price').should('contain', '$2.00')
    .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(3) > .ingredient-button').should('contain', 'Olive Oil')
    .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(3) > .ingredient-price').should('contain', '$4.00')
    .get('.recipes-container > :nth-child(1) > .recipe-card-footer').should('exist')
    .get('.recipes-container > :nth-child(1) > .recipe-card-footer > .serving-size').should('contain', 'Servings: 1')
    .get('.recipes-container > :nth-child(1) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $7.00')
    .get('.recipes-container > :nth-child(2) > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
    .get('.recipes-container > :nth-child(2) > .recipe-link > .recipe-image').should('exist')
    .get('.recipes-container > :nth-child(2) > .ingredients-box').children().should('have.length', 4)
    .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(1) > .ingredient-button').should('contain', 'Russett Potato')
    .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(1) > .ingredient-price').should('contain', '$1.00')
    .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(2) > .ingredient-button').should('contain', 'Ground Beef')
    .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(2) > .ingredient-price').should('contain', '$6.00')
    .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(3) > .ingredient-button').should('contain', 'Onion')
    .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(3) > .ingredient-price').should('contain', '$1.00')
    .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(4) > .ingredient-button').should('contain', 'Olive Oil')
    .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(4) > .ingredient-price').should('contain', '$4.00')
    .get('.recipes-container > :nth-child(2) > .recipe-card-footer').should('exist')
    .get('.recipes-container > :nth-child(2) > .recipe-card-footer > .serving-size').should('contain', 'Servings: 6')
    .get('.recipes-container > :nth-child(2) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $12.00')


    // ADD TESTS FOR IMAGE SRC


  })

  // HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEELP!
  // Will require intercept/fixture files
  // it('NAVIGATES to the location component upon clicking the location-icon', () => {
  //   cy.visit('http://localhost:3001/')
  //   cy.wait('@location-data')
  //   cy.get('.header-section').should('exist')

  //   cy.get('.header-section')
  //   .find('.location-icon').click();
  //   cy.url().should('eq', 'http://localhost:3001/location');
  // })

  // it.skip('tests interactions on the home page', () => {
  //   cy.get('.search-icon').click()
  //   .get('.search-container > form > .search-input').should('exist')
  //   .get('.search-container > form > .search-input').should('be.visible')
  //   // .get('.filter-bar-container > :nth-child(1)').click()
  // })

//////////////////////////////////////////

  // // PASSING
  // it('DISPLAYS price filter modal upon clicking dropdown', () => {
  //   cy.get('.modal-content').should('not.exist')
  //   .get('.modal-backdrop').should('not.exist')
  //   .get(':nth-child(4) > .dropdown-arrow').click()
  //   .get('.modal-backdrop').should('exist')
  //   .get('.modal-content').should('be.visible')

  //   .get('.modal-content > h2').should('contain', 'Filter by Prices')
    
  //   .get(':nth-child(2)').should('be.visible')
  //   .get(':nth-child(2) > input').should('be.visible')
  //   .get(':nth-child(2)').should('contain', 'Less than $5')

  //   .get(':nth-child(3)').should('be.visible')
  //   .get(':nth-child(3) > input').should('be.visible')
  //   .get(':nth-child(3) > input').should('not.be.checked')
  //   .get(':nth-child(3)').should('contain', 'Less than $10')

  //   .get(':nth-child(4)').should('be.visible')
  //   .get(':nth-child(4) > input').should('be.visible')
  //   .get(':nth-child(4) > input').should('not.be.checked')
  //   .get(':nth-child(4)').should('contain', 'Greater than $10')
  //   .get('.reset').should('be.visible')
  //   .get('.view-results').should('be.visible')
  // })

  // // PASSING
  // it('DISPLAYS serving size filter modal upon clicking dropdown', () => {
  //   cy.get('.modal-content').should('not.exist')
  //   .get('.modal-backdrop').should('not.exist')
  //   .get(':nth-child(3) > .dropdown-arrow').click()

  //   .get('.modal-backdrop').should('exist')
  //   .get('.modal-content').should('be.visible')

  //   .get('.modal-content > h2').should('contain', 'Filter by Servings')
    
  //   .get('.toggle-switch').should('be.visible')
  //   .get('.toggle-option.active').should('contain', 'Single')
  //   .get('.toggle-option').should('contain', 'Multiple')
  //   .get('.toggle-option.active').should('contain', 'Single').click()
  //   .get('.toggle-option').should('contain', 'Single')
  //   .get('.toggle-option.active').should('contain', 'Multiple')
  //   .get('.toggle-option.active').should('contain', 'Multiple').click()
  //   .get('.reset').should('be.visible')
  //   .get('.view-results').should('be.visible')    
  // })

  // // PASSING
  // it('DISPLAYS the contents of the servings filter option', () => {
  //   cy.get('.filter-bar-container > :nth-child(3)').click()
  //   .get('.filter-bar-container > .modal-backdrop').should('be.visible')
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content').should('be.visible')
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content').children().should('have.length', 3)
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').should('be.visible')
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').contains('Filter by Servings')
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch').children().should('have.length', 3)
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(1)').should('class', 'toggle-option active').should('contain', 'Single')
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(2)').should('class', 'toggle-option').should('contain', 'Multiple')
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions').should('be.visible')
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .reset').contains('Reset')
  //   .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').contains('View Results')
  // })
})