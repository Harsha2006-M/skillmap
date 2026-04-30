import { useParams, useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function CoursePage() {
  const { skill } = useParams<{ skill: string }>();
  const navigate = useNavigate();

  // Format the skill name nicely
  const displaySkill = skill ? decodeURIComponent(skill).replace(/-/g, ' ') : 'Course';

  // Mapping of skills to high-quality 4+ hour YouTube tutorial video IDs
  const videoMapping: Record<string, string> = {
    'python': 'rfscVS0vtbw',
    'java': 'A74Tojjf6T4',
    'javascript': 'jS4aFq5-91M',
    'cpp': '8jLOx1hD3_o',
    'c++': '8jLOx1hD3_o',
    'sql': 'HXV3zeQHqGY',
    'html': 'mJgZ7gzSshk',
    'css': 'mJgZ7gzSshk',
    'aws': 'SOTamWNgDKc',
    'figma': 'jwCmXW9S_H8',
    'data-science': 'ua-CiDNNj30',
    'machine-learning': 'ua-CiDNNj30',
    'devops': 'hQcFE0nvguU',
    'project-management': 'Pyv4V1W0Wk4',
    'aptitude': 'WfMtoX_oU7I',
    'dsa': '8hly31Kuy2g'
  };

  const normalizedSkill = skill?.toLowerCase() || 'python';
  
  // Try exact match, then try partial match
  let videoId = videoMapping[normalizedSkill];
  
  if (!videoId) {
    const key = Object.keys(videoMapping).find(k => normalizedSkill.includes(k) || k.includes(normalizedSkill));
    videoId = key ? videoMapping[key] : 'rfscVS0vtbw';
  }

  const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <div className="mb-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">Interactive Tutorial</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs capitalize">Mastering {displaySkill}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Follow along with this comprehensive 4+ hour crash course to rapidly bridge your skill gap and become proficient in {displaySkill}.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200/50 mb-lg max-w-5xl">
            {/* Playable Video Iframe */}
            <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden mb-6">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={videoEmbedUrl} 
                title={`${displaySkill} Tutorial`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 capitalize">Full Course: {displaySkill} for Beginners</h2>
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-100 flex-wrap">
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <span className="font-medium">Instructor: Mike Dane</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <span className="font-medium">4 Hours 26 Minutes</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="material-symbols-outlined text-primary">school</span>
                  <span className="font-medium">Beginner to Advanced</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2">What you'll learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start gap-2 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Core concepts of {displaySkill}</li>
                <li className="flex items-start gap-2 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Industry best practices</li>
                <li className="flex items-start gap-2 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Hands-on project implementation</li>
                <li className="flex items-start gap-2 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Interview preparation tips</li>
              </ul>
              
              <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                <button 
                  onClick={() => navigate(`/certificate/${encodeURIComponent(skill || 'Skill')}`)}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">workspace_premium</span>
                  Mark Complete & Get Certificate
                </button>
                <button className="px-6 py-4 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">download</span>
                  Resources
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
