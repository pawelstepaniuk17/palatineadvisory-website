import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Crosslinks from '@/components/Crosslinks';

type PracticeItem = {
  n: string;
  title: string;
  body: string;
  useful: string[];
  typical: string[];
  to?: string;
};

const practices: PracticeItem[] = [
  {
    n: '01',
    to: '/practice/decision-habits',
    title: 'Decision habits',
    body: 'We help teams clarify how decisions are prepared, discussed, made, recorded, and revisited.',
    useful: [
      'The same decision keeps coming back.',
      'People are not sure who owns the final call.',
      'Meetings end with agreement but not closure.',
      'Decisions are remembered differently by different people.',
    ],
    typical: [
      'Decision path',
      'Decision record',
      'Review point',
      'Escalation rule',
      'Owner note',
    ],
  },
  {
    n: '02',
    to: '/practice/responsibility',
    title: 'Responsibility and handoffs',
    body: 'We help teams make ownership clearer where work moves across roles, functions, or senior people.',
    useful: [
      'Work sits between people.',
      'Everyone is involved, but no one clearly owns the result.',
      'Handoffs depend on personal follow-up.',
      'Escalation happens too late or too often.',
    ],
    typical: [
      'Responsibility map',
      'Handoff note',
      'Escalation route',
      'Role boundary summary',
      'Follow-up rhythm',
    ],
  },
  {
    n: '03',
    to: '/practice/meetings',
    title: 'Leadership meeting rhythm',
    body: 'We help teams make recurring meetings more useful by clarifying what each meeting is for and what should happen after it.',
    useful: [
      'Meetings are active but not conclusive.',
      'Updates crowd out decisions.',
      'Open items are hard to track.',
      'The same topics return without progress.',
    ],
    typical: [
      'Meeting purpose map',
      'Agenda structure',
      'Open-item record',
      'Follow-up note',
      'Review cadence',
    ],
  },
  {
    n: '04',
    title: 'Priority movement',
    body: 'We help teams make priorities easier to manage after they have been agreed.',
    useful: [
      'Priorities are clear in discussion but unclear in weekly work.',
      'Too many items are treated as equally urgent.',
      'Teams disagree on sequence.',
      'Important work loses momentum between meetings.',
    ],
    typical: [
      'Priority list',
      'Sequence note',
      'Dependency view',
      'Owner record',
      'Review rhythm',
    ],
  },
  {
    n: '05',
    title: 'Management reset',
    body: 'We help teams reset their way of working after growth, leadership change, role changes, or a period of accumulated drift.',
    useful: [
      'Informal habits no longer work.',
      'A new leadership group needs a clearer rhythm.',
      'Roles have changed but management routines have not.',
      'The team needs a shared way to decide, review, and follow through.',
    ],
    typical: [
      'Working rhythm',
      'Responsibility summary',
      'Decision note',
      'Meeting structure',
      'First-cycle support',
    ],
  },
];

const bgFor = (i: number) => {
  const cycle = ['bg-buttercream/40', 'bg-paper', 'bg-lavender/40', 'bg-paper', 'bg-sage-mist/40'];
  return cycle[i % cycle.length];
};

const PracticeIndex = () => {
  return (
    <>
      <Helmet>
        <title>Practice Areas | Palatine Advisory</title>
        <meta name="description" content="Palatine Advisory works on recurring management issues inside leadership teams: decision habits, responsibility and handoffs, leadership meeting rhythm, priority movement, and management reset." />
        <link rel="canonical" href="https://palatineadvisory.com/practice" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Practice"
            title="Practice areas"
            lede="Palatine Advisory works on recurring management issues inside leadership teams."
            background="buttercream"
          />

          {/* Editorial intro */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-16 lg:py-20">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8">
                  <p className="body-large text-ink/85">
                    Palatine Advisory works on recurring management issues inside
                    leadership teams. The categories below are not separate
                    products. They are common places where management work
                    becomes unclear.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Practice areas */}
          <section className="border-b border-ink/85">
            <div className="border-t border-ink/85">
              {practices.map((a, i) => (
                <article
                  key={a.n}
                  className={`${bgFor(i)} border-b border-ink/85`}
                >
                  <div className="section-container py-16 lg:py-20">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                      <div className="lg:col-span-5">
                        <div className="flex items-baseline gap-6 mb-6">
                          <span className="font-mono text-[11px] tracking-[0.2em] text-ink/55">{a.n}</span>
                          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] text-ink leading-[1.05] tracking-[-0.018em]">
                            {a.title}
                          </h2>
                        </div>
                        <p className="body-large text-ink/80 max-w-md">
                          {a.body}
                        </p>
                        {a.to && (
                          <Link
                            to={a.to}
                            className="group mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink border-b border-ink/30 pb-2 hover:gap-5 transition-all"
                          >
                            <span>Read this practice</span>
                            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                          </Link>
                        )}
                      </div>

                      <div className="lg:col-span-7 grid md:grid-cols-2 gap-10 lg:gap-14">
                        <div>
                          <p className="label-small text-ink/55 mb-4">Useful when</p>
                          <ul className="space-y-3 border-t border-ink/20 pt-4">
                            {a.useful.map((u, j) => (
                              <li key={j} className="flex gap-3 text-ink/80 text-[15px] leading-snug">
                                <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 pt-1.5">·</span>
                                <span>{u}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="label-small text-ink/55 mb-4">Typical work</p>
                          <ul className="space-y-3 border-t border-ink/20 pt-4">
                            {a.typical.map((t, j) => (
                              <li key={j} className="flex gap-3 text-ink/80 text-[15px] leading-snug">
                                <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 pt-1.5">·</span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Closing */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-28">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                  <p className="label-small text-ink/60 mb-5">§ Where to begin</p>
                  <h2 className="heading-section text-ink">
                    A focused starting point works best
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 self-end">
                  <p className="body-large text-ink/80">
                    The best starting point is usually one repeated issue,
                    not a broad review of everything. Once that issue is
                    clear, the wider management pattern becomes easier to
                    see.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Crosslinks
            items={[
              { label: 'How Palatine Advisory works', to: '/approach', caption: '§ Approach', bg: 'lavender' },
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

export default PracticeIndex;
