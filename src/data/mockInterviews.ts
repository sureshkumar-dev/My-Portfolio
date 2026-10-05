import type { MockInterviewConfig } from '../types';

export const mockInterviews: MockInterviewConfig[] = [
  {
    id: 'mock-js',
    title: 'JavaScript Master Mock Interview',
    description: 'Deep technical grilling on Execution Context, Closures, Event Loop, Promises, and ES6+ edge cases.',
    durationMinutes: 30,
    category: 'Technical',
    questionIds: ['q-tech-js-1', 'code-js-1']
  },
  {
    id: 'mock-react',
    title: 'React.js & Frontend Architecture Mock',
    description: 'Comprehensive assessment on React Fiber, Hooks internals, State management, and Performance optimization.',
    durationMinutes: 30,
    category: 'Technical',
    questionIds: ['q-tech-react-1', 'code-slide-1']
  },
  {
    id: 'mock-backend',
    title: 'Node.js & Express Backend Architecture Mock',
    description: 'Grilling on Event Loop, Cluster vs Worker Threads, Streams, Middleware, and Security.',
    durationMinutes: 45,
    category: 'Technical',
    questionIds: ['q-tech-node-1', 'code-js-1']
  },
  {
    id: 'mock-db',
    title: 'SQL, MongoDB & Database Systems Mock',
    description: 'Assessment on ER modeling, ACID, Indexes, Aggregation, Transactions, and CAP Theorem.',
    durationMinutes: 35,
    category: 'CS',
    questionIds: ['q-cs-dbms-1', 'code-sql-1']
  },
  {
    id: 'mock-fullstack',
    title: 'Full Stack Developer Comprehensive Mock',
    description: 'End-to-end MERN stack evaluation combining frontend, backend, database, and API security questions.',
    durationMinutes: 60,
    category: 'Technical',
    questionIds: ['q-tech-js-1', 'q-tech-react-1', 'q-tech-node-1', 'code-arr-1']
  },
  {
    id: 'mock-dsa',
    title: 'DSA & Algorithmic Problem Solving Round',
    description: 'Timed algorithm problem solving covering arrays, pointers, trees, heaps, and dynamic programming.',
    durationMinutes: 45,
    category: 'CS',
    questionIds: ['q-cs-dsa-1', 'code-arr-2', 'code-dp-1']
  },
  {
    id: 'mock-resume',
    title: 'Resume Technical Verification & Grilling',
    description: 'Strict verification of skills, experience, and projects claimed on SURESHKUMAR P\'s resume.',
    durationMinutes: 30,
    category: 'Resume',
    questionIds: ['q-res-cartify-1']
  },
  {
    id: 'mock-project',
    title: 'Cartify & Portfolio Project Defense Grilling',
    description: 'In-depth architectural defense and cross-examination of Cartify, FarmGuard, and Exam Proctoring.',
    durationMinutes: 40,
    category: 'Resume',
    questionIds: ['q-res-cartify-1']
  },
  {
    id: 'mock-hr',
    title: 'HR Behavioral & Cultural Fit Mock',
    description: 'Assessment on HR questions, STAR behavioral scenarios, conflict resolution, and career alignment.',
    durationMinutes: 25,
    category: 'HR',
    questionIds: ['q-hr-star-1']
  },
  {
    id: 'mock-english',
    title: 'English Fluency & Communication Assessment',
    description: 'Spoken English evaluation measuring vocal confidence, fluency, clarity, hesitation, and vocabulary.',
    durationMinutes: 20,
    category: 'HR',
    questionIds: ['q-hr-star-1']
  },
  {
    id: 'mock-full-mnc',
    title: 'Full MNC GOD MODE Final Interview Simulation',
    description: 'Complete multi-round MNC interview simulation combining Technical, CS, System Design, Project Defense, and HR rounds.',
    durationMinutes: 90,
    category: 'Technical',
    questionIds: ['q-tech-js-1', 'q-tech-react-1', 'q-cs-dsa-1', 'q-cs-dbms-1', 'q-res-cartify-1', 'q-hr-star-1']
  }
];
