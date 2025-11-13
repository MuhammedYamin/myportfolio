"use client";
import React, { useRef, useState, useEffect } from 'react';

type Social = { id: string; href: string; label: string; img: string };

const SOCIALS: Social[] = [
  { id: 'github', href: 'https://github.com/MuhammedYamin', label: 'GitHub', img: '/images/projects/github.png' },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/m-yamin/', label: 'LinkedIn', img: '/images/projects/linkedin.png' },
  { id: 'reddit', href: 'https://www.reddit.com/user/mortalbeing11/', label: 'Reddit', img: '/images/projects/reddit.png' },
  { id: 'instagram', href: 'https://www.instagram.com/yaamin.10/', label: 'Instagram', img: '/images/projects/instagram.png' },
];

export default function SocialMarquee() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScroll, setStartScroll] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    function update() {
      setIsMobile(window.innerWidth < 768);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  function handlePointerDown(e: React.PointerEvent) {
    if (!isMobile) return; // only allow drag/pause interaction on mobile
    const c = containerRef.current;
    const t = trackRef.current;
    if (!c || !t) return;
    // pause animation and allow manual scroll
    t.classList.add('paused');
    c.style.overflowX = 'auto';
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setIsDown(true);
    setStartX(e.clientX);
    setStartScroll(c.scrollLeft);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isMobile || !isDown) return;
    const c = containerRef.current;
    if (!c) return;
    const diff = e.clientX - startX;
    c.scrollLeft = startScroll - diff;
  }

  function endInteraction(e?: React.PointerEvent) {
    if (!isMobile) return;
    const c = containerRef.current;
    const t = trackRef.current;
    if (!c || !t) return;
    setIsDown(false);
    t.classList.remove('paused');
    c.style.overflowX = 'hidden';
  }

  return (
    <div
      className="marquee mt-4"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endInteraction}
      onPointerCancel={endInteraction}
      onPointerLeave={endInteraction}
    >
  <div className={`marquee-track ${!isMobile ? 'justify-center' : ''}`} ref={trackRef} role="list" aria-label="Social links marquee">
        {/* on mobile render duplicated list for seamless loop; on desktop render single list */}
        {(isMobile ? [...SOCIALS, ...SOCIALS] : SOCIALS).map((s, i) => (
          <div key={`${s.id}-${i}`} className="marquee-item flex flex-col items-center px-2">
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <img src={s.img} alt={s.label} className="w-full h-full object-cover" />
            </a>
            <span className="mt-2 text-xs md:text-sm text-slate-300 hidden md:block">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
