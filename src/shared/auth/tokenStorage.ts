'use client'

const ACCESS_TOKEN_KEY = 'accessToken'
const REFRESH_TOKEN_KEY = 'refreshToken'
const USER_KEY = 'user'

export const tokenStorage = {
  setAccessToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(ACCESS_TOKEN_KEY, token)
    }
  },

  getAccessToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(ACCESS_TOKEN_KEY)
    }
    return null
  },

  setRefreshToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(REFRESH_TOKEN_KEY, token)
    }
  },

  getRefreshToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(REFRESH_TOKEN_KEY)
    }
    return null
  },

  setUser: (user: unknown) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(USER_KEY, JSON.stringify(user))
    }
  },

  getUser: (): unknown | null => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem(USER_KEY)
      return user ? JSON.parse(user) : null
    }
    return null
  },

  clearTokens: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ACCESS_TOKEN_KEY)
      localStorage.removeItem(REFRESH_TOKEN_KEY)
      localStorage.removeItem(USER_KEY)
    }
  },

  isAuthenticated: (): boolean => {
    return !!tokenStorage.getAccessToken()
  }
}
