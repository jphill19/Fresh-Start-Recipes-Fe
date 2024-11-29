// Centralized Endpoint Configuration
// const BASE_URL = "https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/";
const BASE_URL ="http://localhost:3001/api/v1/";

export async function recipeFetches(filter) {
  const url = `${BASE_URL}recipes?${filter}`;
  try {
    const response = await fetch(url, {
      mode: 'cors'
    });
    console.log("response", response.body)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export async function ingredientFilter(filter, params = 'for_ingredient=') {
  const url = `${BASE_URL}ingredients?${params}${filter}`;
  try {
    const response = await fetch(url, {
      mode: 'cors'
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export async function recipePost(fullDetails, apiKey) {
  console.log('post_submit', fullDetails);
  const url = `${BASE_URL}recipe_builders`;
  const metaData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': apiKey
    },
    body: JSON.stringify(fullDetails),
    mode: 'cors'
  };

  try {
    const response = await fetch(url, metaData);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log('error', error);
    console.error('Fetch error:', error);
    throw error;
  }
}

export async function locationFetch(lat, long) {
  const url = `${BASE_URL}locations?lat=${lat}&long=${long}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Fetch error: ${errorData.message} (Status: ${errorData.status})`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function recipeDetailsFetches(recipeId, locationId = null) {
  let url = `${BASE_URL}recipes/${recipeId}`;
  if (locationId) {
    url += `?by_location=${locationId}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
