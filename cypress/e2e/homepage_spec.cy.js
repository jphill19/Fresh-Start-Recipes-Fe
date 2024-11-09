describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data')
    cy.visit('http://localhost:3001/')
    cy.wait('@recipe-data')
  })

  it.skip('DISPLAYS all elements on the home page', () => {
    cy.get('.header-section').should('exist')
      .get('.location-icon').should('exist')
      .get('.location-icon').should('be.visible')
      .get('.logo').should('exist')
      .get('.logo').should('be.visible')
      .get('.search-icon').should('exist')
      .get('.search-icon').should('be.visible')
      .get('.search-container').should('exist')
      .get('.search-container').should('not.be', 'visible')
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
  })

  it.skip('tests interactions in the header and search sections', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_recipe=hamburger+potato+soup', {
      statusCode: 200,
      fixture: 'search-result'
    })
    cy.get('.search-icon').click()
      .get('.search-container > form > .search-input').should('exist')
      .get('.search-container > form > .search-input').should('be.visible')
      .get('.search-container > form > .search-input').type('hamburger potato soup{enter}')
      .get('.results-count').contains('1 results')
      .get('.recipe-card-wrap > .recipe-link > .recipe-title').contains('Hamburger Potato Soup')
      .get('.recipe-card-wrap > .ingredients-box > :nth-child(2)').contains('Ground Beef')
      .get('.recipe-card-wrap > .ingredients-box > :nth-child(2) > .ingredient-price').contains('$6.00')
      .get('.recipe-card-wrap > .recipe-card-footer > .serving-size').contains('Servings: 6')
      .get('.recipe-card-wrap > .recipe-card-footer > .total-cost').contains('$12.00')
  })

  it.skip('tests opening and the contents of the ingredient filter option', () => {
    cy.get('.filter-bar-container > :nth-child(1)').click()
      .get('.filter-bar-container > .modal-backdrop').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').contains('Filter by an ingredient')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > p').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > p').contains('Input a name of an ingredient then select from checkbox')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .search-input').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .reset').contains('Reset')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').contains('View Results')
  })

  it.skip('tests interactions with the ingredient filter option', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/ingredients?for_ingredient=ground%20beef', {
      statusCode: 200,
      fixture: 'ingredient-search'
    })
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef', {
      statusCode: 200,
      fixture: 'search-result'
    })
    cy.get('.filter-bar-container > :nth-child(1)').click()
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .search-input').type('ground beef')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > div > .filter-checkbox').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > div > .filter-checkbox').contains('Ground Beef')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > div > .filter-checkbox > #checkbox-1').click()
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').click()
      .get('.filter-bar-container > :nth-child(1)').should('class', 'highlighted')
      .get('.results-count').contains('1 results')
      .get('.recipe-card-wrap > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
      .get('.recipe-card-wrap > .ingredients-box > :nth-child(2)').should('contain', 'Ground Beef')
      .get('.recipe-card-wrap > .ingredients-box > :nth-child(2) > .ingredient-price').should('contain', '$6.00')
      .get('.recipe-card-wrap > .recipe-card-footer > .serving-size').should('contain', 'Servings: 6')
      .get('.recipe-card-wrap > .recipe-card-footer > .total-cost').should('contain', '$12.00')
      .get('.filter-results-container > .reset-button').click()
      .get('.recipes-container > :nth-child(1) > .recipe-link > .recipe-title').should('contain', 'Baked Potato')
      .get('.recipes-container > :nth-child(2) > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
  })

  it.skip('tests opening and the contents of the cooking style filter option', () => {
    cy.get('.filter-bar-container > :nth-child(2)').click()
    .get('.filter-bar-container > .modal-backdrop').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content').children().should('have.length', 6)
    .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').contains('Filter by a preferred cooking style')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(2)').should('contain', 'None required')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(3)').should('contain', 'Microwave')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(4)').should('contain', 'Stove')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(5)').should('contain', 'Oven')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .reset').contains('Reset')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').contains('View Results')
  })

  it.skip('tests interactions with the cooking style filter option', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=2', {
      statusCode: 200,
      fixture: 'search-result'
    })
    cy.get('.filter-bar-container > :nth-child(2)').click()
      .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(4)').click()
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').click()
      .get('.filter-bar-container > :nth-child(2)').should('class', 'highlighted')
      .get('.results-count').should('contain', '1 results')
      .get('.recipe-card-wrap > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
      .get('.recipe-card-wrap > .ingredients-box > :nth-child(2)').should('contain', 'Ground Beef')
      .get('.recipe-card-wrap > .ingredients-box > :nth-child(2) > .ingredient-price').should('contain', '$6.00')
      .get('.recipe-card-wrap > .recipe-card-footer > .serving-size').should('contain', 'Servings: 6')
      .get('.recipe-card-wrap > .recipe-card-footer > .total-cost').should('contain', '$12.00')
      .get('.filter-results-container > .reset-button').click()
      .get('.recipes-container > :nth-child(1) > .recipe-link > .recipe-title').should('contain', 'Baked Potato')
      .get('.recipes-container > :nth-child(2) > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
  })

  it.skip('NAVIGATES to the location component upon clicking the location-icon', () => {
    cy.intercept('GET', 'https://api.mapbox.com/**', {
      statusCode: 200,
      body: {},
    }).as('mapboxApi');

    cy.intercept('https://maps.googleapis.com/**', {
      statusCode: 200,
      body: {},
    }).as('googleMapsApi');

    cy.visit('http://localhost:3001/')
    cy.get('.header-section').should('exist')

    cy.get('.header-section').find('.location-icon').click();
    cy.url().should('eq', 'http://localhost:3001/location');
  })

  it.skip('tests interactions on the home page', () => {
    cy.get('.search-icon').click()
      .get('.search-container > form > .search-input').should('exist')
      .get('.search-container > form > .search-input').should('be.visible')
  })

  it.skip('DISPLAYS price filter modal upon clicking dropdown', () => {
    cy.get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get(':nth-child(4) > .dropdown-arrow').click()
      .get('.modal-backdrop').should('exist')
      .get('.modal-content').should('be.visible')

      .get('.modal-content > h2').should('contain', 'Filter by Prices')

      .get(':nth-child(2)').should('be.visible')
      .get(':nth-child(2) > input').should('be.visible')
      .get(':nth-child(2)').should('contain', 'Less than $5')

      .get(':nth-child(3)').should('be.visible')
      .get(':nth-child(3) > input').should('be.visible')
      .get(':nth-child(3) > input').should('not.be.checked')
      .get(':nth-child(3)').should('contain', 'Less than $10')

      .get(':nth-child(4)').should('be.visible')
      .get(':nth-child(4) > input').should('be.visible')
      .get(':nth-child(4) > input').should('not.be.checked')
      .get(':nth-child(4)').should('contain', 'Greater than $10')
      .get('.reset').should('be.visible')
      .get('.view-results').should('be.visible')
  })

  it.skip('DISPLAYS serving size filter modal upon clicking dropdown', () => {
    cy.get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get(':nth-child(3) > .dropdown-arrow').click()

      .get('.modal-backdrop').should('exist')
      .get('.modal-content').should('be.visible')

      .get('.modal-content > h2').should('contain', 'Filter by Servings')

      .get('.toggle-switch').should('be.visible')
      .get('.toggle-option.active').should('contain', 'Single')
      .get('.toggle-option').should('contain', 'Multiple')
      .get('.toggle-option.active').should('contain', 'Single').click()
      .get('.toggle-option').should('contain', 'Single')
      .get('.toggle-option.active').should('contain', 'Multiple')
      .get('.toggle-option.active').should('contain', 'Multiple').click()
      .get('.reset').should('be.visible')
      .get('.view-results').should('be.visible')
  })

  it.skip('DISPLAYS the contents of the servings filter option', () => {
    cy.get('.filter-bar-container > :nth-child(3)').click()
      .get('.filter-bar-container > .modal-backdrop').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content').children().should('have.length', 3)
      .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').contains('Filter by Servings')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch').children().should('have.length', 3)
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(1)').should('class', 'toggle-option active').should('contain', 'Single')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(2)').should('class', 'toggle-option').should('contain', 'Multiple')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions').should('be.visible')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .reset').contains('Reset')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').contains('View Results')
  })

  it.skip('tests the calculation functionality for the recipe cards', () => {
    cy.get('.recipes-container > :nth-child(1)').should('be.visible')
      .get('.recipes-container > :nth-child(1) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $7.00')
      .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(1) > .ingredient-button').click()
      .get('.recipes-container > :nth-child(1) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $6.00')
      .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(2) > .ingredient-button').click()
      .get('.recipes-container > :nth-child(1) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $4.00')
      .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(3) > .ingredient-button').click()
      .get('.recipes-container > :nth-child(1) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $0.00')

      .get('.recipes-container > :nth-child(2) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $7.00')
      .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(2) > .ingredient-button').click()
      .get('.recipes-container > :nth-child(2) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $1.00')
      .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(3) > .ingredient-button').click()
      .get('.recipes-container > :nth-child(2) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $0.00')
  })

  it.skip('tests when the user searches for a recipe that doesn\'t exist', () => {
    cy.get('.header-section').should('exist')
      .get('.header-section > .nav-bar > .right-section > .search-button').click()
      .get('.header-section > .search-container > form > .search-input').type('This is not a recipe{enter}')
      .get('.filter-results-container > .results-count').should('contain', '0 results')
      .get('.filter-results-container > .reset-button').should('contain', 'Reset')
      .get('.recipes-container > p').should('contain', 'No recipes available.')
  })

  it.skip('tests when no data is delivered to the home page', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statuCode: 200,
      fixture: 'no-data'
    })
    cy.get('.header-section').should('be.visible')
  })
})