import React from 'react';
import {
  TrendingUp,
  Clock
} from 'lucide-react';
import { useAppStore } from '../store/AppContext';
import { technicalSkills } from '../data/technicalSkills';
import { highValueSkills } from '../data/highValueSkills';

export const ProgressAnalyticsPage: React.FC = () => {
  const { state, calculateOverallMNCReadiness, calculateSkillProgress } = useAppStore();
  const readiness = calculateOverallMNCReadiness();

  const taskStats = Object.values(state.taskStatus);
  const passedTasksCount = taskStats.filter(t => t.status === 'PASSED').length;
  const retryTasksCount = taskStats.filter(t => t.status === 'RETRY').length;
  const submittedTasksCount = taskStats.filter(t => t.status === 'SUBMITTED' || t.status === 'TASK_READY').length;

  const topicEntries = Object.values(state.topicStatus);
  const studiedTopicsCount = topicEntries.filter(t => t.studied).length;
  const practicedTopicsCount = topicEntries.filter(t => t.practiced).length;

  const allSkills = [...technicalSkills, ...highValueSkills];
  let completedSkillsCount = 0;
  allSkills.forEach(s => {
    if (calculateSkillProgress(s).isCompleted) completedSkillsCount++;
  });

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
            Analytics
          </span>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            Progress Analytics & Diagnostics Engine
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Empirical tracking of verified topic completions, phase tasks passed/retried, coding performance, and MNC readiness metrics.
        </p>
      </div>

      {/* OVERALL METRICS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
        <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-1.5 shadow-sm">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Overall MNC Readiness</span>
          <p className="text-3xl font-black text-indigo-600 font-mono">{readiness.overall}%</p>
          <p className="text-[10px] text-slate-500 font-medium">Hierarchy Weighted Formula</p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-1.5 shadow-sm">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phase Tasks Passed</span>
          <p className="text-3xl font-black text-emerald-600 font-mono">{passedTasksCount}</p>
          <p className="text-[10px] text-slate-500 font-medium">{retryTasksCount} Retried • {submittedTasksCount} In Review</p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-1.5 shadow-sm">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Topics Studied / Practiced</span>
          <p className="text-3xl font-black text-purple-600 font-mono">{studiedTopicsCount} / {practicedTopicsCount}</p>
          <p className="text-[10px] text-slate-500 font-medium">Distinct Checklist Items</p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-1.5 shadow-sm">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Skills Mastered</span>
          <p className="text-3xl font-black text-indigo-600 font-mono">{completedSkillsCount} / {allSkills.length}</p>
          <p className="text-[10px] text-slate-500 font-medium">All Phases Passed</p>
        </div>
      </div>

      {/* DOMAIN READINESS DIAGNOSTIC BARS */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-3">
          <TrendingUp className="w-4 h-4 text-indigo-600" />
          <span>Domain Readiness Metrics Diagnostic</span>
        </h3>

        <div className="space-y-5 text-xs">
          <div>
            <div className="flex justify-between font-bold mb-1.5">
              <span className="text-slate-800">Technical Skills (24 Skills)</span>
              <span className="text-cyan-600 font-mono font-black">{readiness.technical}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
              <div className="bg-cyan-500 h-full rounded-full transition-all duration-500" style={{ width: `${readiness.technical}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between font-bold mb-1.5">
              <span className="text-slate-800">High-Value CS Skills (9 Skills)</span>
              <span className="text-indigo-600 font-mono font-black">{readiness.highValue}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
              <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${readiness.highValue}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between font-bold mb-1.5">
              <span className="text-slate-800">English Fluency Mastery</span>
              <span className="text-purple-600 font-mono font-black">{readiness.english}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
              <div className="bg-purple-600 h-full rounded-full transition-all duration-500" style={{ width: `${readiness.english}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between font-bold mb-1.5">
              <span className="text-slate-800">Projects & Resume Defense</span>
              <span className="text-emerald-600 font-mono font-black">{readiness.projects}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
              <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: `${readiness.projects}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between font-bold mb-1.5">
              <span className="text-slate-800">Coding Practice Performance</span>
              <span className="text-amber-600 font-mono font-black">{readiness.coding}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
              <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${readiness.coding}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* SYSTEM AUDIT LOG & TIMESTAMPS */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3 text-xs text-slate-600">
        <h3 className="font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-2">
          <Clock className="w-4 h-4 text-indigo-600" />
          <span>System Synchronization Audit</span>
        </h3>
        <p>State Schema Version: <strong className="text-slate-900">v{state.version}</strong></p>
        <p>Last Activity Timestamp: <strong className="text-slate-900">{new Date(state.lastUpdated).toLocaleString()}</strong></p>
        <p>Storage Engine: <strong className="text-indigo-600 font-mono font-bold">Persistent localStorage (Key: MNC_GOD_MODE_STATE_v1)</strong></p>
      </div>
    </div>
  );
};
