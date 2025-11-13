import { projects } from '../../lib/projects';

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="card">
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center mb-3 rounded-md overflow-hidden">
              <img src={p.image} alt={`${p.title} screenshot`} className="max-h-full" />
            </div>

            <h3 className="font-semibold text-slate-100">{p.title}</h3>

            <p className="text-sm text-slate-400 mt-1">{p.short}</p>

            <ul className="mt-2 text-sm text-slate-500">
              {p.highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>

            <div className="mt-3">
              {p.link ? (
                <a href={p.link} className="text-primary text-sm" target="_blank" rel="noreferrer">Open project</a>
              ) : (
                <span className="text-sm text-slate-500">Link coming soon</span>
              )}
            </div>
          </article>

        ))}
      </div>
    </section>
  );
}
