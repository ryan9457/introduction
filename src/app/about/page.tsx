import Intro from './profile/page';
import SkillTree from './skill-tree/page';
import Timeline from './timeline/page';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 bg-white dark:bg-neutral-900">
      <Intro />
      <Timeline />
      <SkillTree />
    </div>
  );
}
