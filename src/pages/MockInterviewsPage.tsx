import React, { useState, useEffect } from 'react';
import {
  Play,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  RotateCcw,
  BarChart3
} from 'lucide-react';
import { mockInterviews } from '../data/mockInterviews';
import { interviewQuestions } from '../data/interviewQuestions';
import { useAppStore } from '../store/AppContext';
import type { MockInterviewConfig, MockInterviewResult, InterviewQuestion } from '../types';
import confetti from 'canvas-confetti';

export const MockInterviewsPage: React.FC = () => {
  const { state, saveMockResult } = useAppStore();
  const [activeMockConfig, setActiveMockConfig] = useState<MockInterviewConfig | null>(null);
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'correct' | 'partial' | 'incorrect'>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);
  const [latestResult, setLatestResult] = useState<MockInterviewResult | null>(null);

  useEffect(() => {
    let timer: any = null;
    if (isTestActive && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining(s => s - 1);
      }, 1000);
    } else if (isTestActive && secondsRemaining === 0) {
      handleCompleteTest();
    }
    return () => clearInterval(timer);
  }, [isTestActive, secondsRemaining]);

  const handleStartMock = (config: MockInterviewConfig) => {
    setActiveMockConfig(config);
    setCurrentQuestionIdx(0);
    setUserAnswers({});
    setSecondsRemaining(config.durationMinutes * 60);
    setIsTestActive(true);
    setIsTestCompleted(false);
    setLatestResult(null);
  };

  const getActiveQuestions = (): InterviewQuestion[] => {
    if (!activeMockConfig) return [];
    return activeMockConfig.questionIds
      .map(id => interviewQuestions.find(q => q.id === id))
      .filter(Boolean) as InterviewQuestion[];
  };

  const handleRecordAnswer = (type: 'correct' | 'partial' | 'incorrect') => {
    setUserAnswers(prev => ({ ...prev, [currentQuestionIdx]: type }));
    const questions = getActiveQuestions();
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(idx => idx + 1);
    } else {
      handleCompleteTest();
    }
  };

  const handleCompleteTest = () => {
    setIsTestActive(false);
    setIsTestCompleted(true);

    if (!activeMockConfig) return;
    const questions = getActiveQuestions();
    const total = questions.length;

    let correctCount = 0;
    let partialCount = 0;
    let incorrectCount = 0;
    const weakTopics: string[] = [];

    questions.forEach((q, idx) => {
      const ans = userAnswers[idx];
      if (ans === 'correct') correctCount++;
      else if (ans === 'partial') {
        partialCount++;
        weakTopics.push(q.subCategory);
      } else {
        incorrectCount++;
        weakTopics.push(q.subCategory);
      }
    });

    const score = Math.round(((correctCount + partialCount * 0.5) / (total || 1)) * 100);
    const readinessPercentage = score;

    const result: MockInterviewResult = {
      id: `mock-res-${Date.now()}`,
      mockId: activeMockConfig.id,
      mockTitle: activeMockConfig.title,
      date: new Date().toLocaleDateString(),
      score,
      totalQuestions: total,
      correctCount,
      incorrectCount: incorrectCount + partialCount,
      weakTopics: Array.from(new Set(weakTopics)),
      recommendations: [
        score >= 80 ? 'Excellent performance! Maintain speed in live rounds.' : 'Revisit weak topic checklists in Technical Skills section.',
        'Practice articulating answer key points out loud with high volume.'
      ],
      readinessPercentage
    };

    setLatestResult(result);
    saveMockResult(result);

    if (score >= 70) {
      try {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      } catch (e) {
        // ignore
      }
    }
  };

  const activeQuestions = getActiveQuestions();
  const currentQuestion = activeQuestions[currentQuestionIdx];

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
            Section 7
          </span>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            Mock Interviews & Assessment Engine (11 Modes)
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Execute timed mock interview simulations, self-evaluate answer quality, track scores, and generate weak-topic diagnostic reports.
        </p>
      </div>

      {/* MOCK INTERVIEW SELECTION CARDS GRID */}
      {!isTestActive && !isTestCompleted && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockInterviews.map(mock => (
            <div
              key={mock.id}
              className="bg-white border border-slate-200/90 hover:border-rose-300 rounded-3xl p-6 transition-all space-y-4 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                    {mock.category} Round
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{mock.durationMinutes} min</span>
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-rose-700 transition-colors">
                  {mock.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{mock.description}</p>
              </div>

              <button
                onClick={() => handleStartMock(mock)}
                className="w-full py-3 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-extrabold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-rose-600/20 transition-all"
              >
                <Play className="w-4 h-4 text-white" />
                <span>START MOCK SIMULATION 🔥</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ACTIVE MOCK TEST SIMULATION RUNNER */}
      {isTestActive && activeMockConfig && currentQuestion && (
        <div className="bg-white border border-rose-300 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-in fade-in duration-200">
          {/* Test Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                {activeMockConfig.title}
              </span>
              <h2 className="text-lg font-black text-slate-900 mt-1">
                Question {currentQuestionIdx + 1} of {activeQuestions.length}
              </h2>
            </div>

            <div className="flex items-center space-x-4 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
              <Clock className="w-5 h-5 text-rose-600 animate-pulse" />
              <span className="text-base font-mono font-black text-rose-700">{formatTime(secondsRemaining)}</span>
            </div>
          </div>

          {/* Question Text */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-sm font-bold text-slate-900 leading-relaxed">
            Q: {currentQuestion.question}
          </div>

          {/* Key Points Hint */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Self-Evaluation Checkpoints:
            </h4>
            <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 space-y-1.5 text-xs text-slate-700 font-medium">
              {currentQuestion.keyAnswerPoints.map((kp, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>{kp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Self-Rating Evaluation Buttons */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
              Rate Your Spoken Response Performance:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => handleRecordAnswer('incorrect')}
                className="py-3 px-4 rounded-xl text-xs font-bold bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Incorrect / Struggled (0%)</span>
              </button>

              <button
                onClick={() => handleRecordAnswer('partial')}
                className="py-3 px-4 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Partial Answer (50%)</span>
              </button>

              <button
                onClick={() => handleRecordAnswer('correct')}
                className="py-3 px-4 rounded-xl text-xs font-extrabold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Excellent / Complete (100%)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COMPLETED TEST DIAGNOSTIC REPORT */}
      {isTestCompleted && latestResult && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                Mock Assessment Complete
              </span>
              <h2 className="text-xl font-black text-slate-900 mt-1">{latestResult.mockTitle}</h2>
            </div>

            <button
              onClick={() => setIsTestCompleted(false)}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center space-x-1.5 border border-slate-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Back to Mocks List</span>
            </button>
          </div>

          {/* Score Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mock Score</span>
              <p className="text-3xl font-black text-indigo-600 font-mono">{latestResult.score}%</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Correct Answers</span>
              <p className="text-3xl font-black text-emerald-600 font-mono">{latestResult.correctCount} / {latestResult.totalQuestions}</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Readiness Status</span>
              <p className="text-lg font-black text-purple-700 mt-2">
                {latestResult.score >= 80 ? 'MNC READY 🔥' : latestResult.score >= 60 ? 'PASSING' : 'NEEDS REVISION'}
              </p>
            </div>
          </div>

          {/* Weak Topics Diagnostics */}
          {latestResult.weakTopics.length > 0 && (
            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-2">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center space-x-1">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Identified Weak Topics to Revisit:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {latestResult.weakTopics.map((topic, i) => (
                  <span key={i} className="text-xs bg-white text-amber-900 px-3 py-1 rounded-lg border border-amber-200 font-bold shadow-xs">
                    • {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* MOCK RESULTS HISTORY LOG */}
      {state.mockResults.length > 0 && !isTestActive && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-3">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            <span>Saved Mock Assessment Results History ({state.mockResults.length})</span>
          </h3>

          <div className="space-y-3">
            {state.mockResults.map(res => (
              <div key={res.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between text-xs font-medium">
                <div>
                  <h4 className="font-bold text-slate-900">{res.mockTitle}</h4>
                  <p className="text-[10px] text-slate-500">{res.date} • {res.correctCount}/{res.totalQuestions} Questions Correct</p>
                </div>
                <span className="font-mono font-black text-indigo-700 text-sm bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
                  {res.score}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
