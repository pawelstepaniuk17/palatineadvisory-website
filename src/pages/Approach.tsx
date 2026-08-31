import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Crosslinks from '@/components/Crosslinks';
import SectionDivider from '@/components/SectionDivider';
import desk from '@/assets/desk-notebook.jpg';

const steps = [
  {
    n: '01',
    title: 'Start with one repeated issue',
    body: 'We begin with a specific issue the team can name. It may be a decision that keeps reopening, a responsibility gap, a meeting that does not create closure, or a priority that does not move cleanly.',
    deliverables: 'A short statement of the issue and why it keeps returning.',
  },
  {
    n: '02',
    title: 'Read the current pattern',
    body: 'We look at the meetings, notes, roles, handoffs, escalation habits, and follow-up routines around the issue.',
    deliverables: 'A plain map of how the issue currently moves through the team.',
  },
  {
    n: '03',
    title: 'Make the management pattern clearer',
    body: 'We define what needs to change. This may be ownership, decision rights, meeting purpose, review cadence, escalation, or written follow-up.',
    deliverables: 'A practical structure the team can test.',
  },
  {
    n: '04',
    title: 'Support the first use',
    body: 'The team uses the clearer structure on real work. We help adjust anything that is too complicated, too vague, or not useful in practice.',
    deliverables: 'A working rhythm the team can continue.',
  },
];

const receive = [
  'A clear description of the recurring issue',
  'A plain map of the current management pattern',
  'Practical written recommendations',
  'Decision, responsibility, or meeting structure where needed',
  'First-cycle support',
  'A simple record the team can keep using',
];

const avoid = [
  'Long presentations that do not change how work is managed',
  'New terminology for ordinary problems',
  'Broad transformation language',
  'Unnecessary workshops',
  'Advice that depends on permanent outside support',
  'Recommendations that add more management work than they remove',
];

const Approach = () => {
  return (
    <>
      <Helmet>
        <title>How We Work | Olive Tree Consulting Group</title>
        <meta name="description" content="Olive Tree uses a simple advisory process. We look at how the work currently moves, make the unclear parts visible, and help the team put a cleaner pattern in place." />
        <link rel="canonical" href="https://olive-tree-consulting.com/approach" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Approach"
            title="How we work"
            lede="Olive Tree uses a simple advisory process. We look at how the work currently moves, make the unclear parts visible, and help the team put a cleaner pattern in place."
            background="lavender"
          />

          {/* Steps */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20">
              <div className="grid lg:grid-cols-12 gap-10 mb-16">
                <div className="lg:col-span-7">
                  <p className="label-small text-ink/60 mb-5">§ The engagement</p>
                  <h2 className="heading-section text-ink">Four steps, kept practical.</h2>
                </div>
                <div className="lg:col-span-4 lg:col-start-9 self-end">
                  <p className="body-base text-ink/70">Each step produces something the team can use before the next one begins.</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border-t border-ink/85">
              {steps.map((p, i) => (
                <article key={p.n} className={`px-8 lg:px-14 py-16 lg:py-20 border-ink/85 ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b' : ''} ${i === 0 ? 'bg-mustard' : i === 1 ? 'bg-buttercream' : i === 2 ? 'bg-sage-mist' : 'bg-lavender'}`}>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-ink/65 mb-8">Step {p.n}</p>
                  <h3 className="font-serif text-3xl lg:text-[2.25rem] text-ink leading-[1.05] mb-6 tracking-[-0.02em]">{p.title}</h3>
                  <p className="body-base text-ink/80 mb-8 max-w-md">{p.body}</p>
                  <div className="border-t border-ink/30 pt-5">
                    <p className="label-small text-ink/55 mb-2">What we produce</p>
                    <p className="text-sm text-ink/75">{p.deliverables}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Diagram */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-28">
              <div className="grid lg:grid-cols-12 gap-10 mb-12">
                <div className="lg:col-span-6">
                  <p className="label-small text-ink/60 mb-5">§ A diagram of the work</p>
                  <h2 className="heading-section text-ink">From issue to working rhythm.</h2>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 self-end">
                  <p className="body-base text-ink/70">The arc of an engagement: name the issue, see how it moves today, design what needs to change, and support the team while it uses the new structure for the first time.</p>
                </div>
              </div>
              <div className="border border-ink/30 bg-buttercream/30 p-8 lg:p-14">
                <ProcessDiagram />
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* What clients receive + image */}
          <section className="grid lg:grid-cols-12 border-b border-ink/85">
            <div className="lg:col-span-5 relative min-h-[460px]">
              <img src={desk} alt="A leather notebook on a wooden desk" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={1600} />
            </div>
            <div className="lg:col-span-7 bg-paper px-8 lg:px-14 py-20 border-l border-ink/85">
              <p className="label-small text-ink/60 mb-5">§ What the client receives</p>
              <h2 className="heading-section text-ink mb-12">What the client receives</h2>
              <ul className="space-y-5 max-w-2xl">
                {receive.map((item, i) => (
                  <li key={i} className="border-t border-ink/20 pt-4 flex gap-5">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50 pt-1">{String(i + 1).padStart(2, '0')}</span>
                    <p className="font-serif text-lg text-ink/85 leading-snug">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* What we avoid */}
          <section className="bg-paper-deep border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-10 mb-12">
                <div className="lg:col-span-6">
                  <p className="label-small text-ink/60 mb-5">§ What we avoid</p>
                  <h2 className="heading-section text-ink">What we avoid</h2>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 border-t border-ink/30 pt-8">
                {avoid.map((item, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50 pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                    <p className="font-serif text-lg text-ink/80 leading-snug">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Closing */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-28">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6">
                  <p className="label-small text-ink/60 mb-5">§ When it is done</p>
                  <h2 className="heading-section text-ink">
                    The work should feel lighter afterward
                  </h2>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 self-end">
                  <p className="body-large text-ink/80">
                    A good result is not a bigger management system. A
                    good result is a clearer one.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Crosslinks
            items={[
              { label: 'Areas of practice', to: '/practice', caption: '§ Practice', bg: 'lavender' },
              { label: 'About the firm', to: '/about', caption: '§ About', bg: 'buttercream' },
              { label: 'Start a conversation', to: '/contact', caption: '§ Contact', bg: 'mustard' },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

const ProcessDiagram = () => (
  <svg viewBox="0 0 900 360" className="w-full h-auto" fill="none" stroke="hsl(var(--ink))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Baseline */}
    <line x1="40" y1="280" x2="860" y2="280" />
    {/* Tick marks */}
    {[0, 1, 2, 3].map((i) => (
      <line key={i} x1={40 + i * 273} y1="276" x2={40 + i * 273} y2="284" />
    ))}
    {/* Labels under axis */}
    <g fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.5" fill="hsl(var(--ink))" textAnchor="middle">
      <text x="40" y="305">FRAMING</text>
      <text x="313" y="305">REVIEW</text>
      <text x="586" y="305">DESIGN</text>
      <text x="860" y="305">FIRST CYCLE</text>
    </g>
    {/* Curve */}
    <path d="M 40 240 C 200 220, 320 160, 450 130 S 720 70, 860 80" stroke="hsl(var(--mustard-deep))" strokeWidth="2" />
    {/* Vertical threshold */}
    <line x1="586" y1="40" x2="586" y2="280" strokeDasharray="3 4" stroke="hsl(var(--ink))" strokeOpacity="0.4" />
    {/* Annotations */}
    <g fontFamily="Fraunces, serif" fontSize="14" fill="hsl(var(--ink))">
      <text x="120" y="200">the pattern becomes visible</text>
      <text x="610" y="120">the structure is used</text>
    </g>
    {/* Accent dot */}
    <circle cx="860" cy="80" r="6" fill="hsl(var(--mustard))" stroke="hsl(var(--ink))" />
    {/* Top axis label */}
    <g fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="hsl(var(--ink))" fillOpacity="0.6">
      <text x="40" y="40">CLARITY OF MANAGEMENT RHYTHM →</text>
    </g>
  </svg>
);

export default Approach;
