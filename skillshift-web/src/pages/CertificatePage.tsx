import { useParams, Link } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useRef } from 'react';

export default function CertificatePage() {
  const { skill } = useParams<{ skill: string }>();
  const certificateRef = useRef<HTMLDivElement>(null);

  // Format the skill name nicely
  const displaySkill = skill ? decodeURIComponent(skill).replace(/-/g, ' ') : 'Skill';
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl flex flex-col items-center">
          
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-6xl text-amber-400 mb-4 drop-shadow-md">workspace_premium</span>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Congratulations!</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              You have successfully completed the 4+ hour crash course for {displaySkill}. Here is your verifiable certificate of completion.
            </p>
          </div>

          <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden mb-8 border border-slate-200 print:shadow-none print:border-none">
            {/* The Certificate Itself */}
            <div 
              ref={certificateRef}
              className="relative p-12 md:p-24 bg-white text-center border-[16px] border-double border-slate-100 min-h-[600px] flex flex-col justify-center items-center overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-50 rounded-br-full -z-10 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-50 rounded-tl-full -z-10 opacity-50"></div>
              
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tighter uppercase font-serif">
                  Certificate of Completion
                </h2>
                <p className="tracking-[0.3em] text-slate-400 font-bold uppercase text-sm mt-4">Transferable Skills Intelligence</p>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="text-lg text-slate-500 italic">This is to certify that</p>
                <p className="text-4xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 inline-block px-12">Alex Professional</p>
                <p className="text-lg text-slate-500 italic">has successfully completed the comprehensive training in</p>
                <p className="text-3xl font-black text-primary capitalize">{displaySkill}</p>
                <p className="text-slate-500 mt-4">
                  Demonstrating a strong understanding of core concepts, practical implementation, and industry best practices.
                </p>
              </div>

              <div className="mt-20 w-full flex justify-between items-end px-12">
                <div className="text-center">
                  <div className="border-b-2 border-slate-800 w-48 mb-2"></div>
                  <p className="text-slate-600 font-bold text-sm uppercase">Date of Issuance</p>
                  <p className="text-slate-500 text-sm">{new Date().toLocaleDateString()}</p>
                </div>
                
                <div className="h-32 w-32 bg-amber-100 rounded-full flex items-center justify-center border-4 border-amber-300 shadow-inner relative">
                  <div className="absolute inset-2 border-2 border-dashed border-amber-400 rounded-full"></div>
                  <span className="material-symbols-outlined text-5xl text-amber-500">verified</span>
                </div>

                <div className="text-center">
                  <div className="border-b-2 border-slate-800 w-48 mb-2 pb-2">
                    <span className="font-[Signature] text-2xl text-slate-800 italic">SkillShift AI</span>
                  </div>
                  <p className="text-slate-600 font-bold text-sm uppercase">Authorized Signature</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 print:hidden">
            <button 
              onClick={handlePrint}
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined">print</span>
              Print / Save as PDF
            </button>
            <Link 
              to="/upload"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              Back to Dashboard
            </Link>
          </div>

        </main>
      </div>
      <BottomNav />
    </div>
  );
}
