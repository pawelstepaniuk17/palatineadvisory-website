// Hand-drawn-feel SVG ornaments and marginalia for editorial use.

export const OliveBranchMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 56 C 18 40, 30 30, 56 12" />
    <ellipse cx="20" cy="42" rx="5" ry="2.4" transform="rotate(-32 20 42)" />
    <ellipse cx="28" cy="34" rx="5" ry="2.4" transform="rotate(-32 28 34)" />
    <ellipse cx="36" cy="26" rx="5" ry="2.4" transform="rotate(-32 36 26)" />
    <ellipse cx="44" cy="18" rx="5" ry="2.4" transform="rotate(-32 44 18)" />
    <ellipse cx="14" cy="48" rx="5" ry="2.4" transform="rotate(150 14 48)" />
    <ellipse cx="22" cy="40" rx="5" ry="2.4" transform="rotate(150 22 40)" />
    <ellipse cx="30" cy="32" rx="5" ry="2.4" transform="rotate(150 30 32)" />
    <ellipse cx="38" cy="24" rx="5" ry="2.4" transform="rotate(150 38 24)" />
    <circle cx="50" cy="20" r="1.6" />
    <circle cx="42" cy="28" r="1.6" />
    <circle cx="34" cy="36" r="1.6" />
  </svg>
);

export const OrnamentRule = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 12" className={className} fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round">
    <line x1="0" y1="6" x2="86" y2="6" />
    <circle cx="92" cy="6" r="1.5" />
    <path d="M96 6 q 4 -4, 8 0 q 4 4, 8 0" />
    <circle cx="116" cy="6" r="1.5" />
    <line x1="122" y1="6" x2="200" y2="6" />
  </svg>
);

export const NumeralMark = ({ n, className = '' }: { n: string; className?: string }) => (
  <span className={`inline-flex items-center justify-center w-9 h-9 border border-ink/40 font-mono text-[11px] tracking-[0.15em] text-ink ${className}`}>
    {n}
  </span>
);

export default OliveBranchMark;
