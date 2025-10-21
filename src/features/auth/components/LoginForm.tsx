'use client'

import { Logo } from '@/shared/components/Logo'
import { Input } from '@/shared/components/Input'
import { Button } from '@/shared/components/Button'
import { useLogin } from '../hooks/useLogin'

export function LoginForm() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    usernameError,
    passwordError,
    loading,
    handleSubmit
  } = useLogin()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <Logo />
          <h1 className="text-2xl font-bold text-black2 mt-6">INGRESA AQUÍ</h1>
          <p className="text-gray4 text-sm mt-2">
            Ingresa tus credenciales para acceder al sistema
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Usuario"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={setUsername}
            error={usernameError}
            required
          />

          <Input
            label="Contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={setPassword}
            error={passwordError}
          />

          <Button type="submit" disabled={loading}>
            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </form>
      </div>
    </div>
  )
}
