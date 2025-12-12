'use client'

import { useState } from 'react'
import { AuthService } from '@/shared/api/vendora-api'
import { tokenStorage } from '@/shared/auth/tokenStorage'
import '@/shared/api/config'

export function useLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [generalError, setGeneralError] = useState('')
  const [loading, setLoading] = useState(false)

  const validateForm = () => {
    let isValid = true

    if (!username) {
      setUsernameError('Este campo es obligatorio')
      isValid = false
    } else {
      setUsernameError('')
    }

    if (!password) {
      setPasswordError('Este campo es obligatorio')
      isValid = false
    } else {
      setPasswordError('')
    }

    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError('')

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      /*const response = await AuthService.authControllerLogin({
        requestBody: {
          email: username,
          password: password
        }
      })

      // Store tokens and user data
      tokenStorage.setAccessToken(response.accessToken)
      tokenStorage.setRefreshToken(response.refreshToken)
      tokenStorage.setUser(response.user)*/

      tokenStorage.setAccessToken('aqui-va-el-token-de-acceso')
      tokenStorage.setRefreshToken('aqui-va-el-token-de-refresh')
      tokenStorage.setUser({ id: '1', email: username, name: 'Usuario de Ejemplo' })

      // Redirect to home on success
      window.location.href = '/home'
    } catch (error: unknown) {
      console.error('Login error:', error)
      const apiError = error as { status?: number }

      if (apiError.status === 401) {
        setGeneralError('Credenciales inválidas. Por favor, verifica tu usuario y contraseña.')
      } else {
        setGeneralError('Error al iniciar sesión. Por favor, intenta de nuevo.')
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    usernameError,
    passwordError,
    generalError,
    loading,
    handleSubmit
  }
}
