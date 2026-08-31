import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Crosslinks from '@/components/Crosslinks';
import { OliveBranchMark } from '@/components/OliveMark';
import grove from '@/assets/olive-terraces.jpg';

import courtyard from '@/assets/courtyard-arch.jpg';

const expectCards = [
  {
    n: '01',
    title: 'Plain conversation',
    body: 'We ask direct questions about how decisions, meetings, responsibilities, and follow-up actually work.',
  },
  {
    n: '02',
    title: 'Written clarity',
    body: 'We write things down in a form the team can use. The record matters because memory is not a management system.',
  },
  {
    n: '03',
    title: 'Practical changes',
    body: 'The aim is not to impress the room. The aim is to make the work easier to lead next week.',
  },
  {
    n: '04',
    title: 'A clean handover',
    body: 'The work should not depend on Olive Tree staying in the middle. The team should be able to continue the rhythm itself.',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Olive Tree Consulting Group</title>
        <meta
          name="description"
          content="Olive Tree Consulting Group is a small management advisory firm focused on decisions, responsibilities, priorities, and follow-through inside leadership teams."
        />
        <link rel="canonical" href="https://olive-tree-consulting.com/about" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ About"
            title="About Olive Tree Consulting Group"
            lede="A small management advisory firm focused on the way leadership teams make decisions, hold responsibility, manage priorities, and follow through."
            background="paper"
          />

          {/* Opening narrative */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-28">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <OliveBranchMark className="w-24 h-24 text-ink/70 mb-8" />
                  <p className="label-small text-ink/55 mb-4">In short</p>
                  <p className="font-serif text-xl text-ink/80 leading-snug max-w-sm">
                    We work on the part of management that often sits between
                    strategy and daily execution.
                  </p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                  <div>
                    <p className="label-small text-ink/55 mb-4">§ The work we care about</p>
                    <p className="body-large text-ink/85 mb-5">
                      A company can have capable people and still struggle to
                      manage work clearly.
                    </p>
                    <p className="body-base text-ink/75 mb-5">
                      The same topic comes back every week. A decision is
                      made but not held. A priority is important but not
                      sequenced. A role is created but its edges are not
                      clear. A meeting produces discussion but not enough
                      movement.
                    </p>
                    <p className="body-base text-ink/75 mb-5">
                      These are not always large problems. Left alone, they
                      become expensive habits.
                    </p>
                    <p className="body-base text-ink/75">
                      Olive Tree helps leadership teams make those habits
                      visible and easier to manage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Imagery band: grove — How we think about advisory work */}
          <section className="border-b border-ink/85">
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[520px]">
                <img
                  src={grove}
                  alt="Terraced olive grove on a Mediterranean hillside"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={1024}
                />
              </div>
              <div className="lg:col-span-5 bg-lavender px-8 lg:px-14 py-16 lg:py-24 border-l border-ink/85 flex flex-col justify-center">
                <p className="label-small text-ink/60 mb-5">§ How we think about advisory work</p>
                <h3 className="font-serif text-3xl lg:text-[2.25rem] text-ink leading-[1.1] tracking-[-0.018em] mb-6">
                  Good advisory work should make things plainer.
                </h3>
                <p className="body-base text-ink/80 max-w-md mb-4">
                  It should help a team see what is happening, what is
                  unclear, who owns what, and what needs to change. It
                  should leave behind language and records that the team can
                  keep using after the engagement ends.
                </p>
                <p className="body-base text-ink/75 max-w-md mb-2">
                  We prefer useful notes over polished presentations.
                </p>
                <p className="body-base text-ink/75 max-w-md mb-2">
                  We prefer clear ownership over vague alignment.
                </p>
                <p className="body-base text-ink/75 max-w-md">
                  We prefer a small practical change over a large programme
                  that nobody has time to maintain.
                </p>
              </div>
            </div>
          </section>

          {/* How we operate */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                  <p className="label-small text-ink/60 mb-5">§ How we operate</p>
                  <h2 className="heading-section text-ink">How we operate</h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 space-y-5">
                  <p className="body-large text-ink/85">
                    Olive Tree works through focused advisory engagements.
                    The work usually includes review, conversations, written
                    notes, practical recommendations, and support while the
                    team starts using a clearer way of working.
                  </p>
                  <p className="body-base text-ink/75">
                    We work remotely unless otherwise agreed directly with a
                    client.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What clients should expect */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container pt-24 pb-12">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6">
                  <p className="label-small text-ink/60 mb-5">§ What clients should expect</p>
                  <h2 className="heading-section text-ink">What clients should expect</h2>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border-t border-ink/85">
              {expectCards.map((p, i) => (
                <div
                  key={p.n}
                  className={`px-8 lg:px-16 py-14 lg:py-16 border-ink/85 ${
                    i % 2 === 0 ? 'md:border-r' : ''
                  } ${i < 2 ? 'border-b' : 'border-b md:border-b-0'}`}
                >
                  <div className="flex items-baseline gap-6 mb-5">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50">
                      {p.n}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="body-base text-ink/75 max-w-md">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing courtyard */}
          <section className="grid lg:grid-cols-12 border-b border-ink/85">
            <div className="lg:col-span-7 relative min-h-[360px]">
              <img
                src={courtyard}
                alt="A quiet courtyard arch with an olive tree"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={1600}
              />
            </div>
            <div className="lg:col-span-5 bg-sage-mist px-8 lg:px-14 py-20 border-l border-ink/85 flex flex-col justify-center">
              <p className="label-small text-ink/60 mb-5">§ Small enough to stay close to the work</p>
              <h3 className="font-serif text-3xl lg:text-[2.25rem] text-ink leading-[1.1] tracking-[-0.018em] mb-6">
                Small enough to stay close to the work
              </h3>
              <p className="body-base text-ink/80 max-w-md">
                Olive Tree is built as a focused advisory practice. The
                value is in careful attention, clear writing, and practical
                judgment, not scale for its own sake.
              </p>
            </div>
          </section>

          {/* Team — A focused advisory practice */}
          <section id="team" className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-28">
              <div className="grid lg:grid-cols-12 gap-10 mb-14">
                <div className="lg:col-span-6">
                  <p className="label-small text-ink/60 mb-5">§ Team</p>
                  <h2 className="heading-section text-ink">
                    A focused advisory practice
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 pt-2">
                  <p className="body-large text-ink/85">
                    Olive Tree is built to stay close to the work. Clients
                    should know who is involved, what is being reviewed,
                    what is being written, and how the recommendations are
                    meant to be used.
                  </p>
                </div>
              </div>
            </div>

            {/* Team members */}
            <div className="border-t border-ink/85">
              <div className="section-container pt-12 pb-6">
                <p className="label-small text-ink/60 mb-5">§ The people</p>
                <h3 className="font-serif text-3xl lg:text-4xl text-ink leading-tight tracking-[-0.015em] mb-10">
                  The people behind the work
                </h3>
              </div>
              <div className="grid md:grid-cols-2 border-t border-ink/85">
                {[
                  {
                    name: 'Nejra Tuzlak',
                    role: 'Chief Executive Officer',
                    body: 'Nejra leads Olive Tree Consulting Group. Her background spans human resources, organisational design, and global operations at companies including Cisco, Dropbox, and Unity Technologies. She holds a Bachelor\'s degree in Business Administration from the University of San Francisco and a Master\'s in International Business and HR Management from San José State University.',
                  },
                  {
                    name: 'Natasha Marianna Esposito',
                    role: 'Senior Software Engineer',
                    body: 'Natasha leads the technology side of the practice, supporting advisory teams with internal platforms, analytics tools, and workflow automation. She has more than a decade of experience in backend systems and cloud architecture, with earlier roles at Bending Spoons, NTT DATA, and Reply. She holds a Master\'s degree in Computer Software Engineering from Politecnico di Milano.',
                  },
                  {
                    name: 'Elise Moretti',
                    role: 'Director of Client Advisory',
                    body: 'Elise manages client relationships and engagement delivery across Olive Tree\'s practice areas. She previously led operational improvement programmes at McKinsey & Company and Bain & Company, with particular depth in organisational design and leadership team effectiveness. She holds an MBA from INSEAD and a degree in Economics from Bocconi University.',
                  },
                  {
                    name: 'Luca Romano',
                    role: 'Senior Strategy Advisor',
                    body: 'Luca advises leadership teams on strategic clarity, decision-making architecture, and execution discipline. Before joining Olive Tree, he spent eight years at The Boston Consulting Group, where he focused on transformation and private equity due diligence. He holds a Master\'s in Management from the London School of Economics and a degree in Business from Università Cattolica del Sacro Cuore.',
                  },
                ].map((p, i) => (
                  <div
                    key={p.name}
                    className={`px-8 lg:px-14 py-14 lg:py-16 border-ink/85 ${
                      i % 2 === 0 ? 'md:border-r' : ''
                    } ${i < 2 ? 'border-b' : ''}`}
                  >
                    <p className="label-small text-ink/55 mb-4">{p.role}</p>
                    <h4 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-5">
                      {p.name}
                    </h4>
                    <p className="body-base text-ink/75 max-w-md">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Advisory model cards */}
            <div className="border-t border-ink/85">
              <div className="section-container pt-12 pb-6">
                <p className="label-small text-ink/60 mb-5">§ How the advisory model works</p>
                <h3 className="font-serif text-3xl lg:text-4xl text-ink leading-tight tracking-[-0.015em] mb-10">
                  How the advisory model works
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-ink/85">
                {[
                  { n: '01', title: 'Close scoping', body: 'We start with the actual issue, not a pre-set package.' },
                  { n: '02', title: 'Small working line', body: 'The work is kept narrow enough for the advisory line to stay clear.' },
                  { n: '03', title: 'Plain written output', body: 'Written work should help the client team use the recommendation, not just approve it.' },
                  { n: '04', title: 'Practical handover', body: 'The engagement should leave the team with a rhythm it can continue.' },
                ].map((p, i, arr) => (
                  <div
                    key={p.n}
                    className={`px-8 lg:px-10 py-14 lg:py-16 border-ink/85 ${i < arr.length - 1 ? 'lg:border-r' : ''} ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b md:border-b lg:border-b-0' : ''}`}
                  >
                    <div className="mb-5">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50">{p.n}</span>
                    </div>
                    <h4 className="font-serif text-2xl text-ink leading-tight mb-4">{p.title}</h4>
                    <p className="body-base text-ink/75">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What this means for clients */}
            <div className="border-t border-ink/85">
              <div className="section-container py-20 lg:py-24">
                <div className="grid lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-5">
                    <p className="label-small text-ink/60 mb-5">§ What this means for clients</p>
                    <h3 className="heading-section text-ink">
                      What this means for clients
                    </h3>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 self-end">
                    <p className="body-large text-ink/85">
                      Clients should expect careful questions, clear notes,
                      direct communication, and practical recommendations.
                      The work is not built around volume. It is built
                      around usefulness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* No inflated presentation */}
            <div className="bg-buttercream border-t border-ink/85">
              <div className="section-container py-16 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-5">
                    <p className="label-small text-ink/60 mb-5">§ No inflated presentation</p>
                    <h3 className="font-serif text-3xl lg:text-[2.25rem] text-ink leading-[1.1] tracking-[-0.018em]">
                      No inflated presentation
                    </h3>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 self-end">
                    <p className="body-large text-ink/80">
                      Olive Tree should not look larger than it is. The
                      site should present the people and the work
                      accurately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Crosslinks
            items={[
              { label: 'How we keep company', to: '/approach', caption: '§ Approach', bg: 'lavender' },
              { label: 'Areas of advisory practice', to: '/practice', caption: '§ Practice', bg: 'buttercream' },
              { label: 'Write to the firm', to: '/contact', caption: '§ Contact', bg: 'mustard' },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
