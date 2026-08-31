import { ArrowDown } from 'lucide-react';
import painterly from '@/assets/painterly-accent.jpg';
import ancientOlive from '@/assets/ancient-olive-tree.jpg';

export const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="pt-[112px] lg:pt-[120px]">
      {/* Top color-block hero, mustard left, painterly right */}
      <div className="grid lg:grid-cols-12">
        {/* Left mustard block */}
        <div className="lg:col-span-7 bg-mustard relative px-8 lg:px-16 py-20 lg:py-28 flex flex-col justify-between min-h-[78vh]">
          <div>
            <h1 className="font-serif text-ink text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.02] tracking-[-0.02em] max-w-3xl">
              Bring clarity to how your team decides
            </h1>
          </div>

          <div className="mt-16 max-w-md space-y-4">
            <p className="text-ink/85 text-base leading-relaxed">
              Olive Tree Consulting Group works with leadership teams when
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

        {/* Right painterly + portrait collage */}
        <div className="lg:col-span-5 relative bg-paper-deep min-h-[78vh] overflow-hidden">
          <img
            src={painterly}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            width={1280}
            height={1280}
          />
          <div className="absolute inset-0 flex items-center justify-center p-10 lg:p-14">
            <div className="bg-paper p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] max-w-[300px] w-full">
              <img
                src={ancientOlive}
                alt="Ancient olive tree at golden hour"
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
                width={1024}
                height={1280}
              />
            </div>
          </div>
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
