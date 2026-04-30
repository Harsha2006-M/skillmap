import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useResume } from '../context/ResumeContext';

export default function PlatformPage() {
  const navigate = useNavigate();
  const { selectedPlatform, setSelectedPlatform, processResume } = useResume();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStartAnalysis = async () => {
    if (!selectedPlatform) return;
    setIsProcessing(true);
    await processResume();
    setIsProcessing(false);
    navigate('/results');
  };

  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl flex items-center justify-center">
          
          <div className="bg-white p-lg rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-slate-100 w-full max-w-4xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Select Target Platform</h2>
            <div className="flex flex-col md:flex-row md:items-end gap-gutter">
              <div className="flex-1 space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant block">What's your next move?</label>
                <div className="relative">
                  <select 
                    className="w-full h-14 pl-4 pr-10 appearance-none bg-slate-50 border-slate-200 rounded-xl font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                  >
                    <option disabled value="">Select Target Job Role</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="Marketing Director">Marketing Director</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Precision Agriculture Specialist">Precision Agriculture Specialist</option>
                    <option value="Agricultural Data Analyst">Agricultural Data Analyst</option>
                    <option value="Clinical Data Coordinator">Clinical Data Coordinator</option>
                    <option value="Healthcare IT Specialist">Healthcare IT Specialist</option>
                    <option value="Bioinformatics Researcher">Bioinformatics Researcher</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                </div>
              </div>
              <button 
                onClick={handleStartAnalysis}
                disabled={!selectedPlatform || isProcessing}
                className={`h-14 px-10 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap ${selectedPlatform ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
              >
                <span>{isProcessing ? 'Analyzing...' : 'Start Intelligence Analysis'}</span>
                {!isProcessing && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>}
              </button>
            </div>
          </div>
          
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
