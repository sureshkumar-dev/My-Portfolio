import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  AppState,
  TopicStatus,
  TaskStatus,
  EnglishFluencyMetrics,
  CodingAttempt,
  MockInterviewResult,
  AppSettings,
  Skill
} from '../types';
import { technicalSkills } from '../data/technicalSkills';
import { highValueSkills } from '../data/highValueSkills';
import { englishPhases } from '../data/englishFluency';
import { projectTracks } from '../data/projectsResume';
import { codingProblems } from '../data/codingPractice';

const STORAGE_KEY = 'CONSISTENCY_DASHBOARD_STATE_v1';

const defaultMetrics: EnglishFluencyMetrics = {
  speakingConfidence: 0,
  fluency: 0,
  clarity: 0,
  hesitation: 0,
  fillerWords: 0,
  vocabulary: 0,
  conversationAbility: 0,
  interviewCommunication: 0
};

const defaultSettings: AppSettings = {
  strictPhaseLocking: true,
  darkTheme: false,
  soundEffects: true
};

const initialAppState: AppState = {
  version: 1,
  userProfile: {
    name: 'SURESHKUMAR P',
    targetRole: ['Full Stack Developer', 'Software Engineer', 'MERN Stack Developer', 'Junior/Entry-Level Full Stack Developer'],
    resumeSkills: [
      { skillId: 'javascript', name: 'JavaScript (ES6+)', claimedInResume: true },
      { skillId: 'typescript', name: 'TypeScript', claimedInResume: true },
      { skillId: 'react', name: 'React.js', claimedInResume: true },
      { skillId: 'nextjs', name: 'Next.js', claimedInResume: true },
      { skillId: 'redux-toolkit', name: 'Redux Toolkit', claimedInResume: true },
      { skillId: 'tailwind-css', name: 'Tailwind CSS', claimedInResume: true },
      { skillId: 'bootstrap', name: 'Bootstrap', claimedInResume: true },
      { skillId: 'html-css', name: 'HTML5 & CSS3', claimedInResume: true },
      { skillId: 'node', name: 'Node.js', claimedInResume: true },
      { skillId: 'express', name: 'Express.js', claimedInResume: true },
      { skillId: 'rest-api', name: 'REST APIs', claimedInResume: true },
      { skillId: 'jwt-rbac', name: 'JWT Auth & RBAC', claimedInResume: true },
      { skillId: 'bullmq', name: 'BullMQ', claimedInResume: true },
      { skillId: 'mongodb', name: 'MongoDB & Mongoose', claimedInResume: true },
      { skillId: 'sql', name: 'SQL / MySQL', claimedInResume: true },
      { skillId: 'redis', name: 'Redis', claimedInResume: true },
      { skillId: 'git-github', name: 'Git & GitHub', claimedInResume: true },
      { skillId: 'docker', name: 'Docker', claimedInResume: true },
      { skillId: 'aws-basics', name: 'AWS Basics', claimedInResume: true },
      { skillId: 'postman', name: 'Postman', claimedInResume: true },
      { skillId: 'vercel', name: 'Vercel', claimedInResume: true },
      { skillId: 'render', name: 'Render', claimedInResume: true },
      { skillId: 'npm', name: 'npm', claimedInResume: true }
    ],
    experience: ['Full-Stack Developer Trainee — Alchem Digital', 'Data Analyst Intern — Hitakey Infosys'],
    projects: ['Cartify — E-Commerce Marketplace', 'FarmGuard — Agricultural Monitoring System', 'Smart Exam Proctoring System']
  },
  topicStatus: {},
  taskStatus: {},
  notes: {},
  englishMetrics: defaultMetrics,
  codingAttempts: {},
  mockResults: [],
  settings: defaultSettings,
  lastUpdated: new Date().toISOString()
};

interface AppContextType {
  state: AppState;
  toggleTopicStudied: (topicKey: string) => void;
  toggleTopicPracticed: (topicKey: string) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus, notes?: string) => void;
  saveNote: (entityId: string, content: string) => void;
  deleteNote: (entityId: string) => void;
  updateEnglishMetrics: (metrics: Partial<EnglishFluencyMetrics>) => void;
  recordCodingAttempt: (problemId: string, attempt: Partial<CodingAttempt>) => void;
  saveMockResult: (result: MockInterviewResult) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  exportProgress: () => void;
  importProgress: (jsonString: string) => boolean;
  resetAllProgress: () => void;
  resetSkillProgress: (skillId: string) => void;
  
  // Helpers
  getTopicKey: (skillId: string, phaseNum: number, topicName: string) => string;
  getTopicStatus: (topicKey: string) => TopicStatus;
  getTaskStatus: (taskId: string) => { status: TaskStatus; submissionNotes?: string };
  isPhaseUnlocked: (skill: Skill, phaseNum: number) => boolean;
  calculateSkillProgress: (skill: Skill) => { percentage: number; isCompleted: boolean; passedPhases: number };
  calculateOverallMNCReadiness: () => {
    overall: number;
    technical: number;
    highValue: number;
    english: number;
    projects: number;
    coding: number;
    interview: number;
  };
  getTodaysMissions: () => { title: string; subtitle: string; actionText: string; section: string; targetId: string }[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object' && parsed.version === 1) {
          return {
            ...initialAppState,
            ...parsed,
            settings: { ...defaultSettings, ...(parsed.settings || {}) },
            englishMetrics: { ...defaultMetrics, ...(parsed.englishMetrics || {}) }
          };
        }
      }
    } catch (e) {
      console.error('Failed to parse state from localStorage, initializing default state', e);
    }
    return initialAppState;
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to persist state to localStorage', e);
    }
  }, [state]);

  const getTopicKey = (skillId: string, phaseNum: number, topicName: string) => {
    return `${skillId}_p${phaseNum}_${topicName.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
  };

  const getTopicStatus = (topicKey: string): TopicStatus => {
    return state.topicStatus[topicKey] || { studied: false, practiced: false };
  };

  const getTaskStatus = (taskId: string) => {
    return state.taskStatus[taskId] || { status: 'NOT_STARTED' as TaskStatus };
  };

  const toggleTopicStudied = (topicKey: string) => {
    setState(prev => {
      const current = prev.topicStatus[topicKey] || { studied: false, practiced: false };
      const nextStudied = !current.studied;
      return {
        ...prev,
        topicStatus: {
          ...prev.topicStatus,
          [topicKey]: {
            ...current,
            studied: nextStudied,
            updatedAt: new Date().toISOString()
          }
        },
        lastUpdated: new Date().toISOString()
      };
    });
  };

  const toggleTopicPracticed = (topicKey: string) => {
    setState(prev => {
      const current = prev.topicStatus[topicKey] || { studied: false, practiced: false };
      const nextPracticed = !current.practiced;
      return {
        ...prev,
        topicStatus: {
          ...prev.topicStatus,
          [topicKey]: {
            ...current,
            practiced: nextPracticed,
            updatedAt: new Date().toISOString()
          }
        },
        lastUpdated: new Date().toISOString()
      };
    });
  };

  const updateTaskStatus = (taskId: string, status: TaskStatus, submissionNotes?: string) => {
    setState(prev => ({
      ...prev,
      taskStatus: {
        ...prev.taskStatus,
        [taskId]: {
          status,
          submissionNotes: submissionNotes ?? prev.taskStatus[taskId]?.submissionNotes,
          evaluatedAt: new Date().toISOString()
        }
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const saveNote = (entityId: string, content: string) => {
    setState(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [entityId]: content
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const deleteNote = (entityId: string) => {
    setState(prev => {
      const nextNotes = { ...prev.notes };
      delete nextNotes[entityId];
      return {
        ...prev,
        notes: nextNotes,
        lastUpdated: new Date().toISOString()
      };
    });
  };

  const updateEnglishMetrics = (metrics: Partial<EnglishFluencyMetrics>) => {
    setState(prev => ({
      ...prev,
      englishMetrics: {
        ...prev.englishMetrics,
        ...metrics
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const recordCodingAttempt = (problemId: string, attempt: Partial<CodingAttempt>) => {
    setState(prev => {
      const existing = prev.codingAttempts[problemId] || {
        problemId,
        attempted: false,
        solved: false,
        timeSpentSeconds: 0,
        attemptsCount: 0,
        hintUsed: false,
        mistakesNotes: '',
        optimalUnderstood: false,
        reSolveRequired: false,
        lastAttemptedAt: new Date().toISOString()
      };
      return {
        ...prev,
        codingAttempts: {
          ...prev.codingAttempts,
          [problemId]: {
            ...existing,
            ...attempt,
            attemptsCount: existing.attemptsCount + (attempt.attempted ? 1 : 0),
            lastAttemptedAt: new Date().toISOString()
          }
        },
        lastUpdated: new Date().toISOString()
      };
    });
  };

  const saveMockResult = (result: MockInterviewResult) => {
    setState(prev => ({
      ...prev,
      mockResults: [result, ...prev.mockResults],
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setState(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...newSettings
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const exportProgress = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `MNC_GOD_MODE_PROGRESS_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importProgress = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === 'object' && (parsed.version === 1 || parsed.userProfile)) {
        const validatedState: AppState = {
          ...initialAppState,
          ...parsed,
          settings: { ...defaultSettings, ...(parsed.settings || {}) },
          englishMetrics: { ...defaultMetrics, ...(parsed.englishMetrics || {}) }
        };
        setState(validatedState);
        return true;
      }
    } catch (e) {
      console.error('Failed to import JSON', e);
    }
    return false;
  };

  const resetAllProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState(initialAppState);
  };

  const resetSkillProgress = (skillId: string) => {
    setState(prev => {
      const nextTopicStatus = { ...prev.topicStatus };
      const nextTaskStatus = { ...prev.taskStatus };

      Object.keys(nextTopicStatus).forEach(key => {
        if (key.startsWith(`${skillId}_`)) {
          delete nextTopicStatus[key];
        }
      });

      // Reset tasks for this skill
      const allSkills = [...technicalSkills, ...highValueSkills];
      const skill = allSkills.find(s => s.id === skillId);
      if (skill) {
        skill.phases.forEach(phase => {
          delete nextTaskStatus[phase.task.id];
        });
      }

      return {
        ...prev,
        topicStatus: nextTopicStatus,
        taskStatus: nextTaskStatus,
        lastUpdated: new Date().toISOString()
      };
    });
  };

  const isPhaseUnlocked = (skill: Skill, phaseNum: number): boolean => {
    if (!state.settings.strictPhaseLocking) return true;
    if (phaseNum === 1) return true;
    
    // Check if previous phase (phaseNum - 1) is PASSED
    const prevPhase = skill.phases.find(p => p.phaseNumber === phaseNum - 1);
    if (!prevPhase) return true;
    const taskStat = getTaskStatus(prevPhase.task.id);
    return taskStat.status === 'PASSED';
  };

  const calculateSkillProgress = (skill: Skill) => {
    let totalTopics = 0;
    let completedTopicsScore = 0;
    let passedPhases = 0;

    skill.phases.forEach(phase => {
      totalTopics += phase.topics.length;
      phase.topics.forEach(t => {
        const key = getTopicKey(skill.id, phase.phaseNumber, t);
        const stat = getTopicStatus(key);
        if (stat.studied) completedTopicsScore += 0.5;
        if (stat.practiced) completedTopicsScore += 0.5;
      });

      const taskStat = getTaskStatus(phase.task.id);
      if (taskStat.status === 'PASSED') {
        passedPhases++;
      }
    });

    const topicRatio = totalTopics > 0 ? completedTopicsScore / totalTopics : 0;
    const phaseRatio = skill.phaseCount > 0 ? passedPhases / skill.phaseCount : 0;
    
    // Weighted 50% topics + 50% phase tasks passed
    const percentage = Math.round((topicRatio * 0.5 + phaseRatio * 0.5) * 100);
    const isCompleted = passedPhases === skill.phaseCount && percentage >= 95;

    return { percentage, isCompleted, passedPhases };
  };

  const calculateOverallMNCReadiness = () => {
    // Technical Skills Progress
    let techSum = 0;
    technicalSkills.forEach(s => {
      techSum += calculateSkillProgress(s).percentage;
    });
    const technical = technicalSkills.length > 0 ? Math.round(techSum / technicalSkills.length) : 0;

    // High Value Skills Progress
    let hvSum = 0;
    highValueSkills.forEach(s => {
      hvSum += calculateSkillProgress(s).percentage;
    });
    const highValue = highValueSkills.length > 0 ? Math.round(hvSum / highValueSkills.length) : 0;

    // English Fluency Progress
    let engTaskPassed = 0;
    englishPhases.forEach(p => {
      if (getTaskStatus(p.task.id).status === 'PASSED') engTaskPassed++;
    });
    const hasAssessedEnglish =
      state.englishMetrics.speakingConfidence > 0 ||
      state.englishMetrics.fluency > 0 ||
      state.englishMetrics.clarity > 0 ||
      state.englishMetrics.vocabulary > 0 ||
      state.englishMetrics.conversationAbility > 0 ||
      state.englishMetrics.interviewCommunication > 0;

    const engMetricsAvg = hasAssessedEnglish
      ? Math.round(
          (state.englishMetrics.speakingConfidence +
            state.englishMetrics.fluency +
            state.englishMetrics.clarity +
            (100 - state.englishMetrics.hesitation) +
            state.englishMetrics.vocabulary +
            state.englishMetrics.conversationAbility) / 6
        )
      : 0;
    const english = Math.round((engMetricsAvg * 0.6) + ((engTaskPassed / 3) * 40));

    // Projects Mastery Progress
    let projPassed = 0;
    projectTracks.forEach(p => {
      if (getTaskStatus(p.masterTask.id).status === 'PASSED') projPassed++;
    });
    const projects = Math.round((projPassed / projectTracks.length) * 100);

    // Coding Practice Progress
    let solvedCount = 0;
    codingProblems.forEach(p => {
      if (state.codingAttempts[p.id]?.solved) solvedCount++;
    });
    const coding = codingProblems.length > 0 ? Math.round((solvedCount / codingProblems.length) * 100) : 0;

    // Interview Readiness Progress
    const mockCount = state.mockResults.length;
    const avgMockScore = mockCount > 0 
      ? Math.round(state.mockResults.reduce((acc, curr) => acc + curr.score, 0) / mockCount)
      : 0;
    const interview = Math.round(avgMockScore);

    // Overall MNC Readiness (Weighted)
    // 30% Tech + 20% High-Value + 15% English + 15% Projects + 10% Coding + 10% Mock Interview
    const overall = Math.round(
      technical * 0.30 +
      highValue * 0.20 +
      english * 0.15 +
      projects * 0.15 +
      coding * 0.10 +
      interview * 0.10
    );

    return { overall, technical, highValue, english, projects, coding, interview };
  };

  const getTodaysMissions = () => {
    const missions: { title: string; subtitle: string; actionText: string; section: string; targetId: string }[] = [];

    // Check technical skills in order
    for (const skill of technicalSkills) {
      for (const phase of skill.phases) {
        if (!isPhaseUnlocked(skill, phase.phaseNumber)) continue;
        
        // Find incomplete topic
        const incompleteTopic = phase.topics.find(t => {
          const key = getTopicKey(skill.id, phase.phaseNumber, t);
          const stat = getTopicStatus(key);
          return !stat.studied || !stat.practiced;
        });

        if (incompleteTopic) {
          missions.push({
            title: `Study & Practice ${skill.name}`,
            subtitle: `Phase ${phase.phaseNumber}: ${incompleteTopic}`,
            actionText: 'Review Topic',
            section: 'technical',
            targetId: skill.id
          });
          break;
        }

        // Check if phase task is not passed
        const taskStat = getTaskStatus(phase.task.id);
        if (taskStat.status !== 'PASSED') {
          missions.push({
            title: `Complete ${skill.name} Phase ${phase.phaseNumber} Task`,
            subtitle: phase.task.title,
            actionText: 'Submit Task',
            section: 'technical',
            targetId: skill.id
          });
          break;
        }
      }
      if (missions.length >= 3) break;
    }

    // High value fallback mission if needed
    if (missions.length < 3) {
      for (const skill of highValueSkills) {
        for (const phase of skill.phases) {
          const taskStat = getTaskStatus(phase.task.id);
          if (taskStat.status !== 'PASSED') {
            missions.push({
              title: `Master ${skill.name} — Phase ${phase.phaseNumber}`,
              subtitle: phase.task.title,
              actionText: 'Execute Task',
              section: 'high-value',
              targetId: skill.id
            });
            break;
          }
        }
        if (missions.length >= 3) break;
      }
    }

    // English fallback mission
    if (missions.length < 3) {
      missions.push({
        title: 'Conduct 5-Min Spoken English HR Practice',
        subtitle: 'Practice "Tell me about yourself" and project pitch out loud.',
        actionText: 'Start Speaking',
        section: 'english',
        targetId: 'eng-p1'
      });
    }

    return missions.slice(0, 3);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        toggleTopicStudied,
        toggleTopicPracticed,
        updateTaskStatus,
        saveNote,
        deleteNote,
        updateEnglishMetrics,
        recordCodingAttempt,
        saveMockResult,
        updateSettings,
        exportProgress,
        importProgress,
        resetAllProgress,
        resetSkillProgress,
        getTopicKey,
        getTopicStatus,
        getTaskStatus,
        isPhaseUnlocked,
        calculateSkillProgress,
        calculateOverallMNCReadiness,
        getTodaysMissions
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return context;
};
