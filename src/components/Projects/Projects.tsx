import { useInView } from '../../hooks/useInView'
import { useLanguage } from '../../i18n/LanguageProvider'
import { PROJECTS_META } from '../../i18n/translations'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  const { t } = useLanguage()
  const { ref, inView } = useInView<HTMLElement>(0.12)

  const copy = {
    industrial: {
      category: t.projects.industrialCategory,
      title: t.projects.industrialTitle,
      description: t.projects.industrialDescription,
      features: t.projects.industrialFeatures,
      alt: t.projects.industrialAlt,
    },
    medical: {
      category: t.projects.medicalCategory,
      title: t.projects.medicalTitle,
      description: t.projects.medicalDescription,
      features: t.projects.medicalFeatures,
      alt: t.projects.medicalAlt,
    },
  }

  return (
    <section
      ref={ref}
      id="projects"
      className={`projects${inView ? ' is-inview' : ''}`}
      aria-labelledby="projects-heading"
    >
      <div className="projects-inner">
        <header className="projects-header">
          <p className="projects-eyebrow">{t.projects.eyebrow}</p>
          <h2 id="projects-heading" className="projects-heading">
            {t.projects.heading}
          </h2>
          <p className="projects-description">{t.projects.description}</p>
        </header>

        <div className="projects-list">
          {PROJECTS_META.map((project) => (
            <ProjectCard
              key={project.id}
              number={project.number}
              category={copy[project.id].category}
              title={copy[project.id].title}
              description={copy[project.id].description}
              featuresLabel={t.projects.featuresLabel}
              features={copy[project.id].features}
              techs={project.techs}
              image={project.image}
              alt={copy[project.id].alt}
              variant={project.id}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
