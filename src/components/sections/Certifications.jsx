import { useState } from 'react';
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import MacWindow from '../MacWindow';

const CERTS = [
  {
    title: 'Google Cybersecurity (Coursera)',
    img: 'https://images.unsplash.com/photo-1633113088022-9d9a5071c05d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Machine Learning Specialization',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Web Security Fundamentals',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Certifications() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % CERTS.length);
  const prev = () => setIndex((i) => (i - 1 + CERTS.length) % CERTS.length);

  const current = CERTS[index];

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold flex items-center gap-2"><Shield className="w-5 h-5 text-slate-900 dark:text-white" /> Certifications</h3>
        <div className="flex gap-2">
          <button onClick={prev} className="p-2 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-white hover:dark:bg-slate-900" aria-label="Previous">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="p-2 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-white hover:dark:bg-slate-900" aria-label="Next">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <MacWindow title={`Slide ${index + 1} of ${CERTS.length}`}>
        <div className="relative grid md:grid-cols-2 gap-6 items-stretch">
          <div className="relative h-64 md:h-72 rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-800">
            <img src={current.img} alt={current.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-medium drop-shadow">{current.title}</p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200/60 dark:border-slate-800 p-4 bg-white/50 dark:bg-slate-900/40">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A snapshot of certifications and coursework that underpin my approach to building secure and intelligent systems. Use the arrows to browse.
            </p>
          </div>
        </div>
      </MacWindow>
    </section>
  );
}
