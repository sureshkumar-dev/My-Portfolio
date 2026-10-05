import React from 'react';
import {
  Target,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Award,
  Code2,
  Cpu,
  MessageSquareCode,
  FolderKanban,
  Binary,
  GraduationCap
} from 'lucide-react';
import { useAppStore } from '../store/AppContext';
import { technicalSkills } from '../data/technicalSkills';
import { highValueSkills } from '../data/highValueSkills';

interface DashboardHomeProps {
  onNavigate: (section: string, targetId?: string) => void;
  onOpenTaskModal?: (skillId: string, phaseNum: number) => void;
}

export const DashboardHome: React.FC<DashboardHomeProps> = ({ onNavigate }) => {
  const {
    state,
    calculateOverallMNCReadiness,
    calculateSkillProgress,
    getTodaysMissions
  } = useAppStore();

  const readiness = calculateOverallMNCReadiness();
  const missions = getTodaysMissions();

  const allSkills = [...technicalSkills, ...highValueSkills];
  const skillProgresses = allSkills.map(s => ({
    skill: s,
    ...calculateSkillProgress(s)
  }));

  const sortedSkills = [...skillProgresses].sort((a, b) => b.percentage - a.percentage);
  const strongest = sortedSkills.slice(0, 3);
  const weakest = sortedSkills.slice(-3).reverse();

  const renderProgressBar = (label: string, percentage: number, colorClass: string, icon: React.ReactNode) => {
    const filledBlocks = Math.round(percentage / 10);
    const emptyBlocks = 10 - filledBlocks;
    const asciiBlocks = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);

    return (
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2.5 rounded-xl ${colorClass} bg-opacity-10 border border-slate-100`}>
              {icon}
            </div>
            <span className="text-xs font-extrabold text-slate-800 tracking-wide">{label}</span>
          </div>
          <span className="text-xs font-black font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">{percentage}%</span>
        </div>
        <div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/60">
            <div
              className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-[10px] font-mono text-slate-500 mt-2 flex justify-between">
            <span className="tracking-widest">{asciiBlocks}</span>
            <span className="font-bold">{percentage}%</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-10 max-w-7xl mx-auto">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-6 sm:p-10 shadow-xl text-white">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3.5 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-300 border border-indigo-400/40 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                <span>CONSISTENCY — MNC Full Stack Mastery</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Welcome back, <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">{state.userProfile.name}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Your structured roadmap to achieve total confidence for MNC interviews across Technical Skills, High-Value CS, English Fluency, Project Defense, and Mock Grilling.
            </p>
          </div>

          {/* MNC Readiness Ring Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 shadow-2xl flex items-center space-x-6 shrink-0">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="8" className="text-slate-800" fill="transparent" />
                <circle
                  cx="48"
                  cy="48"
                  r="38"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 38}
                  strokeDashoffset={2 * Math.PI * 38 * (1 - readiness.overall / 100)}
                  strokeLinecap="round"
                  className="text-indigo-400 transition-all duration-700"
                  fill="transparent"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-xl font-black font-mono text-white">{readiness.overall}%</span>
                <span className="text-[9px] font-extrabold uppercase text-indigo-300 tracking-wider">READINESS</span>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
                MNC Readiness Status
              </h4>
              <p className="text-xs font-bold text-indigo-300">
                {readiness.overall < 50 ? 'Preparation Phase' : readiness.overall < 80 ? 'Advanced Preparation' : 'CONSISTENCY GOD MODE 🔥'}
              </p>
              <p className="text-[11px] text-slate-300 max-w-[160px] leading-snug">
                {readiness.overall < 50 ? 'Complete core technical tasks to boost score.' : 'Keep practicing mock grilling and project defense.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TODAY'S MISSION AREA (Prompt Section 24) */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-indigo-50 rounded-2xl border border-indigo-100">
              <Target className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                TODAY&apos;S MISSION
              </h2>
              <p className="text-xs text-slate-500">Recommended next logical actions based on roadmap sequence</p>
            </div>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-200">
            Roadmap Sequence
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((mission, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all flex flex-col justify-between space-y-4 group shadow-xs"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-md border border-indigo-200">
                  Step {idx + 1}
                </span>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {mission.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{mission.subtitle}</p>
              </div>

              <button
                onClick={() => onNavigate(mission.section, mission.targetId)}
                className="w-full py-2.5 bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white border border-indigo-200 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-xs"
              >
                <span>{mission.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY PROGRESS BREAKDOWN GRID */}
      <div className="space-y-4">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-indigo-600" />
          <span>Domain Mastery Progress Breakdown</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProgressBar('TECHNICAL SKILLS', readiness.technical, 'bg-cyan-500', <Code2 className="w-4 h-4 text-cyan-600" />)}
          {renderProgressBar('HIGH-VALUE CS SKILLS', readiness.highValue, 'bg-indigo-600', <Cpu className="w-4 h-4 text-indigo-600" />)}
          {renderProgressBar('ENGLISH FLUENCY', readiness.english, 'bg-purple-600', <MessageSquareCode className="w-4 h-4 text-purple-600" />)}
          {renderProgressBar('PROJECT MASTERY', readiness.projects, 'bg-emerald-600', <FolderKanban className="w-4 h-4 text-emerald-600" />)}
          {renderProgressBar('CODING PRACTICE', readiness.coding, 'bg-amber-500', <Binary className="w-4 h-4 text-amber-600" />)}
          {renderProgressBar('INTERVIEW READINESS', readiness.interview, 'bg-rose-500', <GraduationCap className="w-4 h-4 text-rose-600" />)}
        </div>
      </div>

      {/* DIAGNOSTIC WEAKEST VS STRONGEST AREAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weakest Areas */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-amber-600 border-b border-slate-200 pb-3">
            <AlertTriangle className="w-4 h-4" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Weakest Areas (Requires Revision)
            </h3>
          </div>
          <div className="space-y-3">
            {weakest.map(({ skill, percentage }) => (
              <div
                key={skill.id}
                onClick={() => onNavigate(skill.category === 'technical' ? 'technical' : 'high-value', skill.id)}
                className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between hover:border-amber-300 cursor-pointer transition-all shadow-xs"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{skill.name}</h4>
                  <p className="text-[10px] text-slate-500">{skill.priority} Priority • {skill.phaseCount} Phase(s)</p>
                </div>
                <span className="text-xs font-black text-amber-700 font-mono bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  {percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Strongest Areas */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-emerald-600 border-b border-slate-200 pb-3">
            <Award className="w-4 h-4" />
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Strongest Areas (Interview Ready)
            </h3>
          </div>
          <div className="space-y-3">
            {strongest.map(({ skill, percentage }) => (
              <div
                key={skill.id}
                onClick={() => onNavigate(skill.category === 'technical' ? 'technical' : 'high-value', skill.id)}
                className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between hover:border-emerald-300 cursor-pointer transition-all shadow-xs"
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{skill.name}</h4>
                  <p className="text-[10px] text-slate-500">{skill.priority} Priority • {skill.phaseCount} Phase(s)</p>
                </div>
                <span className="text-xs font-black text-emerald-700 font-mono bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
