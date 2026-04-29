import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useResume } from '../context/ResumeContext';

export default function SkillsAnalysisPage() {
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
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Skills Analysis</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Here is a breakdown of your core competencies mapped from your resume.
            </p>
          </div>

          <div className="bg-white p-lg rounded-xl border border-slate-200/50 shadow-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Identified Strengths</h2>
            <div className="flex flex-wrap gap-3">
              {analysisResult.userSkills.map((skill: string, idx: number) => (
                <span key={idx} className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-lg">
            <div className="bg-white p-lg rounded-xl border border-slate-200/50 shadow-sm">
              <span className="material-symbols-outlined text-primary text-4xl mb-sm block">psychology</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Technical Proficiency</h3>
              <p className="font-body-md text-on-surface-variant">Your technical skills align well with modern industry standards, giving you a strong foundation for transition.</p>
            </div>
            <div className="bg-white p-lg rounded-xl border border-slate-200/50 shadow-sm">
              <span className="material-symbols-outlined text-secondary text-4xl mb-sm block">groups</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Soft Skills</h3>
              <p className="font-body-md text-on-surface-variant">Your communication and leadership markers indicate high potential for cross-functional roles.</p>
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
