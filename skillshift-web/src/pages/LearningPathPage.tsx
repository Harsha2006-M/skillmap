import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useResume } from '../context/ResumeContext';

export default function LearningPathPage() {
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
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Your Learning Path</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Curated resources to bridge your skill gaps for the {analysisResult.role} role.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mt-lg">
            {analysisResult.learningPaths.map((path: any, idx: number) => (
              <div key={idx} className="bg-white p-lg rounded-xl border border-primary/20 shadow-[0_10px_30px_-10px_rgba(53,37,205,0.1)] card-hover transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
                    <span className="material-symbols-outlined text-white">menu_book</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{path.topic}</h3>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg mb-6 border border-slate-100 flex-grow">
                  <p className="font-body-sm text-primary font-semibold mb-1">Recommended Course:</p>
                  <p className="font-body-md text-on-surface-variant font-medium">{path.course}</p>
                </div>
                <div className="flex items-start gap-2 mb-8">
                  <span className="material-symbols-outlined text-secondary text-sm mt-0.5">trending_up</span>
                  <p className="text-sm text-outline">{path.impact}</p>
                </div>
                <button 
                  onClick={() => navigate(`/course/${encodeURIComponent(path.topic)}`)}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 active:scale-95"
                >
                  Access Resource
                </button>
              </div>
            ))}
            {analysisResult.learningPaths.length === 0 && (
              <div className="col-span-3 text-center p-xl bg-surface-container rounded-xl">
                <span className="material-symbols-outlined text-5xl text-primary mb-md block">celebration</span>
                <h3 className="text-xl font-bold text-on-surface">You have all the required skills!</h3>
                <p className="text-on-surface-variant">Your profile strongly matches the target role requirements.</p>
              </div>
            )}
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
