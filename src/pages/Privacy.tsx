import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Olive Tree Consulting Group</title>
        <meta name="description" content="How Olive Tree Consulting Group collects, uses, and protects personal information in accordance with the GDPR." />
        <link rel="canonical" href="https://palatineadvisory.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Legal"
            title="Privacy Policy."
            lede="This notice explains how we collect, use, and safeguard personal information when you visit our website, write to us, or engage our firm."
            background="lavender"
          />

          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 lg:col-start-3 prose-editorial">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 mb-10">
                    Last updated · April 2026
                  </p>

                  <Section n="01" title="Data Controller">
                    <p>
                      Olive Tree Consulting Group ("we", "us", "the firm") is the
                      data controller of personal information processed through this
                      website and through correspondence initiated with us. You may
                      reach the controller at{' '}
                      <a href="mailto:contact@palatineadvisory.com" className="underline underline-offset-2">
                        contact@palatineadvisory.com
                      </a>{' '}
                      or by post at Via Savoia, 78, 00198 Roma.
                    </p>
                  </Section>

                  <Section n="02" title="Information we collect">
                    <p>We process only what is necessary to respond to inquiries and to provide our services:</p>
                    <ul>
                      <li><strong>Identification data</strong> you provide voluntarily, name, professional title, organization, email address, telephone number.</li>
                      <li><strong>Correspondence content</strong>, the substance of messages you send to us.</li>
                      <li><strong>Technical data</strong>, IP address, browser type, device information, pages viewed, collected through essential cookies and, with your consent, analytics cookies.</li>
                    </ul>
                  </Section>

                  <Section n="03" title="Lawful basis for processing">
                    <p>We rely on the following lawful bases under Articles 6 and 9 of the GDPR:</p>
                    <ul>
                      <li><strong>Performance of a contract or pre-contractual measures</strong>, to respond to your inquiry and to deliver advisory services.</li>
                      <li><strong>Legitimate interests</strong>, to maintain the security of our website and the integrity of our records.</li>
                      <li><strong>Consent</strong>, for non-essential cookies and any optional communications, withdrawable at any time.</li>
                      <li><strong>Legal obligation</strong>, for tax, accounting, and statutory record-keeping.</li>
                    </ul>
                  </Section>

                  <Section n="04" title="How we use information">
                    <p>
                      Information is used to respond to inquiries, to deliver
                      engagements, to maintain client records, to comply with
                      legal obligations, and to improve the website. We do not
                      sell personal data and we do not share it with third
                      parties for their independent marketing purposes.
                    </p>
                  </Section>

                  <Section n="05" title="Recipients and processors">
                    <p>
                      Personal data may be disclosed to a limited number of
                      service providers acting as processors on our behalf ,
                      hosting, email infrastructure, and analytics. Each is
                      bound by a written data-processing agreement requiring
                      confidentiality and the application of appropriate
                      technical and organisational measures.
                    </p>
                  </Section>

                  <Section n="06" title="International transfers">
                    <p>
                      Where personal data is transferred outside the European
                      Economic Area, we rely on the European Commission's
                      Standard Contractual Clauses or on adequacy decisions
                      issued by the European Commission.
                    </p>
                  </Section>

                  <Section n="07" title="Retention">
                    <p>
                      Inquiry correspondence is retained for up to twenty-four
                      months unless an engagement follows. Client engagement
                      records are retained for ten years from conclusion to meet
                      professional, accounting, and statutory requirements.
                      Cookie data is retained for the durations indicated in our
                      Cookie Notice.
                    </p>
                  </Section>

                  <Section n="08" title="Your rights">
                    <p>Under the GDPR, you have the right to:</p>
                    <ul>
                      <li>Access the personal data we hold about you.</li>
                      <li>Request rectification of inaccurate data.</li>
                      <li>Request erasure where lawful grounds apply.</li>
                      <li>Restrict or object to specific processing.</li>
                      <li>Receive your data in a portable format.</li>
                      <li>Withdraw consent at any time, without affecting prior lawful processing.</li>
                      <li>Lodge a complaint with the competent supervisory authority.</li>
                    </ul>
                    <p>
                      Requests may be addressed to{' '}
                      <a href="mailto:contact@palatineadvisory.com" className="underline underline-offset-2">
                        contact@palatineadvisory.com
                      </a>. We respond within thirty days.
                    </p>
                  </Section>

                  <Section n="09" title="Security">
                    <p>
                      We apply technical and organisational measures appropriate
                      to the sensitivity of advisory work, encrypted transport,
                      access controls, segregated storage, and confidentiality
                      undertakings binding all members of the firm.
                    </p>
                  </Section>

                  <Section n="10" title="Changes to this notice">
                    <p>
                      We may revise this notice from time to time. The date at
                      the top of the page indicates the most recent revision.
                      Material changes will be communicated through the website.
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
    <div className="space-y-4 text-ink/85 text-[15.5px] leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-ink">
      {children}
    </div>
  </div>
);

export default Privacy;
