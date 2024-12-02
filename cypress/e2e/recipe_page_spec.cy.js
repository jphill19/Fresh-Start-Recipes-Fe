describe('Recipe Page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes/1',
      {
        statusCode: 200,
        fixture: 'recipe-page-data-multi-instructions'
      }
    )
    cy.visit('http://localhost:3001/recipe/1')
  })

  it.skip('Checks the page content on load for a recipe with a single set of cooking instructions and no cooking tips', () => {
    cy.intercept(
      'GET',
      'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes/2',
      {
        statusCode: 200,
        fixture: 'recipe-page-data'
      }
    )
    cy.visit('http://localhost:3001/recipe/2')
    cy.get('.header-section')
      .should('be.visible')
      .get('.location-icon')
      .should('be.visible')
      .get('.logo')
      .should('be.visible')
      .get('.home-icon')
      .should('be.visible')
      .get('.app')
      .should('be.visible')
      .children()
      .should('have.length', 7)
      .get('.recipe-page-image')
      .should('be.visible')
      .get('.recipe-page-title')
      .should('contain', 'Hamburger Potato Soup')
      .get('.ingredients-container')
      .children()
      .should('have.length', 8)
      .get('.ingredients-container > .ingredient-list-title')
      .should('contain', 'Ingredient List')
      .get('.ingredients-container > .serving-size')
      .should('contain', 'Serving Size: 6')
      .get(
        '.ingredients-container > :nth-child(3) > .ingredient-button > .ingredient-info > .ingredient-name'
      )
      .should('contain', 'Russett Potato')
      .get(
        '.ingredients-container > :nth-child(3) > .ingredient-button > .ingredient-info > .ingredient-measurement'
      )
      .should('contain', '3 lb')
      .get(
        '.ingredients-container > :nth-child(3) > .ingredient-button > .ingredient-price'
      )
      .should('contain', '$1.00')
      .get(
        '.ingredients-container > :nth-child(4) > .ingredient-button > .ingredient-info > .ingredient-name'
      )
      .should('contain', 'Ground Beef')
      .get(
        '.ingredients-container > :nth-child(4) > .ingredient-button > .ingredient-info > .ingredient-measurement'
      )
      .should('contain', '2 lb')
      .get(
        '.ingredients-container > :nth-child(4) > .ingredient-button > .ingredient-price'
      )
      .should('contain', '$6.00')
      .get(
        '.ingredients-container > :nth-child(5) > .ingredient-button > .ingredient-info > .ingredient-name'
      )
      .should('contain', 'Onion')
      .get(
        '.ingredients-container > :nth-child(5) > .ingredient-button > .ingredient-info > .ingredient-measurement'
      )
      .should('contain', '1 Medium Sized')
      .get(
        '.ingredients-container > :nth-child(5) > .ingredient-button > .ingredient-price'
      )
      .should('contain', '$1.00')
      .get(
        '.ingredients-container > :nth-child(6) > .ingredient-button > .ingredient-info > .ingredient-name'
      )
      .should('contain', 'Olive Oil')
      .get(
        '.ingredients-container > :nth-child(6) > .ingredient-button > .ingredient-info > .ingredient-measurement'
      )
      .should('contain', '2 tablespoons')
      .get(
        '.ingredients-container > :nth-child(6) > .ingredient-button > .ingredient-price'
      )
      .should('contain', '$4.00')
      .get('.ingredients-container > .total-price > .total-price-label')
      .should('contain', 'Total Price')
      .get('.ingredients-container > .total-price > .total-price-amount')
      .should('contain', '$12.00')
      .get('.ingredients-container > .set-location-button')
      .should('contain', 'Get Prices for a local store')
      .get('.app > :nth-child(5) > .list-title')
      .should('contain', 'Cookware List')
      .get('.app > :nth-child(6) > .tips-title')
      .should('contain', 'Recipe Tips')
      .get('.instructions-container > .instructions-title')
      .should('contain', 'Cooking Instructions')
      .get('.instructions-container > .instructions-list')
      .should('be.visible')
      .get(
        '.instructions-container > .instructions-list > :nth-child(1) > .instruction-step'
      )
      .should('contain', 'Step 1')
      .get(
        '.instructions-container > .instructions-list > :nth-child(1) > .instruction-text'
      )
      .should('contain', 'Wash the dirt off the potato')
      .get(
        '.instructions-container > .instructions-list > :nth-child(2) > .instruction-step'
      )
      .should('contain', 'Step 2')
      .get(
        '.instructions-container > .instructions-list > :nth-child(2) > .instruction-text'
      )
      .should('contain', 'Cut potatoes into roughly 1 inch cubes.')
      .get(
        '.instructions-container > .instructions-list > :nth-child(3) > .instruction-step'
      )
      .should('contain', 'Step 3')
      .get(
        '.instructions-container > .instructions-list > :nth-child(3) > .instruction-text'
      )
      .should(
        'contain',
        'Place potatoes in the medium cooking pot with just enough water to cover them; turn the stove on to a medium to high heat to bring the water to a gentle boil.'
      )
      .get(
        '.instructions-container > .instructions-list > :nth-child(4) > .instruction-step'
      )
      .should('contain', 'Step 4')
      .get(
        '.instructions-container > .instructions-list > :nth-child(4) > .instruction-text'
      )
      .should(
        'contain',
        'As you wait for the water to boil; begin cooking the hamburger meat in the frying pan on a medium heat. Place meat in the pan and break into chunks with cooking spoon'
      )
      .get(
        '.instructions-container > .instructions-list > :nth-child(5) > .instruction-step'
      )
      .should('contain', 'Step 5')
      .get(
        '.instructions-container > .instructions-list > :nth-child(5) > .instruction-text'
      )
      .should(
        'contain',
        'Once potatoes have softened and the hamburger meat is all brown; carefully dump hamburger meat into the pot with the potatoes; place heat on low and cover pot.'
      )
      .get(
        '.instructions-container > .instructions-list > :nth-child(6) > .instruction-step'
      )
      .should('contain', 'Step 6')
      .get(
        '.instructions-container > .instructions-list > :nth-child(6) > .instruction-text'
      )
      .should(
        'contain',
        'Cut onion into roughly 1 inch chunks and break apart layers if desired; place the cut up onion in the pot and let the soup simmer for about 15 minutes.'
      )
      .get(
        '.instructions-container > .instructions-list > :nth-child(7) > .instruction-step'
      )
      .should('contain', 'Step 7')
      .get(
        '.instructions-container > .instructions-list > :nth-child(7) > .instruction-text'
      )
      .should(
        'contain',
        'turn off heat, and place soup into a bowel adding salt and pepper as desired. Enjoy soup carefully as it will be hot.'
      )
  })

  it.skip('Checks the page content on load for a recipe with multiple sets of cooking instructions and 2 cooking tips', () => {
    cy.get('.header-section')
      .should('be.visible')
      .get('.location-icon')
      .should('be.visible')
      .get('.logo')
      .should('be.visible')
      .get('.home-icon')
      .should('be.visible')
      .get('.app')
      .should('be.visible')
      .children()
      .should('have.length', 8)
      .get('.recipe-page-image')
      .should('be.visible')
      .get('.recipe-page-title')
      .should('contain', 'Baked Potato')
      .get('.ingredients-container')
      .children()
      .should('have.length', 7)
      .get('.ingredients-container > .ingredient-list-title')
      .should('contain', 'Ingredient List')
      .get('.ingredients-container > .serving-size')
      .should('contain', 'Serving Size: 1')
      .get(
        '.ingredients-container > :nth-child(3) > .ingredient-button > .ingredient-info > .ingredient-name'
      )
      .should('contain', 'Russett Potato')
      .get(
        '.ingredients-container > :nth-child(3) > .ingredient-button > .ingredient-info > .ingredient-measurement'
      )
      .should('contain', '1 lb')
      .get(
        '.ingredients-container > :nth-child(3) > .ingredient-button > .ingredient-price'
      )
      .should('contain', '$1.00')
      .get(
        '.ingredients-container > :nth-child(4) > .ingredient-button > .ingredient-info > .ingredient-name'
      )
      .should('contain', '16oz Bag of Shredded Cheddar Cheese')
      .get(
        '.ingredients-container > :nth-child(4) > .ingredient-button > .ingredient-info > .ingredient-measurement'
      )
      .should('contain', '2 ounces')
      .get(
        '.ingredients-container > :nth-child(4) > .ingredient-button > .ingredient-price'
      )
      .should('contain', '$2.00')
      .get(
        '.ingredients-container > :nth-child(5) > .ingredient-button > .ingredient-info > .ingredient-name'
      )
      .should('contain', 'Olive Oil')
      .get(
        '.ingredients-container > :nth-child(5) > .ingredient-button > .ingredient-info > .ingredient-measurement'
      )
      .should('contain', '2 tablespoons')
      .get(
        '.ingredients-container > :nth-child(5) > .ingredient-button > .ingredient-price'
      )
      .should('contain', '$4.00')
      .get('.ingredients-container > .total-price > .total-price-label')
      .should('contain', 'Total Price')
      .get('.ingredients-container > .total-price > .total-price-amount')
      .should('contain', '$7.00')
      .get('.ingredients-container > .set-location-button')
      .should('contain', 'Get Prices for a local store')
      .get('.app > :nth-child(5) > .list-title')
      .should('contain', 'Cookware List')
      .get('.app > :nth-child(6) > .tips-title')
      .should('contain', 'Recipe Tips 💡')
      .get('.app > :nth-child(7) > .list-title')
      .should('contain', 'Microwave Instructions')
      .get('.app > :nth-child(8) > .list-title')
      .should('contain', 'Oven / Toaster Oven Instructions')
  })

  it.skip('tests the user interactions on the recipe page', () => {
    cy.intercept(
      'GET',
      'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes/1?by_location=62000115',
      {
        statusCode: 200,
        fixture: 'location-data'
      }
    )
    cy.intercept(
      'GET',
      'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true',
      {
        statusCode: 200
      }
    )
    cy.intercept(
      'GET',
      'https://api.mapbox.com/styles/v1/mapbox/streets-v11?sdk=js-3.7.0&access_token=pk.eyJ1IjoiY3RiMjAyNCIsImEiOiJjbTM3dGM4ZngwOXhuMmtwdTRoMWRxdzV6In0.m4YJjEFNkMj6H82eYZoyVA',
      {
        statusCode: 200
      }
    )
    cy.get('.header-section')
      .should('be.visible')
      .get('.ingredients-container > .total-price')
      .should('contain', '$7.00')
      .get('.ingredients-container > :nth-child(3) > .ingredient-button')
      .click()
      .get('.ingredients-container > .total-price')
      .should('contain', '$6.00')
      .get('.ingredients-container > :nth-child(4) > .ingredient-button')
      .click()
      .get('.ingredients-container > .total-price')
      .should('contain', '$4.00')
      .get('.ingredients-container > :nth-child(5) > .ingredient-button')
      .click()
      .get('.ingredients-container > .total-price')
      .should('contain', '$0.00')
      .get('.ingredients-container > .set-location-button')
      .click()
      .get(
        '.location-container > .store-cards-container > .store-card-wrap > .store-select-button'
      )
      .click()
      .get(
        '.header-section > .nav-bar > .left-section > .location-wrapper > .location-inline-label'
      )
      .should('contain', 'Union Station')
      .get('.ingredients-container > .total-price > .total-price-label')
      .should('contain', 'Union Station Total Price')
      .get('.ingredients-container > .total-price > .total-price-amount')
      .should('contain', '$7.37')
      .get('.app > :nth-child(5) > button')
      .click()
      .get('.list-container-open > .list-inner > :nth-child(1) > p')
      .should('contain', 'Microwave-Safe Baking Dish')
      .get('.list-container-open > .list-inner > :nth-child(2) > p')
      .should('contain', 'Oven-Safe Baking Dish')
      .get('.app > :nth-child(5) > button')
      .click()
      .get('.app > :nth-child(6) > button')
      .click()
      .get('.list-container-open > .list-inner > :nth-child(1) > p')
      .should(
        'contain',
        "- Poking holes in the potato allows steam to escape, if you don't the potato could explode, especially in the microwave!"
      )
      .get('.list-container-open > .list-inner > :nth-child(2) > p')
      .should(
        'contain',
        '- For a crispier outside on the potato; rub some of the oil on the potato itself.'
      )
      .get('.app > :nth-child(6) > button')
      .click()
      .get('.app > :nth-child(7) > button')
      .click()
      .get('.list-container-open > .list-inner > :nth-child(1) > p')
      .should('contain', 'Step 1: Wash the dirt off the potato')
      .get('.list-container-open > .list-inner > :nth-child(2) > p')
      .should(
        'contain',
        'Step 2: Poke holes in the potato to allow steam to escape'
      )
      .get('.list-container-open > .list-inner > :nth-child(3) > p')
      .should(
        'contain',
        'Step 3: Put on plate in microwave and cook for 8 minutes'
      )
      .get('.list-container-open > .list-inner > :nth-child(4) > p')
      .should(
        'contain',
        'Step 4: If a fork is easily pushed in, its done, otherwise cook for an additional 2 minutes'
      )
      .get('.app > :nth-child(7) > button')
      .click()
      .get('.app > :nth-child(8) > button')
      .click()
      .get('.list-container-open > .list-inner > :nth-child(1) > p')
      .should('contain', 'Step 1: Preheat oven to 400 degrees')
      .get('.list-container-open > .list-inner > :nth-child(2) > p')
      .should('contain', 'Step 2: Wash the dirt off the potato')
      .get('.list-container-open > .list-inner > :nth-child(3) > p')
      .should(
        'contain',
        'Step 3: Poke holes in the potato to allow steam to escape'
      )
      .get('.list-container-open > .list-inner > :nth-child(4) > p')
      .should(
        'contain',
        'Step 4: Place potato on oven safe tray and cook for 45 minutes'
      )
      .get('.list-container-open > .list-inner > :nth-child(5) > p')
      .should(
        'contain',
        'Step 5: If a fork is easily pushed in, its done, otherwise cook for an additional 2 minutes'
      )
      .get('.app > :nth-child(8) > button')
      .click()
  })

  it.skip('tests error handling when there is no data', () => {
    cy.intercept(
      'GET',
      'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes/1',
      {
        statuCode: 200,
        fixture: 'no-data'
      }
    )
    cy.get('.header-section')
      .should('be.visible')
      .get('.app > p')
      .should('contain', 'Something went wrong...')
  })
})
