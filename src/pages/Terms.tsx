import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Olive Tree Consulting Group</title>
        <meta name="description" content="Terms governing access to and use of the Olive Tree Consulting Group website." />
        <link rel="canonical" href="https://palatineadvisory.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Legal"
            title="Terms of Use."
            lede="The conditions under which this website is offered and may be used. By accessing the site you agree to the terms set out below."
            background="buttercream"
          />

          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 lg:col-start-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 mb-10">
                    Last updated · April 2026
                  </p>

                  <Section n="01" title="The website">
                    <p>
                      This website is operated by Olive Tree Consulting Group,
                      with registered address at Via Savoia, 78, 00198 Roma. The site
                      provides general information about the firm and its work.
                    </p>
                  </Section>

                  <Section n="02" title="No advisory relationship">
                    <p>
                      Material on this website is informational. It is not
                      advice. Use of the site does not create an advisory,
                      consulting, fiduciary, or contractual relationship with
                      the firm. Engagements arise only on the basis of a written
                      letter of engagement signed by both parties.
                    </p>
                  </Section>

                  <Section n="03" title="Permitted use">
                    <p>
                      You may consult and download material for personal,
                      non-commercial reference. Reproduction, redistribution,
                      framing, scraping, or use of our content to train
                      machine-learning systems is not permitted without prior
                      written consent.
                    </p>
                  </Section>

                  <Section n="04" title="Intellectual property">
                    <p>
                      All text, images, diagrams, marks, and design elements on
                      this site are the property of Olive Tree Consulting Group
                      or of identified contributors. The name "Olive Tree
                      Consulting Group", the firm's marks, and the visual
                      identity are protected.
                    </p>
                  </Section>

                  <Section n="05" title="Confidentiality of correspondence">
                    <p>
                      Information you submit through inquiry forms or by email
                      is treated in confidence and is read only by members of
                      the firm. Please do not transmit privileged or highly
                      sensitive material before a confidentiality undertaking
                      has been agreed.
                    </p>
                  </Section>

                  <Section n="06" title="External links">
                    <p>
                      We may link to third-party sites for convenience. We do
                      not endorse those sites and are not responsible for their
                      content, security, or privacy practices.
                    </p>
                  </Section>

                  <Section n="07" title="Limitation of liability">
                    <p>
                      To the extent permitted by law, the firm disclaims
                      liability for any direct, indirect, incidental, or
                      consequential loss arising from access to, or reliance on,
                      material on this site. We do not warrant that the site
                      will be uninterrupted or free of error.
                    </p>
                  </Section>

                  <Section n="08" title="Governing law">
                    <p>
                      These terms are governed by the laws applicable at the
                      registered seat of the firm. Disputes are submitted to
                      the exclusive jurisdiction of the competent courts of
                      that seat, without prejudice to mandatory consumer
                      protections.
                    </p>
                  </Section>

                  <Section n="09" title="Revisions">
                    <p>
                      We may update these terms. The date above indicates the
                      most recent revision. Continued use of the site after a
                      revision constitutes acceptance of the updated terms.
                    </p>
                  </Section>

                  <Section n="10" title="Contact">
                    <p>
                      Questions concerning these terms may be addressed to{' '}
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

export default Terms;
