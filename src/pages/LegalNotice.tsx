import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const LegalNotice = () => {
  return (
    <>
      <Helmet>
        <title>Legal Notice | Olive Tree Consulting Group</title>
        <meta
          name="description"
          content="Imprint and legal information for Olive Tree Consulting Group, a management advisory firm based in Roma."
        />
        <link rel="canonical" href="https://palatineadvisory.com/legal-notice" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Legal"
            title="Legal Notice."
            lede="Information about the firm operating this website, in accordance with applicable transparency and consumer-protection obligations."
            background="sage-mist"
          />

          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 lg:col-start-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 mb-10">
                    Last updated · April 2026
                  </p>

                  <Section n="01" title="The firm">
                    <p>
                      This website is operated by <strong>Olive Tree Consulting Group</strong>,
                      a management advisory practice working with leadership
                      teams on decisions, responsibilities, meetings, priorities,
                      and follow-through.
                    </p>
                  </Section>

                  <Section n="02" title="Registered address">
                    <p>
                      Via Savoia, 78<br />
                      00198 Roma
                    </p>
                  </Section>

                  <Section n="03" title="Contact">
                    <p>
                      General correspondence:{' '}
                      <a
                        href="mailto:contact@palatineadvisory.com"
                        className="underline underline-offset-2"
                      >
                        contact@palatineadvisory.com
                      </a>
                    </p>
                    <p>
                      The same address is used for inquiries concerning this
                      website, the privacy notice, and the cookie notice.
                      Written correspondence may also be sent to the
                      registered address above.
                    </p>
                  </Section>

                  <Section n="04" title="Nature of the website">
                    <p>
                      The website provides general information about the
                      firm, its areas of work, and its way of working with
                      clients. Material published here is informational and
                      does not constitute professional advice within the
                      meaning of any specific engagement. The conditions
                      under which the site may be used are set out in the{' '}
                      <a href="/terms" className="underline underline-offset-2">Terms of Use</a>.
                    </p>
                  </Section>

                  <Section n="05" title="Professional engagements">
                    <p>
                      Advisory work is undertaken only on the basis of a
                      written letter of engagement signed by both parties.
                      No advisory, fiduciary, or contractual relationship
                      arises from access to the website, from
                      correspondence received through the contact form, or
                      from any preliminary discussion preceding a signed
                      engagement.
                    </p>
                  </Section>

                  <Section n="06" title="Confidentiality">
                    <p>
                      Correspondence received by the firm is treated in
                      confidence and is read only by members of the firm.
                      Please do not transmit privileged, regulated, or
                      otherwise sensitive material before a confidentiality
                      undertaking has been agreed in writing.
                    </p>
                  </Section>

                  <Section n="07" title="Intellectual property">
                    <p>
                      The name <em>Olive Tree Consulting Group</em>, the
                      firm's marks, the visual identity of this website,
                      and the editorial content published on it are
                      protected. Reproduction, redistribution, framing,
                      scraping, or use of the content to train
                      machine-learning systems is not permitted without
                      prior written consent.
                    </p>
                  </Section>

                  <Section n="08" title="Data protection">
                    <p>
                      Personal data processed through this website is
                      handled in accordance with the European General Data
                      Protection Regulation. The full account of how
                      information is collected, used, retained, and
                      protected is set out in the{' '}
                      <a href="/privacy" className="underline underline-offset-2">Privacy Policy</a>.
                      Cookies are described separately in the{' '}
                      <a href="/cookies" className="underline underline-offset-2">Cookie Notice</a>.
                    </p>
                  </Section>

                  <Section n="09" title="Governing law and jurisdiction">
                    <p>
                      Matters arising from access to or use of the website
                      are governed by Italian and European Union law,
                      without prejudice to mandatory consumer-protection
                      provisions of the user's place of habitual residence.
                      The competent courts of Roma have exclusive
                      jurisdiction, subject to those mandatory provisions.
                    </p>
                  </Section>

                  <Section n="10" title="Reporting an issue">
                    <p>
                      Should you identify inaccurate information on this
                      site, a broken link, or content that you believe
                      infringes a third-party right, please write to{' '}
                      <a
                        href="mailto:contact@palatineadvisory.com"
                        className="underline underline-offset-2"
                      >
                        contact@palatineadvisory.com
                      </a>{' '}
                      with a description and, where applicable, supporting
                      references. The firm reviews such notices promptly.
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
    <div className="space-y-4 text-ink/85 text-[15.5px] leading-relaxed [&_strong]:text-ink">
      {children}
    </div>
  </div>
);

export default LegalNotice;
