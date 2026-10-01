export const HERO_ARTWORK_SRC = '/images/hero/hero-developer.webp'

type HeroIllustrationProps = {
  alt: string
}

export function HeroIllustration({ alt }: HeroIllustrationProps) {
  return (
    <figure className="hero-illustration">
      <div className="hero-illustration-motion">
        <img
          className="hero-illustration-image"
          src={HERO_ARTWORK_SRC}
          alt={alt}
          width={1600}
          height={900}
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </figure>
  )
}
