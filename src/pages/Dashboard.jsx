import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Button } from '../components/ui/Button';
import { 
  User, 
  Shield, 
  Info, 
  Calendar,
  Activity,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const examDetails = [
    { label: 'Assessment Name', value: 'General Aptitude Qualification Test (Q2-2026)' },
    { label: 'Total Questions', value: '50 Multiple Choice Questions' },
    { label: 'Duration', value: '60 Minutes (1 Hour)' },
    { label: 'Marking Scheme', value: '2.0 Marks per Correct Answer' },
    { label: 'Negative Marking', value: 'None' },
    { label: 'Proctoring', value: 'Active AI & Human Supervision' },
  ];

  const topics = ['Logical Reasoning', 'Numerical Ability', 'Verbal Aptitude', 'Data Interpretation'];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-16 items-start">
        
        {/* LEFT SIDE: Primary Content Area */}
        <div className="col-span-12 lg:col-span-8 space-y-16">
          
          {/* Welcome Section */}
          <section className="space-y-4">
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Welcome back, John Doe
            </h1>
            <div className="flex items-center gap-6 text-slate-500 font-bold uppercase tracking-widest text-[11px]">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-slate-700">
                <User size={14} className="text-blue-600" /> ID: 12345
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-slate-700">
                <Calendar size={14} className="text-blue-600" /> May 2026 Session
              </span>
            </div>
          </section>

          {/* Examination Details */}
          <section className="space-y-10">
            <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              Examination Details
            </h2>
            <div className="grid grid-cols-1 border-t border-slate-100">
              {examDetails.map((detail, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-slate-50 group hover:bg-slate-50/30 transition-colors px-2">
                  <span className="text-[13px] font-bold text-slate-400 w-64 shrink-0 uppercase tracking-wider">{detail.label}</span>
                  <span className="text-lg text-slate-800 font-semibold tracking-tight">{detail.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Topics Covered */}
          <section className="space-y-8">
            <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em]">
              Topics Covered
            </h2>
            <div className="flex flex-wrap gap-4">
              {topics.map((topic, i) => (
                <span key={i} className="text-[13px] font-black px-5 py-2.5 bg-white text-slate-700 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:text-blue-700 transition-all cursor-default">
                  {topic}
                </span>
              ))}
            </div>
          </section>

          {/* Instructions & Candidate Rules */}
          <section className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em]">
                Instructions & Rules
              </h2>
              <div className="space-y-10 pl-10 border-l-4 border-slate-100">
                <div className="space-y-3">
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    Workstation Requirements
                  </p>
                  <p className="text-slate-500 leading-relaxed text-base max-w-2xl">
                    Ensure your environment is quiet and well-lit. Clear your workspace of all unauthorized items, specifically electronic devices and physical notes.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    Navigation & Progress
                  </p>
                  <p className="text-slate-500 leading-relaxed text-base max-w-2xl">
                    Full navigation between questions is enabled. Use the proctored 'Summary' panel to track attempted questions and those flagged for review.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    Submission Policy
                  </p>
                  <p className="text-slate-500 leading-relaxed text-base max-w-2xl">
                    The examination is timed. Upon session expiration, all responses will be automatically recorded and finalized by the system.
                  </p>
                </div>
              </div>
            </div>

            {/* Warnings Area */}
            <div className="space-y-6 max-w-3xl">
              <div className="pl-8 border-l-4 border-amber-400/80 bg-amber-50/20 py-6 pr-6 rounded-r-2xl transition-all hover:bg-amber-50/40">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-black text-amber-700 uppercase tracking-[0.2em] bg-amber-100 px-2 py-0.5 rounded">Warning</span>
                </div>
                <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
                  Switching browser tabs or windows will be logged as a security breach. Repeated violations will trigger an automatic session termination.
                </p>
              </div>
              <div className="pl-8 border-l-4 border-red-500/80 bg-red-50/20 py-6 pr-6 rounded-r-2xl transition-all hover:bg-red-50/40">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-black text-red-700 uppercase tracking-[0.2em] bg-red-100 px-2 py-0.5 rounded">Critical</span>
                </div>
                <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
                  The system monitors for unauthorized software, external hardware, and screen-sharing tools. Any detection will result in immediate disqualification.
                </p>
              </div>
            </div>
          </section>

          {/* Start Examination Action */}
          <section className="pt-12 flex flex-col items-center lg:items-start space-y-6">
            <Button 
              className="h-16 px-16 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-2xl shadow-2xl shadow-blue-200 transition-all active:scale-[0.97] flex items-center gap-4 group uppercase tracking-tight"
              onClick={() => navigate('/exam')}
            >
              Start Examination
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-3 text-slate-400 font-bold bg-slate-50 px-5 py-3 rounded-xl border border-slate-100">
              <Info size={16} className="text-blue-500" />
              <p className="text-xs uppercase tracking-wider">
                Note: Once the session initiates, it cannot be paused or restarted.
              </p>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE: Secondary Information Area */}
        <aside className="col-span-12 lg:col-span-4 space-y-12">
          
          {/* System Integrity Panel */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-[32px] p-10 space-y-8 shadow-sm">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
              <Activity size={14} className="text-blue-600" />
              System Status
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Identity Verification', status: 'Verified', color: 'text-green-600', bg: 'bg-green-100' },
                { label: 'Network Integrity', status: 'Stable', color: 'text-green-600', bg: 'bg-green-100' },
                { label: 'Biometric Interface', status: 'Active', color: 'text-green-600', bg: 'bg-green-100' },
                { label: 'Proctoring Core', status: 'Online', color: 'text-green-600', bg: 'bg-green-100' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[13px] border-b border-slate-200/50 pb-4 last:border-0 last:pb-0">
                  <span className="text-slate-500 font-bold">{item.label}</span>
                  <span className={cn("font-black uppercase tracking-widest text-[10px] flex items-center gap-2", item.color)}>
                    <div className={cn("w-1.5 h-1.5 rounded-full", item.bg.replace('bg-', 'bg-'))} />
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Session Metadata Area */}
          <div className="space-y-8 px-6">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
              <div className="w-1.5 h-4 bg-purple-500 rounded-full" />
              Session Context
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Reference Code</p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-black text-slate-700 font-mono tracking-tight shadow-inner">
                  ASSESS-Q2-2026-X8B9
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Security Token</p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm font-black text-slate-700 font-mono tracking-tight shadow-inner">
                  AUTH-TY22-PJ09
                </div>
              </div>
            </div>
          </div>

          {/* Essential Reminders Area */}
          <div className="space-y-8 px-6">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3 text-slate-600">
              <Shield size={14} className="text-blue-600" />
              Reminders
            </h3>
            <ul className="space-y-5">
              {[
                'Keep primary ID document ready for random verification.',
                'Ensure workstation remains connected to persistent power.',
                'Candidate must not vacate the workstation during the session.'
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-xs font-bold text-slate-500 leading-relaxed">
                  <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
