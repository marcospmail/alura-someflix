import { API_URL } from '../config'

const CATEGORIES_API_URL = `${API_URL}/categories`

function getAll() {
  return fetch(CATEGORIES_API_URL).then((response) => response.json())
}

function getAllWithVideos() {
  const CATEGORIES_WITH_VIDEOS_API_URL = `${CATEGORIES_API_URL}?_embed=videos`
  return fetch(CATEGORIES_WITH_VIDEOS_API_URL).then((response) => response.json())
}

async function save(category) {
  const response = await fetch(CATEGORIES_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  })

  const parsedResponse = await response.json()
  return parsedResponse
}

async function remove(category) {
  const DELETE_CATEGORY_API_URL = `${CATEGORIES_API_URL}/${category.id}`

  const response = await fetch(DELETE_CATEGORY_API_URL, {
    method: 'DELETE',
    body: JSON.stringify(category),
  })

  if (!response.ok) {
    throw new Error()
  }

  const parsedResponse = await response.json()
  return parsedResponse
}

export default {
  getAll,
  getAllWithVideos,
  save,
  remove,
}
