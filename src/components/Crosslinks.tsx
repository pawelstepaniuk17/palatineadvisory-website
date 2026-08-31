import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CrosslinkItem {
  label: string;
  to: string;
  caption: string;
  bg?: 'lavender' | 'mustard' | 'buttercream' | 'sage-mist' | 'paper-deep';
}

interface CrosslinksProps {
  heading?: string;
  items: CrosslinkItem[];
}

const bgMap = {
  lavender: 'bg-lavender',
  mustard: 'bg-mustard',
  buttercream: 'bg-buttercream',
  'sage-mist': 'bg-sage-mist',
  'paper-deep': 'bg-paper-deep',
} as const;

export const Crosslinks = ({ heading = 'Continue reading', items }: CrosslinksProps) => {
  return (
    <section className="bg-paper border-t border-ink/85">
      <div className="section-container pt-16 pb-6">
        <p className="label-small text-ink/55">{heading}</p>
      </div>
      <div className="grid md:grid-cols-3 border-t border-ink/85">
        {items.map((it, i) => (
          <Link
            key={it.to}
            to={it.to}
            className={`${bgMap[it.bg ?? 'paper-deep']} px-8 lg:px-10 py-12 lg:py-14 border-ink/85 ${i !== items.length - 1 ? 'md:border-r' : ''} group hover:bg-mustard transition-colors duration-500 flex flex-col justify-between min-h-[260px]`}
          >
            <div>
              <p className="label-small text-ink/55 mb-5">{it.caption}</p>
              <h3 className="font-serif text-2xl md:text-[1.6rem] text-ink leading-[1.15] tracking-[-0.015em]">
                {it.label}
              </h3>
            </div>
            <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink group-hover:gap-5 transition-all">
              <span>Read</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Crosslinks;
