import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';
import { useAppStore } from '../store/AppContext';
import { technicalSkills } from '../data/technicalSkills';
import { highValueSkills } from '../data/highValueSkills';
import { projectTracks } from '../data/projectsResume';
import { interviewQuestions } from '../data/interviewQuestions';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string, targetId?: string) => void;
}

interface SearchResult {
  id: string;
  type: 'Skill' | 'Topic' | 'Phase Task' | 'Project' | 'Interview Question' | 'Note';
  title: string;
  subtitle: string;
  section: string;
  targetId: string;
  priority?: string;
  statusBadge?: string;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');
  const { state, getTopicKey, getTopicStatus, getTaskStatus } = useAppStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase().trim();
    const list: SearchResult[] = [];
    const allSkills = [...technicalSkills, ...highValueSkills];

    // 1. Search Skills
    allSkills.forEach(skill => {
      if (priorityFilter !== 'ALL' && skill.priority !== priorityFilter) return;

      if (skill.name.toLowerCase().includes(q) || skill.description.toLowerCase().includes(q)) {
        list.push({
          id: `skill-${skill.id}`,
          type: 'Skill',
          title: skill.name,
          subtitle: `${skill.priority} • ${skill.phaseCount} Phase(s) • ${skill.category.toUpperCase()}`,
          section: skill.category === 'technical' ? 'technical' : 'high-value',
          targetId: skill.id,
          priority: skill.priority
        });
      }

      // 2. Search Topics
      skill.phases.forEach(phase => {
        phase.topics.forEach(topic => {
          if (topic.toLowerCase().includes(q)) {
            const key = getTopicKey(skill.id, phase.phaseNumber, topic);
            const status = getTopicStatus(key);
            const statusStr = status.practiced ? 'Practiced' : status.studied ? 'Studied' : 'Not Started';

            list.push({
              id: `topic-${key}`,
              type: 'Topic',
              title: topic,
              subtitle: `${skill.name} — Phase ${phase.phaseNumber}: ${phase.title}`,
              section: skill.category === 'technical' ? 'technical' : 'high-value',
              targetId: skill.id,
              priority: skill.priority,
              statusBadge: statusStr
            });
          }
        });

        // 3. Search Phase Tasks
        if (phase.task.title.toLowerCase().includes(q) || phase.task.description.toLowerCase().includes(q)) {
          const taskStat = getTaskStatus(phase.task.id);
          list.push({
            id: `task-${phase.task.id}`,
            type: 'Phase Task',
            title: phase.task.title,
            subtitle: `${skill.name} Phase ${phase.phaseNumber} Task`,
            section: skill.category === 'technical' ? 'technical' : 'high-value',
            targetId: skill.id,
            priority: skill.priority,
            statusBadge: taskStat.status
          });
        }
      });
    });

    // 4. Search Projects
    projectTracks.forEach(proj => {
      if (proj.title.toLowerCase().includes(q) || proj.summary.toLowerCase().includes(q) || proj.techStack.some(t => t.toLowerCase().includes(q))) {
        list.push({
          id: `proj-${proj.id}`,
          type: 'Project',
          title: proj.title,
          subtitle: `${proj.companyOrContext} — ${proj.role}`,
          section: 'projects',
          targetId: proj.id
        });
      }
    });

    // 5. Search Interview Questions
    interviewQuestions.forEach(qItem => {
      if (qItem.title.toLowerCase().includes(q) || qItem.question.toLowerCase().includes(q) || qItem.subCategory.toLowerCase().includes(q)) {
        list.push({
          id: `q-${qItem.id}`,
          type: 'Interview Question',
          title: qItem.title,
          subtitle: `${qItem.category} — ${qItem.subCategory}`,
          section: 'interview',
          targetId: qItem.id
        });
      }
    });

    // 6. Search Personal Notes
    Object.entries(state.notes).forEach(([entityId, noteContent]) => {
      if (noteContent.toLowerCase().includes(q)) {
        list.push({
          id: `note-${entityId}`,
          type: 'Note',
          title: `Note for ${entityId}`,
          subtitle: noteContent.length > 80 ? noteContent.slice(0, 80) + '...' : noteContent,
          section: 'analytics',
          targetId: entityId
        });
      }
    });

    return list.slice(0, 25);
  }, [query, priorityFilter, state]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-start justify-center pt-16 px-4">
      <div
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3 bg-slate-50/80">
          <Search className="w-5 h-5 text-indigo-600" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search skills, topics, tasks, projects, notes..."
            autoFocus
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 text-xs">
              Clear
            </button>
          )}
          <button onClick={onClose} className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg bg-slate-200/80">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2 border-b border-slate-200 flex items-center space-x-2 bg-white text-xs">
          <span className="text-slate-500 font-semibold">Priority:</span>
          {['ALL', 'MASTER', 'STRONG', 'NORMAL'].map(p => (
            <button
              key={p}
              onClick={() => setPriorityFilter(p)}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                priorityFilter === p
                  ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                  : 'text-slate-600 hover:text-slate-900 border border-transparent'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-slate-500">
              <Sparkles className="w-8 h-8 text-indigo-400/60 mx-auto mb-2" />
              <p className="text-xs font-semibold">Type anything to search across all roadmap categories</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold">No results matching &quot;{query}&quot;</p>
            </div>
          ) : (
            results.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.section, item.targetId);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 hover:border-indigo-300 transition-all flex items-center justify-between group shadow-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-indigo-100 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                    {item.priority && (
                      <span className="text-[10px] font-bold text-slate-500">
                        • {item.priority}
                      </span>
                    )}
                    {item.statusBadge && (
                      <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                        {item.statusBadge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500">{item.subtitle}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
