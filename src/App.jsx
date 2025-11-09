import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

export default function App() {
  const [route, setRoute] = useState('home');

  // Respect system preference on first load
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <div className="fixed inset-0 pointer-events-none">
        {/* subtle grid backdrop for a tech vibe */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-50 dark:opacity-40" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-indigo-500/15 to-transparent dark:from-cyan-500/10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-fuchsia-500/10 to-transparent" />
      </div>

      <Navbar route={route} onNavigate={setRoute} />

      {route === 'home' ? (
        <>
          <Hero />
          <Home />
        </>
      ) : (
        <About />
      )}
    </div>
  );
}
