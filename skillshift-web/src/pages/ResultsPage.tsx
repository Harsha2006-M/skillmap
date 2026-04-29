import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useResume } from '../context/ResumeContext';

export default function ResultsPage() {
  const navigate = useNavigate();
  const { analysisResult } = useResume();

  useEffect(() => {
    if (!analysisResult) {
      navigate('/upload');
    }
  }, [analysisResult, navigate]);

  if (!analysisResult) return null;

  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <div className="mb-lg">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Career Transition Suggestions</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Based on your analyzed core competencies, we've identified these high-potential pivot opportunities for {analysisResult.role}.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Card 1: Primary Match */}
            <div className="lg:col-span-8 bg-white p-lg rounded-xl border border-slate-200/50 shadow-sm card-hover transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-md">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm mb-xs">Recommended Pivot</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">{analysisResult.role}</h2>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-display-lg font-display-lg text-primary">{analysisResult.matchScore}%</span>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Skill Match</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full mb-md overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-600 to-violet-600" style={{ width: `${analysisResult.matchScore}%` }}></div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed">
                  Your expertise in streamlining workflows and stakeholder management translates directly to this role. This role focuses on scaling efficiency by implementing the same rigorous process improvements you've mastered in your current career.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {analysisResult.skills.map((skill: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-surface-container-high text-primary rounded-full text-xs font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
                <button onClick={() => navigate('/learning-path')} className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-label-md text-label-md px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 shrink-0">
                  View Path <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 2: Secondary Match */}
            <div className="lg:col-span-4 bg-white p-md rounded-xl border border-slate-200/50 shadow-sm card-hover transition-all duration-300 flex flex-col h-full">
              <div className="mb-sm flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-secondary-container bg-secondary-fixed px-2 py-0.5 rounded">High Growth</span>
                <span className="font-headline-md text-headline-md text-primary">82%</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Customer Success Architect</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
                Leverage your technical communication skills to bridge the gap between complex client needs and product development.
              </p>
              <div className="pt-md border-t border-slate-100 flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-outline">Est. Salary: $125k+</span>
                <button onClick={() => navigate('/gap-results')} className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">
                  View Path <span className="material-symbols-outlined text-[16px]">north_east</span>
                </button>
              </div>
            </div>

            {/* Card 3: Tertiary Match */}
            <div className="lg:col-span-4 bg-white p-md rounded-xl border border-slate-200/50 shadow-sm card-hover transition-all duration-300 flex flex-col h-full">
              <div className="mb-sm flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-secondary-container bg-secondary-fixed px-2 py-0.5 rounded">Strategic</span>
                <span className="font-headline-md text-headline-md text-primary">78%</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Change Management Lead</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
                Apply your organizational psychology background to lead enterprise-level transitions and digital transformation projects.
              </p>
              <div className="pt-md border-t border-slate-100 flex items-center justify-between">
                <span className="text-label-sm font-label-sm text-outline">Est. Salary: $140k+</span>
                <button onClick={() => navigate('/gap-results')} className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">
                  View Path <span className="material-symbols-outlined text-[16px]">north_east</span>
                </button>
              </div>
            </div>

            {/* Learning Paths visualization */}
            <div className="lg:col-span-12 mt-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">route</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Your Personalized Learning Path</h2>
              </div>
              <p className="text-body-lg text-on-surface-variant mb-6">{analysisResult.gapInsights}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {analysisResult.learningPaths.map((path: any, idx: number) => (
                  <div key={idx} className="bg-white p-lg rounded-xl border border-primary/20 shadow-[0_10px_30px_-10px_rgba(53,37,205,0.1)] card-hover transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {idx + 1}
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">{path.topic}</h3>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-lg mb-6 border border-slate-100">
                      <p className="font-body-md text-primary font-semibold mb-1">Recommended Course:</p>
                      <p className="font-body-md text-on-surface-variant font-medium">{path.course}</p>
                    </div>
                    <div className="flex items-start gap-2 mb-8">
                      <span className="material-symbols-outlined text-secondary text-sm mt-0.5">trending_up</span>
                      <p className="text-sm text-outline">{path.impact}</p>
                    </div>
                    <button onClick={() => navigate(`/course/${encodeURIComponent(path.topic)}`)} className="w-full py-3 bg-slate-50 text-primary font-bold rounded-lg hover:bg-primary hover:text-white border border-primary/10 transition-colors duration-300">
                      Enroll & Bridge Gap
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-12 mt-6">
               <section className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center bg-surface-container rounded-xl p-lg">
                  <div className="relative rounded-xl overflow-hidden aspect-video shadow-2xl">
                    <img alt="Career Insights Visualization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOUzUMyI5Sd48mnno-tPJ7Z2sogflVmt51axkwm8ofuznot2xRUaVtQNKrdIkv_yR0pNh2CcqEKs0q5kGFOcKn_79tJzEAtBFaujAUojraqPxS_DrAJ8x8MR723h9xV32-5HVjqh2Il7YRAP9BDidYmemZYsxInkP-gH_c16zaIJogJH-1TvendBEJBBUo-yVOgadYBW06-CUPdmYZg3pkSrTqquIVlfmqXgfhrY1VnTGDcMELv5pf9cvcG-Q31a2IKiInQuy0svB1" />
                    <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
                  </div>
                  <div className="space-y-md">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Why these suggestions?</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Our intelligence engine analyzes over 450 semantic skill markers. Unlike traditional job boards, we don't look at your titles—we look at the <span className="font-semibold text-primary">atomic components</span> of your work.
                    </p>
                    <div className="grid grid-cols-2 gap-sm">
                      <div className="p-sm bg-white rounded-lg">
                        <span className="material-symbols-outlined text-primary block mb-base">trending_up</span>
                        <span className="font-label-sm text-on-surface">Market Demand</span>
                        <p className="text-[12px] text-outline">High visibility roles</p>
                      </div>
                      <div className="p-sm bg-white rounded-lg">
                        <span className="material-symbols-outlined text-primary block mb-base">account_balance_wallet</span>
                        <span className="font-label-sm text-on-surface">Salary Equity</span>
                        <p className="text-[12px] text-outline">+15% Avg. increase</p>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
