import { useEffect, useId, useRef, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { useLanguage } from '../../i18n/LanguageProvider'
import { NAV_IDS } from '../../i18n/translations'
import { LanguageSelector } from './LanguageSelector'
import { Logo } from './Logo'
import './Navbar.css'

export function Navbar() {
  const { t } = useLanguage()
  const scrolled = useScrolled()
  const activeId = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.body.classList.toggle('is-nav-locked', menuOpen)
    return () => document.body.classList.remove('is-nav-locked')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const getFocusable = () => {
      if (!headerRef.current) return []
      return Array.from(
        headerRef.current.querySelectorAll<HTMLElement>(
          '.navbar-toggle, .navbar-mobile a[href], .navbar-mobile button:not([disabled])',
        ),
      )
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = getFocusable()
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const onResize = () => {
      if (window.matchMedia('(min-width: 900px)').matches) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      ref={headerRef}
      className={`navbar${scrolled || menuOpen ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}
    >
      <div className="navbar-inner">
        <a className="navbar-brand" href="#home" aria-label={t.aria.home} onClick={closeMenu}>
          <Logo />
          <span className="navbar-name">Hamza Chnafa</span>
        </a>

        <nav className="navbar-desktop" aria-label={t.aria.mainNav}>
          <ul className="navbar-links">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  className="navbar-link"
                  href={`#${id}`}
                  aria-current={activeId === id ? 'page' : undefined}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <div className="navbar-language-desktop">
            <LanguageSelector />
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="navbar-toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? t.aria.closeMenu : t.aria.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        className="navbar-mobile"
        id={menuId}
        {...(!menuOpen ? { inert: true } : {})}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar-mobile-panel" aria-label={t.aria.mainNav}>
          <ul className="navbar-mobile-links">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  className="navbar-link navbar-mobile-link"
                  href={`#${id}`}
                  aria-current={activeId === id ? 'page' : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSelector variant="inline" />
        </nav>
      </div>
    </header>
  )
}
