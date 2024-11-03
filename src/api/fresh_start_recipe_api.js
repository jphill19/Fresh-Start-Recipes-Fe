const endpoint = "http://localhost:3000/api/v1/";

async function recipeFetches(filter) {
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

export default recipeFetches;