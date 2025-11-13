import React from 'react';
import ContactForm from '../components/ContactForm';
import { projects } from '../lib/projects';
import SocialMarquee from '../components/SocialMarquee';

export default function Home() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Hey, I'm Yamin</h2>
        <p className="mt-3 text-slate-400 text-center">Crafting clean & scalable web apps :)</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 justify-center">
          {[
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'ReactJs',
            'Next.js',
            'Node.js',
            'MongoDB',
            'MySQL',
            'Supabase',
          ].map((t) => (
            <span
              key={t}
              className="text-sm bg-slate-800/60 border border-slate-700 px-3 py-1.5 rounded-full text-slate-300 hover:bg-slate-700/80 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {t}
            </span>
          ))}
        </div>

      </div>

      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mt-12 border-t border-slate-700 pt-8 font-semibold mb-4 text-center">My Projects</h2>
        <div id="projects" className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="card">
              <a href={p.link || '#'} target={p.link ? '_blank' : undefined} rel={p.link ? 'noopener noreferrer' : undefined} className="block rounded-md overflow-hidden mb-3">
                <div className="h-56 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                  <img src={p.image} alt={`${p.title} screenshot`} className="h-full w-full object-cover" />
                </div>
              </a>

              <h4 className="font-semibold text-slate-100">{p.title}</h4>

              <p className="text-sm text-slate-400 mt-1">{p.short}</p>

              <div className="mt-3 text-center">
                <a
                  href={p.link || '#'}
                  target={p.link ? '_blank' : undefined}
                  rel={p.link ? 'noopener noreferrer' : undefined}
                  className="inline-block px-4 py-1.5 text-sm font-medium text-slate-100 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white hover:scale-[1.03] transition-all duration-200"
                >
                  Visit →
                </a>
              </div>

            </article>
          ))}
        </div>

        <div id="socials" className="mt-6 border-t border-slate-700 pt-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 text-center">My Socials</h3>
          <SocialMarquee />
        </div>
      </div>

      <div id="contact" className="mt-12 border-t border-slate-700 pt-8">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 text-center">Reach Out</h3>
        <p className="text-slate-400 mb-4 text-center">Got a vision or just want to chat? Drop a line below.</p>
        <ContactForm />
      </div>

    </section>
  );
}
