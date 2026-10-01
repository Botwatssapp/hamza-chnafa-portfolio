export const SKILLS_ARTWORK_SRC = '/images/skills/skills-developer.webp'

type SkillsIllustrationProps = {
  alt: string
}

export function SkillsIllustration({ alt }: SkillsIllustrationProps) {
  return (
    <figure className="skills-illustration">
      <img
        className="skills-illustration-image"
        src={SKILLS_ARTWORK_SRC}
        alt={alt}
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}
