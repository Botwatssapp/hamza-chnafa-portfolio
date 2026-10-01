import { useInView } from '../../hooks/useInView'
import { useLanguage } from '../../i18n/LanguageProvider'
import { SKILL_TECH_GROUPS } from '../../i18n/translations'
import { SkillsIllustration } from './SkillsIllustration'
import './Skills.css'

export function Skills() {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLElement>(0.12)

  const groups = [
    {
      id: 'frontend',
      title: t.skills.frontendTitle,
      description: t.skills.frontendDescription,
      items: [...SKILL_TECH_GROUPS[0].items],
    },
    {
      id: 'backend',
      title: t.skills.backendTitle,
      description: t.skills.backendDescription,
      items: [...SKILL_TECH_GROUPS[1].items],
    },
    {
      id: 'database',
      title: t.skills.databaseTitle,
      description: t.skills.databaseDescription,
      items: [...SKILL_TECH_GROUPS[2].items],
    },
    {
      id: 'development',
      title: t.skills.developmentTitle,
      description: t.skills.developmentDescription,
      items: [...t.skills.developmentItems],
    },
  ]

  return (
    <section
      ref={ref}
      id="skills"
      className={`skills${inView ? ' is-inview' : ''}`}
      aria-labelledby="skills-heading"
    >
      <div className="skills-inner">
        <div className="skills-intro">
          <p className="skills-eyebrow">{t.skills.eyebrow}</p>
          <h2 id="skills-heading" className="skills-heading">
            {t.skills.heading}
          </h2>
          <p className="skills-description">{t.skills.description}</p>
        </div>

        <div className="skills-visual">
          <SkillsIllustration alt={t.skills.illustrationAlt} />
        </div>

        <div className="skills-groups">
          {groups.map((group) => (
            <article key={group.id} className={`skills-card skills-card-${group.id}`}>
              <h3 className="skills-card-title">{group.title}</h3>
              <p className="skills-card-copy">{group.description}</p>
              <ul className="skills-chips">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skills-chip">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
