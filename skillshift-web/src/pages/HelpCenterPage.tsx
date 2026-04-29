import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function HelpCenterPage() {
  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <div className="text-center mb-12 bg-primary text-white p-12 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-secondary opacity-20 rounded-full blur-2xl"></div>
             
             <h1 className="text-4xl font-black mb-4 relative z-10">How can we help you?</h1>
             <div className="relative max-w-2xl mx-auto z-10">
               <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
               <input 
                 type="text" 
                 placeholder="Search for articles, tutorials, or FAQs..." 
                 className="w-full pl-12 pr-4 py-4 rounded-xl text-slate-900 outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
               />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">rocket_launch</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Getting Started</h3>
              <p className="text-slate-500 text-sm">Learn how to upload your resume and understand your first analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">psychology</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Understanding Scores</h3>
              <p className="text-slate-500 text-sm">Deep dive into how our AI calculates your match scores and gaps.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">manage_accounts</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Account Management</h3>
              <p className="text-slate-500 text-sm">Update your profile, change passwords, and manage billing.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border-b border-slate-100 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer text-slate-800 list-none">
                  <span>How accurate is the gap analysis?</span>
                  <span className="transition group-open:rotate-180 material-symbols-outlined">expand_more</span>
                </summary>
                <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                  Our intelligence engine uses a dataset of over 110 modern roles and thousands of specific skill markers. It evaluates semantic proximity, meaning it understands related concepts even if the exact keywords don't match.
                </p>
              </details>
              <details className="group border-b border-slate-100 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer text-slate-800 list-none">
                  <span>Are the courses free?</span>
                  <span className="transition group-open:rotate-180 material-symbols-outlined">expand_more</span>
                </summary>
                <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                  Basic tutorials are included in the free tier. Advanced interactive courses and projects require a Pro subscription.
                </p>
              </details>
              <details className="group border-b border-slate-100 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer text-slate-800 list-none">
                  <span>Can I export my gap report?</span>
                  <span className="transition group-open:rotate-180 material-symbols-outlined">expand_more</span>
                </summary>
                <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                  Yes! Pro users can export their gap reports and learning paths as PDF or CSV files to share with mentors or career coaches.
                </p>
              </details>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-600 mb-4">Still need help?</p>
              <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
