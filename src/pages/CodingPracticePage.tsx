import React, { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle,
  HelpCircle,
  Play,
  Pause,
  RotateCcw,
  Code2
} from 'lucide-react';
import { codingProblems } from '../data/codingPractice';
import { useAppStore } from '../store/AppContext';
import type { CodingProblem } from '../types';

export const CodingPracticePage: React.FC = () => {
  const { state, recordCodingAttempt } = useAppStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedProblem, setSelectedProblem] = useState<CodingProblem>(codingProblems[0]);

  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [mistakesNotes, setMistakesNotes] = useState<string>('');

  const problemAttempt = state.codingAttempts[selectedProblem.id] || {
    problemId: selectedProblem.id,
    attempted: false,
    solved: false,
    timeSpentSeconds: 0,
    attemptsCount: 0,
    hintUsed: false,
    mistakesNotes: '',
    optimalUnderstood: false,
    reSolveRequired: false,
    lastAttemptedAt: ''
  };

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    setIsTimerRunning(false);
    setSeconds(0);
    setShowHint(false);
    setShowSolution(false);
    setMistakesNotes(problemAttempt.mistakesNotes || '');
  }, [selectedProblem.id]);

  const categories = ['ALL', ...Array.from(new Set(codingProblems.map(p => p.category)))];
  const filteredProblems = codingProblems.filter(p => selectedCategory === 'ALL' || p.category === selectedCategory);

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleMarkSolved = (solved: boolean) => {
    recordCodingAttempt(selectedProblem.id, {
      attempted: true,
      solved,
      timeSpentSeconds: problemAttempt.timeSpentSeconds + seconds,
      hintUsed: showHint,
      mistakesNotes,
      optimalUnderstood: showSolution,
      reSolveRequired: !solved
    });
    setIsTimerRunning(false);
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
              Section 5
            </span>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">
              Coding Practice & Timed Problem Solver
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Repeated problem solving across 16 categories with timed coding mode, attempt metrics, and mistake tracking.
          </p>
        </div>

        {/* Timed Mode Widget */}
        <div className="bg-white border border-slate-200 p-3.5 rounded-2xl flex items-center space-x-4 shadow-xs">
          <div className="flex items-center space-x-2 text-amber-600 font-mono font-black text-lg">
            <Clock className="w-5 h-5 text-amber-600 animate-pulse" />
            <span>{formatTime(seconds)}</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`p-2 rounded-xl text-xs font-bold transition-all ${
                isTimerRunning
                  ? 'bg-amber-100 text-amber-800 border border-amber-300'
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
              }`}
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setSeconds(0);
              }}
              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs border border-slate-200"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER PILLS */}
      <div className="flex items-center space-x-2 overflow-x-auto custom-scrollbar pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MAIN LAYOUT: PROBLEM LIST (LEFT) VS WORKSPACE (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Problem List */}
        <div className="space-y-2 bg-white border border-slate-200 rounded-3xl p-4 max-h-[75vh] overflow-y-auto custom-scrollbar shadow-xs">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">
            Problems ({filteredProblems.length})
          </h3>

          {filteredProblems.map(p => {
            const isSelected = p.id === selectedProblem.id;
            const att = state.codingAttempts[p.id];

            return (
              <button
                key={p.id}
                onClick={() => setSelectedProblem(p)}
                className={`w-full text-left p-3.5 rounded-2xl border text-xs font-bold transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded ${
                        p.difficulty === 'Easy'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : p.difficulty === 'Medium'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}
                    >
                      {p.difficulty}
                    </span>
                    <span>{p.title}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-normal">{p.category}</p>
                </div>

                {att?.solved && (
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column: Problem Workspace */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {selectedProblem.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500">• {selectedProblem.difficulty}</span>
                </div>
                <h2 className="text-lg font-black text-slate-900 mt-1">{selectedProblem.title}</h2>
              </div>

              <div className="text-right text-xs">
                <span className="text-slate-500 font-semibold">Status: </span>
                <span className={problemAttempt.solved ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                  {problemAttempt.solved ? 'SOLVED ✓' : 'NOT SOLVED'}
                </span>
                <p className="text-[10px] text-slate-500 font-mono">Attempts: {problemAttempt.attemptsCount}</p>
              </div>
            </div>

            {/* Problem Description */}
            <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
              {selectedProblem.description}
            </div>

            {/* Examples */}
            {selectedProblem.examples.map((ex, idx) => (
              <div key={idx} className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 text-xs space-y-1 font-mono">
                <div className="text-slate-500 font-bold">Example {idx + 1}:</div>
                <div className="text-indigo-700 font-semibold">Input: {ex.input}</div>
                <div className="text-emerald-700 font-semibold">Output: {ex.output}</div>
                {ex.explanation && <div className="text-slate-500 text-[11px]">Explanation: {ex.explanation}</div>}
              </div>
            ))}

            {/* HINT & OPTIMAL SOLUTION TOGGLES */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-3.5 py-2 bg-slate-50 hover:bg-amber-50 text-amber-800 border border-slate-200 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>{showHint ? 'Hide Hint' : 'Reveal Hint'}</span>
                </button>

                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-3.5 py-2 bg-slate-50 hover:bg-indigo-50 text-indigo-700 border border-slate-200 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  <span>{showSolution ? 'Hide Solution' : 'View Optimal Solution'}</span>
                </button>
              </div>

              {showHint && (
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 font-medium">
                  💡 <strong>Hint:</strong> {selectedProblem.hint}
                </div>
              )}

              {showSolution && (
                <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 text-white shadow-md">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold">Optimal Solution Code:</span>
                    <span className="text-slate-400">
                      Time: {selectedProblem.timeComplexity} | Space: {selectedProblem.spaceComplexity}
                    </span>
                  </div>
                  <pre className="text-xs font-mono text-emerald-300 overflow-x-auto p-3 bg-slate-950 rounded-xl">
                    {selectedProblem.optimalSolution}
                  </pre>
                </div>
              )}
            </div>

            {/* MISTAKES & NOTES INPUT */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Mistake Analysis & Resolution Notes
              </label>
              <textarea
                value={mistakesNotes}
                onChange={e => setMistakesNotes(e.target.value)}
                placeholder="Record edge cases missed, off-by-one errors, or optimization notes..."
                rows={2}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 font-medium"
              />
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center justify-end space-x-3 border-t border-slate-200 pt-4">
              <button
                onClick={() => handleMarkSolved(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
              >
                Mark Unsolved / Retry Needed
              </button>
              <button
                onClick={() => handleMarkSolved(true)}
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/20 flex items-center space-x-1.5 transition-all"
              >
                <CheckCircle className="w-4 h-4 text-white" />
                <span>MARK SOLVED ✓</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
