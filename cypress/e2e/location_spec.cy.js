describe('Location Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data')

    cy.intercept(
      'GET',
      'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/locations*',
      { fixture: 'single-location.json' }
    ).as('getLocation');

    cy.intercept('GET', 'https://api.mapbox.com/**', {
      statusCode: 200,
      body: {},
    }).as('mapboxApi');

    cy.intercept('https://maps.googleapis.com/**', {
      statusCode: 200,
      body: {},
    }).as('googleMapsApi');

    cy.intercept(
      {
        method: 'GET',
        url: /https:\/\/events\.mapbox\.com\/events\/v2.*/,
      },
      {
        statusCode: 204,
        body: '',
      }
    ).as('mapboxEvents');

    cy.intercept('POST', 'https://events.mapbox.com/events/v2*', {
      statusCode: 204,
      body: '',
    }).as('mapboxEvents');

    cy.visit('http://localhost:3001/location', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition')
          .callsFake((callback) => {
            callback({ coords: { latitude: 39.757185, longitude: -104.998818 } });
          });
      },
    });
  })


  it.skip('DISPLAYS all content of location component', () => {
    cy.get('.header-section').should('exist')
    .get('.location-icon').should('be.visible')
    .get('.logo').should('be.visible')
    .get('.home-button').should('be.visible')
    // Location Container
    .get('.location-container').should('exist')
    .get('.location-button').should('contain', 'Use Your Location')
    .get('.location-button').should('be.visible')
    // .get('.autocomplete-wrapper').should('exist')

    .get('.mapboxgl-canvas').should('be.visible')
    // Store Cards Container
    .get('.store-cards-container').should('exist')
    .get('.store-card-wrap#62000115')
    .get('.store-title').should('be.visible')
    .get('.store-title').should('contain', 'King Soopers - Union Station')
    .get('.store-chain').should('be.visible')
    .get('.store-chain').should('contain', 'KINGSOOPERS')
    .get('.store-address').should('be.visible')
    // Will address info require fixture files?
    .find('p').eq(0).should('contain', '1950 Chestnut Pl')
    .next().should('contain', 'Denver, CO 80202')
    .get('.store-select-button').should('contain', 'Select Store')
  })

  it('should not make real Mapbox API calls', () => {
    cy.wait('@mapboxApi');
    cy.get('.map-container').should('be.visible');
  });

  it('should load the page without making real Google Maps API calls', () => {
    cy.wait('@googleMapsApi');
    cy.get('.location-button').should('be.visible').and('contain', 'Use Your Location');
  });

  it('NAVIGATES to homepage from loation URL via logo-icon click', () => {
    cy.get('.header-section')
    .find('.logo').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })

  it.skip('NAVIGATES to homepage from location URL via home-icon click', () => {
    cy.get('.header-section')
    .find('.home-icon').click()
    cy.url().should('eq', 'http://localhost:3001/')
    cy.get('.header-section')
    .get('.home-icon').should('not.exist')
    .get('.search-icon').should('exist')
  })

  it.skip('Does NOT REFRESH/NAVIGATE away upon clicking location-icon from location URL', () => {
    cy.get('.header-section')
    .find('.location-icon').click()
    cy.url().should('eq', 'http://localhost:3001/location')
  })

  
  it('By default a single location is loaded', () => {
    cy.get('.store-card-wrap').should("have.length", 1); 
    cy.get(".store-title").first().should("contain.text", "King Soopers - Union Station");
    cy.get(".store-address").first().should("contain.text", "1950 Chestnut PlDenver, CO 80202");
    cy.get(".store-address").should("contain.text", "Denver, CO 80202")
    cy.get('.store-select-button').should('exist').and('contain.text', 'Select Store');
  })
;

  it('Click "Use Your Location" should update available stores based on new location', () =>{
    cy.fixture('multiple-locations.json').then((locationData) => {
      const locations = locationData.data;
  
    
      cy.intercept(
        'GET',
        'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/locations*',
        { fixture: 'multiple-locations.json' }
      ).as('getLocation');
  
      cy.window().then((win) => {
        if (win.navigator.geolocation.getCurrentPosition.restore) {
          win.navigator.geolocation.getCurrentPosition.restore();
        }
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
          callback({ coords: { latitude: 40.015, longitude: -105.2705 } }); 
        });
      });
  
      cy.get('.location-button').click();
  
      cy.wait('@getLocation');
  

      cy.get('.store-card-wrap').should('have.length', locations.length);
  
      locations.forEach((location, index) => {
        cy.get('.store-card-wrap').eq(index).within(() => {
          cy.get('.store-title').should('contain.text', location.name);
          cy.get('.store-address').should('contain.text', location.address.addressLine1);
          cy.get('.store-address').should('contain.text', `${location.address.city}, ${location.address.state} ${location.address.zipCode}`);
          cy.get('.store-select-button').should('exist').and('contain.text', 'Select Store');
        });
      });
    });
  })

  it('can handle sad path lcoations that dont have any stores nearby',() => {
    cy.fixture('multiple-locations.json').then((locationData) => {
      const locations = locationData.data;
      cy.intercept(
        'GET',
        'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/locations*',
        { fixture: 'location-sad-path.json' }
      ).as('getLocation');
  
      cy.window().then((win) => {
        if (win.navigator.geolocation.getCurrentPosition.restore) {
          win.navigator.geolocation.getCurrentPosition.restore();
        }
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
          callback({ coords: { latitude: 40.015, longitude: -105.2705 } }); 
        });
      });
  
      cy.get('.location-button').click();
  
      cy.wait('@getLocation');
  

      cy.get('.store-card-wrap').should('not.exist');
      cy.get('.no-locations-message').should('exist').and('contain.text', 'No King Soopers nearby your location');
    })
  })
})

describe('Navigations', () => {
  it('From home page to location page and selecting store should navigate back home', () =>{
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data')

    cy.intercept(
      'GET',
      'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/locations*',
      { fixture: 'single-location.json' }
    ).as('getLocation');

    cy.intercept('GET', 'https://api.mapbox.com/**', {
      statusCode: 200,
      body: {},
    }).as('mapboxApi');

    cy.intercept('https://maps.googleapis.com/**', {
      statusCode: 200,
      body: {},
    }).as('googleMapsApi');

    cy.intercept(
      {
        method: 'GET',
        url: /https:\/\/events\.mapbox\.com\/events\/v2.*/,
      },
      {
        statusCode: 204,
        body: '',
      }
    ).as('mapboxEvents');

    cy.intercept('POST', 'https://events.mapbox.com/events/v2*', {
      statusCode: 204,
      body: '',
    }).as('mapboxEvents');

    cy.get('.location-inline-label').should('not.exist');
    cy.visit('http://localhost:3001/location', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition')
          .callsFake((callback) => {
            callback({ coords: { latitude: 39.757185, longitude: -104.998818 } });
          });
      },
    });

    cy.get('.store-select-button').click()
    cy.get('.location-inline-label').should('exist').and('contain.text', 'Union Station');
  });

  it('From details page to location page and selecting store should navigate back details', () =>{
    cy.intercept('GET', 'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipes?', {
      statusCode: 200,
      fixture: 'recipe-data'
    }).as('recipe-data')

    cy.intercept(
      'GET',
      'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/locations*',
      { fixture: 'single-location.json' }
    ).as('getLocation');

    cy.intercept('GET', 'https://api.mapbox.com/**', {
      statusCode: 200,
      body: {},
    }).as('mapboxApi');

    cy.intercept('https://maps.googleapis.com/**', {
      statusCode: 200,
      body: {},
    }).as('googleMapsApi');

    cy.intercept(
      {
        method: 'GET',
        url: /https:\/\/events\.mapbox\.com\/events\/v2.*/,
      },
      {
        statusCode: 204,
        body: '',
      }
    ).as('mapboxEvents');

    cy.intercept('POST', 'https://events.mapbox.com/events/v2*', {
      statusCode: 204,
      body: '',
    }).as('mapboxEvents');

  })

})

