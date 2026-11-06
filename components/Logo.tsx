// HEES "he" monogram — vector recreation of the official logo (H stems + "e" bowl).
// Standalone file: /public/logo-mark.svg
export function LogoMark({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={Math.round(size * 0.86)} height={size} viewBox="0 0 86 100" aria-hidden="true">
      <g fill="#00A654">
        <rect x="0" y="0" width="23.5" height="100" rx="1.6" />
        <rect x="62.5" y="0" width="23.5" height="100" rx="1.6" />
        <circle cx="42.5" cy="52" r="37.5" />
      </g>
      <g fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
        <path d="M 23.5 19.7 A 37.5 37.5 0 0 0 23.5 84.3" />
        <path d="M 62.5 20.3 A 37.5 37.5 0 0 1 79.3 44.6" />
        <path d="M 79.7 57 A 37.5 37.5 0 0 1 62.5 83.7" />
        <path d="M 24.5 44.6 H 79.3" />
        <path d="M 24.5 57 H 79.7" />
      </g>
      <path d="M 29 42.6 A 14.3 9.2 0 0 1 57.6 42.6 Z" fill="#1a1a1a" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M 29.5 59 A 14 7.4 0 0 0 57.5 59 Z" fill="#1a1a1a" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ size = 50, href = "#top" }: { size?: number; href?: string }) {
  return (
    <a className="logo" href={href} aria-label="Hydro Environmental & Engineering Services — home">
      <LogoMark size={size} />
      <div>
        <b>HYDRO ENVIRONMENTAL</b>
        <small>&amp; ENGINEERING SERVICES LLC</small>
      </div>
    </a>
  );
}
