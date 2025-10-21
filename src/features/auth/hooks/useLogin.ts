'use client'

import { useState } from 'react'

export function useLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
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

    if (!validateForm()) {
      return
    }

    setLoading(true)
    // Add login logic here
    console.log('Login:', { username, password })

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Redirect to home on success
      window.location.href = '/home'
    }, 1000)
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    usernameError,
    passwordError,
    loading,
    handleSubmit
  }
}
