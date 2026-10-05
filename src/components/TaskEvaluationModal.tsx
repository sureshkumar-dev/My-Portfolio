import React, { useState, useEffect } from 'react';
import { X, CheckCircle, RotateCcw, Terminal, Code, Award, Sparkles } from 'lucide-react';
import type { PhaseTask, TaskStatus } from '../types';
import { useAppStore } from '../store/AppContext';
import confetti from 'canvas-confetti';

interface TaskEvaluationModalProps {
  task: PhaseTask | null;
  skillName: string;
  phaseNumber: number;
  isOpen: boolean;
  onClose: () => void;
}

export const TaskEvaluationModal: React.FC<TaskEvaluationModalProps> = ({
  task,
  skillName,
  phaseNumber,
  isOpen,
  onClose
}) => {
  const { getTaskStatus, updateTaskStatus, saveNote, state } = useAppStore();
  const [submissionNotes, setSubmissionNotes] = useState('');
  const [personalNotes, setPersonalNotes] = useState('');

  useEffect(() => {
    if (task) {
      const currentStat = getTaskStatus(task.id);
      setSubmissionNotes(currentStat.submissionNotes || '');
      setPersonalNotes(state.notes[task.id] || '');
    }
  }, [task, state.taskStatus, state.notes]);

  if (!isOpen || !task) return null;

  const taskStat = getTaskStatus(task.id);

  const handleSetStatus = (newStatus: TaskStatus) => {
    updateTaskStatus(task.id, newStatus, submissionNotes);
    if (personalNotes.trim()) {
      saveNote(task.id, personalNotes);
    }

    if (newStatus === 'PASSED') {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-indigo-50 rounded-xl border border-indigo-200">
              <Terminal className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-indigo-100 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded">
                  {skillName} — Phase {phaseNumber} Task
                </span>
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    taskStat.status === 'PASSED'
                      ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                      : taskStat.status === 'RETRY'
                      ? 'bg-amber-100 text-amber-700 border-amber-300'
                      : 'bg-slate-100 text-slate-600 border-slate-300'
                  }`}
                >
                  {taskStat.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">{task.title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg bg-slate-200/80">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {/* Description */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
              Task Objective & Scope
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">{task.description}</p>
          </div>

          {/* Requirements Checklist */}
          <div>
            <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Code className="w-4 h-4" />
              <span>Technical Requirements</span>
            </h4>
            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {task.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Criteria */}
          <div>
            <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Award className="w-4 h-4" />
              <span>Pass / Evaluation Criteria</span>
            </h4>
            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {task.evaluationCriteria.map((crit, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>{crit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Starter Guide / Snippet */}
          {task.starterCodeOrGuide && (
            <div>
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                Starter Structure / Execution Outline
              </h4>
              <pre className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto">
                {task.starterCodeOrGuide}
              </pre>
            </div>
          )}

          {/* Submission Notes Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Implementation Proof / Code Notes
            </label>
            <textarea
              value={submissionNotes}
              onChange={e => setSubmissionNotes(e.target.value)}
              placeholder="Paste your GitHub repository URL, code snippet summary, or key implementation notes here..."
              rows={3}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors font-medium"
            />
          </div>

          {/* Personal Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Personal Learning Notes for this Task
            </label>
            <textarea
              value={personalNotes}
              onChange={e => setPersonalNotes(e.target.value)}
              placeholder="Record personal learnings, challenges faced, or interview defense key points..."
              rows={2}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors font-medium"
            />
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between flex-wrap gap-2">
          <button
            onClick={() => handleSetStatus('RETRY')}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-800 border border-amber-300 flex items-center space-x-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mark RETRY</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleSetStatus('SUBMITTED')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors"
            >
              Mark SUBMITTED
            </button>
            <button
              onClick={() => handleSetStatus('PASSED')}
              className="px-5 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/20 flex items-center space-x-1.5 transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>PASS PHASE TASK 🔥</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
