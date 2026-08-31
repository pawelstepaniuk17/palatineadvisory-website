import { ArrowDown } from 'lucide-react';
import atmosphere from '@/assets/hero-atmosphere.png';
import portrait from '@/assets/hero-portrait.png';

export const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="pt-[112px] lg:pt-[120px]">
      {/* Top hero, warm dark editorial block left, atmospheric image right */}
      <div className="grid lg:grid-cols-12">
        {/* Left block */}
        <div className="lg:col-span-7 bg-mustard relative px-8 sm:px-12 lg:px-16 pt-28 sm:pt-32 md:pt-36 pb-16 lg:pb-20 flex flex-col justify-between min-h-[78vh] border-r border-ink/85">
          <div>
            <p className="label-small text-brass mb-8">Olive Tree Consulting Group · Roma</p>
            <h1 className="font-serif text-ink text-[3.25rem] leading-[1.0] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] sm:leading-[1.02] tracking-[-0.02em] text-balance max-w-3xl">
              Make management <em className="not-italic text-brass font-serif italic">easier</em> to hold
            </h1>
          </div>

          <div className="mt-14 max-w-md space-y-4">
            <p className="text-ink/80 text-base leading-relaxed">
              Olive Tree Consulting Group works with leadership teams when
              ordinary management work has become harder than it should be.
            </p>
            <p className="text-ink/80 text-base leading-relaxed">
              The issue is usually not one bad meeting, one weak manager, or
              one missing document. It is the way decisions, responsibilities,
              priorities, and follow-up move through the team.
            </p>
            <p className="text-ink/80 text-base leading-relaxed">
              We help make that movement clearer.
            </p>
          </div>
        </div>

        {/* Right atmospheric image + portrait */}
        <div className="lg:col-span-5 relative bg-paper-deep min-h-[52vh] lg:min-h-[78vh] overflow-hidden">
          <img
            src={atmosphere}
            alt="Advisory boardroom at dusk in a historic building"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            width={1024}
            height={1280}
          />
          {/* Dark gradient scrim for depth and legibility */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-paper via-paper/25 to-paper/40"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center p-10 lg:p-14">
            <div className="border border-brass/40 bg-paper-deep p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] max-w-[300px] w-full">
              <img
                src={portrait}
                alt="Two advisors reviewing a document together"
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
                width={1024}
                height={1280}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 px-2 pt-2.5 pb-1">
                In the room · Advisory
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column manifesto strip */}
      <div className="grid lg:grid-cols-2 border-t border-ink/85">
        <div className="bg-lavender px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-between lg:border-r border-ink/85">
          <p className="font-serif text-2xl md:text-[1.7rem] lg:text-[1.85rem] text-ink leading-[1.25] tracking-[-0.01em] max-w-xl text-balance">
            A short note about the recurring management issue is enough to
            start.
          </p>
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brass hover:gap-5 transition-all self-start"
          >
            <ArrowDown className="h-4 w-4" />
            Start a conversation
          </button>
        </div>
        <div className="bg-buttercream px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-between border-t lg:border-t-0 border-ink/85">
          <p className="font-serif text-2xl md:text-[1.7rem] lg:text-[1.85rem] text-ink leading-[1.25] tracking-[-0.01em] max-w-xl text-balance">
            A short, practical sequence built around the work the team is
            already doing.
          </p>
          <button
            onClick={() => scrollTo('#industries')}
            className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brass hover:gap-5 transition-all self-start"
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
