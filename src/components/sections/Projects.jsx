import { ExternalLink, Code2 } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Secure Login Flow',
    desc: 'A demo of a hardened authentication flow with rate‑limiting and device fingerprinting.',
    link: 'https://example.com',
    tags: ['Security', 'Auth', 'Web'],
  },
  {
    title: 'AI Anomaly Detector',
    desc: 'Lightweight service that flags suspicious patterns in request streams using ML.',
    link: 'https://example.com',
    tags: ['AI/ML', 'Monitoring'],
  },
  {
    title: 'Portfolio Starter',
    desc: 'Minimal, fast, and accessible portfolio template with dark mode.',
    link: 'https://example.com',
    tags: ['Web', 'UX'],
  },
];

export default function Projects() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><Code2 className="w-5 h-5 text-indigo-600 dark:text-cyan-400" /> Projects</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group rounded-lg border border-slate-200/60 dark:border-slate-800 p-4 bg-white/50 dark:bg-slate-900/40 hover:border-indigo-400/60 hover:dark:border-cyan-400/60 transition-colors">
            <div className="font-semibold">{p.title}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{t}</span>
              ))}
            </div>
            <div className="mt-3 inline-flex items-center gap-1 text-indigo-600 dark:text-cyan-400 text-sm">
              View <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
