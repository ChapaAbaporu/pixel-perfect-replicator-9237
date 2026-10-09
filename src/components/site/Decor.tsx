type P = { className?: string };

export function Sun({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="var(--brand-yellow)">
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={i} d="M60 4 L66 24 L54 24 Z" transform={`rotate(${i * 30} 60 60)`} />
        ))}
        <circle cx="60" cy="60" r="28" />
      </g>
    </svg>
  );
}

export function Cactus({ className }: P) {
  return (
    <svg viewBox="0 0 100 160" className={className} aria-hidden="true">
      <g fill="var(--brand-green)">
        <rect x="40" y="20" width="22" height="140" rx="11" />
        <path d="M40 90 H24 a10 10 0 0 1 -10 -10 V50 a8 8 0 0 1 16 0 V74 H40 Z" />
        <path d="M62 70 H76 V40 a8 8 0 0 1 16 0 V66 a14 14 0 0 1 -14 14 H62 Z" />
      </g>
    </svg>
  );
}

export function Leaf({ className }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M10 90 C10 40 40 10 90 10 C90 60 60 90 10 90 Z" fill="currentColor" />
    </svg>
  );
}

export function Blob({ className }: P) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        d="M44.7,-58.3C57.3,-49.6,66.6,-35.4,71.1,-19.6C75.6,-3.8,75.3,13.7,68.1,27.9C60.9,42.1,46.8,53,31.2,60.6C15.6,68.2,-1.6,72.5,-18.9,69.6C-36.2,66.7,-53.7,56.6,-63.9,41.6C-74.1,26.6,-77,6.7,-72.4,-10.6C-67.8,-27.9,-55.7,-42.6,-41.6,-51.1C-27.5,-59.6,-13.7,-61.9,1.3,-63.5C16.4,-65.1,32.1,-67,44.7,-58.3Z"
        transform="translate(100 100)"
        fill="currentColor"
      />
    </svg>
  );
}
