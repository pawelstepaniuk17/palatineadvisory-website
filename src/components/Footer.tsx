import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logo from '@/assets/olive-tree-logo.png';

type LinkItem = { label: string; to: string };
type LinkGroup = { heading: string; items: LinkItem[] };

const columnA: LinkGroup[] = [
  {
    heading: 'How to begin',
    items: [
      { label: 'Write to the firm', to: '/contact' },
      { label: 'How we work', to: '/approach' },
      { label: 'Where this work fits', to: '/industries' },
    ],
  },
  {
    heading: 'Reach us',
    items: [
      { label: 'contact@palatineadvisory.com', to: '/contact' },
      { label: '+39 350 923 0062', to: '/contact' },
      { label: 'Via Savoia, 78, 00198 Roma', to: '/contact' },
    ],
  },
  {
    heading: 'Practice areas',
    items: [
      { label: 'Decision habits', to: '/practice/decision-habits' },
      { label: 'Responsibility and handoffs', to: '/practice/responsibility' },
      { label: 'Leadership meeting rhythm', to: '/practice/meetings' },
      { label: 'Priority movement', to: '/practice' },
      { label: 'Management reset', to: '/practice' },
      { label: 'All practice areas', to: '/practice' },
    ],
  },
];

const columnB: LinkGroup[] = [
  {
    heading: 'Where this work fits',
    items: [
      { label: 'Founder-led companies', to: '/industries' },
      { label: 'Growing leadership teams', to: '/industries' },
      { label: 'Remote or distributed teams', to: '/industries' },
      { label: 'Service businesses', to: '/industries' },
      { label: 'Teams after change', to: '/industries' },
    ],
  },
  {
    heading: 'Notes on management work',
    items: [
      { label: 'All notes', to: '/insights' },
    ],
  },
  {
    heading: 'Firm',
    items: [
      { label: 'About', to: '/about' },
      { label: 'Approach', to: '/approach' },
      { label: 'Team', to: '/about#team' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

const renderGroups = (groups: LinkGroup[]) => (
  <div className="space-y-10">
    {groups.map((g) => (
      <div key={g.heading}>
        <h3 className="font-serif text-xl text-ink mb-4 leading-tight">
          {g.heading}
        </h3>
        <ul className="space-y-2">
          {g.items.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="text-[15px] text-ink/85 hover:text-ink hover:underline underline-offset-2 transition-colors leading-snug break-words"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-lavender text-ink border-t border-ink/85">
      <div className="section-container pt-20 lg:pt-24 pb-14">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT, identity + newsletter */}
          <div className="lg:col-span-5">
            <img
              src={logo}
              alt="Palatine Advisory"
              className="h-16 w-16 lg:h-20 lg:w-20 object-contain mb-8"
            />

            <h2 className="font-serif text-3xl lg:text-[2.25rem] text-ink leading-[1.15] tracking-[-0.01em] mb-5 max-w-md">
              Make management easier to hold.
            </h2>
            <p className="text-[15px] text-ink/80 leading-relaxed max-w-md mb-12">
              Palatine Advisory works with leadership teams on the ordinary
              management work that keeps coming back: decisions,
              responsibilities, meetings, priorities, and follow-through.
            </p>

            {/* Newsletter signup */}
            <h3 className="font-serif text-xl text-ink mb-6">
              Receive the occasional note
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-7 max-w-lg"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                <FormField label="First Name" required />
                <FormField label="Last Name" required />
                <FormField label="Email Address" type="email" required className="col-span-2" />
              </div>

              <label className="flex items-start gap-3 cursor-pointer max-w-lg">
                <input type="checkbox" required className="mt-1 accent-ink" />
                <span className="text-[12.5px] text-ink/75 leading-relaxed">
                  I have read the <Link to="/privacy" className="underline underline-offset-2 hover:text-ink">Privacy Policy</Link> and consent to receive occasional correspondence from the firm.
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3.5 hover:bg-mustard hover:text-ink transition-colors group"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                  Subscribe
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-paper group-hover:bg-ink transition-colors" />
              </button>
            </form>

          </div>

          {/* RIGHT, two columns of grouped link lists */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-10 lg:pl-8">
            {renderGroups(columnA)}
            {renderGroups(columnB)}
          </div>
        </div>
      </div>

      {/* Bottom secondary bar, darker lavender */}
      <div className="bg-lavender-deep border-t border-ink/15">
        <div className="section-container py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {[
              { label: 'About', to: '/about' },
              { label: 'Contact', to: '/contact' },
              { label: 'Privacy', to: '/privacy' },
              { label: 'Terms', to: '/terms' },
              { label: 'Cookies', to: '/cookies' },
              { label: 'Legal Notice', to: '/legal-notice' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-[13px] text-ink/85 hover:text-ink hover:underline underline-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 hover:bg-mustard hover:text-ink transition-colors group"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
              Write to the firm
            </span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.75} />
          </Link>
        </div>
        <div className="section-container py-6 border-t border-ink/15">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 text-ink/75">
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-2">Legal disclaimer</p>
              <p className="text-[12.5px] leading-relaxed">
                Website content is provided for general informational purposes only. It does not constitute legal, financial, tax, investment, or professional advice.
              </p>
            </div>
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-2">Engagements</p>
              <p className="text-[12.5px] leading-relaxed">
                Any advisory engagement with Palatine Advisory is governed by separate written terms agreed with the client before work begins.
              </p>
            </div>
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-2">Contact form privacy</p>
              <p className="text-[12.5px] leading-relaxed">
                Information submitted through the contact form is used to review and respond to business inquiries. Please do not submit confidential client, employee, financial, legal, or transaction information through the public form.
              </p>
            </div>
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 mb-2">How we operate</p>
              <p className="text-[12.5px] leading-relaxed">
                Palatine Advisory works remotely unless otherwise agreed directly with a client.
              </p>
            </div>
          </div>
        </div>
        <div className="section-container pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
            © {year} Palatine Advisory
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
            Roma
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FormFieldProps {
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const FormField = ({ label, type = 'text', required, placeholder, className = '' }: FormFieldProps) => (
  <label className={`block ${className}`}>
    <span className="block text-[13px] text-ink/80 mb-2">
      {label}
      {required && <span className="text-ink/60">*</span>}
    </span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b border-ink/40 focus:border-ink outline-none py-2 text-sm text-ink placeholder:text-ink/40"
    />
  </label>
);

export default Footer;
