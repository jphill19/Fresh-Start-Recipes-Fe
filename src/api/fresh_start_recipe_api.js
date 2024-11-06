// https://whispering-thicket-76959-66145e05673c.herokuapp.com/
export async function recipeFetches(filter) {
  const endpoint = "https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/";
  const url = `${endpoint}recipes?${filter}`;
  console.log("url: ", url)
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

export async function ingredientFilter(filter, params='for_ingredient=') {
  const endpoint = "https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/ingredients?"
  const url = `${endpoint}${params}${filter}`;
  console.log("url: ", url)
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

export async function recipePost(fullDetails) {
  const endpoint = "https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipe_builder"
  const metaData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fullDetails)
  }

  try {
    const response = await fetch(endpoint, metaData);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}



