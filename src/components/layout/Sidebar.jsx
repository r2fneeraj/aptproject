import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Results', path: '/results' },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-slate-50/50 h-screen flex flex-col">
      <div className="px-8 py-12">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
          <div className="w-2.5 h-7 bg-blue-600 rounded-full shadow-sm shadow-blue-200" />
          <span className="tracking-tight uppercase text-lg">ExamPortal</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-1.5">
        <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Navigation</p>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3.5 px-4 py-3 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all duration-200 group",
              isActive 
                ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/60" 
                : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
            )}
          >
            <item.icon size={18} className={cn("transition-colors", "group-hover:text-blue-600")} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-6 mt-auto border-t border-slate-200/60">
        <button 
          onClick={() => navigate('/login')}
          className="flex items-center gap-3.5 w-full px-4 py-3.5 text-[13px] font-bold uppercase tracking-wider text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
