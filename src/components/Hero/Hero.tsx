import { useLanguage } from '../../i18n/LanguageProvider'
import { HERO_STACK } from '../../i18n/translations'
import { HeroIllustration } from './HeroIllustration'
import './Hero.css'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-particle hero-particle-1" />
        <span className="hero-particle hero-particle-2" />
        <span className="hero-particle hero-particle-3" />
        <span className="hero-particle hero-particle-4" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-heading" className="hero-title">
            {t.hero.headline}
          </h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href="#projects">
              {t.hero.primaryCta}
            </a>
            <a className="hero-btn hero-btn-secondary" href="#contact">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <HeroIllustration alt={t.hero.illustrationAlt} />
        </div>

        <ul className="hero-stack">
          {HERO_STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a className="hero-scroll" href="#about">
          <span className="hero-scroll-icon" aria-hidden="true" />
          <span>{t.hero.scroll}</span>
        </a>
      </div>
    </section>
  )
}
