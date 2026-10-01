type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={`logo-mark${className ? ` ${className}` : ''}`} aria-hidden="true">
      <span className="logo-mark-letters">HC</span>
    </span>
  )
}
