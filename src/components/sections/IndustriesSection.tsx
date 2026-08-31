import oliveStill from '@/assets/document-review.png';

const steps = [
  {
    n: '01',
    name: 'Name the issue',
    body: 'We start with the thing that keeps repeating. One decision. One responsibility gap. One meeting rhythm. One priority that does not move cleanly.',
  },
  {
    n: '02',
    name: 'Look at how it currently works',
    body: 'We review the meetings, notes, roles, handoffs, and follow-up habits around that issue.',
  },
  {
    n: '03',
    name: 'Make the pattern clearer',
    body: 'We suggest a practical way to handle the issue with clearer ownership, decision points, meeting purpose, and written follow-up.',
  },
  {
    n: '04',
    name: 'Use it in real work',
    body: 'The team tries the clearer pattern on actual work. We adjust what is too heavy, too vague, or not useful.',
  },
];

export const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-paper border-t border-ink/85">
      <div className="grid lg:grid-cols-12">
        {/* Left intro on lavender */}
        <div className="lg:col-span-5 bg-lavender px-8 lg:px-16 py-20 lg:py-28 border-r border-ink/85 lg:sticky lg:top-0 lg:self-start lg:max-h-screen">
          <p className="label-small text-ink/60 mb-5">§ 03, How it starts</p>
          <h2 className="heading-section text-ink mb-8">
            How the work usually starts
          </h2>
          <p className="body-large text-ink/80 mb-10 max-w-md">
            A short, practical sequence built around the work the team is
            already doing.
          </p>
          <div className="bg-paper-deep border border-brass/40 p-2 max-w-[260px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]">
            <img
              src={oliveStill}
              alt="Reviewing and annotating a printed report"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 px-2 py-1.5">
              Working notes · Method
            </p>
          </div>
        </div>

        {/* Right list */}
        <div className="lg:col-span-7">
          {steps.map((ind, i) => (
            <article
              key={ind.n}
              className={`px-8 lg:px-14 py-10 lg:py-12 ${
                i !== steps.length - 1 ? 'border-b border-ink/85' : ''
              } ${i % 2 === 1 ? 'bg-buttercream/40' : ''}`}
            >
              <div className="flex items-baseline gap-6 mb-5">
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50">
                  {ind.n}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-ink leading-tight tracking-[-0.015em]">
                  {ind.name}
                </h3>
              </div>
              <div className="lg:pl-[44px]">
                <p className="body-base text-ink/80 max-w-2xl">{ind.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
