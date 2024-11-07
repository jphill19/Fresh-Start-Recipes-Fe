

describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      body: {
        fixture: 'recipe-data'
      }
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
  })

  // it.skip('NAVIGATES to the location component upon clicking the location-icon', () => {
  //   cy.get('.header-section')
  //   .get('.location-icon').click

  // })

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