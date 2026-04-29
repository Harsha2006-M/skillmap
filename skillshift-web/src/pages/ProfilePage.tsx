import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function ProfilePage() {
  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <div className="mb-lg">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Profile Settings</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Manage your personal information and career goals.
            </p>
          </div>

          <div className="bg-white p-lg rounded-xl border border-slate-200/50 shadow-sm flex flex-col md:flex-row gap-lg items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md shrink-0">
              <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpo6empNLo3Tt87uT5NbTkAkb6XHRMdcZh6Esy2DdTt5UW6XDfi5TaufG3mMSaTizmRZRvLnkZJuvODjHN5KKHBqjct82yYi1mR4l9y6hgHharN4xcr1g93ZvdOottwtNNZtx7LcMx3pA6AD6K2eikhgnZq5oNKLZdO53GX33ZmtgoDAdt6FG5wxFPEJHypcyhCSEf-MABOOQwI1dmUSNti1UW9DLeDFCo0bN92G6xPSg87EG3w8ED5icM25WQAsdcjwQdm_u-GTWb" />
            </div>
            <div className="flex-grow space-y-4 w-full">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input type="text" defaultValue="Alex Professional" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                <input type="email" defaultValue="alex.prof@example.com" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Current Role</label>
                <input type="text" defaultValue="Product Operations Manager" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div className="pt-4">
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:shadow-lg transition-all active:scale-95">
                  Save Changes
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
