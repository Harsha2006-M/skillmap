import { useState } from 'react';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { rolesDataset } from '../data/rolesDataset';
import { useNavigate } from 'react-router-dom';

export default function SuggestionMasterPage() {
  const [certInput, setCertInput] = useState('');
  const [suggestions, setSuggestions] = useState<{ role: string, skills: string[], domain: string, matchCount: number }[]>([]);
  const [inferredSkills, setInferredSkills] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleAnalyzeCerts = () => {
    if (!certInput.trim()) return;
    setIsAnalyzing(true);

    setTimeout(() => {
        const certs = certInput.toLowerCase();
        const foundSkills = new Set<string>();
        
        // Comprehensive mock mapping for various certs
        const skillMap: Record<string, string[]> = {
            'aws': ['Cloud Computing', 'AWS', 'Infrastructure', 'DevOps', 'Security'],
            'azure': ['Cloud Computing', 'Azure', 'Active Directory', 'Cloud Architecture'],
            'google cloud': ['GCP', 'Cloud Computing', 'Data Analytics', 'BigQuery'],
            'python': ['Python', 'Data Analysis', 'Automation', 'Scripting', 'Pandas'],
            'pmp': ['Project Management', 'Agile', 'Stakeholder Management', 'Risk Management'],
            'scrum': ['Agile', 'Scrum', 'Kanban', 'Team Leadership'],
            'react': ['React', 'JavaScript', 'Frontend Development', 'Web Design'],
            'figma': ['Figma', 'UI/UX', 'Prototyping', 'User Research', 'Design Systems'],
            'ccna': ['Networking', 'Cisco', 'TCP/IP', 'Routing', 'Security'],
            'comptia': ['IT Support', 'Hardware', 'Troubleshooting', 'Basic Networking'],
            'sql': ['SQL', 'Database Management', 'Data Modeling', 'Queries'],
            'tableau': ['Tableau', 'Data Visualization', 'Business Intelligence'],
        };

        Object.keys(skillMap).forEach(key => {
            if (certs.includes(key)) {
                skillMap[key].forEach(s => foundSkills.add(s));
            }
        });

        const skillsArray = Array.from(foundSkills);
        setInferredSkills(skillsArray);

        const matchedRoles = rolesDataset
          .map(role => {
            const matches = role.skills.filter(s => skillsArray.some(is => s.toLowerCase().includes(is.toLowerCase())));
            return { role: role.title, skills: role.skills, domain: role.domain || 'Professional Services', matchCount: matches.length };
          })
          .filter(r => r.matchCount > 0)
          .sort((a, b) => b.matchCount - a.matchCount)
          .slice(0, 4);

        setSuggestions(matchedRoles);
        setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-black rounded-full uppercase tracking-wider shadow-sm">Advanced Intelligence</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Suggestion Master</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We don't just look at what you can do; we look at what you've achieved. Paste your certificates and awards to reveal your professional DNA.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-8 space-y-gutter">
              <div className="bg-white p-lg rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 opacity-60"></div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-500">contract</span>
                  Credential Analysis
                </h3>
                <p className="text-sm text-slate-500 mb-6">List your certifications, bootcamp completions, or professional licenses.</p>
                
                <textarea 
                  className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-body-md resize-none mb-6 shadow-inner text-slate-700"
                  placeholder="Example: AWS Certified Solutions Architect, Google Project Management Certificate, Meta Front-End Developer..."
                  value={certInput}
                  onChange={(e) => setCertInput(e.target.value)}
                ></textarea>
                
                <button 
                  onClick={handleAnalyzeCerts}
                  disabled={isAnalyzing || !certInput.trim()}
                  className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <span className={`material-symbols-outlined ${isAnalyzing ? 'animate-spin' : ''}`}>
                    {isAnalyzing ? 'sync' : 'auto_awesome'}
                  </span>
                  {isAnalyzing ? 'Decoding Credentials...' : 'Analyze My Strengths'}
                </button>
              </div>

              {inferredSkills.length > 0 && (
                <div className="bg-white p-lg rounded-3xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500">verified_user</span>
                      Inferred Core Strengths
                    </h3>
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100 uppercase">High Proficiency</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {inferredSkills.map((skill, idx) => (
                      <div key={idx} className="group relative">
                        <span className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 shadow-sm hover:border-primary hover:text-primary transition-all flex items-center gap-2 cursor-default">
                          <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary"></span>
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 space-y-gutter">
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-lg text-white shadow-2xl relative overflow-hidden min-h-[500px]">
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-400">explore</span>
                  Target Opportunities
                </h3>
                
                {suggestions.length > 0 ? (
                  <div className="space-y-4">
                    {suggestions.map((s, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => navigate('/results')}
                        className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer group backdrop-blur-sm"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-white group-hover:text-amber-300 transition-colors">{s.role}</h4>
                          <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded uppercase font-black tracking-widest border border-amber-500/30">Match</span>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 font-bold uppercase tracking-tighter opacity-60">{s.domain}</p>
                        
                        <div className="w-full bg-white/10 h-1 rounded-full mb-4">
                          <div 
                            className="bg-amber-400 h-full rounded-full transition-all duration-1000" 
                            style={{ width: `${Math.min(100, s.matchCount * 25)}%` }}
                          ></div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {s.skills.slice(0, 2).map((sk, i) => (
                            <span key={i} className="text-[10px] text-slate-500 bg-black/20 px-2 py-1 rounded">#{sk}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button className="w-full py-4 mt-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all border border-white/5 uppercase tracking-widest">
                       View Full Career Map
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center opacity-40">
                    <span className="material-symbols-outlined text-6xl mb-4 text-indigo-300">hub</span>
                    <p className="text-sm font-medium text-slate-300 max-w-[200px]">Once analyzed, your strategic job matches will appear here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
