export default function Footer() {
  return (
  <footer className="w-full mt-16 border-t border-slate-800 bg-slate-900/30 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
    <div className="text-center md:text-left">
      © {new Date().getFullYear()} <span className="text-slate-200 font-medium">Muhammed Yamin</span>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-3">
      <a href="mailto:muhammedyamin003@gmail.com" className="hover:text-slate-200 transition-colors">
        muhammedyamin003@gmail.com
      </a>
      <span className="hidden md:block text-slate-600">|</span>
      <a href="tel:+917760476139" className="hover:text-slate-200 transition-colors">
        +91 77604 76139
      </a>
      <span className="hidden md:block text-slate-600">|</span>
      <a href="tel:+9660547431680" className="hover:text-slate-200 transition-colors">
        +966 054 743 1680
      </a>
    </div>
  </div>
</footer>

  );
}
