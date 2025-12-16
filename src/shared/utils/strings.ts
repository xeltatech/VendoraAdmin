import enStrings from '../../../locales/en.json';
import esStrings from '../../../locales/es.json';

type StringsData = typeof enStrings;
type Locale = 'en' | 'es';

const localeData: Record<Locale, StringsData> = {
  en: enStrings,
  es: esStrings,
};

/**
 * Get the current locale from cookies or default to 'es'
 */
function getCurrentLocale(): Locale {
  if (typeof window !== 'undefined') {
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('locale='))
      ?.split('=')[1] as Locale | undefined;
    return cookieLocale || 'es';
  }
  return 'es';
}

/**
 * Get a string from the locales file
 * @param path - Dot-notation path to the string (e.g., 'clientList.title')
 * @param locale - Optional locale override (defaults to current locale)
 * @returns The string value
 */
export function getString(path: string, locale?: Locale): string {
  const currentLocale = locale || getCurrentLocale();
  const stringsData = localeData[currentLocale];
  const keys = path.split('.');
  let result: unknown = stringsData;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      console.warn(`String not found for path: ${path} in locale: ${currentLocale}`);
      return path;
    }
  }

  if (typeof result === 'string') {
    return result;
  }

  console.warn(`Path ${path} does not point to a string value in locale: ${currentLocale}`);
  return path;
}

/**
 * Get a string from the locales file and replace placeholders
 * @param path - Dot-notation path to the string
 * @param replacements - Object with placeholder replacements
 * @param locale - Optional locale override (defaults to current locale)
 * @returns The string value with replacements
 */
export function getFormattedString(
  path: string,
  replacements: Record<string, string | number>,
  locale?: Locale
): string {
  let result = getString(path, locale);

  Object.entries(replacements).forEach(([key, value]) => {
    result = result.replace(`{${key}}`, String(value));
  });

  return result;
}

/**
 * Get strings data for a specific locale
 * @param locale - The locale to get strings for (defaults to current locale)
 */
export function getStringsData(locale?: Locale): StringsData {
  const currentLocale = locale || getCurrentLocale();
  return localeData[currentLocale];
}

// Convenience exports for commonly used string sections
export const strings = {
  get: getString,
  format: getFormattedString,
  getData: getStringsData,
};
