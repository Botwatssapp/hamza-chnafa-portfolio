import { useInView } from '../../hooks/useInView'
import { useLanguage } from '../../i18n/LanguageProvider'
import { AboutIllustration } from './AboutIllustration'
import './About.css'

function EducationMark({ variant }: { variant: 'office' | 'bac' | 'digital' }) {
  return (
    <span className="about-edu-mark" aria-hidden="true">
      {variant === 'office' && (
        <svg viewBox="0 0 24 24" focusable="false">
          <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 9h8M8 13h6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )}
      {variant === 'bac' && (
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M4 10.5 12 7l8 3.5L12 14 4 10.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path d="M7 12.2v4.2c2.2 1.4 7.8 1.4 10 0v-4.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )}
      {variant === 'digital' && (
        <svg viewBox="0 0 24 24" focusable="false">
          <rect x="4" y="6" width="16" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 20h6M12 17v3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )}
    </span>
  )
}

export function About() {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="about"
      className={`about${inView ? ' is-inview' : ''}`}
      aria-labelledby="about-heading"
    >
      <div className="about-inner">
        <header className="about-header">
          <p className="about-eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-heading" className="about-heading">
            {t.about.heading}
          </h2>
        </header>

        <div className="about-visual">
          <AboutIllustration alt={t.about.illustrationAlt} />
        </div>

        <div className="about-content">
          <div className="about-intro">
            <p className="about-statement">{t.about.statement}</p>
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>

          <div className="about-education">
            <h3 className="about-subtitle">{t.about.educationTitle}</h3>
            <ol className="about-edu-list">
              <li className="about-edu-card">
                <EducationMark variant="office" />
                <p className="about-edu-year">{t.about.eduOfficeYear}</p>
                <h4 className="about-edu-title">{t.about.eduOfficeTitle}</h4>
                <p className="about-edu-detail">{t.about.eduOfficeDetail}</p>
              </li>
              <li className="about-edu-card">
                <EducationMark variant="bac" />
                <p className="about-edu-year">{t.about.eduBacYear}</p>
                <h4 className="about-edu-title">{t.about.eduBacTitle}</h4>
                <p className="about-edu-detail">{t.about.eduBacDetail}</p>
              </li>
              <li className="about-edu-card">
                <EducationMark variant="digital" />
                <p className="about-edu-year">{t.about.eduOfpptYear}</p>
                <h4 className="about-edu-title">{t.about.eduOfpptTitle}</h4>
                <p className="about-edu-detail">{t.about.eduOfpptOption}</p>
                <p className="about-edu-institution">{t.about.eduOfpptInstitution}</p>
                <ul className="about-edu-years">
                  <li>{t.about.eduOfpptYear1}</li>
                  <li>{t.about.eduOfpptYear2}</li>
                </ul>
              </li>
            </ol>
          </div>

          <aside className="about-focus">
            <h3 className="about-subtitle">{t.about.focusTitle}</h3>
            <p className="about-focus-role">{t.about.focusRole}</p>
            <p className="about-focus-areas">{t.about.focusAreas}</p>
          </aside>

          <div className="about-journey">
            <h3 className="about-subtitle">{t.about.journeyTitle}</h3>
            <ol className="about-journey-list">
              <li>
                <span className="about-journey-year">{t.about.eduOfficeYear}</span>
                <span className="about-journey-text">{t.about.journeyOffice}</span>
              </li>
              <li>
                <span className="about-journey-year">{t.about.eduBacYear}</span>
                <span className="about-journey-text">{t.about.journeyBac}</span>
              </li>
              <li>
                <span className="about-journey-year">{t.about.eduOfpptYear}</span>
                <span className="about-journey-text">
                  {t.about.journeyOfppt}
                  <small>{t.about.journeyOfpptMeta}</small>
                </span>
              </li>
              <li className="is-next">
                <span className="about-journey-year">{t.about.journeyNextYear}</span>
                <span className="about-journey-text">{t.about.journeyNext}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
