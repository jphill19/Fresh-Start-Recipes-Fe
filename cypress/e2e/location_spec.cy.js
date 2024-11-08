describe('Location Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data')
    // We don't need await here?
    cy.visit('http://localhost:3001/location')
  })


  it('DISPLAYS all content of location component', () => {
    cy.get('.header-section').should('exist')
    .get('.location-icon').should('exist')
    .get('.location-icon').should('be.visible')
    .get('.logo').should('exist')
    .get('.logo').should('be.visible')
    .get('.home-button').should('exist')
    .get('.home-button').should('be.visible')
    // Location Container
    .get('.location-container').should('exist')
    .get('.location-button').should('exist')
    .get('.location-button').should('contain', 'Use Your Location')
    .get('.location-button').should('be.visible')
    .get('.autocomplete-wrapper').should('exist')
    .get('.input-field.pac-target-input').should('exist')
    .get('.input-field.pac-target-input').should('be.visible')
    cy.get('.input-field')
    .should('have.attr', 'placeholder', 'Enter your address')
    .get('.mapboxgl-canvas').should('exist')
    .get('.mapboxgl-canvas').should('be.visible')
    // Store Cards Container
    .get('.store-cards-container').should('exist')
    .get('.store-card-wrap#62000115')
    .get('.store-title').should('exist')
    .get('.store-title').should('be.visible')
    .get('.store-title').should('contain', 'King Soopers - Union Station')
    .get('.store-chain').should('exist')
    .get('.store-chain').should('be.visible')
    .get('.store-chain').should('contain', 'KINGSOOPERS')
    .get('.store-address').should('exist')
    .get('.store-address').should('be.visible')
    // Will address info require fixture files?
    .find('p').eq(0).should('contain', '1950 Chestnut Pl')
    .next().should('contain', 'Denver, CO 80202')
    .get('.store-select-button').should('exist')
    .get('.store-select-button').should('contain', 'Select Store')
  })

  // // NOT PASSING Can't fetch - spinning out
  // it('NAVIGATES to homepage from loation URL via logo-icon click', () => {
  //   cy.get('.header-section')
  //   .find('.logo').click()
  //   cy.url().should('eq', 'http://localhost:3001/')
  // })

  it('NAVIGATES to homepage from location URL via home-icon click', () => {
    cy.get('.header-section')
    .find('.home-icon').click()
    cy.url().should('eq', 'http://localhost:3001/')
    cy.get('.header-section')
    .get('.home-icon').should('not.exist')
    .get('.search-icon').should('exist')
  })

  it('Does NOT REFRESH/NAVIGATE away upon clicking location-icon from location URL', () => {
    cy.get('.header-section')
    .find('.location-icon').click()
    cy.url().should('eq', 'http://localhost:3001/location')
  })



  // **~~~~~~**~~~~~~** NEED HELP WITH THESE ONES **~~~~~~**~~~~~~**

  // it('Shows nearest Kroger stores when user clicks `Use Your Location` button', () => {
  // // How are we going to test the Map Box functionality?
  // // Do we use fixture files for that as well?
  // })

  // it('Allows users to search nearest stores by entering their address', () => {
  // // How are we going to test the Map Box functionality?
  // // Do we use fixture files for that as well?
  // })
})