import { useEffect, useId, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageProvider'
import { LOCALES, LOCALE_META, type Locale } from '../../i18n/translations'

type LanguageSelectorProps = {
  variant?: 'dropdown' | 'inline'
}

export function LanguageSelector({ variant = 'dropdown' }: LanguageSelectorProps) {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([])
  const menuId = useId()
  const labelId = useId()

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      const selectedIndex = LOCALES.indexOf(locale)
      optionRefs.current[selectedIndex]?.focus()
    }
  }, [open, locale])

  const selectLocale = (next: Locale) => {
    setLocale(next)
    setOpen(false)
    buttonRef.current?.focus()
  }

  const moveFocus = (currentIndex: number, direction: 1 | -1) => {
    const nextIndex = (currentIndex + direction + LOCALES.length) % LOCALES.length
    optionRefs.current[nextIndex]?.focus()
  }

  if (variant === 'inline') {
    return (
      <div className="language-inline" role="group" aria-labelledby={labelId}>
        <p id={labelId} className="language-inline-label">
          {t.aria.language}
        </p>
        <div className="language-inline-options">
          {LOCALES.map((code) => {
            const meta = LOCALE_META[code]
            const selected = code === locale
            const label = code === 'ar' ? meta.nativeName : meta.code

            return (
              <button
                key={code}
                type="button"
                className={`language-chip${selected ? ' is-active' : ''}`}
                aria-pressed={selected}
                aria-label={`${meta.code} — ${meta.nativeName}`}
                onClick={() => setLocale(code)}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={`language-dropdown${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="language-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t.aria.language}: ${LOCALE_META[locale].nativeName}`}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setOpen(true)
          }
        }}
      >
        <span>{LOCALE_META[locale].code}</span>
        <svg
          className="language-chevron"
          viewBox="0 0 12 12"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M2.25 4.25 6 8l3.75-3.75"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ul
        id={menuId}
        className="language-menu"
        role="listbox"
        aria-label={t.aria.languageMenu}
        hidden={!open}
      >
        {LOCALES.map((code, index) => {
          const meta = LOCALE_META[code]
          const selected = code === locale

          return (
            <li key={code} role="none">
              <button
                ref={(node) => {
                  optionRefs.current[index] = node
                }}
                type="button"
                className={`language-option${selected ? ' is-active' : ''}`}
                role="option"
                aria-selected={selected}
                onClick={() => selectLocale(code)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault()
                    moveFocus(index, 1)
                  }
                  if (event.key === 'ArrowUp') {
                    event.preventDefault()
                    moveFocus(index, -1)
                  }
                  if (event.key === 'Home') {
                    event.preventDefault()
                    optionRefs.current[0]?.focus()
                  }
                  if (event.key === 'End') {
                    event.preventDefault()
                    optionRefs.current[LOCALES.length - 1]?.focus()
                  }
                  if (event.key === 'Tab') {
                    setOpen(false)
                  }
                }}
              >
                <span className="language-option-code">{meta.code}</span>
                <span className="language-option-dash" aria-hidden="true">
                  —
                </span>
                <span className="language-option-name">{meta.nativeName}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
