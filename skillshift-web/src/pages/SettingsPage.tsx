import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';

export default function SettingsPage() {
  const { logout } = useAuth();

  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <div className="mb-lg">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Settings</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Manage your preferences and application settings.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden max-w-4xl">
            <div className="p-6 border-b border-slate-100 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-2xl">manage_accounts</span>
              <h2 className="text-xl font-bold text-slate-900">Account Preferences</h2>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Notifications */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-700">Email Alerts</p>
                      <p className="text-sm text-slate-500">Receive job matches and learning path updates via email.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-700">Push Notifications</p>
                      <p className="text-sm text-slate-500">Allow browser notifications for real-time alerts.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Privacy & Security</h3>
                <button className="text-primary font-semibold hover:underline mb-4 block">Change Password</button>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700">Public Profile</p>
                    <p className="text-sm text-slate-500">Allow recruiters to see your skills and gap analysis.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
                <div className="flex flex-wrap gap-4">
                  <button onClick={logout} className="px-6 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
                    Sign Out
                  </button>
                  <button className="px-6 py-2 bg-red-50 text-red-600 font-semibold rounded-lg border border-red-200 hover:bg-red-100 transition-colors">
                    Delete Account
                  </button>
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
