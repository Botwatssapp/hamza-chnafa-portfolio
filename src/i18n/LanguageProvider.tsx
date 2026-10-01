import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  detectInitialLocale,
  LOCALE_META,
  storeLocale,
  translations,
  type Direction,
  type Locale,
} from './translations'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof translations)[Locale]
  dir: Direction
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const SITE_URL = 'https://hamza-chnafa-portfolio.vercel.app/'

function applyDocumentLocale(locale: Locale) {
  const meta = LOCALE_META[locale]
  const copy = translations[locale]

  document.documentElement.lang = meta.htmlLang
  document.documentElement.dir = meta.dir
  document.title = copy.document.title

  upsertMeta('name', 'description', copy.document.description)
  upsertMeta('name', 'twitter:title', copy.document.title)
  upsertMeta('name', 'twitter:description', copy.document.description)
  upsertMeta('property', 'og:url', SITE_URL)
  upsertMeta('property', 'og:title', copy.document.title)
  upsertMeta('property', 'og:description', copy.document.description)
  upsertMeta('property', 'og:locale', meta.ogLocale)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const initial = detectInitialLocale()
    applyDocumentLocale(initial)
    return initial
  })

  useEffect(() => {
    applyDocumentLocale(locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    storeLocale(next)
    applyDocumentLocale(next)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      dir: LOCALE_META[locale].dir,
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
