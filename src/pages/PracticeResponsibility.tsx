import PracticeDetail from '@/components/PracticeDetail';

const PracticeResponsibility = () => (
  <PracticeDetail
    slug="responsibility"
    background="lavender"
    intro={[
      'Responsibility is rarely missing in name. It is missing in plain working terms. Several people are involved in a piece of work, all of them in good faith, and the question of who carries the result has never been settled in writing. Work moves only when someone pushes it personally.',
      'The cost shows up later, in repeated chasing, in escalations that arrive too early or too late, and in handoffs that depend on a single person remembering to follow up.',
      'The work here is to make ownership plain at the points where work changes hands, and to agree the small routines that protect it.',
    ]}
    questions={[
      'Where does work currently sit between people, with no single owner?',
      'When something moves from one person to another, what is meant to happen, and who confirms that it did?',
      'Where is the team relying on personal follow-up where a routine would be more reliable?',
      'What triggers escalation, and is that trigger the right one?',
      'Which roles have grown without their edges being redrawn?',
    ]}
    closing="Ownership becomes a problem at the seams. The seams are where the work is."
    crosslinks={[
      { label: 'Decision habits', to: '/practice/decision-habits', caption: 'Practice 01', bg: 'mustard' },
      { label: 'Leadership meeting rhythm', to: '/practice/meetings', caption: 'Practice 03', bg: 'sage-mist' },
      { label: 'How we work', to: '/approach', caption: '§ Approach', bg: 'buttercream' },
    ]}
  />
);

export default PracticeResponsibility;
