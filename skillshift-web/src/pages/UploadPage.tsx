import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useResume } from '../context/ResumeContext';
import { rolesDataset } from '../data/rolesDataset';

export default function UploadPage() {
  const navigate = useNavigate();
  const { setResumeText } = useResume();
  const [activeTab, setActiveTab] = useState<'upload' | 'type'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  
  const [manualSkills, setManualSkills] = useState('');
  const [manualRole, setManualRole] = useState('');
  const [roleSearchFocus, setRoleSearchFocus] = useState(false);

  const allRoles = rolesDataset.map(r => r.title);
  const roleSuggestions = manualRole 
    ? allRoles.filter(r => r.toLowerCase().includes(manualRole.toLowerCase())).slice(0, 5)
    : allRoles.slice(0, 5);

  const handleContinue = () => {
    navigate('/platform');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === 'string') {
        setResumeText(text);
      }
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === 'string') {
        setResumeText(text);
      }
    };
    reader.readAsText(file);
  };


  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <section className="space-y-base">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">Dashboard Overview</span>
            </div>
            <h2 className="font-display-lg text-display-lg text-on-surface">Welcome back, Alex!</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Ready to discover where your expertise takes you next? Upload your latest resume or type it below to analyze your transferable skills.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-8 space-y-gutter">
              <div className="bg-white p-lg rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-slate-100 transition-all hover:shadow-[0_20px_50px_-12px_rgba(53,37,205,0.08)]">
                
                {/* Tabs */}
                <div className="flex border-b border-slate-200 mb-6">
                  <button 
                    onClick={() => setActiveTab('upload')}
                    className={`pb-3 px-4 text-sm font-semibold transition-all ${activeTab === 'upload' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Upload File
                  </button>
                  <button 
                    onClick={() => setActiveTab('type')}
                    className={`pb-3 px-4 text-sm font-semibold transition-all ${activeTab === 'type' ? 'border-b-2 border-primary text-primary' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Manual Entry
                  </button>
                </div>

                {activeTab === 'upload' ? (
                  <div 
                    className="border-2 border-dashed border-slate-200 rounded-xl p-xl flex flex-col items-center justify-center text-center space-y-sm bg-slate-50/50 hover:bg-white hover:border-primary/40 transition-all duration-300 cursor-pointer group"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept=".txt,.pdf,.doc,.docx" 
                      onChange={handleFileUpload} 
                    />
                    <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <span className="material-symbols-outlined text-4xl text-primary">{fileName ? 'draft' : 'upload_file'}</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      {fileName ? 'File Ready' : 'Upload Your Resume'}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">
                      {fileName ? `Selected: ${fileName}` : 'Drag and drop your PDF or DOCX file here, or click to browse your computer.'}
                    </p>
                    <div className="pt-4 flex gap-4">
                      {!fileName && (
                        <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
                          Browse Files
                        </button>
                      )}
                      {fileName && (
                        <button 
                          className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContinue();
                          }}
                        >
                          Continue to Platform
                        </button>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium pt-4 uppercase tracking-widest">Supported: PDF, DOCX, TXT (Max 5MB)</p>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <div className="relative z-10">
                      <label className="font-label-md text-on-surface block mb-2">Aimed Role</label>
                      <input 
                        type="text"
                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md"
                        placeholder="Search across 110+ roles..."
                        value={manualRole}
                        onChange={(e) => setManualRole(e.target.value)}
                        onFocus={() => setRoleSearchFocus(true)}
                        onBlur={() => setTimeout(() => setRoleSearchFocus(false), 200)}
                      />
                      {roleSearchFocus && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-48 overflow-y-auto">
                          {roleSuggestions.map((role, idx) => (
                            <div 
                              key={idx}
                              className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-sm font-medium border-b border-slate-100 last:border-b-0"
                              onClick={() => {
                                setManualRole(role);
                                setRoleSearchFocus(false);
                              }}
                            >
                              {role}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-label-md text-on-surface block mb-2">Your Current Skills (comma separated)</label>
                      <textarea 
                        className="w-full h-32 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md resize-none"
                        placeholder="e.g. React, Python, Data Analysis, Leadership..."
                        value={manualSkills}
                        onChange={(e) => setManualSkills(e.target.value)}
                      ></textarea>
                    </div>
                    <button 
                      onClick={() => {
                        setResumeText(manualRole + " " + manualSkills);
                        handleContinue();
                      }}
                      disabled={!manualSkills.trim()}
                      className={`self-end px-8 py-3 font-bold rounded-lg transition-all active:scale-95 ${manualSkills.trim() ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                    >
                      Analyze Profile
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Secondary Side Content */}
            <div className="lg:col-span-4 space-y-gutter">
               {/* Tips Card */}
              <div className="bg-surface-container p-md rounded-xl border border-primary/10">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                  <div className="space-y-base">
                    <h5 className="text-sm font-bold text-primary">Pro Tip</h5>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Tailoring your resume summary to include 'Growth Mindset' can increase your match score for leadership roles by up to 15%.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
