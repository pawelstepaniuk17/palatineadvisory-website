const problems = [
  {
    n: '01',
    title: 'Decisions come back again',
    body: 'A decision is discussed, agreed, and then reopened later because no one is quite sure what was decided, who owns it, or when it should be reviewed.',
  },
  {
    n: '02',
    title: 'Priorities become too many things',
    body: 'The team agrees on what matters, but the work spreads in different directions. People stay busy, but the order of work becomes unclear.',
  },
  {
    n: '03',
    title: 'Responsibility is assumed',
    body: 'Several people are involved, but ownership is not plain enough. Work moves only when someone pushes it personally.',
  },
  {
    n: '04',
    title: 'Meetings carry too much',
    body: 'Meetings become the place where updates, decisions, reminders, escalations, and unresolved questions all compete for attention.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="bg-paper">
      {/* Section opener */}
      <div className="section-container pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="label-small text-ink/60 mb-5">§ 01, When useful</p>
            <h2 className="heading-section text-ink">
              When Olive Tree is useful
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 pt-2">
            <p className="body-large text-ink/80 mb-6">
              We are usually brought in when the same management issue keeps
              coming back, even though people are already trying to handle
              it.
            </p>
          </div>
        </div>
      </div>

      {/* Problem cards */}
      <div className="border-t border-ink/85">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <div
              key={p.n}
              className={`px-8 lg:px-12 py-12 lg:py-16 border-ink/85 ${
                i < problems.length - 1 ? 'lg:border-r' : ''
              } ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b md:border-b lg:border-b-0' : ''}`}
            >
              <div className="flex items-baseline gap-6 mb-5">
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50">
                  {p.n}
                </span>
                <h3 className="font-serif text-2xl md:text-[1.55rem] text-ink leading-tight">
                  {p.title}
                </h3>
              </div>
              <p className="body-base text-ink/70 max-w-md">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
