import { useEffect, useState } from 'react';
import { BookOpenText, ExternalLink, Loader2, GraduationCap } from 'lucide-react';

// Fetch latest Medium posts using RSS-to-JSON (no auth needed). Replace USERNAME with Medium handle.
const MEDIUM_USERNAME = 'medium'; // change to Siddiq's handle when available
const FEED_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

const GOOGLE_SCHOLAR_URL = 'https://scholar.google.com/'; // replace with Siddiq's profile URL when available

export default function Writing() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error('Failed to load Medium feed');
        const data = await res.json();
        const items = (data.items || []).slice(0, 6).map((i) => ({
          title: i.title,
          link: i.link,
          pubDate: i.pubDate,
        }));
        if (mounted) setPosts(items);
      } catch (e) {
        if (mounted) setError(e.message);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold flex items-center gap-2"><BookOpenText className="w-5 h-5 text-indigo-600 dark:text-cyan-400" /> Writing</h3>
        <a
          href={GOOGLE_SCHOLAR_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-indigo-700 dark:text-cyan-300 hover:underline"
        >
          <GraduationCap className="w-4 h-4" /> Google Scholar
        </a>
      </div>

      {loading && (
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300"><Loader2 className="w-4 h-4 animate-spin" /> Loading latest posts…</div>
      )}
      {error && (
        <div className="text-sm text-rose-600 dark:text-rose-400">{error}</div>
      )}

      {!loading && !error && (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((p) => (
            <li key={p.link} className="rounded-lg border border-slate-200/60 dark:border-slate-800 p-4 bg-white/50 dark:bg-slate-900/40">
              <a href={p.link} target="_blank" rel="noreferrer" className="group block">
                <div className="font-medium group-hover:underline">{p.title}</div>
                <div className="text-xs text-slate-500 mt-1">{new Date(p.pubDate).toLocaleDateString()}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-indigo-600 dark:text-cyan-400 text-sm">
                  Read on Medium <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
