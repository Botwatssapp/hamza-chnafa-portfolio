type ProjectVisualProps = {
  src: string
  alt: string
  variant: 'industrial' | 'medical'
}

export function ProjectVisual({ src, alt, variant }: ProjectVisualProps) {
  return (
    <figure className={`project-visual project-visual-${variant}`}>
      <img
        className="project-visual-image"
        src={src}
        alt={alt}
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}
