import React from 'react';
import {
  LayoutDashboard,
  Code2,
  Cpu,
  MessageSquareCode,
  FolderKanban,
  Binary,
  ShieldAlert,
  GraduationCap,
  FileCheck2,
  BarChart3,
  Settings,
  Flame,
  X,
  Search
} from 'lucide-react';
import { useAppStore } from '../store/AppContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onOpenSearch: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  mobileOpen,
  setMobileOpen,
  onOpenSearch
}) => {
  const { calculateOverallMNCReadiness } = useAppStore();
  const readiness = calculateOverallMNCReadiness();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'technical', label: 'Technical Skills', icon: Code2 },
    { id: 'high-value', label: 'High-Value Skills', icon: Cpu },
    { id: 'english', label: 'English Fluency', icon: MessageSquareCode },
    { id: 'projects', label: 'Projects & Resume', icon: FolderKanban },
    { id: 'coding', label: 'Coding Practice', icon: Binary },
    { id: 'interview', label: 'Interview Mode', icon: ShieldAlert },
    { id: 'mock-interviews', label: 'Mock Interviews', icon: GraduationCap },
    { id: 'resume-snapshot', label: 'Resume Snapshot', icon: FileCheck2 },
    { id: 'analytics', label: 'Progress Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-white border-r border-slate-200/90 z-50 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-xs ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-blue-600 p-[2px] shadow-sm">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-indigo-600 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-base font-black tracking-wider bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                CONSISTENCY
              </h1>
              <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                SURESHKUMAR P
              </p>
            </div>
          </div>
          <button
            className="lg:hidden text-slate-400 hover:text-slate-700"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Global Search Button Launcher */}
        <div className="px-4 py-3">
          <button
            onClick={onOpenSearch}
            className="w-full bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl px-3 py-2.5 flex items-center justify-between text-xs transition-all group shadow-xs"
          >
            <span className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              <span className="font-medium">Search topics, skills...</span>
            </span>
            <kbd className="bg-white border border-slate-300 text-[10px] px-1.5 py-0.5 rounded text-slate-500 font-mono shadow-xs">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Navigation Item List */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/80 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.id === 'dashboard' && (
                  <span className="bg-indigo-100 text-indigo-700 border border-indigo-200 text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {readiness.overall}%
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Readiness Meter Bottom Bar */}
        <div className="p-4 border-t border-slate-200/80 bg-slate-50/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              MNC Readiness Score
            </span>
            <span className="text-xs font-black text-indigo-600 font-mono">
              {readiness.overall}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden border border-slate-300/60">
            <div
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${readiness.overall}%` }}
            />
          </div>
          <p className="text-[10px] font-semibold text-slate-500 mt-2 text-center">
            {readiness.overall < 50
              ? 'Foundation Phase — Keep Pushing!'
              : readiness.overall < 80
              ? 'Strong Progress — MNC Ready Soon!'
              : 'CONSISTENCY GOD MODE — Ready for MNC Interviews! 🔥'}
          </p>
        </div>
      </aside>
    </>
  );
};
