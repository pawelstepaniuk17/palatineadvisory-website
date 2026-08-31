import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const outcomes = [
  {
    n: '01',
    title: 'Clearer decision habits',
    body: 'What needs a decision, who should make it, who should be heard first, and how the outcome should be recorded.',
  },
  {
    n: '02',
    title: 'Cleaner ownership',
    body: 'Who carries the work, who supports it, where handoffs happen, and when escalation is appropriate.',
  },
  {
    n: '03',
    title: 'A better meeting rhythm',
    body: 'Fewer repeated discussions, clearer purpose for recurring meetings, and better follow-up between conversations.',
  },
  {
    n: '04',
    title: 'A usable record',
    body: 'Short written notes that help the team remember what was decided, what remains open, and what happens next.',
  },
];

export const PracticeAreasSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="practice-areas" className="bg-paper-deep border-t border-ink/85">
      <div className="section-container pt-24 lg:pt-32 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <p className="label-small text-ink/60 mb-5">§ 02, In place</p>
            <h2 className="heading-section text-ink">
              What we help put in place
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 pt-2">
            <p className="body-large text-ink/80">
              The work is practical. It is about making the team's normal
              management habits easier to use.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion list */}
      <div className="border-t border-ink/85">
        {outcomes.map((area, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={area.n} className="border-b border-ink/85 bg-paper">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full section-container py-7 lg:py-8 flex items-center gap-6 lg:gap-10 text-left group hover:bg-buttercream/40 transition-colors"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50 w-8">
                  {area.n}
                </span>
                <h3 className="flex-1 font-serif text-2xl md:text-3xl lg:text-4xl text-ink leading-tight tracking-[-0.015em]">
                  {area.title}
                </h3>
                <div className="flex-shrink-0">
                  {isOpen ? (
                    <Minus className="h-5 w-5 text-ink" strokeWidth={1.5} />
                  ) : (
                    <Plus className="h-5 w-5 text-ink" strokeWidth={1.5} />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-500',
                  isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="section-container pb-10 lg:pb-14">
                  <div className="lg:pl-[72px] max-w-3xl">
                    <p className="body-large text-ink/80">{area.body}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PracticeAreasSection;
