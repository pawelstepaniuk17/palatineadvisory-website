import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Crosslinks from '@/components/Crosslinks';
import { OrnamentRule } from '@/components/OliveMark';
import { practiceAreas, type PracticeArea } from '@/content/practice';

interface PracticeDetailProps {
  slug: string;
  background: 'mustard' | 'lavender' | 'sage-mist' | 'buttercream';
  intro: string[];
  questions: string[];
  closing: string;
  crosslinks: { label: string; to: string; caption: string; bg: 'lavender' | 'mustard' | 'buttercream' | 'sage-mist' | 'paper-deep' }[];
}

export const PracticeDetail = ({ slug, background, intro, questions, closing, crosslinks }: PracticeDetailProps) => {
  const area = practiceAreas.find((p) => p.slug === slug) as PracticeArea;

  return (
    <>
      <Helmet>
        <title>{area.title} | Olive Tree Consulting Group</title>
        <meta name="description" content={area.short} />
        <link rel="canonical" href={`https://palatineadvisory.com/practice/${area.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow={`§ Practice ${area.n}`}
            title={area.title}
            lede={area.short}
            background={background}
          />

          {/* Opening narrative */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="label-small text-ink/55 mb-4">§ The work in plain terms</p>
                  <OrnamentRule className="text-ink/40 w-28 mb-6" />
                  <p className="font-serif text-lg text-ink/70 leading-snug">
                    {area.body}
                  </p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6 space-y-6">
                  {intro.map((p, i) => (
                    <p key={i} className={i === 0 ? 'body-large text-ink/85' : 'body-base text-ink/75'}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Useful when + Typical work */}
          <section className="bg-paper border-b border-ink/85">
            <div className="grid md:grid-cols-2 border-t border-ink/85">
              <div className="bg-buttercream/40 px-8 lg:px-14 py-16 lg:py-20 border-ink/85 md:border-r">
                <p className="label-small text-ink/55 mb-6">Useful when</p>
                <ul className="space-y-4 border-t border-ink/20 pt-6">
                  {area.useful.map((u, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-ink/45 pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                      <p className="font-serif text-lg text-ink/85 leading-snug">{u}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-paper px-8 lg:px-14 py-16 lg:py-20">
                <p className="label-small text-ink/55 mb-6">Typical work</p>
                <ul className="space-y-4 border-t border-ink/20 pt-6">
                  {area.typical.map((t, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-ink/45 pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                      <p className="font-serif text-lg text-ink/85 leading-snug">{t}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Questions list */}
          <section className="bg-paper-deep border-b border-ink/85">
            <div className="section-container py-20">
              <div className="grid lg:grid-cols-12 gap-10 mb-12">
                <div className="lg:col-span-6">
                  <p className="label-small text-ink/60 mb-5">§ Questions worth asking first</p>
                  <h2 className="heading-section text-ink">Questions worth asking first</h2>
                </div>
                <div className="lg:col-span-4 lg:col-start-9 self-end">
                  <p className="body-base text-ink/70">
                    A useful first conversation is built around questions like these, asked plainly.
                  </p>
                </div>
              </div>
              <ol className="space-y-0 border-t border-ink/85">
                {questions.map((q, i) => (
                  <li key={i} className="grid grid-cols-12 gap-6 py-8 border-b border-ink/30">
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <p className="font-serif text-xl md:text-2xl text-ink/85 leading-snug max-w-3xl">{q}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Closing */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5">
                  <p className="label-small text-ink/60 mb-5">§ A note</p>
                  <h2 className="heading-section text-ink">A note on starting</h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 self-end">
                  <p className="body-large text-ink/80">{closing}</p>
                </div>
              </div>
            </div>
          </section>

          <Crosslinks heading="Related areas" items={crosslinks} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PracticeDetail;
