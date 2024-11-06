
export async function recipeFetches(filter) {
  const endpoint = "http://localhost:3000/api/v1/";
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

export async function ingredientFilter(filter) {
  const endpoint = "http://localhost:3000/api/v1/ingredients?for_ingredient="
  const url = `${endpoint}${filter}`;
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

export async function locationFetch(lat, long) {
  const endpoint = "http://localhost:3000/api/v1/locations";
  const url = `${endpoint}?lat=${lat}&long=${long}`;
  console.log("url:", url);
  try {
    const response = await fetch(url);

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
