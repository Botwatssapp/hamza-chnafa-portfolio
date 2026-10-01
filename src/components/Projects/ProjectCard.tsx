import { useInView } from '../../hooks/useInView'
import { ProjectVisual } from './ProjectVisual'

type ProjectCardProps = {
  number: string
  category: string
  title: string
  description: string
  featuresLabel: string
  features: readonly string[]
  techs: readonly string[]
  image: string
  alt: string
  variant: 'industrial' | 'medical'
  reverse: boolean
}

export function ProjectCard({
  number,
  category,
  title,
  description,
  featuresLabel,
  features,
  techs,
  image,
  alt,
  variant,
  reverse,
}: ProjectCardProps) {
  const { ref, inView } = useInView<HTMLElement>(0.18)

  return (
    <article
      ref={ref}
      className={`project${reverse ? ' is-reverse' : ''}${inView ? ' is-inview' : ''}`}
    >
      <div className="project-intro">
        <p className="project-number" aria-hidden="true">
          {number}
        </p>
        <p className="project-category">{category}</p>
        <h3 className="project-title">{title}</h3>
      </div>

      <div className="project-media">
        <ProjectVisual src={image} alt={alt} variant={variant} />
      </div>

      <div className="project-copy">
        <p className="project-description">{description}</p>
        <p className="project-features-label">{featuresLabel}</p>
        <ul className="project-features">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <ul className="project-techs">
          {techs.map((tech) => (
            <li key={tech}>
              <span className="project-chip">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
