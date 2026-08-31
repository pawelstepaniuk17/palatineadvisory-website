import { OrnamentRule } from './OliveMark';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede: string;
  background?: 'paper' | 'lavender' | 'mustard' | 'sage-mist' | 'buttercream';
}

const bgMap = {
  paper: 'bg-paper',
  lavender: 'bg-lavender',
  mustard: 'bg-mustard',
  'sage-mist': 'bg-sage-mist',
  buttercream: 'bg-buttercream',
} as const;

export const PageHeader = ({ eyebrow, title, lede, background = 'paper' }: PageHeaderProps) => {
  return (
    <header className={`${bgMap[background]} border-b border-ink/85 pt-[152px] lg:pt-[168px] pb-20 lg:pb-28`}>
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="label-small text-ink/60 mb-6">{eyebrow}</p>
            <h1 className="font-serif text-ink text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.02] tracking-[-0.02em] text-balance">
              {title}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end">
            <OrnamentRule className="text-ink/50 w-32 mb-6" />
            <p className="font-serif text-xl md:text-2xl text-ink/85 leading-snug max-w-md text-balance">
              {lede}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
