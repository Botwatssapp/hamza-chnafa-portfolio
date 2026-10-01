export const EXPERIENCE_ARTWORK_SRC = '/images/experience/experience-developer.webp'

type ExperienceVisualProps = {
  alt: string
}

export function ExperienceVisual({ alt }: ExperienceVisualProps) {
  return (
    <figure className="experience-visual">
      <img
        className="experience-visual-image"
        src={EXPERIENCE_ARTWORK_SRC}
        alt={alt}
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}
