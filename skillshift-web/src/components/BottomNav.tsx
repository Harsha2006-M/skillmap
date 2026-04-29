export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around z-50">
      <a className="flex flex-col items-center gap-1 text-primary" href="#">
        <span className="material-symbols-outlined">dashboard</span>
        <span className="text-[10px] font-bold">Home</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-slate-400" href="#">
        <span className="material-symbols-outlined">psychology</span>
        <span className="text-[10px] font-bold">Analyze</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-slate-400" href="#">
        <span className="material-symbols-outlined">swap_calls</span>
        <span className="text-[10px] font-bold">Paths</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-slate-400" href="#">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] font-bold">Profile</span>
      </a>
    </nav>
  );
}
