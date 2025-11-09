import Certifications from './sections/Certifications.jsx';
import Projects from './sections/Projects.jsx';
import Writing from './sections/Writing.jsx';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <Certifications />
      <Projects />
      <Writing />
    </main>
  );
}
