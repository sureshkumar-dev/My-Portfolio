import React, { useState } from 'react';
import {
  Terminal,
  Zap,
  Server,
  Database,
  HelpCircle,
  Play,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { projectTracks } from '../data/projectsResume';
import { useAppStore } from '../store/AppContext';
import type { PhaseTask } from '../types';

interface ProjectsResumePageProps {
  onOpenTaskModal: (task: PhaseTask, skillName: string, phaseNumber: number) => void;
  targetProjectId?: string;
}

export const ProjectsResumePage: React.FC<ProjectsResumePageProps> = ({ onOpenTaskModal, targetProjectId }) => {
  const { getTaskStatus } = useAppStore();
  const [selectedProjectId, setSelectedProjectId] = useState<string>(targetProjectId || 'cartify');
  const [activePitchTab, setActivePitchTab] = useState<'30s' | '2m' | '5m'>('2m');

  const currentProject = projectTracks.find(p => p.id === selectedProjectId) || projectTracks[0];
  const masterTaskStat = getTaskStatus(currentProject.masterTask.id);

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
            Section 4
          </span>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            Projects & Resume Mastery (Deep-Dive Defense)
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Master end-to-end architectural explanations, technology selection rationales, database design, API flow, cross-questioning defense, and 30s/2m/5m pitch scripts.
        </p>
      </div>

      {/* PROJECT TRACK SELECTOR TABS */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 overflow-x-auto custom-scrollbar">
        {projectTracks.map(proj => {
          const isActive = proj.id === currentProject.id;
          const taskStat = getTaskStatus(proj.masterTask.id);

          return (
            <button
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-2 ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>{proj.title}</span>
              {taskStat.status === 'PASSED' && (
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-300">
                  PASSED ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* PROJECT ACTIVE DETAILS */}
      <div className="space-y-6">
        {/* Project Header Overview Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                {currentProject.companyOrContext} — {currentProject.role}
              </span>
              <h2 className="text-xl font-black text-slate-900 mt-2">{currentProject.title}</h2>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-500">Master Defense:</span>
              <span
                className={`text-xs font-extrabold px-3 py-1 rounded-lg border ${
                  masterTaskStat.status === 'PASSED'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}
              >
                {masterTaskStat.status}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed font-medium">{currentProject.summary}</p>

          {/* Problem Statement & Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs pt-2">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-amber-700 uppercase tracking-wider text-[11px]">
                Problem Statement
              </h4>
              <p className="text-slate-700 leading-relaxed font-medium">{currentProject.problemStatement}</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
              <h4 className="font-bold text-emerald-700 uppercase tracking-wider text-[11px]">
                Purpose & Value Delivered
              </h4>
              <p className="text-slate-700 leading-relaxed font-medium">{currentProject.purpose}</p>
            </div>
          </div>
        </div>

        {/* 30s / 2m / 5m PITCH SCRIPT REHEARSER */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <Play className="w-4 h-4 text-emerald-600" />
              <span>Interview Pitch Rehearser Scripts</span>
            </h3>

            <div className="flex items-center space-x-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
              {(['30s', '2m', '5m'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActivePitchTab(tab)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activePitchTab === tab
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab === '30s' ? '30-Sec Elevator Pitch' : tab === '2m' ? '2-Min Overview' : '5-Min Deep Dive'}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
            <p className="text-xs text-slate-800 leading-relaxed font-mono whitespace-pre-line">
              {activePitchTab === '30s'
                ? currentProject.pitch30s
                : activePitchTab === '2m'
                ? currentProject.pitch2m
                : currentProject.pitch5m}
            </p>
          </div>
        </div>

        {/* ARCHITECTURE, TECH STACK & DATABASE DESIGN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
          {/* Tech Stack Rationale */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-3">
              <Server className="w-4 h-4 text-emerald-600" />
              <span>Tech Stack Selection Rationale</span>
            </h3>

            <div className="space-y-3">
              {currentProject.techSelectionRationale.map((ts, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700">{ts.tech}</span>
                  <p className="text-slate-700 leading-relaxed font-medium">{ts.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Database Design & API Flow */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-3">
              <Database className="w-4 h-4 text-indigo-600" />
              <span>Database Schema & API Request Flow</span>
            </h3>

            <div className="space-y-3">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold text-indigo-700">Database Design</span>
                <p className="text-slate-700 leading-relaxed font-mono text-[11px]">{currentProject.dbDesign}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-indigo-700">API Execution Flow</span>
                {currentProject.apiFlow.map((flow, i) => (
                  <div key={i} className="text-slate-700 text-[11px] font-mono leading-relaxed border-l-2 border-indigo-400 pl-2">
                    {flow}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CHALLENGES, BUGS & SOLUTIONS */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5 text-xs">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-3">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>Critical Engineering Challenges & Bug Solutions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {currentProject.challengesBugs.map((cb, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-amber-700 font-bold">
                  <span>Challenge #{idx + 1}:</span>
                  <span className="text-slate-900">{cb.challenge}</span>
                </div>
                <div className="flex items-start space-x-2 text-emerald-700 pt-2 border-t border-slate-200">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span className="text-slate-700 leading-relaxed font-medium">
                    <strong>Solution:</strong> {cb.solution}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERVIEW QUESTIONS & CROSS-QUESTIONING */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5 text-xs">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-3">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span>MNC Interview Questions & Cross-Questioning Defense</span>
          </h3>

          <div className="space-y-4">
            {currentProject.interviewQuestions.map((iq, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-purple-800">Q: {iq.question}</h4>
                <p className="text-slate-800 bg-white p-4 rounded-xl border border-slate-200 font-medium">
                  <strong>Answer:</strong> {iq.answer}
                </p>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 text-purple-900 font-mono text-[11px] whitespace-pre-line">
                  {iq.crossQuestioning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MASTER PROJECT DEFENSE TASK CARD */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span className="text-[10px] font-extrabold uppercase text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
                Master Project Task
              </span>
            </div>
            <h4 className="text-sm font-black text-white">{currentProject.masterTask.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              {currentProject.masterTask.description}
            </p>
          </div>

          <button
            onClick={() => onOpenTaskModal(currentProject.masterTask, currentProject.title, 1)}
            className="px-6 py-3.5 rounded-xl text-xs font-extrabold shrink-0 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 transition-all"
          >
            Execute Master Project Defense 🔥
          </button>
        </div>
      </div>
    </div>
  );
};
