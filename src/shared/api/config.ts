import { OpenAPI } from './vendora-api'

// Configure the base URL for the API
OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

// Configure interceptors for authentication
OpenAPI.TOKEN = async () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken')
    return token || ''
  }
  return ''
}

// Configure error handling
OpenAPI.HEADERS = async () => {
  return {
    'Content-Type': 'application/json'
  }
}

export { OpenAPI }
