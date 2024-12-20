# 🍲 Fresh Start Recipes: Affordable Meals for a New Beginning 🍲

Welcome to **Fresh Start Recipes** – a mobile app designed to support those navigating hard times or new beginnings. This app offers simple, affordable recipes that use ingredients available at local King Soopers stores, with real-time pricing based on your nearby location. Whether you're new to a government home, unhoused, or just looking to stretch your budget, Fresh Start Recipes is here to make cooking affordable and accessible.

![FrestStartRecipes](https://github.com/user-attachments/assets/15724018-4e42-409d-b521-a187c40b3433)



## 📑 Table of Contents

1. [About Fresh Start Recipes](#about-fresh-start-recipes)
2. [Features That Matter 💛](#features-that-matter)
3. [Tech That Powers Fresh Start 🔌](#tech-that-powers-fresh-start)
4. [Getting Started 🛠](#getting-started)
5. [How to Use Fresh Start Recipes 🍽](#how-to-use-fresh-start-recipes)
6. [Project Structure 🔍](#project-structure)
7. [Future Plans 🚀](#future-plans)
8. [Contributing 🤝](#contributing)
9. [Authors 👥](#contributors)

## About Fresh Start Recipes

### Mission

Fresh Start Recipes was created with a mission: to make affordable, nutritious meals accessible for everyone. The app provides budget-friendly recipes with real-time pricing for ingredients available at your local King Soopers, so you know exactly what to expect when you shop.

### Who Is This For?

This app is designed for:

- **The Unhoused Community in Denver**: Affordable meals with easy-to-find ingredients.
- **Newly Housed Individuals**: Recipes for setting up a kitchen on a budget.
- **Anyone Going Through Hard Times**: Reliable, low-cost meal options to ease the stress of grocery shopping.

### Why Mobile Only?

Fresh Start Recipes is crafted as a mobile-only experience because mobile phones are the most accessible devices for our audience. Many unhoused individuals have government-provided phones, and nearly everyone today has access to a mobile device. Creating a mobile-first app allowed us to reach a broad user base without worrying about accessibility limitations on other devices. With Fresh Start Recipes, users can access affordable meal ideas and nearby pricing wherever they are – at the store, in the kitchen, or on the road.

## Features That Matter 💛

- **Flexible Filtering Options**: Filter recipes by a variety of options:

  - **Recipe Name**: Search by specific recipes.
  - **Ingredients Utilized**: Find recipes using specific ingredients.
  - **Price**: Filter to fit your budget.
  - **Serving Quantity**: Choose recipes based on serving size.
  - **Cooking Style**: Select recipes by cooking method (oven, microwave, stove, or no cooking required).
  - **Combine Filters**: Apply multiple filters simultaneously for more refined results, such as ingredient, price, serving quantity, and cooking style all at once.

- **Real-Time Pricing**: Integrated with the Kroger API to provide live prices for each ingredient at King Soopers. By default, all prices are presented based on **King Soopers - Union Station**:

- **Personalized Pricing**: Mark ingredients you already have, and the app will automatically zero out the cost for those items, updating the total price for each recipe that includes them.

- **Simple Ingredients, Simple Meals**: Recipes focus on easy-to-find ingredients and simple steps, making them ideal for beginners.

- **Developer Submission Form**: Chefs and culinary experts with an API key provided by us can submit their own recipe ideas through a developer-friendly form, contributing fresh, budget-friendly meal ideas for the community.

## Tech That Powers Fresh Start 🔌

Here’s what makes Fresh Start Recipes run smoothly:

- **Frontend**: Built with **Next.js** for Server-Side Rendering (SSR), Client & Server Caching, and Prefetching to ensure a fast and seamless experience.
- **Styling**: Leveraged **Tailwind CSS** for a modern and responsive user interface.
- **Backend**: A **Rails API** powers data retrieval and integrates with the Kroger API to provide real-time ingredient pricing.
- **Geolocation & Mapping**:
  - **Mapbox**: Provides an interactive map interface for selecting your nearest King Soopers location.
  - **Google Geocoding**: Locates nearby stores so you can easily find affordable ingredients close to you.


## Getting Started 🛠

1. Clone the repository:
   ```bash
   git clone https://github.com/username/fresh-start-recipes.git
   ```
2. Install frontend and backend dependencies:
   ```bash
   # Frontend
   npm install
   # Backend
   bundle install
   ```
3. Start the app:

   ```bash
   # Start Rails API server
   rails server
   # Start frontend
   npm start
   ```

4. Add your API keys in `.env.local`:
   - **Google Geocoding API Key** for location-based store access.
   - **Mapbox Access Token** for nearby store selection on the map.

## How to Use Fresh Start Recipes 🍽

## How to Use Fresh Start Recipes 🍽

1. **Launch on Mobile**: Access [app URL or localhost link if testing locally] on a mobile device for the best experience.
2. **Filter Recipes or Set Your Store Location**: Start by filtering recipes based on your preferences or by setting your nearest King Soopers location for accurate pricing.
3. **View a Recipe**: Click on a recipe to access the full recipe page, where you’ll find detailed cooking instructions and a list of ingredients.
   - **Store-Specific Pricing**: If you've already set your location, the recipe page will display real-time, store-specific prices for each ingredient.
   - **Set Location Link**: If a location hasn't been set yet, you’ll see a link directing you to the location page. Once you select a store, you’ll be navigated back to the recipe page with updated pricing specific to that store.
     .

## Project Structure 🔍

- **`components`**: Contains reusable UI components, such as recipe cards, store selection interfaces, and other interactive elements.
- **`pages`**: Each file in this folder corresponds to a route in the app. This includes:
  - **API Routes**: Located in `pages/api`, these handle server-side logic, such as fetching recipe data and pricing information.
  - **Static Pages**: Other files serve as the main views for the app (e.g., home, details, location).
- **`context`**: Global context files for managing shared state across the application.
- **`api`**: Contains utility functions for interacting with external APIs (e.g., fetching data from the Kroger API).
- **`public`**: Stores static files like images, icons, and other assets accessible to the app.
- **`styles`**: Contains global and component-specific CSS or Tailwind configuration files (if applicable).
- **`cypress`**: Contains end-to-end tests and testing configurations for ensuring the app works as expected.
## Future Plans 🚀

We’re just getting started! Here’s what’s in store:

- **Offline Support**: Access recipes even without an internet connection.
- **User Accounts**: Save favorite recipes and grocery lists for easy access.
- **Expanded Store Options**: Adding more grocery stores in Denver and beyond.
- **Enhanced Accessibility**: More features for screen readers and voice control to ensure everyone can access our app.

## Contributing 🤝

Fresh Start Recipes is all about community, so contributions are always welcome! We’d love to partner with anyone interested in making affordable, accessible meals available to more people. If you have ideas, feedback, or code to contribute, check out the [issues](#) tab or submit a pull request.

If you’re a chef or culinary enthusiast with recipe ideas, we invite you to reach out to us! By requesting an API key, you’ll gain access to our recipe submission form on the front end, allowing you to share your creations with the Fresh Start Recipes community.

## Authors 👥

Meet the team behind Fresh Start Recipes:

- [John Hill](https://github.com/jphill19)
- [Shane Galvin](https://github.com/Sgalvin36)
- [Lito Croy](https://github.com/litobot)
- [Charles Banks](https://github.com/DRIF7ER)

---

Thank you for choosing Fresh Start Recipes. Here’s to new beginnings and delicious, affordable meals for everyone! 🍲
