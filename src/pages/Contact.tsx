import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import courtyard from '@/assets/courtyard-arch.jpg';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const includeList = [
  'What the team is trying to manage',
  'Where the issue keeps repeating',
  'Who is involved',
  'What has already been tried',
  'Whether timing matters',
  'What would count as useful progress',
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact | Olive Tree Consulting Group</title>
        <meta name="description" content="Start with the issue. A useful first message describes the management issue that keeps returning and what makes it difficult to settle." />
        <link rel="canonical" href="https://palatineadvisory.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Navigation />
        <main>
          <PageHeader
            eyebrow="§ Contact"
            title="Start with the issue"
            lede="A useful first message does not need to be long. Describe the management issue that keeps returning and what makes it difficult to settle."
            background="lavender"
          />

          {/* Guidance: what to include + before sending */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-16 lg:py-20">
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-6">
                  <p className="label-small text-ink/55 mb-5">§ What to include</p>
                  <h2 className="font-serif text-2xl lg:text-3xl text-ink leading-snug mb-8 max-w-md">
                    What to include
                  </h2>
                  <ul className="space-y-4 border-t border-ink/20 pt-6 max-w-md">
                    {includeList.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-ink/45 pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                        <p className="body-base text-ink/85">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="label-small text-ink/55 mb-5">§ Before sending</p>
                  <div className="border border-ink/30 bg-buttercream/40 p-8">
                    <p className="body-base text-ink/85 leading-relaxed">
                      Please do not include confidential client, employee, financial, legal, or transaction information in the first message. If a conversation moves forward, confidentiality terms can be agreed separately in writing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form + address */}
          <section className="bg-paper border-b border-ink/85">
            <div className="section-container py-20 lg:py-24">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Form */}
                <div className="lg:col-span-7">
                  <p className="label-small text-ink/55 mb-5">§ Contact</p>
                  <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-12 max-w-md leading-tight">
                    Contact
                  </h2>

                  {submitted ? (
                    <div className="border border-ink/30 bg-buttercream/40 p-10">
                      <p className="label-small text-ink/55 mb-3">Received</p>
                      <p className="font-serif text-2xl text-ink leading-snug max-w-md">
                        Thank you. Your inquiry has been received.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        if (submitting) return;
                        const formEl = e.currentTarget;
                        const fd = new FormData(formEl);
                        const payload = {
                          name: String(fd.get('name') ?? '').trim(),
                          title: '',
                          organization: String(fd.get('organization') ?? '').trim(),
                          email: String(fd.get('email') ?? '').trim(),
                          inquiry: '',
                          description: String(fd.get('description') ?? '').trim(),
                          contactMethod: String(fd.get('contact-method') ?? 'Email reply'),
                        };
                        setSubmitting(true);
                        try {
                          const { data, error } = await supabase.functions.invoke('send-contact-email', {
                            body: payload,
                          });
                          if (error || (data as { error?: string })?.error) {
                            throw new Error((data as { error?: string })?.error || error?.message || 'Failed to send');
                          }
                          setSubmitted(true);
                        } catch (err) {
                          console.error(err);
                          toast({
                            title: 'Could not send',
                            description: 'Please try again or write to contact@palatineadvisory.com',
                            variant: 'destructive',
                          });
                        } finally {
                          setSubmitting(false);
                        }
                      }}
                      className="space-y-8 max-w-2xl"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                        <Field name="name" label="Name" required />
                        <Field name="email" label="Work email" type="email" required />
                        <div className="md:col-span-2">
                          <Field name="organization" label="Company" required />
                        </div>
                      </div>
                      <FieldTextarea name="description" label="What are you trying to clarify?" />
                      <div>
                        <p className="label-small text-ink/55 mb-3">Preferred reply method</p>
                        <div className="flex flex-wrap gap-3">
                          {['Email reply', 'Brief call', 'Written note'].map((opt) => (
                            <label key={opt} className="inline-flex items-center gap-2 border border-ink/30 px-4 py-2.5 cursor-pointer hover:bg-buttercream/40">
                              <input type="radio" name="contact-method" value={opt} defaultChecked={opt === 'Email reply'} className="accent-ink" />
                              <span className="text-sm text-ink/85">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-4 bg-ink text-paper px-7 py-4 hover:bg-mustard hover:text-ink transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{submitting ? 'Sending…' : 'Send inquiry'}</span>
                        <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" strokeWidth={1.5} />
                      </button>
                      <p className="text-xs text-ink/55 max-w-md">Your note is read by Olive Tree directly. We do not share inquiries with third parties and do not add senders to any mailing list without explicit consent.</p>
                    </form>
                  )}
                </div>

                {/* Side panel — existing contact details preserved */}
                <aside className="lg:col-span-4 lg:col-start-9 space-y-10">
                  <div className="border border-ink/30 bg-buttercream/40 p-8">
                    <p className="label-small text-ink/55 mb-5">Direct line</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-1">Email</p>
                    <a href="mailto:contact@palatineadvisory.com" className="font-serif text-ink hover:underline underline-offset-2 break-words">
                      contact@palatineadvisory.com
                    </a>
                    <div className="mt-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-1">Telephone</p>
                      <a href="tel:+393509230062" className="font-serif text-ink hover:underline underline-offset-2">
                        +39 350 923 0062
                      </a>
                    </div>
                  </div>

                  <div className="border border-ink/30 p-8">
                    <p className="label-small text-ink/55 mb-5">Office</p>
                    <address className="not-italic font-serif text-xl text-ink leading-snug mb-6">
                      Olive Tree<br />
                      Consulting Group<br />
                      <span className="text-ink/65 text-base">Via Savoia, 78</span><br />
                      <span className="text-ink/65 text-base">00198 Roma</span>
                    </address>
                    <div className="border-t border-ink/20 pt-5">
                      <p className="label-small text-ink/55 mb-2">Hours</p>
                      <p className="text-sm text-ink/75">Mon, Fri, by appointment</p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* Closing image */}
          <section className="border-b border-ink/85 grid lg:grid-cols-12">
            <div className="lg:col-span-5 bg-mustard px-8 lg:px-14 py-20 border-r border-ink/85 flex flex-col justify-center">
              <p className="label-small text-ink/65 mb-5">§ A note on first messages</p>
              <p className="font-serif text-3xl lg:text-4xl text-ink leading-snug">
                A short, plain description of the recurring issue is the most useful place to begin.
              </p>
            </div>
            <div className="lg:col-span-7 relative min-h-[360px]">
              <img src={courtyard} alt="A quiet courtyard with an olive tree" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={1600} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

const Field = ({ name, label, type = 'text', required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) => (
  <label className="block">
    <span className="block label-small text-ink/55 mb-2">
      {label}{required && <span className="text-ink/40"> *</span>}
    </span>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b border-ink/40 focus:border-ink outline-none py-2.5 text-base text-ink placeholder:text-ink/35"
    />
  </label>
);

const FieldTextarea = ({ name, label }: { name: string; label: string }) => (
  <label className="block">
    <span className="block label-small text-ink/55 mb-2">{label}</span>
    <textarea
      name={name}
      rows={5}
      className="w-full bg-transparent border border-ink/30 focus:border-ink outline-none p-4 text-base text-ink resize-none"
    />
  </label>
);

export default Contact;
