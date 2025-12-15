import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Swords, LineChart, User, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Sidebar = () => {
  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/quests', label: 'Quests', icon: Swords },
    { to: '/analytics', label: 'Analytics', icon: LineChart },
    { to: '/profile', label: 'Hunter Profile', icon: User },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-panel-bg border-r border-muted flex flex-col z-50">
      <div className="p-8 pb-4">
        <h1 className="text-2xl font-bold font-heading tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary filter drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
          SYSTEM
        </h1>
        <p className="text-xs text-muted-foreground mt-1 tracking-widest">PLAYER ID: 001</p>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-all duration-300 group relative overflow-hidden",
                isActive 
                  ? "text-background bg-primary shadow-[0_0_15px_rgba(0,240,255,0.4)]" 
                  : "text-text-secondary hover:text-primary hover:bg-primary/5"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-heading tracking-wider uppercase">{item.label}</span>
            
            {/* Hover effect decorative line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-muted">
        <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-danger hover:bg-danger/10 w-full rounded-sm transition-colors uppercase font-heading tracking-wider">
           <LogOut className="w-5 h-5" />
           Logout
        </button>
      </div>
    </aside>
  );
};
