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
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors border ${
        route === id
          ? 'bg-indigo-600 text-white border-indigo-600'
          : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 border-slate-200/60 dark:border-slate-800 hover:bg-white hover:dark:bg-slate-900'
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold tracking-tight">Siddiq Odiq</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Cyber Security & AI • Web Developer</span>
        </div>
        <nav className="flex items-center gap-2">
          <Link id="home" icon={Home} label="Home" />
          <Link id="about" icon={User} label="About" />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200/60 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:bg-white hover:dark:bg-slate-900"
          >
            {/* Icon swap via CSS hidden */}
            <Sun className="w-4 h-4 hidden dark:block" />
            <Moon className="w-4 h-4 block dark:hidden" />
          </button>
        </nav>
      </div>
    </header>
  );
}
