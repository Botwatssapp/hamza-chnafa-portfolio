export const CONTACT_ARTWORK_SRC = '/images/contact/contact-developer.webp'

type ContactIllustrationProps = {
  alt: string
}

export function ContactIllustration({ alt }: ContactIllustrationProps) {
  return (
    <figure className="contact-illustration">
      <img
        className="contact-illustration-image"
        src={CONTACT_ARTWORK_SRC}
        alt={alt}
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}
