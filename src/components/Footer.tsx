export default function Footer() {
  return (
    <footer className="w-full mt-12 border-t border-slate-700 bg-transparent">
  <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Muhammed Yamin</div>
        <div className="flex items-center gap-4">
          <a href="mailto:muhammedyamin003@gmail.com" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
