// https://whispering-thicket-76959-66145e05673c.herokuapp.com/
export async function recipeFetches(filter) {
  const endpoint =
    'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/'
  const url = `${endpoint}recipes?${filter}`
  try {
    const response = await fetch(url, {
      mode: 'cors'
    })
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function ingredientFilter(filter, params = 'for_ingredient=') {
  const endpoint =
    'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/ingredients?'
  const url = `${endpoint}${params}${filter}`
  try {
    const response = await fetch(url, {
      mode: 'cors'
    })
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function recipePost(fullDetails, apiKey) {
  console.log('post_submit', fullDetails)
  const endpoint =
    'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/recipe_builders'
  const metaData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: apiKey
    },
    body: JSON.stringify(fullDetails),
    mode: 'cors'
  }

  try {
    const response = await fetch(endpoint, metaData)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
      console.log('response', response)
    }
    return await response.json()
  } catch (error) {
    console.log('error', error)
    console.error('Fetch error:', error)
    throw error
  }
}

export async function locationFetch(lat, long) {
  const endpoint =
    'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/locations'
  const url = `${endpoint}?lat=${lat}&long=${long}`
  try {
    const response = await fetch(url, { mode: 'cors' })
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        `Fetch error: ${errorData.message} (Status: ${errorData.status})`
      )
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function recipeDetailsFetches(recipeId, locationId = null) {
  const endpoint =
    'https://whispering-thicket-76959-66145e05673c.herokuapp.com/api/v1/'
  let url = `${endpoint}recipes/${recipeId}`

  if (locationId) {
    url += `?by_location=${locationId}`
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
