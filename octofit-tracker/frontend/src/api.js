const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export async function fetchCollection(endpoint, { signal } = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, { signal })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const payload = await response.json()
  if (Array.isArray(payload)) {
    return payload
  }

  const records = payload?.results ?? payload?.data ?? payload?.items
  if (Array.isArray(records)) {
    return records
  }

  throw new Error('The API returned an unsupported collection format')
}