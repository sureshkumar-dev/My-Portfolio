export type SkillPriority = 'MASTER' | 'STRONG' | 'NORMAL';

export type TaskStatus = 
  | 'NOT_STARTED' 
  | 'IN_PROGRESS' 
  | 'TASK_READY' 
  | 'SUBMITTED' 
  | 'PASSED' 
  | 'RETRY';

export interface TopicStatus {
  studied: boolean;
  practiced: boolean;
  updatedAt?: string;
}

export interface PhaseTask {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  evaluationCriteria: string[];
  hints?: string[];
  starterCodeOrGuide?: string;
}

export interface Phase {
  id: string;
  phaseNumber: number;
  title: string;
  objective: string;
  topics: string[];
  practicalKnowledge: string[];
  interviewKnowledge: string[];
  task: PhaseTask;
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'high-value';
  priority: SkillPriority;
  phaseCount: number;
  description: string;
  phases: Phase[];
}

export interface SentenceFramework {
  context: string;
  pattern: string;
  example: string;
}

export interface HRInterviewAnswer {
  question: string;
  keyPoints: string[];
  sampleAnswer: string;
  tips: string;
}

export interface EnglishPhase {
  id: string;
  phaseNumber: number;
  title: string;
  objective: string;
  topics: string[];
  sentenceFrameworks: SentenceFramework[];
  hrInterviewAnswers: HRInterviewAnswer[];
  task: PhaseTask;
}

export interface ProjectTrack {
  id: string;
  title: string;
  type: 'project' | 'experience';
  companyOrContext: string;
  role: string;
  summary: string;
  problemStatement: string;
  purpose: string;
  features: string[];
  architecture: string;
  techStack: string[];
  techSelectionRationale: { tech: string; reason: string }[];
  dbDesign: string;
  apiFlow: string[];
  authAuthz: string;
  exactContribution: string[];
  challengesBugs: { challenge: string; solution: string }[];
  security: string[];
  performance: string[];
  deployment: string;
  tradeOffs: string[];
  futureImprovements: string[];
  pitch30s: string;
  pitch2m: string;
  pitch5m: string;
  interviewQuestions: { question: string; answer: string; crossQuestioning: string }[];
  masterTask: PhaseTask;
}

export interface CodingProblem {
  id: string;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  hint: string;
  optimalSolution: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export interface CodingAttempt {
  problemId: string;
  attempted: boolean;
  solved: boolean;
  timeSpentSeconds: number;
  attemptsCount: number;
  hintUsed: boolean;
  mistakesNotes: string;
  optimalUnderstood: boolean;
  reSolveRequired: boolean;
  lastAttemptedAt: string;
}

export interface InterviewQuestion {
  id: string;
  title: string;
  category: 'Technical' | 'CS' | 'Resume' | 'HR';
  subCategory: string;
  question: string;
  keyAnswerPoints: string[];
  detailedAnswer: string;
  codeSnippet?: string;
  commonMistakes?: string[];
}

export interface MockInterviewConfig {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  category: string;
  questionIds: string[];
}

export interface MockInterviewResult {
  id: string;
  mockId: string;
  mockTitle: string;
  date: string;
  score: number; // percentage
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  weakTopics: string[];
  recommendations: string[];
  readinessPercentage: number;
  userNotes?: string;
}

export interface EnglishFluencyMetrics {
  speakingConfidence: number; // 0 - 100
  fluency: number; // 0 - 100
  clarity: number; // 0 - 100
  hesitation: number; // 0 - 100 (lower is better or score out of 100)
  fillerWords: number; // 0 - 100
  vocabulary: number; // 0 - 100
  conversationAbility: number; // 0 - 100
  interviewCommunication: number; // 0 - 100
}

export interface UserNote {
  id: string; // target entity ID (e.g. topic ID or task ID)
  entityType: 'topic' | 'task' | 'coding' | 'question' | 'general';
  content: string;
  updatedAt: string;
}

export interface AppSettings {
  strictPhaseLocking: boolean; // default true
  darkTheme: boolean; // default true
  soundEffects: boolean;
}

export interface UserProfile {
  name: string;
  targetRole: string[];
  resumeSkills: { skillId: string; name: string; claimedInResume: boolean }[];
  experience: string[];
  projects: string[];
}

export interface AppState {
  version: number;
  userProfile: UserProfile;
  topicStatus: Record<string, TopicStatus>; // key: `${skillId}_p${phaseNum}_${topicName}`
  taskStatus: Record<string, { status: TaskStatus; submissionNotes?: string; evaluatedAt?: string }>; // key: taskId
  notes: Record<string, string>; // key: entityId
  englishMetrics: EnglishFluencyMetrics;
  codingAttempts: Record<string, CodingAttempt>; // key: problemId
  mockResults: MockInterviewResult[];
  settings: AppSettings;
  activeSkillId?: string;
  lastUpdated: string;
}
