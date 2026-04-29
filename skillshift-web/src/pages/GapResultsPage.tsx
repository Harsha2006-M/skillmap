import { useNavigate, Link } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useResume } from '../context/ResumeContext';

export default function GapResultsPage() {
  const navigate = useNavigate();
  const { analysisResult } = useResume();

  if (!analysisResult) {
    navigate('/upload');
    return null;
  }

  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <div className="mb-lg">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Gap Results</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Comparing your profile to the <span className="font-bold text-primary">{analysisResult.role}</span> role.
            </p>
          </div>

          <div className="bg-white p-lg rounded-xl border border-slate-200/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-lg">
            <div className="w-full md:w-1/2">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Match Score</h2>
              <div className="flex items-baseline gap-2 mb-sm">
                <span className="text-display-lg font-display-lg text-primary">{analysisResult.matchScore}%</span>
                <span className="text-on-surface-variant font-body-sm">Alignment</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-600 to-violet-600" style={{ width: `${analysisResult.matchScore}%` }}></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start bg-surface-container-low p-md rounded-lg">
              <span className="material-symbols-outlined text-secondary mb-xs text-3xl">lightbulb</span>
              <p className="font-body-md text-on-surface-variant mb-md">
                You have {analysisResult.userSkills.length} of the required skills. Bridging these gaps will significantly boost your profile.
              </p>
              <Link to="/learning-path" className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all">
                View Recommended Path
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-lg">
            <div className="bg-white p-md rounded-xl border border-green-100 shadow-sm">
              <h3 className="font-headline-md text-headline-md text-green-700 mb-md flex items-center gap-2">
                <span className="material-symbols-outlined">check_circle</span> Met Requirements
              </h3>
              <ul className="space-y-2">
                {analysisResult.matchedSkills.map((skill: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-green-500 text-sm">done</span>
                    {skill}
                  </li>
                ))}
                {analysisResult.matchedSkills.length === 0 && <li className="text-slate-400 italic">None identified in top skills.</li>}
              </ul>
            </div>
            <div className="bg-white p-md rounded-xl border border-red-100 shadow-sm">
              <h3 className="font-headline-md text-headline-md text-red-700 mb-md flex items-center gap-2">
                <span className="material-symbols-outlined">error</span> Missing Skills
              </h3>
              <ul className="space-y-2">
                {analysisResult.missingSkills.map((skill: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-red-500 text-sm">close</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
