import Remaster from '../remaster/page';

export default function Chanllenge() {
  return (
    <section className="relative bg-white dark:bg-neutral-900 px-6 py-10 md:py-16">
      <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 transition-all">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
          目前正在...
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
          進行有趣的 Web Game 並以週為單位復刻還原的開發挑戰。
        </p>
        <Remaster />
      </div>
    </section>
  );
}
