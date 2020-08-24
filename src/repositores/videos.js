import { API_URL } from '../config'

const VIDEOS_API_URL = `${API_URL}/videos`

async function save(video) {
  try {
    const response = await fetch(VIDEOS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    })

    if (!response.ok) {
      throw Error()
    }

    const data = await response.json()
    return data
  } catch (err) {
    throw Error(err)
  }
}

export default {
  save,
}
