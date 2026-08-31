import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Crosslinks from '@/components/Crosslinks';
import { OrnamentRule } from '@/components/OliveMark';
import grove from '@/assets/olive-branch-closeup.jpg';

const settings = [
  {
    n: '01',
    title: 'Founder-led companies',
    body: 'Founder-led companies often grow through direct access, quick judgment, and informal follow-up. As the team expands, those habits can create bottlenecks. We help make the management route clearer without removing the founder\u2019s judgment from the business.',
  },
  {
    n: '02',
    title: 'Growing leadership teams',
    body: 'As more leaders join, the team needs a shared way to decide, review, and follow through. We help clarify how that leadership work should happen.',
  },
  {
    n: '03',
    title: 'Remote or distributed teams',
    body: 'Distributed teams cannot rely on hallway memory. Decisions, ownership, and open items need a clearer written rhythm. We help put that rhythm into practical use.',
  },
  {
    n: '04',
    title: 'Service businesses',
    body: 'Service businesses often depend on senior attention and relationship memory. We help make recurring management work clearer so senior people are not pulled into every unresolved detail.',
  },
  {
    n: '05',
    title: 'Teams after change',
    body: 'A new leader, new structure, or changed set of responsibilities often exposes unclear habits. We help the team settle a cleaner way to work together.',
  },
];

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Where this work fits | Olive Tree Consulting Group</title>
        <meta name="description" content="Olive Tree is not built around one industry. The work fits teams where management habits have not kept up with the way the business now operates." />
        <link rel="canonical" href="https://palatineadvisory.com/industries" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Where it fits"
            title="Where this work fits"
            lede="Olive Tree is not built around one industry. The work fits teams where management habits have not kept up with the way the business now operates."
            background="sage-mist"
          />

          {/* Imagery + intro */}
          <section className="border-b border-ink/85">
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 bg-paper px-8 lg:px-14 py-16 lg:py-20 border-r border-ink/85 flex flex-col justify-center">
                <p className="label-small text-ink/55 mb-5">A note on sector</p>
                <p className="font-serif text-2xl text-ink/85 leading-snug mb-6 max-w-md">
                  The industry matters less than the pattern.
                </p>
                <p className="body-base text-ink/75 max-w-md">
                  Olive Tree is not built around one industry. The work fits
                  teams where management habits have not kept up with the
                  way the business now operates.
                </p>
              </div>
              <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-auto">
                <img src={grove} alt="Olive branches with silver-green leaves" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" width={1024} height={1280} />
              </div>
            </div>
          </section>

          {/* Common settings header */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-16 lg:py-20">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6">
                  <p className="label-small text-ink/60 mb-5">§ Common settings</p>
                  <h2 className="heading-section text-ink">
                    Common settings
                  </h2>
                </div>
              </div>
            </div>
          </section>

          {/* Settings list */}
          <section>
            {settings.map((ind, i) => (
              <article
                key={ind.n}
                className={`border-b border-ink/85 ${i % 3 === 0 ? 'bg-paper' : i % 3 === 1 ? 'bg-buttercream/40' : 'bg-paper-deep'}`}
              >
                <div className="section-container py-16 lg:py-20">
                  <div className="grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-4">
                      <div className="flex items-baseline gap-5 mb-6">
                        <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50">{ind.n}</span>
                        <OrnamentRule className="text-ink/35 w-20" />
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] text-ink leading-[1.05] tracking-[-0.018em]">
                        {ind.title}
                      </h2>
                    </div>
                    <div className="lg:col-span-7 lg:col-start-6">
                      <p className="body-large text-ink/85 max-w-2xl">{ind.body}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Common thread */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-28">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                  <p className="label-small text-ink/60 mb-5">§ The common thread</p>
                  <h2 className="heading-section text-ink">
                    The common thread
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 self-end">
                  <p className="body-large text-ink/80">
                    The industry matters less than the pattern. Olive Tree
                    is useful when good people are spending too much time
                    interpreting, chasing, reopening, or remembering work
                    that should be easier to hold.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Crosslinks
            items={[
              { label: 'Areas of advisory practice', to: '/practice', caption: '§ Practice', bg: 'mustard' },
              { label: 'How we work', to: '/approach', caption: '§ Approach', bg: 'lavender' },
              { label: 'Write to the firm', to: '/contact', caption: '§ Contact', bg: 'sage-mist' },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Industries;
