import { ArrowUpRight } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-ink text-paper border-t border-ink/85">
      <div className="section-container pt-24 lg:pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-7">
            <p className="label-small text-paper/50 mb-5">§ 07, Contact</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-paper leading-[1.05] tracking-[-0.018em] mb-10">
              Start with the issue.
            </h2>
            <p className="body-large text-paper/70 max-w-xl mb-12">
              A short note is enough. Describe the decision, priority,
              responsibility, or coordination issue that keeps coming back,
              and we will read it carefully before replying.
            </p>

            <a
              href="mailto:contact@olive-tree-consulting.com"
              className="group inline-flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-paper/40 hover:border-mustard pb-3 max-w-full"
            >
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-paper group-hover:text-mustard transition-colors break-words min-w-0">
                contact@olive-tree-consulting.com
              </span>
              <ArrowUpRight className="h-5 w-5 text-paper group-hover:text-mustard group-hover:rotate-45 transition-all flex-shrink-0" strokeWidth={1.5} />
            </a>

            <div className="mt-8">
              <a
                href="tel:+393509230062"
                className="font-mono text-[12px] uppercase tracking-[0.22em] text-paper/70 hover:text-mustard transition-colors"
              >
                Telephone · +39 350 923 0062
              </a>
            </div>
          </div>

          {/* Right: address card */}
          <div className="lg:col-span-5">
            <div className="border border-paper/20 p-8 lg:p-10">
              <p className="label-small text-paper/50 mb-6">Office</p>
              <address className="not-italic font-serif text-2xl text-paper leading-snug mb-8">
                Olive Tree<br />
                Consulting Group<br />
                <span className="text-paper/70">Via Savoia, 78</span><br />
                <span className="text-paper/70">00198 Roma</span>
              </address>
              <div className="border-t border-paper/15 pt-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="label-small text-paper/40 mb-2">Hours</p>
                  <p className="text-paper/80 text-sm">Mon, Fri<br />By appointment</p>
                </div>
                <div>
                  <p className="label-small text-paper/40 mb-2">Telephone</p>
                  <p className="text-paper/80 text-sm">+39 350<br />923 0062</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
