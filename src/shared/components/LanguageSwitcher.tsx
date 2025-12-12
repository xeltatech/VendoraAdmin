'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en'

    // Save to cookie
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000` // 1 year

    // Update document language
    document.documentElement.lang = newLocale

    // Reload to apply new locale
    router.refresh()
  }

  return (
    <button
      onClick={toggleLanguage}
      className='fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full bg-blue1 px-4 py-3 text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue1 focus:ring-offset-2'
      aria-label='Switch language'
    >
      <span className='text-xl'>🌐</span>
      <span className='font-medium'>
        {locale === 'en' ? 'Español' : 'English'}
      </span>
    </button>
  )
}
