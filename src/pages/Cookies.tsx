import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { resetCookieConsent } from '@/components/CookieConsent';

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Notice | Palatine Advisory</title>
        <meta name="description" content="How Palatine Advisory uses cookies and similar technologies, and how you can manage your preferences." />
        <link rel="canonical" href="https://palatineadvisory.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Legal"
            title="Cookie Notice."
            lede="A short account of the cookies we use, why we use them, and how you can change your mind at any time."
            background="mustard"
          />

          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 lg:col-start-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 mb-10">
                    Last updated · April 2026
                  </p>

                  <Section n="01" title="What cookies are">
                    <p>
                      Cookies are small text files placed on your device when
                      you visit a website. They allow the site to function
                      reliably and, in some cases, to measure how it is used.
                    </p>
                  </Section>

                  <Section n="02" title="Categories we use">
                    <div className="space-y-6 mt-4">
                      <CookieRow
                        kind="Strictly necessary"
                        purpose="Required for the site to operate, routing, security, and recording your cookie preferences."
                        consent="No consent required. Cannot be disabled."
                        retention="Session, up to 12 months."
                      />
                      <CookieRow
                        kind="Analytics"
                        purpose="Aggregate, anonymised statistics on how the site is used, helping us improve the content and structure."
                        consent="Set only with your explicit consent."
                        retention="Up to 13 months."
                      />
                    </div>
                    <p className="mt-6">
                      We do not use advertising cookies, profiling cookies, or
                      cross-site tracking technologies.
                    </p>
                  </Section>

                  <Section n="03" title="Managing your preferences">
                    <p>
                      When you first visit the site, you are asked to accept or
                      decline non-essential cookies. You may revisit your choice
                      at any time:
                    </p>
                    <button
                      onClick={resetCookieConsent}
                      className="mt-5 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 hover:bg-mustard hover:text-ink transition-colors"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                        Review cookie preferences
                      </span>
                    </button>
                    <p className="mt-6">
                      You can also block or delete cookies through your browser
                      settings. Doing so may affect the way the site functions.
                    </p>
                  </Section>

                  <Section n="04" title="Further information">
                    <p>
                      Cookies that involve personal data are also covered by our{' '}
                      <a href="/privacy" className="underline underline-offset-2">Privacy Policy</a>.
                      Questions may be addressed to{' '}
                      <a href="mailto:contact@palatineadvisory.com" className="underline underline-offset-2">
                        contact@palatineadvisory.com
                      </a>.
                    </p>
                  </Section>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

const Section = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <div className="flex items-baseline gap-5 mb-5">
      <span className="font-mono text-[11px] tracking-[0.2em] text-ink/50">§ {n}</span>
      <h2 className="font-serif text-2xl lg:text-[1.6rem] text-ink leading-tight tracking-[-0.01em]">{title}</h2>
    </div>
    <div className="space-y-4 text-ink/85 text-[15.5px] leading-relaxed">
      {children}
    </div>
  </div>
);

const CookieRow = ({ kind, purpose, consent, retention }: { kind: string; purpose: string; consent: string; retention: string }) => (
  <div className="border border-ink/20 p-6 bg-buttercream/30">
    <p className="font-serif text-xl text-ink mb-3">{kind}</p>
    <dl className="grid sm:grid-cols-3 gap-x-6 gap-y-3 text-sm">
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-1">Purpose</dt>
        <dd className="text-ink/80">{purpose}</dd>
      </div>
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-1">Consent</dt>
        <dd className="text-ink/80">{consent}</dd>
      </div>
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-1">Retention</dt>
        <dd className="text-ink/80">{retention}</dd>
      </div>
    </dl>
  </div>
);

export default Cookies;
