import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { rolesDataset } from '../data/rolesDataset';

export default function TopAppBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    rolesDataset.forEach(role => {
      role.skills.forEach(skill => skills.add(skill));
    });
    return Array.from(skills);
  }, []);

  const suggestions = useMemo(() => {
    if (!searchQuery) return [];
    return allSkills
      .filter(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 5);
  }, [searchQuery, allSkills]);

  const handleSearchSubmit = (query: string) => {
    if (query.trim()) {
      // Clean up search query (e.g., "python tutorial" -> "python")
      const cleanedSkill = query.toLowerCase().replace(/tutorial/g, '').trim();
      setSearchQuery('');
      setIsFocused(false);
      navigate(`/course/${encodeURIComponent(cleanedSkill)}`);
    }
  };

  return (
    <header className="sticky top-0 w-full flex justify-between items-center px-8 h-20 bg-white/80 backdrop-blur-xl z-40 border-b border-slate-200/50 shadow-[0_4px_20px_-4px_rgba(79,70,229,0.1)]">
      <div className="flex items-center gap-8">
        <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-['Inter'] antialiased">
          Transferable Skills Intelligence
        </span>
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/upload" className="font-label-md text-label-md text-indigo-600 border-b-2 border-indigo-600 pb-5 translate-y-[10px]">Dashboard</Link>
          <Link to="/skills-analysis" className="font-label-md text-label-md text-slate-500 hover:text-slate-900 transition-all">Analysis</Link>
          <Link to="/gap-results" className="font-label-md text-label-md text-slate-500 hover:text-slate-900 transition-all">Gap Report</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
          <input 
            className="bg-slate-50 border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
            placeholder="Search skills (e.g. Python)..." 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchSubmit(searchQuery);
            }}
          />
          {isFocused && suggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden z-50">
              {suggestions.map((suggestion, idx) => (
                <div key={idx} className="px-4 py-3 text-sm text-slate-700 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors border-b border-slate-100 last:border-b-0"
                     onClick={() => handleSearchSubmit(suggestion)}>
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Notifications */}
        <div className="relative">
          <button 
            className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all active:scale-95 relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Notifications</h3>
                <button className="text-xs text-primary hover:underline" onClick={() => setShowNotifications(false)}>Mark all read</button>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5">celebration</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Role Matched!</p>
                      <p className="text-xs text-slate-500 mt-1">Your profile is a 94% match for Software Engineer.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 hover:bg-slate-50 cursor-pointer">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">school</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Finish your course</p>
                      <p className="text-xs text-slate-500 mt-1">You are 80% done with the Python course. Keep going!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link to="/settings" className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all active:scale-95">
          <span className="material-symbols-outlined">settings</span>
        </Link>
        <Link to="/profile" className="h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-sm ml-2 block hover:opacity-90 transition-opacity">
          <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpo6empNLo3Tt87uT5NbTkAkb6XHRMdcZh6Esy2DdTt5UW6XDfi5TaufG3mMSaTizmRZRvLnkZJuvODjHN5KKHBqjct82yYi1mR4l9y6hgHharN4xcr1g93ZvdOottwtNNZtx7LcMx3pA6AD6K2eikhgnZq5oNKLZdO53GX33ZmtgoDAdt6FG5wxFPEJHypcyhCSEf-MABOOQwI1dmUSNti1UW9DLeDFCo0bN92G6xPSg87EG3w8ED5icM25WQAsdcjwQdm_u-GTWb" />
        </Link>
      </div>
    </header>
  );
}
