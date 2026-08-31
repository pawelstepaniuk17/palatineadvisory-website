import painterly from '@/assets/band-texture.png';

interface SectionDividerProps {
  height?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const SectionDivider = ({ height = 'md', label }: SectionDividerProps) => {
  const h = height === 'sm' ? 'h-20 lg:h-24' : height === 'lg' ? 'h-40 lg:h-56' : 'h-28 lg:h-36';
  return (
    <div
      className={`${h} relative bg-cover bg-center border-y border-ink/85`}
      style={{ backgroundImage: `url(${painterly})` }}
      aria-hidden={!label}
    >
      {label && (
        <div className="absolute inset-0 flex items-end justify-center pb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink bg-paper/90 px-3 py-1.5">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export default SectionDivider;
