import Spline from '@splinetool/react-spline';
import MacWindow from './MacWindow';

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 pt-10 sm:pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Online
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Siddiq Odiq
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-prose">
            Cyber Security & AI enthusiast and Web Developer crafting secure, performant, and elegant digital products.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">Security</span>
            <span className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">AI/ML</span>
            <span className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">Web</span>
          </div>
        </div>
        <div className="relative h-[360px] sm:h-[420px] md:h-[460px]">
          <MacWindow title="spline://scene">
            <div className="relative h-[280px] sm:h-[340px] md:h-[380px] rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-slate-950/40" />
            </div>
          </MacWindow>
        </div>
      </div>
    </section>
  );
}
