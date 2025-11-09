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
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(15,23,42,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(15,23,42,0.06),transparent_40%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_40%)] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Subtle iOS/Mac-like background with glass and depth */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.6),transparent_30%)] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_30%)]" />
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
