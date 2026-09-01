import { ArrowUpRight } from 'lucide-react';

export const InsightsSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="insights" className="bg-paper border-t border-ink/85">
      {/* Closing CTA */}
      <div className="section-container pt-20 lg:pt-28 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="label-small text-ink/60 mb-5">§ 05, Begin</p>
            <h2 className="heading-section text-ink mb-8">
              Start with the recurring issue
            </h2>
            <p className="body-large text-ink/80 max-w-xl mb-10">
              Send a short note about the management issue that keeps
              returning. The first conversation is used to understand
              whether Palatine Advisory is the right fit.
            </p>
            <button
              onClick={() => scrollTo('#contact')}
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink border-b border-ink/30 pb-2 hover:gap-5 transition-all"
            >
              <span>Contact Palatine Advisory</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
