import React, { useState } from 'react';
import {
  Eye,
  EyeOff,
  CheckCircle,
  BookOpen,
  Code2,
  FileText,
  UserCheck
} from 'lucide-react';
import { interviewQuestions } from '../data/interviewQuestions';
import { useAppStore } from '../store/AppContext';

export const InterviewModePage: React.FC = () => {
  const { state, saveNote } = useAppStore();
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'Technical' | 'CS' | 'Resume' | 'HR'>('ALL');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [questionNotes, setQuestionNotes] = useState<Record<string, string>>({});

  const filteredQuestions = interviewQuestions.filter(
    q => selectedCategory === 'ALL' || q.category === selectedCategory
  );

  const toggleReveal = (id: string) => {
    setRevealedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSaveNote = (id: string) => {
    if (questionNotes[id]) {
      saveNote(id, questionNotes[id]);
    }
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
            Section 6
          </span>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            MNC Interview Mode (Categorized Question Bank)
          </h1>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Master high-frequency MNC interview questions across Technical, CS Fundamentals, Resume Verification, and HR Behavioral rounds.
        </p>
      </div>

      {/* CATEGORY SELECTOR TABS */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 overflow-x-auto custom-scrollbar">
        {(['ALL', 'Technical', 'CS', 'Resume', 'HR'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-2 ${
              selectedCategory === cat
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {cat === 'Technical' && <Code2 className="w-3.5 h-3.5 text-indigo-600" />}
            {cat === 'CS' && <BookOpen className="w-3.5 h-3.5 text-indigo-600" />}
            {cat === 'Resume' && <FileText className="w-3.5 h-3.5 text-emerald-600" />}
            {cat === 'HR' && <UserCheck className="w-3.5 h-3.5 text-purple-600" />}
            <span>{cat === 'ALL' ? 'All Categories' : cat}</span>
          </button>
        ))}
      </div>

      {/* QUESTION CARDS LIST */}
      <div className="space-y-5">
        {filteredQuestions.map(q => {
          const isRevealed = !!revealedIds[q.id];
          const noteContent = questionNotes[q.id] ?? (state.notes[q.id] || '');

          return (
            <div
              key={q.id}
              className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-3xl p-6 sm:p-8 transition-all space-y-4 shadow-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div className="flex items-center space-x-2.5">
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded border ${
                      q.category === 'Technical'
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        : q.category === 'CS'
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : q.category === 'Resume'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}
                  >
                    {q.category} • {q.subCategory}
                  </span>
                  <h3 className="text-sm font-black text-slate-900">{q.title}</h3>
                </div>

                <button
                  onClick={() => toggleReveal(q.id)}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 flex items-center space-x-1.5 self-start sm:self-auto transition-colors"
                >
                  {isRevealed ? <EyeOff className="w-4 h-4 text-amber-600" /> : <Eye className="w-4 h-4 text-indigo-600" />}
                  <span>{isRevealed ? 'Hide Answer' : 'Reveal Model Answer'}</span>
                </button>
              </div>

              {/* Question Text */}
              <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 text-xs font-bold text-slate-900 leading-relaxed">
                Q: {q.question}
              </div>

              {/* REVEALED ANSWER CONTENT */}
              {isRevealed && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-200">
                  {/* Key Points */}
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Key Answer Points to Articulate:
                    </h4>
                    <div className="space-y-1.5 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs font-medium text-slate-800">
                      {q.keyAnswerPoints.map((kp, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{kp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Explanation */}
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Detailed Model Answer:
                    </h4>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium whitespace-pre-line">
                      {q.detailedAnswer}
                    </div>
                  </div>

                  {/* Code Snippet */}
                  {q.codeSnippet && (
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Code Example / Syntax:
                      </h4>
                      <pre className="bg-slate-900 p-4.5 rounded-2xl border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto shadow-md">
                        {q.codeSnippet}
                      </pre>
                    </div>
                  )}

                  {/* Notes for Question */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Personal Preparation Notes for this Question:
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={noteContent}
                        onChange={e => setQuestionNotes({ ...questionNotes, [q.id]: e.target.value })}
                        placeholder="Add personal notes or keyword memory triggers..."
                        className="flex-1 bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 font-medium"
                      />
                      <button
                        onClick={() => handleSaveNote(q.id)}
                        className="px-4 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
