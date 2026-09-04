import { ArrowDown } from 'lucide-react';
import romanArchHero from '@/assets/palatine-hero-arch.jpg';

export const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="pt-[68px] lg:pt-[76px]">
      {/* Top color-block hero, mustard left, painterly right */}
      <div className="grid lg:grid-cols-12">
        {/* Left mustard block */}
        <div className="lg:col-span-7 bg-mustard relative px-8 lg:px-16 py-20 lg:py-28 flex flex-col justify-between min-h-[78vh]">
          <div>
            <h1 className="font-serif text-ink text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.02] tracking-[-0.02em] max-w-3xl">
              Make decisions stick. Eliminate management friction.
            </h1>
          </div>

          <div className="mt-16 max-w-md space-y-4">
            <p className="text-ink/85 text-base leading-relaxed">
              Palatine Advisory works with leadership teams when
              ordinary management work has become harder than it should be.
            </p>
            <p className="text-ink/85 text-base leading-relaxed">
              The issue is usually not one bad meeting, one weak manager, or
              one missing document. It is the way decisions, responsibilities,
              priorities, and follow-up move through the team.
            </p>
            <p className="text-ink/85 text-base leading-relaxed">
              We help make that movement clearer.
            </p>
          </div>
        </div>

        {/* Right full-bleed architectural photograph */}
        <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-[78vh] overflow-hidden bg-paper-deep border-l border-ink/15">
          <img
            src={romanArchHero}
            alt="Palatine Hill morning view overlooking Roman arch and forum"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            width={1280}
            height={1600}
          />
        </div>
      </div>

      {/* Two-column manifesto strip */}
      <div className="grid lg:grid-cols-2">
        <div className="bg-lavender px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-between">
          <p className="font-serif text-2xl md:text-[1.7rem] lg:text-[1.85rem] text-ink leading-[1.25] tracking-[-0.01em] max-w-xl">
            A short note about the recurring management issue is enough to
            start.
          </p>
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:gap-5 transition-all self-start"
          >
            <ArrowDown className="h-4 w-4" />
            Start a conversation
          </button>
        </div>
        <div className="bg-buttercream px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-between">
          <p className="font-serif text-2xl md:text-[1.7rem] lg:text-[1.85rem] text-ink leading-[1.25] tracking-[-0.01em] max-w-xl">
            A short, practical sequence built around the work the team is
            already doing.
          </p>
          <button
            onClick={() => scrollTo('#industries')}
            className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:gap-5 transition-all self-start"
          >
            <ArrowDown className="h-4 w-4" />
            How we work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
