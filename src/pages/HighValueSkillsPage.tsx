import React, { useState } from 'react';
import {
  Cpu,
  ChevronDown,
  ChevronUp,
  Lock,
  Unlock,
  CheckSquare,
  Square,
  Terminal,
  BookOpen,
  HelpCircle,
  RotateCcw,
  Award
} from 'lucide-react';
import { highValueSkills } from '../data/highValueSkills';
import { useAppStore } from '../store/AppContext';
import type { Skill, PhaseTask } from '../types';

interface HighValueSkillsPageProps {
  onOpenTaskModal: (task: PhaseTask, skillName: string, phaseNumber: number) => void;
  targetSkillId?: string;
}

export const HighValueSkillsPage: React.FC<HighValueSkillsPageProps> = ({ onOpenTaskModal, targetSkillId }) => {
  const {
    getTopicKey,
    getTopicStatus,
    toggleTopicStudied,
    toggleTopicPracticed,
    getTaskStatus,
    isPhaseUnlocked,
    calculateSkillProgress,
    resetSkillProgress
  } = useAppStore();

  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(targetSkillId || 'dsa');
  const [resetModalSkill, setResetModalSkill] = useState<Skill | null>(null);

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
            Section 2
          </span>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            High-Value Computer Science Additions (9 Skills)
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Deep CS foundations for MNC technical rounds including Data Structures & Algorithms, OOP, DBMS, Networks, OS, System Design, Security, Testing, and CI/CD.
        </p>
      </div>

      {/* Accordion / Skill List */}
      <div className="space-y-5">
        {highValueSkills.map(skill => {
          const isExpanded = expandedSkillId === skill.id;
          const { percentage, isCompleted, passedPhases } = calculateSkillProgress(skill);

          return (
            <div
              key={skill.id}
              id={`skill-${skill.id}`}
              className={`bg-white border rounded-2xl transition-all duration-200 shadow-xs ${
                isExpanded
                  ? 'border-indigo-300 shadow-md ring-1 ring-indigo-200'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Skill Card Bar */}
              <div
                onClick={() => setExpandedSkillId(isExpanded ? null : skill.id)}
                className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl border font-mono font-black text-xs ${
                      skill.priority === 'MASTER'
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        : 'bg-purple-50 text-purple-700 border-purple-200'
                    }`}
                  >
                    {skill.priority}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base font-black text-slate-900">{skill.name}</h3>
                      {isCompleted && (
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black px-2 py-0.5 rounded flex items-center space-x-1">
                          <Award className="w-3 h-3 text-emerald-600" />
                          <span>MASTERED</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">{skill.description}</p>
                  </div>
                </div>

                {/* Progress & Toggle */}
                <div className="flex items-center space-x-6 justify-between sm:justify-end">
                  <div className="text-right space-y-1">
                    <div className="flex items-center space-x-2 text-xs font-bold">
                      <span className="text-slate-500">Phases: {passedPhases}/{skill.phaseCount}</span>
                      <span className="text-indigo-600 font-mono">{percentage}%</span>
                    </div>
                    <div className="w-32 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                      <div
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setResetModalSkill(skill);
                    }}
                    title="Reset Skill Progress"
                    className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <div className="p-2 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Expanded Phase Content */}
              {isExpanded && (
                <div className="border-t border-slate-200/90 p-6 space-y-6 bg-slate-50/50 rounded-b-2xl">
                  {skill.phases.map(phase => {
                    const unlocked = isPhaseUnlocked(skill, phase.phaseNumber);
                    const taskStat = getTaskStatus(phase.task.id);

                    return (
                      <div
                        key={phase.id}
                        className={`border rounded-2xl p-6 space-y-5 transition-all shadow-xs ${
                          unlocked
                            ? 'bg-white border-slate-200/90'
                            : 'bg-slate-100/60 border-slate-200 opacity-70'
                        }`}
                      >
                        {/* Phase Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                          <div className="flex items-center space-x-2.5">
                            {unlocked ? (
                              <Unlock className="w-4 h-4 text-indigo-600" />
                            ) : (
                              <Lock className="w-4 h-4 text-amber-600" />
                            )}
                            <h4 className="text-sm font-black text-slate-900">{phase.title}</h4>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span
                              className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded border ${
                                taskStat.status === 'PASSED'
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : taskStat.status === 'RETRY'
                                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                                  : 'bg-slate-100 text-slate-600 border-slate-200'
                              }`}
                            >
                              Task: {taskStat.status}
                            </span>
                            {!unlocked && (
                              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                Pass Phase {phase.phaseNumber - 1} Task to Unlock
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed font-medium">{phase.objective}</p>

                        {/* Detailed Topic Checklist */}
                        <div className="space-y-2">
                          <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                            <span>Topics Checklist (Studied vs Practiced)</span>
                          </h5>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-slate-50 p-4 rounded-xl border border-slate-200">
                            {phase.topics.map(topic => {
                              const key = getTopicKey(skill.id, phase.phaseNumber, topic);
                              const stat = getTopicStatus(key);

                              return (
                                <div
                                  key={topic}
                                  className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 text-xs"
                                >
                                  <span className="text-slate-800 font-semibold truncate pr-2">{topic}</span>

                                  <div className="flex items-center space-x-2 shrink-0">
                                    <button
                                      disabled={!unlocked}
                                      onClick={() => toggleTopicStudied(key)}
                                      className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                                        stat.studied
                                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                                          : 'bg-slate-100 text-slate-500 border border-slate-200 hover:text-slate-700'
                                      }`}
                                    >
                                      {stat.studied ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                                      <span>Studied</span>
                                    </button>

                                    <button
                                      disabled={!unlocked}
                                      onClick={() => toggleTopicPracticed(key)}
                                      className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                                        stat.practiced
                                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                          : 'bg-slate-100 text-slate-500 border border-slate-200 hover:text-slate-700'
                                      }`}
                                    >
                                      {stat.practiced ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                                      <span>Practiced</span>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Practical & Interview Knowledge Lists */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                            <h5 className="font-bold text-indigo-700 uppercase tracking-wider text-[11px] flex items-center space-x-1">
                              <Cpu className="w-3.5 h-3.5" />
                              <span>Practical Concepts</span>
                            </h5>
                            <ul className="space-y-1.5 text-slate-700 font-medium">
                              {phase.practicalKnowledge.map((pk, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <span className="text-indigo-600 font-bold">•</span>
                                  <span>{pk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                            <h5 className="font-bold text-purple-700 uppercase tracking-wider text-[11px] flex items-center space-x-1">
                              <HelpCircle className="w-3.5 h-3.5" />
                              <span>Interview Concepts</span>
                            </h5>
                            <ul className="space-y-1.5 text-slate-700 font-medium">
                              {phase.interviewKnowledge.map((ik, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <span className="text-purple-600 font-bold">•</span>
                                  <span>{ik}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* ONE Practical Phase Task Card */}
                        <div className="bg-slate-900 border border-slate-800 text-white rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Terminal className="w-4 h-4 text-indigo-400" />
                              <span className="text-[10px] font-extrabold uppercase text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">
                                ONE Phase Task
                              </span>
                              <h5 className="text-xs font-bold text-white">{phase.task.title}</h5>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-snug">{phase.task.description}</p>
                          </div>

                          <button
                            disabled={!unlocked}
                            onClick={() => onOpenTaskModal(phase.task, skill.name, phase.phaseNumber)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-extrabold shrink-0 transition-all ${
                              taskStat.status === 'PASSED'
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800 hover:bg-emerald-900'
                                : unlocked
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-md shadow-indigo-500/20'
                                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                            }`}
                          >
                            {taskStat.status === 'PASSED' ? 'Task Passed ✓' : 'Execute & Evaluate Task'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Reset Confirmation Modal */}
      {resetModalSkill && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900">
              Reset Progress for {resetModalSkill.name}?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              This action will reset all studied/practiced topic checkboxes and phase task evaluation statuses for <strong className="text-slate-800">{resetModalSkill.name}</strong>.
            </p>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setResetModalSkill(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetSkillProgress(resetModalSkill.id);
                  setResetModalSkill(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-800 border border-amber-300"
              >
                Reset Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
