import { getRequestConfig } from 'next-intl/server'
import { headers } from 'next/headers'

export default getRequestConfig(async () => {
  // Get locale from cookie or default to 'es'
  const headersList = await headers()
  const cookieLocale = headersList.get('cookie')?.match(/locale=([^;]+)/)?.[1]
  const locale = cookieLocale || 'es'

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default
  }
})
