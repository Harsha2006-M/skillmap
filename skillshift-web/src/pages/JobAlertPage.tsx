import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useResume } from '../context/ResumeContext';

interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  salary: string;
  skills: string[];
  type: string;
  posted: string;
}

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    role: 'Senior Frontend Developer',
    company: 'Amazon',
    location: 'Seattle, WA (Remote)',
    salary: '$160k - $210k',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    type: 'Full-time',
    posted: '2 days ago'
  },
  {
    id: '2',
    role: 'Backend Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    salary: '$180k - $250k',
    skills: ['Java', 'Python', 'Go', 'System Design'],
    type: 'Full-time',
    posted: '5 hours ago'
  },
  {
    id: '3',
    role: 'Product Designer',
    company: 'Meta',
    location: 'Menlo Park, CA',
    salary: '$150k - $200k',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
    type: 'Full-time',
    posted: '1 day ago'
  },
  {
    id: '4',
    role: 'Data Scientist',
    company: 'Microsoft',
    location: 'Redmond, WA',
    salary: '$170k - $230k',
    skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization'],
    type: 'Full-time',
    posted: '3 days ago'
  },
  {
    id: '5',
    role: 'DevOps Engineer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    salary: '$190k - $280k',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    type: 'Full-time',
    posted: '12 hours ago'
  },
  {
    id: '6',
    role: 'Precision Agriculture Specialist',
    company: 'John Deere',
    location: 'Moline, IL',
    salary: '$110k - $150k',
    skills: ['GPS Mapping', 'Data Analysis', 'Drone Operations', 'IoT Sensors'],
    type: 'Full-time',
    posted: '1 day ago'
  },
  {
    id: '7',
    role: 'Clinical Data Coordinator',
    company: 'Pfizer',
    location: 'New York, NY',
    salary: '$95k - $140k',
    skills: ['Clinical Trials', 'Data Management', 'GCP', 'Statistical Analysis'],
    type: 'Full-time',
    posted: '2 days ago'
  },
  {
    id: '8',
    role: 'Agricultural Data Analyst',
    company: 'Monsanto',
    location: 'St. Louis, MO',
    salary: '$100k - $145k',
    skills: ['Python', 'SQL', 'GIS', 'Crop Yield Analysis'],
    type: 'Full-time',
    posted: '3 days ago'
  }
];

export default function JobAlertPage() {
  const navigate = useNavigate();
  const { resumeText, appliedJobs, addAppliedJob } = useResume();

  const userSkills = useMemo(() => {
    const text = resumeText.toLowerCase();
    // A simple way to check which skills the user has from the entire pool
    const allPossibleSkills = Array.from(new Set(MOCK_JOBS.flatMap(j => j.skills)));
    return allPossibleSkills.filter(skill => text.includes(skill.toLowerCase()));
  }, [resumeText]);

  const handleApply = (job: Job) => {
    addAppliedJob(job);
    alert('Application submitted successfully!');
  };

  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <section className="space-y-base">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">Market Intelligence</span>
            </div>
            <h2 className="font-display-lg text-display-lg text-on-surface">Job Alerts & Matches</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Discover roles from top companies that match your profile. If you're missing a skill, we'll provide the direct learning path to bridge the gap.
            </p>
          </section>

          <div className="space-y-6">
            {MOCK_JOBS.map((job) => {
              const missingSkills = job.skills.filter(s => !userSkills.some(us => us.toLowerCase() === s.toLowerCase()));
              const matchPercentage = Math.round(((job.skills.length - missingSkills.length) / job.skills.length) * 100);
              const isApplied = appliedJobs.some((j: any) => j.id === job.id);

              return (
                <div key={job.id} className="bg-white rounded-2xl p-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative group">
                  {/* Match Score Badge */}
                  <div className={`absolute top-0 right-0 px-4 py-2 text-white font-bold text-xs rounded-bl-xl ${matchPercentage >= 70 ? 'bg-green-500' : 'bg-amber-500'}`}>
                    {matchPercentage}% Match
                  </div>

                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display-md text-headline-md text-on-surface group-hover:text-primary transition-colors">{job.role}</h3>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1 font-bold text-slate-900">
                          <span className="material-symbols-outlined text-[18px]">business</span> {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">location_on</span> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">payments</span> {job.salary}
                        </span>
                        <span className="flex items-center gap-1 italic">
                          <span className="material-symbols-outlined text-[18px]">schedule</span> Posted {job.posted}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Required Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, idx) => {
                              const isMet = !missingSkills.includes(skill);
                              return (
                                <span key={idx} className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${isMet ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                                  {isMet && <span className="material-symbols-outlined text-[14px]">check_circle</span>}
                                  {skill}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {missingSkills.length > 0 && (
                          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                            <div className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-amber-600 mt-0.5">info</span>
                              <div>
                                <p className="text-sm font-bold text-amber-900 mb-2">Skill Gaps Detected</p>
                                <p className="text-xs text-amber-700 mb-3">To increase your chances of being hired by {job.company}, we recommend completing these tutorials:</p>
                                <div className="flex flex-wrap gap-3">
                                  {missingSkills.map((skill, idx) => (
                                    <button 
                                      key={idx}
                                      onClick={() => navigate(`/course/${encodeURIComponent(skill)}`)}
                                      className="flex items-center gap-2 px-3 py-2 bg-white text-primary font-bold rounded-lg shadow-sm border border-amber-200 hover:border-primary hover:shadow-md transition-all active:scale-95 text-xs"
                                    >
                                      <span className="material-symbols-outlined text-[16px]">play_circle</span>
                                      Master {skill}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="lg:w-48 flex lg:flex-col justify-end lg:justify-center gap-3 shrink-0">
                      <button 
                        onClick={() => handleApply(job)}
                        disabled={isApplied}
                        className={`w-full py-4 font-black rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg ${isApplied ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-indigo-200'}`}
                      >
                        <span className="material-symbols-outlined">{isApplied ? 'check_circle' : 'send'}</span>
                        {isApplied ? 'Applied' : 'Apply Now'}
                      </button>
                      <button className="w-full py-3 font-bold rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all text-sm">
                        Save Job
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
