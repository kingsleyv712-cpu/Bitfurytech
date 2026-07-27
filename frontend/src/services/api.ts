export async function getApiHealth() {
  const response = await fetch('/api/health')

  if (!response.ok) {
    throw new Error('Backend unavailable')
  }

  return response.json()
}
