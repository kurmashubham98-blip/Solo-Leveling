import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-background text-text-primary font-sans selection:bg-primary/30 selection:text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen relative">
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
           <Outlet />
        </div>
        
        {/* Decorative background grid */}
        <div className="fixed inset-0 z-[-1] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      </main>
    </div>
  );
};
