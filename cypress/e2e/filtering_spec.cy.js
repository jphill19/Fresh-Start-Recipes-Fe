describe('Filtering Functionality', () => {
  beforeEach (() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data');

    cy.visit('http://localhost:3001/');
    cy.wait('@recipe-data');
  });
  
  // it('FILTERS recipes Less than $5', () => {
    // cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=0', {
    //   statusCode: 200,
    //   fixture: 'filter-less-than-5'
    // });
    
  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get('.modal-content').should('be.visible')
  //     .get('.modal-backdrop').should('be.visible')
  //     .get(':nth-child(2) > input').should('not.be.checked').click()
  //     .get('.view-results').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 2)
  //     .url().should('eq', 'http://localhost:3001/?by_price=0')
  // });

  // it('FILTERS recipes Less than $10', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=2', {
  //     statusCode: 200,
  //     fixture: 'filter-less-than-10'
  //   });

  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get('.modal-content').should('be.visible')
  //     .get('.modal-backdrop').should('be.visible')
  //     .get(':nth-child(3) > input').should('not.be.checked').click()
  //     .get('.view-results').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 5)
  //     .url().should('eq', 'http://localhost:3001/?by_price=2');
  // });

  // it('FILTERS recipes Greater than $10', () => {      
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=3', {
  //     statusCode: 200,
  //     fixture: 'filter-greater-than-10'
  //   });

  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get('.modal-content').should('be.visible')
  //     .get('.modal-backdrop').should('be.visible')
  //     .get(':nth-child(4) > input').should('not.be.checked').click()
  //     .get('.view-results').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 5)
  //     .url().should('eq', 'http://localhost:3001/?by_price=3');
  // });

  // it('RESETS the selection & closes modal for Less than $5', () => {
  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(2) > input').click()
  //     .get('.reset').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('RESETS the selection & closes modal for Less than $10', () => {
  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(3) > input').click()
  //     .get('.reset').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('RESETS the selection & closes modal for Greater than $10', () => {
  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(4) > input').click()
  //     .get('.reset').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('CLEARS the Price Filter - Less Than $5', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=0', {
  //     statusCode: 200,
  //     fixture: 'filter-less-than-5'
  //   });

  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(2) > input').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_price=0')
  //     .get(':nth-child(4) > .x-icon').click()
  //     .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('CLEARS the Price Filter - Less Than $10', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=2', {
  //     statusCode: 200,
  //     fixture: 'filter-less-than-5'
  //   });

  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(3) > input').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_price=2')
  //     .get(':nth-child(4) > .x-icon').click()
  //     .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('CLEARS the Price Filter - Greater Than $10', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=3', {
  //     statusCode: 200,
  //     fixture: 'filter-less-than-5'
  //   });

  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(4) > input').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_price=3')
  //     .get(':nth-child(4) > .x-icon').click()
  //     .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('FILTERS recipes - MULTIPLE serving size', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Multiple', {
  //     statusCode: 200,
  //     fixture: 'filter-serving-multiple'
  //   });

  //   cy.get(':nth-child(3) > .dropdown-arrow').click()
  //     .get('.toggle-option.active').should('contain', 'Single').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_serving=Multiple')
  //     .get('.recipes-container').children().should('have.length', 8);
  // });

  // it('FILTERS recipes - SINGLE serving size', () => {
    // cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Single', {
    //   statusCode: 200,
    //   fixture: 'filter-serving-single'
    // });
    
  //   cy.get(':nth-child(3) > .dropdown-arrow').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_serving=Single')
  //     .get('.recipes-container').children().should('have.length', 2);
  // });

  // it('RESETS the selection & closes modal - SINGLE', () => {
  // cy.get(':nth-child(3) > .dropdown-arrow').click()
  //   .get('.reset').click()
  //   .get('.modal-content').should('not.exist')
  //   .get('.modal-backdrop').should('not.exist')
  //   .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('RESETS the selection & closes modal - MULTIPLE', () => {
  // cy.get(':nth-child(3) > .dropdown-arrow').click()
  //   .get('.toggle-option.active').should('contain', 'Single').click()
  //   .get('.reset').click()
  //   .get('.modal-content').should('not.exist')
  //   .get('.modal-backdrop').should('not.exist')
  //   .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('CLEARS the Serving Size Filter - SINGLE', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Single', {
  //     statusCode: 200,
  //     fixture: 'filter-serving-single'
  //   });

  //   cy.get(':nth-child(3) > .dropdown-arrow').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_serving=Single')
  //     .get(':nth-child(3) > .x-icon').click()
  //     .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('CLEARS the Serving Size Filter - MULTIPLE', () => {
  //   cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_serving=Multiple', {
  //     statusCode: 200,
  //     fixture: 'filter-serving-multiple'
  //   });

  //   cy.get(':nth-child(3) > .dropdown-arrow').click()
  //     .get('.toggle-option.active').should('contain', 'Single').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_serving=Multiple')
  //     .get(':nth-child(3) > .x-icon').click()
  //     .get('.recipes-container').children().should('have.length', 10);
  // });

  // it('FILTERS recipes by cooking style - NONE REQUIRED', () => {
    // cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=0', {
    //   statusCode: 200,
    //   fixture: 'filter-cooking-style-none'
    // });

  //   cy.get(':nth-child(2) > .dropdown-arrow').click()
  //   .get('.modal-content').should('be.visible')
  //   .get('.modal-backdrop').should('be.visible')
  //   .get(':nth-child(2) > input').should('not.be.checked').click()
  //   .get(':nth-child(2) > input').click()
  //   .get('.view-results').click()
  //   .get('.modal-content').should('not.exist')
  //   .get('.modal-backdrop').should('not.exist')
  //   .get('.recipes-container').children().should('have.length', 3)
  //   .url().should('eq', 'http://localhost:3001/?by_style=0');
  // })

  // it('FILTERS recipes by cooking style - MICROWAVE', () => {
    // cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=1', {
    //   statusCode: 200,
    //   fixture: 'filter-cooking-style-microwave'
    // });

  //   cy.get(':nth-child(2) > .dropdown-arrow').click()
  //   .get('.modal-content').should('be.visible')
  //   .get('.modal-backdrop').should('be.visible')
  //   .get(':nth-child(3) > input').should('not.be.checked').click()
  //   .get(':nth-child(3) > input').click()
  //   .get('.view-results').click()
  //   .get('.modal-content').should('not.exist')
  //   .get('.modal-backdrop').should('not.exist')
  //   .get('.recipes-container').children().should('have.length', 1)
  //   .url().should('eq', 'http://localhost:3001/?by_style=1');
  // })

  // it('FILTERS recipes by cooking style - STOVETOP', () => {
    // cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=2', {
    //   statusCode: 200,
    //   fixture: 'filter-cooking-style-stove'
    // });

  //   cy.get(':nth-child(2) > .dropdown-arrow').click()
  //   .get('.modal-content').should('be.visible')
  //   .get('.modal-backdrop').should('be.visible')
  //   .get(':nth-child(4) > input').should('not.be.checked').click()
  //   .get(':nth-child(4) > input').click()
  //   .get('.view-results').click()
  //   .get('.modal-content').should('not.exist')
  //   .get('.modal-backdrop').should('not.exist')
  //   .get('.recipes-container').children().should('have.length', 3)
  //   .url().should('eq', 'http://localhost:3001/?by_style=2');
  // })

  // it('FILTERS recipes by cooking style - OVEN', () => {
    // cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_style=3', {
    //   statusCode: 200,
    //   fixture: 'filter-cooking-style-oven'
    // });

  //   cy.get(':nth-child(2) > .dropdown-arrow').click()
  //   .get('.modal-content').should('be.visible')
  //   .get('.modal-backdrop').should('be.visible')
  //   .get(':nth-child(5) > input').should('not.be.checked').click()
  //   .get(':nth-child(5) > input').click()
  //   .get('.view-results').click()
  //   .get('.modal-content').should('not.exist')
  //   .get('.modal-backdrop').should('not.exist')
  //   .get('.recipes-container').children().should('have.length', 2)
  //   .url().should('eq', 'http://localhost:3001/?by_style=3');
  // })

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

  //   // cy.get(':nth-child(4) > .dropdown-arrow').click()
  //   //   .get(':nth-child(2) > input').click()
  //   //   .get('.reset').click()
  //   //   .get('.modal-content').should('not.exist')
  //   //   .get('.modal-backdrop').should('not.exist')
  //   //   .get('.recipes-container').children().should('have.length', 10);

});