

describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data')
    
    cy.visit('http://localhost:3001/')
    cy.wait('@recipe-data')
  })
  
  // it.skip('DISPLAYS all elements on the home page', () => {
  //   cy.get('.header-section').should('exist')
  //   .get('.location-icon').should('exist')
  //   .get('.location-icon').should('be.visible')
  //   .get('.logo').should('exist')
  //   .get('.logo').should('be.visible')
  //   .get('.search-icon').should('exist')
  //   .get('.search-icon').should('be.visible')
  //   .get('.search-container').should('exist')
  //   .get('.filter-bar-container').should('exist')
  //   .get('.filter-bar-container').should('be.visible')
  //   .get('.filter-bar-container > :nth-child(1)').should('contain', 'Ingredient')
  //   .get('.filter-bar-container > :nth-child(2)').should('contain', 'Cooking Style')
  //   .get('.filter-bar-container > :nth-child(3)').should('contain', 'Servings')
  //   .get('.filter-bar-container > :nth-child(4)').should('contain', 'Price')
  //   .get('.recipes-container').should('exist')
  //   .get('.recipes-container').children().should('have.length', 2)
  //   .get('.recipes-container > :nth-child(1) > .recipe-link > .recipe-title').should('contain', 'Baked Potato')
  //   .get('.recipes-container > :nth-child(1) > .recipe-link > .recipe-image').should('exist')
  //   .get('.recipes-container > :nth-child(1) > .ingredients-box').children().should('have.length', 3)
  //   .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(1) > .ingredient-button').should('contain', 'Russett Potato')
  //   .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(1) > .ingredient-price').should('contain', '$1.00')
  //   .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(2) > .ingredient-button').should('contain', '16oz Bag of Shredded Cheddar Cheese')
  //   .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(2) > .ingredient-price').should('contain', '$2.00')
  //   .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(3) > .ingredient-button').should('contain', 'Olive Oil')
  //   .get('.recipes-container > :nth-child(1) > .ingredients-box > :nth-child(3) > .ingredient-price').should('contain', '$4.00')
  //   .get('.recipes-container > :nth-child(1) > .recipe-card-footer').should('exist')
  //   .get('.recipes-container > :nth-child(1) > .recipe-card-footer > .serving-size').should('contain', 'Servings: 1')
  //   .get('.recipes-container > :nth-child(1) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $7.00')

  //   .get('.recipes-container > :nth-child(2) > .recipe-link > .recipe-title').should('contain', 'Hamburger Potato Soup')
  //   .get('.recipes-container > :nth-child(2) > .recipe-link > .recipe-image').should('exist')
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box').children().should('have.length', 4)
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(1) > .ingredient-button').should('contain', 'Russett Potato')
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(1) > .ingredient-price').should('contain', '$1.00')
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(2) > .ingredient-button').should('contain', 'Ground Beef')
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(2) > .ingredient-price').should('contain', '$6.00')
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(3) > .ingredient-button').should('contain', 'Onion')
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(3) > .ingredient-price').should('contain', '$1.00')
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(4) > .ingredient-button').should('contain', 'Olive Oil')
  //   .get('.recipes-container > :nth-child(2) > .ingredients-box > :nth-child(4) > .ingredient-price').should('contain', '$4.00')
  //   .get('.recipes-container > :nth-child(2) > .recipe-card-footer').should('exist')
  //   .get('.recipes-container > :nth-child(2) > .recipe-card-footer > .serving-size').should('contain', 'Servings: 6')
  //   .get('.recipes-container > :nth-child(2) > .recipe-card-footer > .total-cost').should('contain', 'Total Cost: $12.00')
  // })

  it.skip('tests interactions on the home page', () => {
    cy.get('.search-icon').click()
    .get('.search-container > form > .search-input').should('exist')
    .get('.search-container > form > .search-input').should('be.visible')
    // .get('.filter-bar-container > :nth-child(1)').click()
  })


  // it.skip('NAVIGATES to the location component upon clicking the location-icon', () => {
  //   cy.get('.header-section')
  //   .find('.location-icon').click();
    
  //   cy.url().should('eq', 'http://localhost:3001/location');
  // })

  // it.skip('NAVIGATES back to the homepage from other URLs', () => {
    
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