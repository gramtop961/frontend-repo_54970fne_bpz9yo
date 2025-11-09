import React from 'react';

export default function MacWindow({ title, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 h-10 border-b border-slate-200/60 dark:border-slate-800/80 bg-gradient-to-b from-white/70 to-white/40 dark:from-slate-900/60 dark:to-slate-900/30 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]" />
          <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]" />
        </div>
        {title && (
          <div className="mx-auto text-xs font-medium text-slate-600 dark:text-slate-300 select-none truncate">
            {title}
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
}
