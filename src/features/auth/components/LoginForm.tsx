'use client'

import { useTranslations } from 'next-intl'
import { Logo } from '@/shared/components/Logo'
import { Input } from '@/shared/components/Input'
import { Button } from '@/shared/components/Button'
import { useLogin } from '../hooks/useLogin'

export function LoginForm() {
  const t = useTranslations('login')
  const {
    username,
    setUsername,
    password,
    setPassword,
    usernameError,
    passwordError,
    generalError,
    loading,
    handleSubmit
  } = useLogin()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <Logo />
          <h1 className="text-2xl font-bold text-black2 mt-6">{t('loginHere')}</h1>
          <p className="text-gray4 text-sm mt-2">
            {t('enterCredentials')}
          </p>
        </div>

        {generalError && (
          <div className="mb-6 p-4 bg-red-50 border border-red1 rounded-lg">
            <p className="text-sm text-red1">{generalError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label={t('username')}
            placeholder={t('enterUsername')}
            value={username}
            onChange={setUsername}
            error={usernameError}
            required
          />

          <Input
            label={t('password')}
            type="password"
            placeholder={t('enterPassword')}
            value={password}
            onChange={setPassword}
            error={passwordError}
          />

          <Button type="submit" disabled={loading}>
            {loading ? t('loggingIn') : t('login')}
          </Button>
        </form>
      </div>
    </div>
  )
}
