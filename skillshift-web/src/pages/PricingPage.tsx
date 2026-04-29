
import SideNavBar from '../components/SideNavBar';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function PricingPage() {
  return (
    <div className="flex bg-background min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <TopAppBar />
        <main className="flex-1 p-gutter max-w-container-max mx-auto w-full space-y-xl py-xl">
          <div className="text-center mb-12">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-4">Upgrade to Pro</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Unlock the full power of Transferable Skills Intelligence. Accelerate your career transition with advanced analytics, 1-on-1 coaching, and unlimited learning paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Weekly Plan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Weekly</h3>
              <p className="text-slate-500 mb-6 text-sm">Perfect for quick, targeted gap analysis.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-slate-900">$9</span>
                <span className="text-slate-500">/week</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Unlimited resume uploads</li>
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Standard gap analysis</li>
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Access to 3 learning paths</li>
              </ul>
              <button onClick={() => alert('Proceeding to payment gateway...')} className="w-full py-3 rounded-lg font-bold border-2 border-primary text-primary hover:bg-primary/5 transition-colors">
                Choose Weekly
              </button>
            </div>

            {/* Monthly Plan */}
            <div className="bg-gradient-to-b from-primary/5 to-white rounded-2xl p-8 border-2 border-primary shadow-xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Monthly</h3>
              <p className="text-slate-500 mb-6 text-sm">Ideal for dedicated career transitioners.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-slate-900">$29</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-900 font-medium"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> Everything in Weekly, plus:</li>
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> Unlimited learning paths</li>
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> Advanced market salary insights</li>
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span> Priority email support</li>
              </ul>
              <button onClick={() => alert('Proceeding to payment gateway...')} className="w-full py-3 rounded-lg font-bold bg-primary text-white hover:shadow-lg hover:bg-primary/90 transition-all active:scale-95">
                Choose Monthly
              </button>
            </div>

            {/* Yearly Plan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Yearly</h3>
              <p className="text-slate-500 mb-6 text-sm">Long-term career growth and intelligence.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-slate-900">$199</span>
                <span className="text-slate-500">/year</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-900 font-medium"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Everything in Monthly, plus:</li>
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Save 40% annually</li>
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> 1-on-1 Career Coaching session</li>
                <li className="flex items-start gap-3 text-slate-600"><span className="material-symbols-outlined text-green-500 text-sm mt-1">check_circle</span> Exportable reports</li>
              </ul>
              <button onClick={() => alert('Proceeding to payment gateway...')} className="w-full py-3 rounded-lg font-bold border-2 border-primary text-primary hover:bg-primary/5 transition-colors">
                Choose Yearly
              </button>
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
