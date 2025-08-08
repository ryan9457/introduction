import Profile from './profile/page';
import PowerRadar from './power-radar/page';
import Timeline from './timeline/page';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 bg-white dark:bg-neutral-900">
      <Profile />
      <Timeline />
      <PowerRadar />
    </div>
  );
}
