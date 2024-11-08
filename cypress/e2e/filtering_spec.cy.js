describe('Filtering Functionality', () => {
  beforeEach (() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data');

    cy.visit('http://localhost:3001/');
    cy.wait('@recipe-data');
  });
  
  // PASSING
  it('FILTERS recipes Less than $5', () => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?by_price=0', {
      statusCode: 200,
      fixture: ''
    });
    cy.url().should('eq', 'http://localhost:3001/recipes?by_price=0');

    cy.get(':nth-child(4) > .dropdown-arrow').click()
      .get('.modal-content').should('be.visible')
      .get('.modal-backdrop').should('be.visible')
      .get(':nth-child(2) > input').should('not.be.checked').click()
      .get('.view-results').click()
      .get('.modal-content').should('not.exist')
      .get('.modal-backdrop').should('not.exist')
      .url().should('eq', 'http://localhost:3001/recipes?by_price=0');
  });

  // // PASSING
  // it('FILTERS recipes Less than $10', () => {
  //   cy.url().should('eq', 'http://localhost:3001/');

  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get('.modal-content').should('be.visible')
  //     .get('.modal-backdrop').should('be.visible')
  //     .get(':nth-child(3) > input').should('not.be.checked').click()
  //     .get('.view-results').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipe-title').should('contain', 'Baked Potato')
  //     .url().should('eq', 'http://localhost:3001/?by_price=2');
  // });

  // // NOT PASSING
  // it('FILTERS recipes Greater than $10', () => {
  //   cy.url().should('eq', 'http://localhost:3001/');

  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get('.modal-content').should('be.visible')
  //     .get('.modal-backdrop').should('be.visible')
  //     .get(':nth-child(4) > input').should('not.be.checked').click()
  //     .get('.view-results').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipe-title').should('contain', 'Hamburger Potato Soup')
  //     .url().should('eq', 'http://localhost:3001/?by_price=3');
  // });

  // // PASSING
  // it('RESETS the filter for Less than $5', () => {
  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(2) > input').click()
  //     .get('.reset').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 3);
  // });

  // // PASSING
  // it('RESETS the filter for Less than $10', () => {
  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(3) > input').click()
  //     .get('.reset').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 3);
  // });

  // // PASSING
  // it('RESETS the filter for Greater than $10', () => {
  //   cy.get(':nth-child(4) > .dropdown-arrow').click()
  //     .get(':nth-child(4) > input').click()
  //     .get('.reset').click()
  //     .get('.modal-content').should('not.exist')
  //     .get('.modal-backdrop').should('not.exist')
  //     .get('.recipes-container').children().should('have.length', 3);
  // });

  // // UPDATE BE DATA AND THIS WILL PASS
  // it('FILTERS recipes - MULTIPLE serving size', () => {
  //   cy.get(':nth-child(3) > .dropdown-arrow').click()
  //     .get('.toggle-option.active').should('contain', 'Single').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_serving=Multiple')
  //     .get('.recipes-container').children().should('have.length', 2);
  // });

  // // UPDATE BE DATA AND THIS WILL PASS
  // it('FILTERS recipes - SINGLE serving size', () => {
  //   cy.get(':nth-child(3) > .dropdown-arrow').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_serving=Single')
  //     .get('.recipes-container').children().should('have.length', 1);
  // });

  // // UPDATE BE DATA AND THIS WILL PASS
  // it('RESETS Serving Size Filter from modal - SINGLE', () => {
  //   cy.get(':nth-child(3) > .dropdown-arrow').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_serving=Single')
  //     .get(':nth-child(3) > .x-icon').click()
  //     .get('.recipes-container').children().should('have.length', 1);
  // });

  // // UPDATE BE DATA AND THIS WILL PASS
  // it('RESETS Serving Size Filter from modal - MULTIPLE', () => {
  //   cy.get(':nth-child(3) > .dropdown-arrow').click()
  //     .get('.toggle-option.active').should('contain', 'Single').click()
  //     .get('.view-results').click()
  //     .url().should('eq', 'http://localhost:3001/?by_serving=Multiple')
  //     .get(':nth-child(3) > .x-icon').click()
  //     .get('.recipes-container').children().should('have.length', 2);
  // });
});