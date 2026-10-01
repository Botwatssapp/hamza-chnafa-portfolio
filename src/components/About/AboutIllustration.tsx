export const ABOUT_ARTWORK_SRC = '/images/about/about-developer.webp'

type AboutIllustrationProps = {
  alt: string
}

export function AboutIllustration({ alt }: AboutIllustrationProps) {
  return (
    <figure className="about-illustration">
      <img
        className="about-illustration-image"
        src={ABOUT_ARTWORK_SRC}
        alt={alt}
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}
