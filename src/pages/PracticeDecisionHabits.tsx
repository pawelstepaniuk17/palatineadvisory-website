import PracticeDetail from '@/components/PracticeDetail';

const PracticeDecisionHabits = () => (
  <PracticeDetail
    slug="decision-habits"
    background="mustard"
    intro={[
      'Most teams do not have a shortage of decisions. They have a shortage of closure. A topic is discussed, agreed in the room, and then revisited the following week because no one is quite sure what was decided, who owns it, or when it should be reviewed.',
      'The work here is small in scope and large in effect. We make the path a decision travels visible to the team, and we agree the few habits that turn agreement into closure: a clear owner, a short written record, a date for review, and a plain reason that would justify reopening it.',
      'Once those habits are in place, the team stops carrying old decisions in working memory.',
    ]}
    questions={[
      'Which decisions keep coming back, and what do they have in common?',
      'When a decision is made, where is it written down, and who reads that record next?',
      'Who is the owner of the call when the team disagrees?',
      'What would have to change for a closed decision to be reopened?',
      'Where does the team confuse consultation with closure?',
    ]}
    closing="A decision that holds is rarely the one with the most analysis behind it. It is the one with a clear owner, a clear record, and a clear point at which it will be reviewed."
    crosslinks={[
      { label: 'Responsibility and handoffs', to: '/practice/responsibility', caption: 'Practice 02', bg: 'lavender' },
      { label: 'Leadership meeting rhythm', to: '/practice/meetings', caption: 'Practice 03', bg: 'sage-mist' },
      { label: 'How we work', to: '/approach', caption: '§ Approach', bg: 'buttercream' },
    ]}
  />
);

export default PracticeDecisionHabits;
