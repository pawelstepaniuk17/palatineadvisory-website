export const ApproachSection = () => {
  return (
    <section id="approach" className="bg-paper border-t border-ink/85">
      {/* Header */}
      <div className="section-container pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <p className="label-small text-ink/60 mb-5">§ 04, What this is not</p>
            <h2 className="heading-section text-ink">
              What this is not
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 pt-2 space-y-5">
            <p className="body-large text-ink/80">
              Palatine Advisory is not a software firm, financial adviser,
              transaction adviser, coaching practice, or large transformation
              programme.
            </p>
            <p className="body-large text-ink/80">
              We do not arrive with a branded method. We do not ask a team
              to rename ordinary work. We do not turn a small management
              problem into a large project.
            </p>
            <p className="body-large text-ink/80">
              We help make the existing work easier to lead.
            </p>
          </div>
        </div>
      </div>

      {/* Mustard footer band kept for visual continuity */}
      <div className="bg-mustard border-t border-ink/85 px-8 lg:px-14 py-12 lg:py-14">
        <p className="font-serif text-xl md:text-2xl text-ink leading-snug tracking-[-0.01em] max-w-3xl">
          The aim is a quieter management pattern around the work the team
          already owns.
        </p>
      </div>
    </section>
  );
};

export default ApproachSection;
