import { useInView } from '../../hooks/useInView'
import { useLanguage } from '../../i18n/LanguageProvider'
import { ExperienceVisual } from './ExperienceVisual'
import './Experience.css'

export function Experience() {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLElement>(0.14)

  return (
    <section
      ref={ref}
      id="experience"
      className={`experience${inView ? ' is-inview' : ''}`}
      aria-labelledby="experience-heading"
    >
      <div className="experience-inner">
        <header className="experience-header">
          <p className="experience-eyebrow">{t.experience.eyebrow}</p>
          <h2 id="experience-heading" className="experience-heading">
            {t.experience.heading}
          </h2>
          <p className="experience-description">{t.experience.description}</p>
        </header>

        <div className="experience-media">
          <ExperienceVisual alt={t.experience.illustrationAlt} />
        </div>

        <ol className="experience-timeline">
          <li className="experience-item">
            <div className="experience-rail">
              <p className="experience-year">{t.experience.year}</p>
              <span className="experience-line" aria-hidden="true" />
              <span className="experience-node" aria-hidden="true" />
            </div>

            <article className="experience-card">
              <h3 className="experience-type">{t.experience.type}</h3>
              <p className="experience-company">{t.experience.company}</p>
              <p className="experience-contributions-label">{t.experience.contributionsLabel}</p>
              <ul className="experience-contributions">
                {t.experience.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </li>
        </ol>
      </div>
    </section>
  )
}
