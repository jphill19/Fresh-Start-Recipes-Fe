// Location Page

it('DISPLAYS all content of location component', () => {
  cy.visit('http://localhost:3001/location');

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
  .get('.input-field pac-target-input').should('exist')
  .get('.input-field pac-target-input').should('be.visible')
  .find('input.input-field')
  .should('have.attr', 'placeholder', 'Enter your address')
  .get('.mapboxgl-canvas').should('exist')
  .get('.mapboxgl-canvas').should('be.visible')
  // Store Cards Container
  .get('.store-cards-container').should('exist')
  .get('.store-cards-wrap').should('exist')
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
// Move to homepage
it('NAVIGATES to the location component upon clicking the location-icon', () => {
  cy.get('.header-section')
  .find('.location-icon').click();
  cy.url().should('eq', 'http://localhost:3001/location');
})

it('NAVIGATES to homepage from loation URL via logo-icon click', () => {
  cy.visit('http://localhost:3001/location');
  cy.get('.header-section')
  .find('.logo').click();
  cy.url().should('eq', 'http://localhost:3001/');
})

it('NAVIGATES to homepage from location URL via home-icon click', () => {
  cy.visit('http://localhost:3001/location');
  cy.get('.header-section')
  .find('.home-icon').click();
  cy.url().should('eq', 'http://localhost:3001/');
  // swaps out icon
})

it('Does NOT REFRESH/NAVIGATE away upon clicking location-icon from location URL', () => {
  cy.visit('http://localhost:3001/location');
  cy.get('.header-section')
  .find('.location-icon').click();
  cy.url().should('eq', 'http://localhost:3001/location');
})

it('Shows nearest Kroger stores when user clicks `Use Your Location` button', () => {
// How are we going to test the Map Box functionality?
// Do we use fixture files for that as well?
})

it('Allows users to search nearest stores by entering their address', () => {
// How are we going to test the Map Box functionality?
// Do we use fixture files for that as well?
})


/* 
header-section
  nav-bar
    nav-section left-section
    nav-section center-section
    nav-section right-section
    
  search-container

  img.location-icon
  img.logo
  img.search-icon

filter-bar-container
  filter-bar-component
    text = Ingredient
    img.dropdown-arrow
  filter-bar-component
    text = Cooking Style
    img.dropdown-arrow
  filter-bar-component
    text = Servings
    img.dropdown-arrow
  filter-bar-component
    text = Price
    img.dropdown-arrow

recipes-container
  recipe-card-wrap (exists)
    a.recipe-link
      h2.recipe-title
      img.recipe-image

  ingredients-box
    button.ingredient-button
      ingredient-row
        text = Russet Potato
        ingredient-button
        ingredient-price
          $0.89

      ingredient-row
        text = 
        ingredient-button
        ingredient-price
      ingredient-row
        ingredient-button
        ingredient-price
        
  recipe-card-footer
    serving-size
    total-cost





*/