import { Sun, Moon, Home, User } from 'lucide-react';

export default function Navbar({ route, onNavigate }) {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  const Link = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => onNavigate(id)}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border shadow-sm
        ${
          route === id
            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900/10 dark:border-white/20'
            : 'bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 border-slate-200/60 dark:border-slate-800 hover:bg-white hover:dark:bg-slate-900'
        }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/80">
      <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-950/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.25)]" />
            <span className="font-semibold tracking-tight">Siddiq Odiq</span>
            <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400">Cyber Security & AI • Web Developer</span>
          </div>
          <nav className="flex items-center gap-2">
            <Link id="home" icon={Home} label="Home" />
            <Link id="about" icon={User} label="About" />
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-white hover:dark:bg-slate-900 shadow-sm"
            >
              <Sun className="w-4 h-4 hidden dark:block" />
              <Moon className="w-4 h-4 block dark:hidden" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
