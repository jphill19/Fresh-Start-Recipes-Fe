describe('Filtering Functionality', () => {
  beforeEach (() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data');

    cy.visit('http://localhost:3001/');
    cy.wait('@recipe-data');
  });

  // Please remove "" from the "it" block to run the test when cypress is active.
  
  it('FILTERS recipes Less than $5', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=0', {
      statusCode: 200,
      fixture: 'filter-less-than-5'
    });
    
    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get('.modal-content').should('be.visible')
      .get('.modal-backdrop').should('be.visible')
      .get(':nth-child(2) > input').should('not.be.checked').click()
      .get('.view-results').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 2)
      .url().should('eq', 'http://localhost:3001/?by_price=0')
  });

  it('FILTERS recipes Less than $10', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=2', {
      statusCode: 200,
      fixture: 'filter-less-than-10'
    });

    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get('.modal-content').should('be.visible')
      .get('.modal-backdrop').should('be.visible')
      .get(':nth-child(3) > input').should('not.be.checked').click()
      .get('.view-results').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 5)
      .url().should('eq', 'http://localhost:3001/?by_price=2');
  });

  it('FILTERS recipes Greater than $10', () => {      
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=3', {
      statusCode: 200,
      fixture: 'filter-greater-than-10'
    });

    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get('.modal-content').should('be.visible')
      .get('.modal-backdrop').should('be.visible')
      .get(':nth-child(4) > input').should('not.be.checked').click()
      .get('.view-results').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 5)
      .url().should('eq', 'http://localhost:3001/?by_price=3');
  });

  it('RESETS the selection & closes modal for Less than $5', () => {
    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('RESETS the selection & closes modal for Less than $10', () => {
    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(3) > input').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('RESETS the selection & closes modal for Greater than $10', () => {
    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(4) > input').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('CLEARS the Price Filter - Less Than $5', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=0', {
      statusCode: 200,
      fixture: 'filter-less-than-5'
    });

    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_price=0')
      .get(':nth-child(4) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('CLEARS the Price Filter - Less Than $10', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=2', {
      statusCode: 200,
      fixture: 'filter-less-than-5'
    });

    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(3) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_price=2')
      .get(':nth-child(4) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('CLEARS the Price Filter - Greater Than $10', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=3', {
      statusCode: 200,
      fixture: 'filter-less-than-5'
    });

    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(4) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_price=3')
      .get(':nth-child(4) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('FILTERS recipes - MULTIPLE serving size', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Multiple', {
      statusCode: 200,
      fixture: 'filter-serving-multiple'
    });

    cy.get(':nth-child(3) > .dropdown-arrow').click()
      .get('.toggle-option.active').should('contain', 'Single').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_serving=Multiple')
      .get('.recipes-container').children().should('have.length', 8);
  });

  it('FILTERS recipes - SINGLE serving size', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Single', {
      statusCode: 200,
      fixture: 'filter-serving-single'
    });
    
    cy.get(':nth-child(3) > .dropdown-arrow').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_serving=Single')
      .get('.recipes-container').children().should('have.length', 2);
  });

  it('RESETS the selection & closes modal - SINGLE', () => {
    cy.get(':nth-child(3) > .dropdown-arrow').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('RESETS the selection & closes modal - MULTIPLE', () => {
    cy.get(':nth-child(3) > .dropdown-arrow').click()
      .get('.toggle-option.active').should('contain', 'Single').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('CLEARS the Serving Size Filter - SINGLE', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Single', {
      statusCode: 200,
      fixture: 'filter-serving-single'
    });

    cy.get(':nth-child(3) > .dropdown-arrow').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_serving=Single')
      .get(':nth-child(3) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('CLEARS the Serving Size Filter - MULTIPLE', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Multiple', {
      statusCode: 200,
      fixture: 'filter-serving-multiple'
    });

    cy.get(':nth-child(3) > .dropdown-arrow').click()
      .get('.toggle-option.active').should('contain', 'Single').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_serving=Multiple')
      .get(':nth-child(3) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('FILTERS recipes by cooking style - NONE REQUIRED', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=0', {
      statusCode: 200,
      fixture: 'filter-cooking-style-none'
    });

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get('.modal-content').should('be.visible')
      .get('.modal-backdrop').should('be.visible')
      .get(':nth-child(2) > input').should('not.be.checked').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 3)
      .url().should('eq', 'http://localhost:3001/?by_style=0');
  })

  it('FILTERS recipes by cooking style - MICROWAVE', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=1', {
      statusCode: 200,
      fixture: 'filter-cooking-style-microwave'
    });

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get('.modal-content').should('be.visible')
      .get('.modal-backdrop').should('be.visible')
      .get(':nth-child(3) > input').should('not.be.checked').click()
      .get(':nth-child(3) > input').click()
      .get('.view-results').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 1)
      .url().should('eq', 'http://localhost:3001/?by_style=1');
  })

  it('FILTERS recipes by cooking style - STOVETOP', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=2', {
      statusCode: 200,
      fixture: 'filter-cooking-style-stove'
    });

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get('.modal-content').should('be.visible')
      .get('.modal-backdrop').should('be.visible')
      .get(':nth-child(4) > input').should('not.be.checked').click()
      .get(':nth-child(4) > input').click()
      .get('.view-results').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 3)
      .url().should('eq', 'http://localhost:3001/?by_style=2');
  })

  it('FILTERS recipes by cooking style - OVEN', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=3', {
      statusCode: 200,
      fixture: 'filter-cooking-style-oven'
    });

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get('.modal-content').should('be.visible')
      .get('.modal-backdrop').should('be.visible')
      .get(':nth-child(5) > input').should('not.be.checked').click()
      .get(':nth-child(5) > input').click()
      .get('.view-results').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 2)
      .url().should('eq', 'http://localhost:3001/?by_style=3');
  })

  it('CLEARS cooking style selection - NONE REQUIRED', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=0', {
      statusCode: 200,
      fixture: 'filter-cooking-style-none'
    });
    
    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_style=0')
      .get(':nth-child(2) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('CLEARS cooking style selection - MICROWAVE', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=1', {
      statusCode: 200,
      fixture: 'filter-cooking-style-microwave'
    });

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(3) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_style=1')
      .get(':nth-child(2) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('CLEARS cooking style selection - STOVETOP', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=2', {
      statusCode: 200,
      fixture: 'filter-cooking-style-stove'
    });

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(4) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_style=2')
      .get(':nth-child(2) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('CLEARS cooking style selection - OVEN', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=3', {
      statusCode: 200,
      fixture: 'filter-cooking-style-oven'
    });

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(5) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_style=3')
      .get(':nth-child(2) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('RESETS the cooking style selection & closes modal - NONE REQUIRED', () => {
    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('RESETS the cooking style selection & closes modal - MICROWAVE', () => {
    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(3) > input').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('RESETS the cooking style selection & closes modal - STOVETOP', () => {
    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(4) > input').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('RESETS the cooking style selection & closes modal - OVEN', () => {
    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(5) > input').click()
      .get('.reset').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .get('.recipes-container').children().should('have.length', 10);
  });

  it('tests interactions with the ingredient filter option', () => {
  cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/ingredients?for_ingredient=ground%20beef', {
    statusCode: 200,
    fixture: 'ingredient-search'
  });

  cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef', {
    statusCode: 200,
    fixture: 'search-result'
  });

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

  it('tests all filters at once', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/ingredients?for_ingredient=ground%20beef', {
      statusCode: 200,
      fixture: 'ingredient-search'
    });

    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef', {
      statusCode: 200,
      fixture: 'search-result'
    });

    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef&by_style=0', {
      statusCode: 200,
      fixture: 'filter-all-filters-applied'
    });

    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef&by_style=0&by_serving=Multiple', {
      statusCode: 200,
      fixture: 'filter-all-filters-applied'
    });

    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef&by_style=0&by_serving=Multiple&by_price=0', {
      statusCode: 200,
      fixture: 'filter-all-filters-applied'
    });

    cy.get('.filter-bar-container > :nth-child(1)').click()
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .search-input').type('ground beef')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > div > .filter-checkbox').contains('Ground Beef')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > div > .filter-checkbox > #checkbox-1').click()
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_ingredient=Ground+Beef')

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_ingredient=Ground+Beef&by_style=0')

    cy.get(':nth-child(3) > .dropdown-arrow').click()
      .get('.toggle-option.active').should('contain', 'Single').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_ingredient=Ground+Beef&by_style=0&by_serving=Multiple')
      
    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_ingredient=Ground+Beef&by_style=0&by_serving=Multiple&by_price=0')
    })

  it('RESETS all filters with button displaying after search', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/ingredients?for_ingredient=ground%20beef', {
      statusCode: 200,
      fixture: 'ingredient-search'
    });

    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef', {
      statusCode: 200,
      fixture: 'search-result'
    });

    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef&by_style=0', {
      statusCode: 200,
      fixture: 'filter-all-filters-applied'
    });

    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef&by_style=0&by_serving=Multiple', {
      statusCode: 200,
      fixture: 'filter-all-filters-applied'
    });

    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_ingredient=Ground+Beef&by_style=0&by_serving=Multiple&by_price=0', {
      statusCode: 200,
      fixture: 'filter-all-filters-applied'
    });

    cy.get('.filter-bar-container > :nth-child(1)').click()
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .search-input').type('ground beef')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > div > .filter-checkbox').contains('Ground Beef')
      .get('.filter-bar-container > .modal-backdrop > .modal-content > div > .filter-checkbox > #checkbox-1').click()
      .get('.filter-bar-container > .modal-backdrop > .modal-content > .modal-actions > .view-results').click()

    cy.get(':nth-child(2) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()

    cy.get(':nth-child(3) > .dropdown-arrow').click()
      .get('.toggle-option.active').should('contain', 'Single').click()
      .get('.view-results').click()
      
    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()

    cy.get('.reset-button').click()

      .url().should('eq', 'http://localhost:3001/')
      .get('.recipes-container').children().should('have.length', 10)
    })

  it('DISPLAYS results found text after filtering', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=0', {
      statusCode: 200,
      fixture: 'filter-less-than-5'
    });

    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_price=0')
      .get('.recipes-container').children().should('have.length', 2)
      
    cy.get('.filter-results-container').should('exist')
      .get('.results-count').should('contain', '2 results')
      .get('.reset-button').should('exist')
  })


  it('CLEARS the Price Filter - Less Than $5', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=0', {
      statusCode: 200,
      fixture: 'filter-less-than-5'
    });

    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get(':nth-child(2) > input').click()
      .get('.view-results').click()
      .url().should('eq', 'http://localhost:3001/?by_price=0')
      .get(':nth-child(4) > .x-icon').click()
      .get('.recipes-container').children().should('have.length', 10);
  });
})
