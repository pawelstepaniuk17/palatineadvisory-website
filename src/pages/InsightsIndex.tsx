import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Crosslinks from '@/components/Crosslinks';

type Note = {
  n: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
  bg: 'buttercream' | 'lavender' | 'paper-deep' | 'sage-mist';
};

const bgMap = {
  buttercream: 'bg-buttercream',
  lavender: 'bg-lavender',
  'paper-deep': 'bg-paper-deep',
  'sage-mist': 'bg-sage-mist',
} as const;

const notes: Note[] = [
  {
    n: '01',
    title: 'A decision needs more than agreement',
    date: '18 March 2026',
    readingTime: '4 min read',
    excerpt:
      'Agreement is not the same as closure. A useful decision also needs an owner, a record, a review point, and a clear reason for reopening it.',
    body: [
      'Most leadership teams know the feeling of a decision that keeps coming back. The meeting ended with nods, the calendar moved on, and a fortnight later the same question reappears under a different name. The team is not indecisive. The decision was simply never finished.',
      'A useful decision carries four things with it. Someone owns the call. The reasoning is written down in one place a teammate could find without asking. A review point is set, so revisiting is a scheduled act rather than a recurring complaint. And there is a clear rule for when the decision should be reopened, separate from when someone is unhappy with the outcome.',
      'When those four pieces are present, the decision stops competing for attention. The team can move on to the next thing without losing the thread on this one. When any are missing, the work of the decision continues quietly, in side conversations, in repeated explanation, in the slow erosion of trust that comes from watching the same topic return.',
    ],
    bg: 'buttercream',
  },
  {
    n: '02',
    title: 'Ownership is often unclear before work stops',
    date: '02 March 2026',
    readingTime: '3 min read',
    excerpt:
      'Work can keep moving for a long time with unclear ownership. The cost shows up in checking, chasing, repeated explanation, and avoidable escalation.',
    body: [
      'Unclear ownership rarely announces itself. Work continues. Emails are answered. Meetings happen on schedule. The signal that ownership is missing usually appears in the surrounding behaviour, not in the work itself.',
      'A senior person finds themselves checking on a piece of work they thought was settled. A handoff requires three messages instead of one. A question lands in a group chat and waits, because no one is sure whether answering it would be helpful or presumptuous. Escalations arrive late, because no one wanted to be the person to raise them.',
      'These are not personality problems. They are the visible cost of a missing decision about who owns the result. Naming the owner is rarely the hard part. The hard part is agreeing that the owner is allowed to make the smaller decisions that come with the territory, without checking back each time.',
    ],
    bg: 'lavender',
  },
  {
    n: '03',
    title: 'Meetings should not carry everything',
    date: '14 February 2026',
    readingTime: '4 min read',
    excerpt:
      'When every recurring issue goes into the same meeting, the meeting becomes too heavy to do any one job well.',
    body: [
      'A weekly leadership meeting that began as a coordination call often grows, quietly, into the place where everything lands. Updates. Decisions. Reviews. Personnel matters. The agenda lengthens and the meeting stays the same shape, until the team is producing motion without producing closure.',
      'The fix is rarely fewer meetings. It is giving each recurring meeting a single sentence that describes what it is for, and then being honest about which conversations have ended up there because there was nowhere else to put them.',
      'A meeting that knows what it is for is shorter, calmer, and more useful than the one it replaces. The conversations that no longer fit do not disappear. They find a more appropriate place, where they can actually be finished.',
    ],
    bg: 'sage-mist',
  },
  {
    n: '04',
    title: 'Priorities need a route',
    date: '28 January 2026',
    readingTime: '3 min read',
    excerpt:
      'A priority does not move because it is repeated. It moves because people know the sequence, the owner, the next review, and the trade-off it creates.',
    body: [
      'Leadership teams often confuse declaring a priority with moving one. The priority is named in a town hall, written into a deck, and repeated at the next quarterly. Six weeks later, very little has changed, and the team begins to suspect that priorities are something said rather than something done.',
      'A priority that actually moves has a route. There is a sequence of the next two or three things that must happen, in order. There is an owner who can make the smaller calls along the way. There is a date when the team will look at it again together. And there is honesty about what this priority displaces, because anything that is genuinely first means something else is now second.',
      'Without the route, a priority is a wish. With the route, it becomes a piece of work the team can hold.',
    ],
    bg: 'paper-deep',
  },
  {
    n: '05',
    title: 'Memory is not a management system',
    date: '12 January 2026',
    readingTime: '3 min read',
    excerpt:
      'If important work depends on people remembering what was said, the team will eventually lose track of something important.',
    body: [
      'Small teams run on memory. It is fast, it is cheap, and for a while it works. A founder remembers what was agreed in the corridor, a senior leader remembers who is owed a follow-up, and the team coheres around a shared sense of what is going on.',
      'As the team grows, memory quietly stops scaling. The agreements made in the corridor are not heard by the new person who joined last month. The follow-up that was carried in someone\'s head is dropped when that person is on holiday. Important work continues, but the team begins to spend energy reconstructing what was already decided.',
      'The remedy is not heavy process. It is the smallest possible written record of decisions, owners, and open items, kept in one place the team trusts. The aim is not to replace memory. It is to give memory something to lean on, so important work no longer depends on who happened to be in the room.',
    ],
    bg: 'buttercream',
  },
];

const InsightsIndex = () => {
  return (
    <>
      <Helmet>
        <title>Notes on management work | Palatine Advisory</title>
        <meta name="description" content="Short notes on the ordinary management patterns that make leadership work easier or harder. Palatine Advisory publishes selectively." />
        <link rel="canonical" href="https://palatineadvisory.com/insights" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Insights"
            title="Notes on management work"
            lede="Short notes on the ordinary management patterns that make leadership work easier or harder."
            background="paper"
          />

          {/* Intro note */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-12 lg:py-16">
              <p className="body-large text-ink/80 max-w-2xl">
                These notes are not written to sound big. They are written
                to name problems that many teams recognize.
              </p>
            </div>
          </section>

          {/* Notes list, long form */}
          <section className="border-b border-ink/85">
            {notes.map((a, i) => {
              const isLast = i === notes.length - 1;
              return (
                <article
                  key={a.n}
                  className={`${bgMap[a.bg]} border-t border-ink/85 ${isLast ? 'border-b-0' : ''}`}
                >
                  <div className="section-container py-20 lg:py-28">
                    <div className="grid lg:grid-cols-12 gap-10">
                      <div className="lg:col-span-3">
                        <p className="font-mono text-[11px] tracking-[0.2em] text-ink/55 mb-4">
                          Note · {a.n}
                        </p>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 mb-1">
                          {a.date}
                        </p>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 mb-6">
                          {a.readingTime}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
                          By Palatine Advisory
                        </p>
                      </div>
                      <div className="lg:col-span-8 lg:col-start-5">
                        <h2 className="font-serif text-3xl md:text-[2.1rem] text-ink leading-[1.12] tracking-[-0.015em] mb-6 max-w-2xl">
                          {a.title}
                        </h2>
                        <p className="body-large text-ink/80 max-w-2xl mb-8">
                          {a.excerpt}
                        </p>
                        <div className="space-y-5 text-ink/85 text-[15.5px] leading-relaxed max-w-2xl">
                          {a.body.map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Bottom note */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-16 lg:py-20">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                  <p className="label-small text-ink/55">§ A note on the notes</p>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <p className="font-serif text-2xl lg:text-[1.65rem] text-ink/85 leading-snug max-w-2xl">
                    Palatine Advisory publishes selectively. A short useful note is better than regular content with nothing specific to say.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Crosslinks
            items={[
              { label: 'How we work', to: '/approach', caption: '§ Approach', bg: 'lavender' },
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

export default InsightsIndex;
