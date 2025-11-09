export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="prose prose-slate dark:prose-invert">
        <p>
          I'm Siddiq Odiq — a Cyber Security and AI enthusiast with a passion for building secure, resilient, and intuitive web applications. I combine offensive and defensive security awareness with practical engineering skills to create products that are both delightful and robust.
        </p>
        <h3>Core Focus</h3>
        <ul>
          <li>Threat modeling, secure coding, and privacy by design</li>
          <li>Machine learning for anomaly detection and intelligent UX</li>
          <li>Full‑stack web development with attention to performance</li>
        </ul>
        <h3>Skills</h3>
        <ul>
          <li>Languages: JavaScript/TypeScript, Python</li>
          <li>Frameworks: React, FastAPI</li>
          <li>Security: OWASP, code review, hardening, auth flows</li>
          <li>Tools: Git, Docker, CI/CD</li>
        </ul>
        <h3>Philosophy</h3>
        <p>
          I believe security and user experience are complementary. Great products guard users without getting in their way.
        </p>
      </div>
    </main>
  );
}
