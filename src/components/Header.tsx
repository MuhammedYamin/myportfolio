"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  useEffect(() => {
    // prevent background scrolling when menu is open
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // close the mobile menu when viewport becomes desktop-sized
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
  <header className="fixed sm:static top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-slate-900/60 border-b border-slate-800 py-3">
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg overflow-hidden ring-1 ring-slate-700">
            <img src="/images/projects/Yamin.png" alt="Yamin" className="w-full h-full object-cover" />
          </div>
          <div>
            <Link href="/" className="text-lg font-semibold">Muhammed Yamin</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* hamburger only on small screens */}
          <button
            aria-label="menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md bg-slate-800/50 hover:bg-slate-700/40 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-300">
              <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
  </div>
  </div>

  {/* slide-in menu from right for mobile */}
  <div className={`fixed inset-0 z-50 sm:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* backdrop - blur and block interaction */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />

  <aside className={`fixed right-4 top-16 h-auto w-44 bg-slate-800 border border-slate-700 rounded-lg transform transition-transform ${open ? 'translate-x-0' : 'translate-x-60'}`}>
          <div className="p-4 flex flex-col gap-4">
            <button onClick={() => scrollTo('projects')} className="text-slate-200 text-left text-lg">Projects</button>
            <button onClick={() => scrollTo('contact')} className="text-slate-200 text-left text-lg">Contact me</button>
            <button onClick={() => scrollTo('socials')} className="text-slate-200 text-left text-lg">Socials</button>
          </div>
        </aside>
      </div>
    </header>
  );
}
