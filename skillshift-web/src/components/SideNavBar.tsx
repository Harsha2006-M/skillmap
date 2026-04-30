import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SideNavBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded-lg font-semibold transition-all duration-300 ${isActive
      ? 'bg-white text-primary shadow-sm'
      : 'text-slate-500 hover:bg-slate-100 hover:translate-x-1'
    }`;

  return (
    <aside className="hidden md:flex h-screen w-64 border-r border-slate-200 bg-slate-50 flex-col py-6 gap-2 fixed left-0 top-0 z-50">
      <div className="px-6 mb-8">
        <h1 className="text-xl font-black text-slate-900 tracking-tight">T.S.I.</h1>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Career Intelligence</p>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        <NavLink to="/upload" className={getNavLinkClass}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </NavLink>
        <NavLink to="/suggestion-master" className={getNavLinkClass}>
          <span className="material-symbols-outlined">psychology_alt</span>
          <span className="font-label-md text-label-md">Suggestion Master</span>
        </NavLink>
        <NavLink to="/job-alerts" className={getNavLinkClass}>
          <span className="material-symbols-outlined">work_history</span>
          <span className="font-label-md text-label-md">Job Alerts</span>
        </NavLink>
        <NavLink to="/skills-analysis" className={getNavLinkClass}>
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-label-md text-label-md">Skills Analysis</span>
        </NavLink>
        <NavLink to="/gap-results" className={getNavLinkClass}>
          <span className="material-symbols-outlined">difference</span>
          <span className="font-label-md text-label-md">Gap Results</span>
        </NavLink>
        <NavLink to="/results" className={getNavLinkClass}>
          <span className="material-symbols-outlined">swap_calls</span>
          <span className="font-label-md text-label-md">Career Transitions</span>
        </NavLink>
        <NavLink to="/learning-path" className={getNavLinkClass}>
          <span className="material-symbols-outlined">auto_stories</span>
          <span className="font-label-md text-label-md">Learning Path</span>
        </NavLink>
      </nav>
      <div className="px-4 mt-auto">
        <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl text-white shadow-lg mb-6">
          <p className="text-xs font-bold opacity-80 mb-1">PRO PLAN</p>
          <p className="text-sm font-bold mb-3">Unlock AI Insights</p>
          <button onClick={() => navigate('/pricing')} className="w-full bg-white text-primary text-xs font-bold py-2 rounded-lg active:scale-95 transition-all">Upgrade to Pro</button>
        </div>
        <div className="space-y-1">
          <Link to="/help" className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all w-full">
            <span className="material-symbols-outlined text-sm">help</span>
            <span className="font-label-md text-label-md">Help Center</span>
          </Link>
          <button onClick={logout} className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all w-full text-left">
            <span className="material-symbols-outlined text-sm">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
