import PracticeDetail from '@/components/PracticeDetail';

const PracticeMeetings = () => (
  <PracticeDetail
    slug="meetings"
    background="sage-mist"
    intro={[
      'When every recurring issue lands in the same meeting, the meeting becomes too heavy to do any one thing well. Updates push out decisions. Decisions push out reviews. Reviews push out the quiet work of noticing what is drifting.',
      'The aim here is not more meetings, and rarely fewer. It is to give each recurring meeting a single clear purpose, and to agree what should happen between them.',
      'A small change in meeting purpose often removes more management work than a large change in process.',
    ]}
    questions={[
      'What is each recurring meeting actually for, in one sentence?',
      'Which conversations have ended up in this meeting because there was nowhere else to put them?',
      'What is supposed to happen after the meeting, and where is that written down?',
      'Which open items are quietly carried from week to week without anyone naming them?',
      'If this meeting were not held next month, what would the team lose first?',
    ]}
    closing="A meeting that knows what it is for is shorter, calmer, and more useful than the one it replaces."
    crosslinks={[
      { label: 'Decision habits', to: '/practice/decision-habits', caption: 'Practice 01', bg: 'mustard' },
      { label: 'Responsibility and handoffs', to: '/practice/responsibility', caption: 'Practice 02', bg: 'lavender' },
      { label: 'How we work', to: '/approach', caption: '§ Approach', bg: 'buttercream' },
    ]}
  />
);

export default PracticeMeetings;
