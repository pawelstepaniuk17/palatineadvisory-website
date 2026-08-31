// Shared content data so the homepage and dedicated pages stay aligned.

export type PracticeArea = {
  slug: string;
  n: string;
  title: string;
  short: string;
  body: string;
  useful: string[];
  typical: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'decision-habits',
    n: '01',
    title: 'Decision habits',
    short: 'How decisions are prepared, made, recorded, and revisited.',
    body: 'We help teams clarify how decisions are prepared, discussed, made, recorded, and revisited.',
    useful: [
      'The same decision keeps coming back.',
      'People are not sure who owns the final call.',
      'Meetings end with agreement but not closure.',
      'Decisions are remembered differently by different people.',
    ],
    typical: [
      'Decision path',
      'Decision record',
      'Review point',
      'Escalation rule',
      'Owner note',
    ],
  },
  {
    slug: 'responsibility',
    n: '02',
    title: 'Responsibility and handoffs',
    short: 'Who owns the work, where it moves, and how it is followed through.',
    body: 'We help teams make ownership clearer where work moves across roles, functions, or senior people.',
    useful: [
      'Work sits between people.',
      'Everyone is involved, but no one clearly owns the result.',
      'Handoffs depend on personal follow-up.',
      'Escalation happens too late or too often.',
    ],
    typical: [
      'Responsibility map',
      'Handoff note',
      'Escalation route',
      'Role boundary summary',
      'Follow-up rhythm',
    ],
  },
  {
    slug: 'meetings',
    n: '03',
    title: 'Leadership meeting rhythm',
    short: 'What each recurring meeting is for, and what should happen after it.',
    body: 'We help teams make recurring meetings more useful by clarifying what each meeting is for and what should happen after it.',
    useful: [
      'Meetings are active but not conclusive.',
      'Updates crowd out decisions.',
      'Open items are hard to track.',
      'The same topics return without progress.',
    ],
    typical: [
      'Meeting purpose map',
      'Agenda structure',
      'Open-item record',
      'Follow-up note',
      'Review cadence',
    ],
  },
];

export type Industry = {
  slug: string;
  n: string;
  name: string;
  body: string;
};

export const industries: Industry[] = [
  {
    slug: 'founder-led',
    n: '01',
    name: 'Founder-led companies',
    body: 'Founder-led companies often grow through direct access, quick judgment, and informal follow-up. As the team expands, those habits can create bottlenecks. We help make the management route clearer without removing the founder’s judgment from the business.',
  },
  {
    slug: 'growing-teams',
    n: '02',
    name: 'Growing leadership teams',
    body: 'As more leaders join, the team needs a shared way to decide, review, and follow through. We help clarify how that leadership work should happen.',
  },
  {
    slug: 'distributed',
    n: '03',
    name: 'Remote or distributed teams',
    body: 'Distributed teams cannot rely on hallway memory. Decisions, ownership, and open items need a clearer written rhythm.',
  },
  {
    slug: 'service',
    n: '04',
    name: 'Service businesses',
    body: 'Service businesses often depend on senior attention and relationship memory. We help make recurring management work clearer so senior people are not pulled into every unresolved detail.',
  },
  {
    slug: 'after-change',
    n: '05',
    name: 'Teams after change',
    body: 'A new leader, new structure, or changed set of responsibilities often exposes unclear habits. We help the team settle a cleaner way to work together.',
  },
];
