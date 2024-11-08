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
      .get('.filter-bar-container').should('exist')
      .get('.filter-bar-container').should('be.visible')
      .get('.filter-bar-container > :nth-child(1)').should('contain', 'Ingredient')
      .get('.filter-bar-container > :nth-child(2)').should('contain', 'Cooking Style')
      .get('.filter-bar-container > :nth-child(3)').should('contain', 'Servings')
      .get('.filter-bar-container > :nth-child(4)').should('contain', 'Price')
      .get('.recipes-container').should('exist')
      .get('.recipes-container').children().should('have.length', 2)
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

  // it.skip('tests opening and the contents of the servings filter option', () => {
  //   cy.get('.filter-bar-container > :nth-child(3)').click()
  //     .get('.filter-bar-container > .modal-backdrop').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content').children().should('have.length', 3)
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').contains('Filter by Servings')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch').children().should('have.length', 3)
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(1)').should('class', 'toggle-option active').should('contain', 'Single')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(2)').should('class', 'toggle-option').should('contain', 'Multiple')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .reset').contains('Reset')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').contains('View Results')
  // })

  // it.skip('tests interactions with the servings filter option', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Multiple', {
  //     statusCode: 200,
  //     fixture: 'search-result'
  //   })
  //   cy.get('.filter-bar-container > :nth-child(3)').click()
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(1)').click()
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(2)').should('class', 'toggle-option active').should('contain', 'Multiple')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').click()
  //     .get('.filter-bar-container > :nth-child(3)').should('class', 'highlighted')
  //     .get('.results-count').should('contain', '1 results')
  //     .get('.recipe-card-wrap > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
  //     .get('.recipe-card-wrap > .ingredients-box > :nth-child(2)').should('contain', 'Ground Beef')
  //     .get('.recipe-card-wrap > .ingredients-box > :nth-child(2) > .ingredient-price').should('contain', '$6.00')
  //     .get('.recipe-card-wrap > .recipe-card-footer > .serving-size').should('contain', 'Servings: 6')
  //     .get('.recipe-card-wrap > .recipe-card-footer > .total-cost').should('contain', '$12.00')
  //     .get('.filter-results-container > .reset-button').click()
  //     .get('.recipes-container > :nth-child(1) > .recipe-link > .recipe-title').should('contain', 'Baked Potato')
  //     .get('.recipes-container > :nth-child(2) > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
  // })

  // it.skip('tests opening and the contents of the price filter option', () => {
  //   cy.get('.filter-bar-container > :nth-child(4)').click()
  //     .get('.filter-bar-container > .modal-backdrop').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content').children().should('have.length', 5)
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').contains('Filter by Prices')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(2) > [type=checkbox]').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(2) > [for=checkbox-0]').should('be.visible').should('contain', 'Less than $5') // Change to less than $5 after correction.
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(3) > [type=checkbox]').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(3) > [for=checkbox-2]').should('be.visible').should('contain', 'Less than $10')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(4) > [type=checkbox]').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(4) > [for=checkbox-3]').should('be.visible').should('contain', 'Greater than $10')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions').should('be.visible')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .reset').contains('Reset')
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').contains('View Results')
  // })

  // it.skip('tests interactions with the price filter option', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=3', {
  //     statusCode: 200,
  //     fixture: 'search-result'
  //   })
  //   cy.get('.filter-bar-container > :nth-child(4)').click()
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(4) > [type=checkbox]').click()
  //     .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').click()
  //     .get('.filter-bar-container > :nth-child(4)').should('class', 'highlighted')
  //     .get('.results-count').should('contain', '1 results')
  //     .get('.recipe-card-wrap > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
  //     .get('.recipe-card-wrap > .ingredients-box > :nth-child(2)').should('contain', 'Ground Beef')
  //     .get('.recipe-card-wrap > .ingredients-box > :nth-child(2) > .ingredient-price').should('contain', '$6.00')
  //     .get('.recipe-card-wrap > .recipe-card-footer > .serving-size').should('contain', 'Servings: 6')
  //     .get('.recipe-card-wrap > .recipe-card-footer > .total-cost').should('contain', '$12.00')
  //     .get('.filter-results-container > .reset-button').click()
  //     .get('.recipes-container > :nth-child(1) > .recipe-link > .recipe-title').should('contain', 'Baked Potato')
  //     .get('.recipes-container > :nth-child(2) > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
  // })

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
})