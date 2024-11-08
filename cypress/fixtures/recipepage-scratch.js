it.skip('tests opening and the contents of the servings filter option', () => {
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

  it.skip('tests interactions with the servings filter option', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Multiple', {
      statusCode: 200,
      fixture: 'search-result'
    })
    cy.get('.filter-bar-container > :nth-child(3)').click()
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(1)').click()
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .toggle-switch > :nth-child(2)').should('class', 'toggle-option active').should('contain', 'Multiple')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').click()
    .get('.filter-bar-container > :nth-child(3)').should('class', 'highlighted')
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

    it.skip('tests opening and the contents of the price filter option', () => {
    cy.get('.filter-bar-container > :nth-child(4)').click()
    .get('.filter-bar-container > .modal-backdrop').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content').children().should('have.length', 5)
    .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > h2').contains('Filter by Prices')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(2) > [type=checkbox]').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(2) > [for=checkbox-1]').should('be.visible').should('contain', 'Greater than $5') // Change to less than $5 after correction.
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(3) > [type=checkbox]').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(3) > [for=checkbox-2]').should('be.visible').should('contain', 'Less than $10')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(4) > [type=checkbox]').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(4) > [for=checkbox-3]').should('be.visible').should('contain', 'Greater than $10')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions').should('be.visible')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .reset').contains('Reset')
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').contains('View Results')
  })

  it.skip('tests interactions with the price filter option', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=3', {
      statusCode: 200,
      fixture: 'search-result'
    })
    cy.get('.filter-bar-container > :nth-child(4)').click()
    .get('.filter-bar-container > .modal-backdrop > .modal-content > :nth-child(4) > [type=checkbox]').click()
    .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').click()
    .get('.filter-bar-container > :nth-child(4)').should('class', 'highlighted')
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