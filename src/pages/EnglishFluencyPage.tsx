import React, { useState } from 'react';
import {
  Mic,
  BookOpen,
  HelpCircle,
  Terminal
} from 'lucide-react';
import { englishPhases } from '../data/englishFluency';
import { useAppStore } from '../store/AppContext';
import type { PhaseTask, HRInterviewAnswer } from '../types';

interface EnglishFluencyPageProps {
  onOpenTaskModal: (task: PhaseTask, skillName: string, phaseNumber: number) => void;
}

export const EnglishFluencyPage: React.FC<EnglishFluencyPageProps> = ({ onOpenTaskModal }) => {
  const { state, updateEnglishMetrics, getTaskStatus } = useAppStore();
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [selectedHrAnswer, setSelectedHrAnswer] = useState<HRInterviewAnswer | null>(
    englishPhases[0].hrInterviewAnswers[0] || null
  );

  const metrics = state.englishMetrics;
  const currentPhase = englishPhases[activePhaseIndex];

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="bg-purple-50 text-purple-700 border border-purple-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
            Section 3
          </span>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            English Speaking Fluency Mastery
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Goal: Speak loudly, fluently, continuously, and confidently in MNC interviews. Focus is on <strong className="text-purple-700">Speaking Flow & Technical Communication</strong> (Grammar is a secondary support tool).
        </p>
      </div>

      {/* FLUENCY METRICS TRACKER & SLIDERS */}
      <div className="bg-white border border-purple-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-purple-50 rounded-2xl border border-purple-100">
              <Mic className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                Personal Speaking Metrics Self-Assessment
              </h3>
              <p className="text-xs text-slate-500">Adjust sliders to track your current vocal delivery confidence</p>
            </div>
          </div>
          <span className="text-xs font-black font-mono text-purple-700 bg-purple-50 px-3 py-1 rounded-xl border border-purple-200">
            Fluency Score:{' '}
            {Math.round(
              (metrics.speakingConfidence +
                metrics.fluency +
                metrics.clarity +
                (100 - metrics.hesitation) +
                metrics.vocabulary +
                metrics.conversationAbility) /
                6
            )}
            %
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
          {/* Metric 1 */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex justify-between font-bold">
              <span className="text-slate-700">Speaking Confidence</span>
              <span className="text-purple-600 font-mono">{metrics.speakingConfidence}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={metrics.speakingConfidence}
              onChange={e => updateEnglishMetrics({ speakingConfidence: Number(e.target.value) })}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          {/* Metric 2 */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex justify-between font-bold">
              <span className="text-slate-700">Vocal Fluency</span>
              <span className="text-purple-600 font-mono">{metrics.fluency}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={metrics.fluency}
              onChange={e => updateEnglishMetrics({ fluency: Number(e.target.value) })}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          {/* Metric 3 */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex justify-between font-bold">
              <span className="text-slate-700">Pronunciation Clarity</span>
              <span className="text-purple-600 font-mono">{metrics.clarity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={metrics.clarity}
              onChange={e => updateEnglishMetrics({ clarity: Number(e.target.value) })}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          {/* Metric 4 */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex justify-between font-bold">
              <span className="text-slate-700">Hesitation Level</span>
              <span className="text-amber-600 font-mono">{metrics.hesitation}% (lower is better)</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={metrics.hesitation}
              onChange={e => updateEnglishMetrics({ hesitation: Number(e.target.value) })}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* PHASE TABS */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 overflow-x-auto custom-scrollbar">
        {englishPhases.map((phase, idx) => {
          const isActive = activePhaseIndex === idx;
          const taskStat = getTaskStatus(phase.task.id);

          return (
            <button
              key={phase.id}
              onClick={() => {
                setActivePhaseIndex(idx);
                if (phase.hrInterviewAnswers.length > 0) {
                  setSelectedHrAnswer(phase.hrInterviewAnswers[0]);
                }
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-2 ${
                isActive
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <span>{phase.title}</span>
              {taskStat.status === 'PASSED' && (
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-300">
                  PASSED ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* PHASE ACTIVE CONTENT */}
      <div className="space-y-6">
        {/* Objective Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900">{currentPhase.title}</h2>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-xl border border-purple-200">
              Objective
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">{currentPhase.objective}</p>

          {/* Key Topics */}
          <div className="pt-2">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Phase Topics & Concepts
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentPhase.topics.map((topic, i) => (
                <span key={i} className="text-[11px] bg-slate-50 text-slate-700 font-medium px-3 py-1 rounded-lg border border-slate-200">
                  • {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PRACTICAL SENTENCE FRAMEWORKS */}
        {currentPhase.sentenceFrameworks.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span>Practical Sentence Patterns & Conversational Frameworks</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPhase.sentenceFrameworks.map((sf, idx) => (
                <div key={idx} className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 space-y-2 hover:border-purple-300 transition-all shadow-xs">
                  <span className="text-[10px] font-extrabold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 rounded border border-purple-200">
                    {sf.context}
                  </span>
                  <p className="text-xs font-bold text-slate-900">{sf.pattern}</p>
                  <p className="text-[11px] text-slate-500 italic">Example: &quot;{sf.example}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HR INTERVIEW SAMPLE ANSWERS */}
        {currentPhase.hrInterviewAnswers && currentPhase.hrInterviewAnswers.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-purple-600" />
              <span>Basic HR Interview Questions & Model Spoken Responses</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Question List */}
              <div className="space-y-2">
                {currentPhase.hrInterviewAnswers.map((qa, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedHrAnswer(qa)}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      selectedHrAnswer?.question === qa.question
                        ? 'bg-purple-50 text-purple-700 border border-purple-300 shadow-xs'
                        : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    <span>{qa.question}</span>
                    <span className="text-[10px] text-purple-600 font-mono">▸</span>
                  </button>
                ))}
              </div>

              {/* Model Answer Preview */}
              {selectedHrAnswer && (
                <div className="lg:col-span-2 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h4 className="text-xs font-black text-purple-700">{selectedHrAnswer.question}</h4>
                    <span className="text-[10px] text-slate-500 font-mono font-bold">Spoken Answer Framework</span>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Key Points to Cover:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedHrAnswer.keyPoints.map((kp, i) => (
                        <span key={i} className="text-[10px] bg-white text-slate-700 font-semibold px-2.5 py-1 rounded-lg border border-slate-200">
                          ✓ {kp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Model Spoken Response:
                    </h5>
                    <p className="text-xs text-slate-800 leading-relaxed bg-white p-4 rounded-xl border border-slate-200 font-medium">
                      &quot;{selectedHrAnswer.sampleAnswer}&quot;
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3.5 rounded-xl border border-purple-200 text-[11px] text-purple-800 font-medium">
                    💡 <strong>Delivery Tip:</strong> {selectedHrAnswer.tips}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ONE PHASE TASK CARD */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-purple-400" />
              <span className="text-[10px] font-extrabold uppercase text-purple-400 bg-purple-950 px-2.5 py-0.5 rounded border border-purple-800">
                Phase {currentPhase.phaseNumber} Spoken Task
              </span>
            </div>
            <h4 className="text-sm font-black text-white">{currentPhase.task.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">{currentPhase.task.description}</p>
          </div>

          <button
            onClick={() => onOpenTaskModal(currentPhase.task, 'English Fluency', currentPhase.phaseNumber)}
            className="px-6 py-3.5 rounded-xl text-xs font-extrabold shrink-0 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25 transition-all"
          >
            Execute & Evaluate Spoken Task 🔥
          </button>
        </div>
      </div>
    </div>
  );
};
