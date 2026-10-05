import React from 'react';
import { Menu, Search, Download, Flame } from 'lucide-react';
import { useAppStore } from '../store/AppContext';

interface NavbarProps {
  activeTab: string;
  setMobileOpen: (open: boolean) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setMobileOpen, onOpenSearch }) => {
  const { calculateOverallMNCReadiness, exportProgress } = useAppStore();
  const readiness = calculateOverallMNCReadiness();

  const tabTitles: Record<string, string> = {
    dashboard: 'Dashboard Overview',
    technical: 'Technical Skills Roadmap (24 Skills)',
    'high-value': 'High-Value Computer Science Skills',
    english: 'English Speaking Fluency Mastery',
    projects: 'Projects & Resume Defense Mastery',
    coding: 'Coding Practice & Problem Solver',
    interview: 'MNC Technical & HR Interview Mode',
    'mock-interviews': 'Interactive Mock Interview Simulations',
    'resume-snapshot': 'Resume Readiness Snapshot',
    analytics: 'Progress Analytics & Diagnostics',
    settings: 'Settings & Data Backup / Restore'
  };

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-3.5 flex items-center justify-between lg:pl-80 shadow-xs">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-slate-600 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200 lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              CONSISTENCY
            </span>
            <span className="text-slate-400 text-xs">/</span>
            <h2 className="text-sm font-bold text-slate-800">
              {tabTitles[activeTab] || 'Dashboard'}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={onOpenSearch}
          className="hidden sm:flex items-center space-x-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-xl text-xs transition-colors shadow-xs"
        >
          <Search className="w-3.5 h-3.5 text-indigo-600" />
          <span className="font-semibold">Quick Search</span>
        </button>

        <button
          onClick={exportProgress}
          title="Backup JSON Progress"
          className="p-2 sm:px-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs flex items-center space-x-1.5 transition-colors shadow-xs"
        >
          <Download className="w-4 h-4 text-indigo-600" />
          <span className="hidden md:inline font-bold">Backup JSON</span>
        </button>

        <div className="hidden sm:flex items-center space-x-2 bg-slate-100 border border-slate-200 px-3 py-1 rounded-xl shadow-xs">
          <Flame className="w-4 h-4 text-indigo-600 animate-pulse" />
          <div className="text-right">
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Readiness</p>
            <p className="text-xs font-black text-indigo-600 font-mono">{readiness.overall}%</p>
          </div>
        </div>
      </div>
    </header>
  );
};
