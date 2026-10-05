import type { Skill } from '../types';

export const technicalSkills: Skill[] = [
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Core language mastery for MNC technical interviews and deep problem solving.',
    phases: [
      {
        id: 'js-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Fundamentals',
        objective: 'Master variables, data types, control flow, functions, scope, arrays, objects, and ES6+ features.',
        topics: [
          'Variables (var, let, const)',
          'Data types (Primitive vs Reference)',
          'Type conversion & Coercion',
          'Operators & Strict Equality (=== vs ==)',
          'Conditionals & Switch statements',
          'Loops (for, while, for...of, for...in)',
          'Function declarations vs expressions',
          'Arrow functions & Lexical scoping',
          'Parameters, arguments & default parameters',
          'Return values & pure functions',
          'Global scope, Function scope & Block scope',
          'Array fundamentals & Destructuring',
          'Object literals, Destructuring & Property Shorthand',
          'Spread operator & Rest parameters',
          'Template literals & Tagged templates',
          'Optional chaining (?.) & Nullish coalescing (??)',
          'Array methods (map, filter, reduce)',
          'Array methods (find, some, every, sort, forEach)',
          'Callbacks & Higher-Order Functions',
          'ES6+ fundamentals & Modern Syntax'
        ],
        practicalKnowledge: [
          'Manipulating deeply nested arrays and objects without mutation',
          'Writing custom implementations of map, filter, and reduce',
          'Avoiding global variable pollution and variable shadowing errors'
        ],
        interviewKnowledge: [
          'Difference between primitive (pass-by-value) and reference (pass-by-reference) types in memory',
          'Why var is function-scoped while let/const are block-scoped',
          'Implicit type coercion rules and edge cases (e.g. [] + {}, true + false)'
        ],
        task: {
          id: 'js-t1',
          title: 'Student Management System (Vanilla JS)',
          description: 'Build a comprehensive Student Management System in vanilla JavaScript utilizing arrays, objects, functions, HOFs, search, filter, sorting, CRUD operations, and strict validation.',
          requirements: [
            'Create data structure to hold student records (id, name, grade, courses, status)',
            'Implement CRUD operations: addStudent, updateStudent, deleteStudent, getStudentById',
            'Implement advanced filter methods (by grade range, active status, course enrolled)',
            'Implement sorting (by name alphabetically, by average grade descending)',
            'Write custom aggregate function using reduce to calculate class average grade',
            'Validate input fields strictly (throw custom descriptive errors for invalid data)'
          ],
          evaluationCriteria: [
            'No global state pollution',
            'Pure functions used where appropriate',
            'Immutability maintained during updates',
            'Edge cases handled (empty array, non-existent ID)'
          ],
          starterCodeOrGuide: `// Starter structure\nclass StudentSystem {\n  constructor() { this.students = []; }\n  addStudent(student) { /* validation & push */ }\n  filterByGrade(min, max) { return this.students.filter(/* ... */); }\n  getClassAverage() { return this.students.reduce(/* ... */); }\n}`
        }
      },
      {
        id: 'js-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Strong Practical',
        objective: 'Master Closures, this binding, Execution Context, Promises, Async/Await, DOM manipulation, and Browser Event Loop.',
        topics: [
          'Closures & Lexical Scope retention',
          'this keyword binding rules (Implicit, Explicit, Default, New)',
          'call, apply, and bind methods',
          'Execution Context creation & execution phases',
          'Hoisting & Temporal Dead Zone (TDZ)',
          'Promises states & Promise chaining',
          'Async / await syntax & try/catch blocks',
          'API fetching with fetch() & HTTP response handling',
          'JSON parsing & stringification edge cases',
          'ES Modules (import / export)',
          'DOM Tree navigation & Manipulation',
          'Event Listeners & Event lifecycle (Capturing vs Bubbling)',
          'Event Delegation pattern',
          'localStorage & sessionStorage APIs',
          'Cookies basics & Security flags (HttpOnly, Secure, SameSite)',
          'Debouncing implementation',
          'Throttling implementation',
          'Event Loop components (Call Stack, Web APIs, Task Queues)',
          'Microtask Queue vs Macrotask (Callback) Queue',
          'Browser JavaScript runtime execution behavior'
        ],
        practicalKnowledge: [
          'Implementing robust debounced search inputs with cancellation',
          'Handling complex async workflows using Promise.all, Promise.allSettled, and Promise.race',
          'Managing client-side state persistence in localStorage with expiration logic'
        ],
        interviewKnowledge: [
          'Explain Temporal Dead Zone with precise line-by-line code execution breakdown',
          'Explain how Closures store variables in Heap memory even after outer function execution terminates',
          'Order of output for complex async snippets involving setTimeout, Promise.resolve, process.nextTick, and async functions'
        ],
        task: {
          id: 'js-t2',
          title: 'Mini E-Commerce Frontend Logic & Cart Engine',
          description: 'Build a production-grade vanilla JavaScript mini e-commerce logic module featuring product search, filtering, cart management, quantity calculation, total cost calculation, async API simulation, localStorage persistence, and debounced search.',
          requirements: [
            'Simulate asynchronous fetch API call returning product catalog with delay',
            'Implement debounced search filter (300ms delay) for instantaneous responsiveness',
            'Implement cart state manager using Closures for encapsulation',
            'Implement product add, remove, update quantity, and clear cart operations',
            'Persist cart state in localStorage and reload seamlessly on page refresh',
            'Handle out-of-stock and maximum quantity limit edge cases gracefully'
          ],
          evaluationCriteria: [
            'Debounce function implemented manually without external libraries',
            'Cart calculations (subtotal, tax, grand total) are accurate to 2 decimal places',
            'Event delegation utilized for product item clicks'
          ]
        }
      },
      {
        id: 'js-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Interview',
        objective: 'Deep execution context, Prototype Chain, Memory Management, GC, Iterators, Functional Programming, Security (XSS/CSRF), and MNC Edge Cases.',
        topics: [
          'Deep Execution Context & Environment Records',
          'Lexical Environment & VariableEnvironment structures',
          'Deep Closures & Memory leak scenarios',
          'Prototype Chain & [[Prototype]] internal slots',
          'Prototypal Inheritance vs Class-based inheritance',
          'Classes, private fields (#), static members & super',
          'this behavior in arrow functions vs traditional functions in edge cases',
          'Event Loop internals (Microtask draining, Rendering steps)',
          'Promise internals & Custom Promise implementation from scratch',
          'Async Generators & Async Iterators',
          'Memory management (Mark-and-Sweep garbage collection)',
          'Shallow Copy vs Deep Copy (structuredClone, JSON fallback, custom clone)',
          'Immutability & Object.freeze / Object.seal',
          'Map, Set, WeakMap & WeakSet use cases and memory dynamics',
          'Iterators & Symbol.iterator protocol',
          'Generators (function*) & yield expressions',
          'Functional Programming (Currying, Composition, Monads basics)',
          'Performance profiling & Memory Leak debugging',
          'Debounce & Throttle internals with immediate flag',
          'Browser Security: Cross-Site Scripting (XSS) prevention',
          'Browser Security: Cross-Site Request Forgery (CSRF) mitigation',
          'AbortController & Canceling fetch requests',
          'Custom Error classes & Error boundaries',
          'Advanced MNC interview edge cases & trick output questions'
        ],
        practicalKnowledge: [
          'Writing a custom Promise polyfill matching Promises/A+ spec',
          'Preventing memory leaks caused by uncleared event listeners or detached DOM nodes',
          'Implementing deep object clone handling Circular References'
        ],
        interviewKnowledge: [
          'Difference between WeakMap and Map regarding Garbage Collection',
          'How V8 optimizes JavaScript execution (Ignition interpreter + TurboFan JIT compiler)',
          'Explaining Prototype chain lookup mechanism step-by-step'
        ],
        task: {
          id: 'js-t3',
          title: 'Custom Promise & Event Emitter Core Engine Defense',
          description: 'Build a production-style vanilla JavaScript core library (Custom Promise implementation + Custom EventEmitter with memory leak detection) and conduct a deep self-evaluation defense answering MNC technical questions.',
          requirements: [
            'Write custom MyPromise class supporting then, catch, finally, Promise.resolve, and Promise.all',
            'Write custom EventEmitter class with on, off, once, and emit methods',
            'Add maxListeners warning threshold to EventEmitter to detect potential memory leaks',
            'Implement deepClone utility function capable of cloning nested Objects, Arrays, Dates, and handling circular references',
            'Document answers to 10 MNC deep JavaScript interview edge-case questions'
          ],
          evaluationCriteria: [
            'MyPromise correctly handles asynchronous resolution and rejection',
            'EventEmitter listener removal works reliably',
            'DeepClone handles self-referential objects without infinite recursion stack overflow'
          ]
        }
      }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Strong static typing, generics, type manipulation, and production TypeScript patterns.',
    phases: [
      {
        id: 'ts-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Fundamentals',
        objective: 'Master primitive types, interfaces, type aliases, unions, enums, functions, and tsconfig basics.',
        topics: [
          'Basic Types (string, number, boolean, null, undefined, symbol)',
          'Arrays & Tuples',
          'Any, Unknown, and Never types',
          'Type Inference & Explicit Type Annotations',
          'Interfaces vs Type Aliases',
          'Union & Intersection Types',
          'Literal Types & Type Narrowing',
          'Enums (Numeric vs String enums vs Const enums)',
          'Function Type signatures & Optional/Default parameters',
          'Void and Never return types',
          'Type Assertions (as keyword) & Non-null assertion (!)',
          'tsconfig.json essential options (target, module, strict, outDir)'
        ],
        practicalKnowledge: [
          'Configuring strict TypeScript projects',
          'Writing typed API response interfaces',
          'Eliminating all instances of any type'
        ],
        interviewKnowledge: [
          'Difference between interface and type alias',
          'Why unknown is type-safe compared to any',
          'How TypeScript types are completely erased at compile time (type erasure)'
        ],
        task: {
          id: 'ts-t1',
          title: 'Typed E-Commerce Domain Model & Validation Engine',
          description: 'Design and implement a strictly typed domain model for an E-Commerce backend using interfaces, type aliases, discriminated unions, and type guards.',
          requirements: [
            'Define types for User, Product, Order, PaymentMethod, and CartItem',
            'Use Discriminated Unions for OrderStatus (Pending, Processing, Shipped, Delivered, Cancelled)',
            'Write Type Guard functions (isCreditCard, isPaypal, isShippedOrder)',
            'Create Utility function that calculates order totals with strict type safety',
            'Zero use of `any` type (strict compiler flags enabled)'
          ],
          evaluationCriteria: [
            'TypeScript compiles cleanly with no implicit any',
            'Discriminated unions handled exhaustively in switch statements'
          ]
        }
      },
      {
        id: 'ts-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Advanced Types & Generics',
        objective: 'Master Generics, Utility Types, Conditional Types, keyof, infer, and Type Manipulation.',
        topics: [
          'Generic Functions, Interfaces & Classes',
          'Generic Constraints (extends keyword)',
          'Built-in Utility Types (Partial, Required, Readonly, Record, Pick, Omit)',
          'Built-in Utility Types (Exclude, Extract, NonNullable, ReturnType, Parameters)',
          'keyof and typeof operators',
          'Indexed Access Types & Mapped Types',
          'Conditional Types (T extends U ? X : Y)',
          'infer keyword in conditional types',
          'Template Literal Types',
          'Recursive Type definitions'
        ],
        practicalKnowledge: [
          'Building typed API wrapper functions using generics',
          'Creating immutable state update helpers using Readonly and Mapped Types'
        ],
        interviewKnowledge: [
          'How ReturnType<T> utility type is implemented under the hood using infer',
          'Covariance vs Contravariance in generic parameters'
        ],
        task: {
          id: 'ts-t2',
          title: 'Generic Type-Safe Repository Pattern & Query Builder',
          description: 'Build a generic, reusable, type-safe Data Access Repository pattern with advanced query criteria filtering.',
          requirements: [
            'Create interface BaseEntity with id, createdAt, updatedAt',
            'Implement generic class Repository<T extends BaseEntity>',
            'Implement findWhere method accepting Partial<T> or query conditions',
            'Implement custom Utility type PickOptional<T> and DeepReadonly<T>',
            'Write type-safe update method that prevents modifying read-only keys like id'
          ],
          evaluationCriteria: [
            'Generic repository works seamlessly with any entity interface',
            'Compiler enforces entity constraint'
          ]
        }
      },
      {
        id: 'ts-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Compiler & Architecture',
        objective: 'Master TS Compiler API, Declaration files (.d.ts), Decorators, Ambient Namespaces, and Enterprise Patterns.',
        topics: [
          'Custom Declaration Files (.d.ts) & Module Augmentation',
          'Ambient Namespaces & Third-party library typings',
          'Experimental Decorators (Class, Method, Property, Parameter)',
          'ECMAScript Stage 3 Decorators syntax',
          'Compiler Flags deep dive (noImplicitAny, strictNullChecks, exactOptionalPropertyTypes, skipLibCheck)',
          'Monorepo typings & Project References (composite: true)',
          'Performance optimization for large TypeScript codebases',
          'MNC TypeScript architectural interview questions'
        ],
        practicalKnowledge: [
          'Writing .d.ts typings for un-typed legacy JavaScript NPM packages',
          'Creating custom logging decorators for class methods'
        ],
        interviewKnowledge: [
          'How TypeScript project references accelerate incremental builds',
          'How exactOptionalPropertyTypes differs from standard optional properties'
        ],
        task: {
          id: 'ts-t3',
          title: 'Type-Safe Event Bus & API Schema Generator',
          description: 'Build an Enterprise Type-Safe Event Bus system that enforces strictly typed payload contracts across microservices, complete with custom declaration files.',
          requirements: [
            'Define global event registry interface mapping EventName to PayloadType',
            'Implement EventBus class with emit and subscribe methods bounded strictly to registry keys',
            'Create method decorator @LogExecutionTime for monitoring event handling performance',
            'Provide declaration file module augmentation example for extending global app config'
          ],
          evaluationCriteria: [
            'Attempting to emit an un-registered event name causes build-time TypeScript error',
            'Payload auto-completion works precisely per event type'
          ]
        }
      }
    ]
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Component architecture, Hooks internals, Fiber engine, rendering optimization, and state patterns.',
    phases: [
      {
        id: 'react-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Core Fundamentals & Hooks',
        objective: 'Master JSX, Component lifecycle, props, state, useState, useEffect, useRef, and basic context.',
        topics: [
          'JSX compilation & React Elements vs DOM nodes',
          'Functional components & Props validation/typing',
          'State management with useState hook',
          'Side effects with useEffect hook & Cleanup functions',
          'Dependencies array rules & ESLint hooks rules',
          'DOM references with useRef & Storing mutable values',
          'Prop Drilling vs React Context API (createContext, useContext)',
          'Controlled vs Uncontrolled Form components',
          'Conditional Rendering patterns & List Keys rationale',
          'Handling User Events & Synthetic Events'
        ],
        practicalKnowledge: [
          'Building reusable form inputs with validation state',
          'Fetching data cleanly inside useEffect with cleanup/abort logic',
          'Preventing stale closures in useEffect callbacks'
        ],
        interviewKnowledge: [
          'Why keys are required in dynamic lists and why index should be avoided',
          'How Virtual DOM diffing algorithm (Reconciliation) works at a high level'
        ],
        task: {
          id: 'react-t1',
          title: 'Interactive Multi-Step Form Builder & Dynamic Dashboard',
          description: 'Build a multi-step user onboarding form builder with dynamic validation, progress tracking, state persistence, and clean component architecture.',
          requirements: [
            'Step 1: Personal Info, Step 2: Technical Stack, Step 3: Preferences, Step 4: Summary',
            'Implement controlled form inputs with custom hook useFormValidation',
            'Use Context API to share form state across multi-step wizard',
            'Store draft data in localStorage and restore on refresh',
            'Validate inputs per step before enabling Next Step action'
          ],
          evaluationCriteria: [
            'Zero prop drilling beyond 2 levels',
            'Clean unmount cleanup when navigating between steps'
          ]
        }
      },
      {
        id: 'react-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Advanced Hooks, State & Performance',
        objective: 'Master useReducer, useMemo, useCallback, Custom Hooks, React.memo, and re-render optimization.',
        topics: [
          'Complex state logic with useReducer hook',
          'Memoization with useMemo & useCallback hooks',
          'Component memoization with React.memo & ArePropsEqual comparator',
          'Custom Hooks design patterns & Reusability',
          'useImperativeHandle & forwardRef usage',
          'useLayoutEffect vs useEffect timing differences',
          'State collocation & Lifting state up principles',
          'Performance profiling with React DevTools Profiler',
          'Code splitting with React.lazy & Suspense'
        ],
        practicalKnowledge: [
          'Writing custom hooks like useDebounce, useLocalStorage, useFetch, useOnClickOutside',
          'Optimizing heavy table renders avoiding re-rendering unmodified rows'
        ],
        interviewKnowledge: [
          'When NOT to use useMemo/useCallback (the memory overhead trade-off)',
          'Differences between useLayoutEffect (synchronous post-DOM mut) and useEffect (asynchronous post-paint)'
        ],
        task: {
          id: 'react-t2',
          title: 'High-Performance Data Table with Custom Filtering & Virtualization Concept',
          description: 'Build a high-performance interactive data table component rendered with React.memo, custom hooks, and useReducer state engine.',
          requirements: [
            'Render 500+ records dataset efficiently',
            'Use useReducer for managing sorting, pagination, and multi-column filtering',
            'Wrap row items in React.memo and memoize callback handlers using useCallback',
            'Create custom hooks useTableData and usePagination',
            'Include search input with useDebounce hook'
          ],
          evaluationCriteria: [
            'Re-renders limited strictly to updated rows during state changes',
            'Smooth 60fps search and filter experience'
          ]
        }
      },
      {
        id: 'react-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master Architecture & Fiber Engine',
        objective: 'Master React Fiber, Concurrent Mode (useTransition, useDeferredValue), Error Boundaries, and Design Systems.',
        topics: [
          'React Fiber Architecture (WorkLoop, Fiber Nodes, Reconciliation phase vs Commit phase)',
          'Concurrent React features (useTransition hook for non-blocking state updates)',
          'useDeferredValue for deferred search rendering',
          'Error Boundaries implementation (componentDidCatch, getDerivedStateFromError)',
          'Portals (createPortal) for modals and tooltips',
          'Higher-Order Components (HOC) vs Render Props vs Custom Hooks',
          'Strict Mode double-rendering rationale',
          'Compound Component Pattern (e.g. Accordion, Select dropdown)',
          'Micro-frontend architecture concepts in React',
          'MNC React architecture & System Design interview scenarios'
        ],
        practicalKnowledge: [
          'Building production-ready Error Boundary fallback UI components',
          'Implementing non-blocking UI responsive search inputs using useTransition'
        ],
        interviewKnowledge: [
          'Explain Fiber node structure (child, sibling, return pointers)',
          'How React 18 automatic batching works across async boundaries'
        ],
        task: {
          id: 'react-t3',
          title: 'Enterprise Dashboard Design System & Fiber Performance Defense',
          description: 'Build an Enterprise React Component Library featuring Compound Components (Modal, Tabs, Accordion), Error Boundary, and useTransition search filter.',
          requirements: [
            'Build Compound Component Tabs (Tabs, TabList, Tab, TabPanels)',
            'Build custom ErrorBoundary component with retry state handling',
            'Implement search filter over 5000+ items using useTransition to ensure smooth UI responsiveness',
            'Write architectural breakdown document explaining React Fiber reconciliation steps'
          ],
          evaluationCriteria: [
            'Compound components allow clean compositional syntax',
            'Error boundary catches rendering errors without tearing down the entire app DOM'
          ]
        }
      }
    ]
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Asynchronous event-driven architecture, Event Loop, Streams, Buffers, Worker Threads, and C++ bindings.',
    phases: [
      {
        id: 'node-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Core Architecture & Modules',
        objective: 'Master Node.js runtime, CommonJS vs ESM, Process object, EventEmitter, and File System API.',
        topics: [
          'Node.js Runtime architecture (V8 + libuv)',
          'CommonJS (require/module.exports) vs ES Modules (import/export)',
          'global object & process object (env, argv, cwd, nextTick)',
          'EventEmitter class & Custom event listeners',
          'File System (fs) module (sync vs async vs promises API)',
          'Path module & cross-platform path resolution',
          'Buffer class & Binary data manipulation',
          'Error handling in Node.js (uncaughtException, unhandledRejection)',
          'Environment variables management (dotenv)'
        ],
        practicalKnowledge: [
          'Reading and writing files asynchronously without blocking the process',
          'Creating custom EventEmitter instances for background task communication'
        ],
        interviewKnowledge: [
          'What makes Node.js single-threaded yet highly concurrent',
          'Difference between process.nextTick() and setImmediate()'
        ],
        task: {
          id: 'node-t1',
          title: 'CLI File Processing & Event-Driven Audit Tool',
          description: 'Build a Node.js Command-Line Interface tool that scans log files, emits structured events, and outputs formatted statistics.',
          requirements: [
            'Accept command line arguments via process.argv (file path, flag options)',
            'Read target log file asynchronously using fs.promises',
            'Emit custom audit events (LOG_FOUND, ERROR_COUNTED, WARNING_ALERT) via EventEmitter',
            'Calculate throughput and log type distribution',
            'Handle file not found and permission denied errors gracefully'
          ],
          evaluationCriteria: [
            'Zero synchronous blocking fs calls used',
            'Clean error output with appropriate process exit codes'
          ]
        }
      },
      {
        id: 'node-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Streams, Async & System Operations',
        objective: 'Master Node.js Streams (Readable, Writable, Transform), Piping, Backpressure, and Child Processes.',
        topics: [
          'Stream types (Readable, Writable, Duplex, Transform)',
          'Stream piping (pipe() & stream.pipeline())',
          'Backpressure concept & stream drain event',
          'Buffer allocation (Buffer.from, Buffer.alloc, Buffer.allocUnsafe)',
          'Child Processes (exec, execFile, spawn, fork)',
          'Inter-Process Communication (IPC) in fork()',
          'HTTP module & native HTTP server creation',
          'Crypto module (hashing, hmac, symmetric encryption)'
        ],
        practicalKnowledge: [
          'Processing multi-gigabyte log files line-by-line using Transform Streams without running out of memory',
          'Offloading CPU-intensive tasks using child_process.fork()'
        ],
        interviewKnowledge: [
          'What is Backpressure in streams and how does Node.js manage memory during fast producer / slow consumer pipelines',
          'Difference between spawn() and exec()'
        ],
        task: {
          id: 'node-t2',
          title: 'Streaming Log Processor & File Encryption Pipeline',
          description: 'Build a Node.js streaming pipeline that reads a large file, transforms text (masks sensitive PII data), encrypts content using AES-256-GCM, and writes to output stream.',
          requirements: [
            'Create custom Transform stream to detect and mask email/phone PII data',
            'Pipe stream through crypto.createCipheriv encryption stream',
            'Use stream.pipeline with proper error callback handling',
            'Demonstrate low memory footprint (<50MB RAM) while processing a large file'
          ],
          evaluationCriteria: [
            'Stream backpressure properly respected',
            'Memory usage stays flat regardless of file size'
          ]
        }
      },
      {
        id: 'node-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Libuv & Performance Tuning',
        objective: 'Master Libuv Event Loop phases, Thread Pool (UV_THREADPOOL_SIZE), Worker Threads, C++ Addons, and Heap Profiling.',
        topics: [
          'Libuv Event Loop 6 phases (Timers, Pending I/O, Idle/Prepare, Poll, Check, Close callbacks)',
          'Libuv Thread Pool & UV_THREADPOOL_SIZE default vs configuration',
          'Which operations use Thread Pool vs OS Async I/O (epoll/kqueue)',
          'Worker Threads module (worker_threads, SharedArrayBuffer, MessageChannel)',
          'Cluster module & Zero-downtime reload',
          'Memory leak diagnosis using V8 heap dumps & Chrome DevTools inspector',
          'Node.js C++ Addons / N-API introduction',
          'MNC Node.js performance tuning and architecture interview questions'
        ],
        practicalKnowledge: [
          'Configuring Worker Threads to solve CPU-bound tasks (e.g. heavy image processing / matrix calculations) without blocking HTTP requests',
          'Analyzing memory leaks using node --inspect and heap snapshot diffing'
        ],
        interviewKnowledge: [
          'Step-by-step breakdown of how Libuv handles fs.readFile vs crypto.pbkdf2 vs net.createServer',
          'How Worker Threads differ from Child Processes'
        ],
        task: {
          id: 'node-t3',
          title: 'Multithreaded CPU Task Pool & Cluster Server Architecture',
          description: 'Build a production-ready multithreaded Node.js server architecture using Worker Threads pool for heavy computation and Cluster for HTTP request load balancing.',
          requirements: [
            'Implement worker thread pool manager with task queueing',
            'Expose HTTP API endpoint that delegates heavy prime number calculation to worker thread',
            'Use Cluster module to fork workers matching CPU core count',
            'Include health check endpoint and graceful shutdown signal handlers (SIGINT, SIGTERM)'
          ],
          evaluationCriteria: [
            'Main HTTP event loop remains responsive (<10ms response time) during heavy CPU tasks',
            'Graceful shutdown closes active connections before process termination'
          ]
        }
      }
    ]
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'REST API routing, middleware pipeline, error handling, input validation, security headers, and production scaling.',
    phases: [
      {
        id: 'express-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Routing, Middleware & Request Handling',
        objective: 'Master Express app setup, Router, Request/Response objects, custom middleware, and static serving.',
        topics: [
          'Express application initialization & app.listen',
          'Routing methods (GET, POST, PUT, PATCH, DELETE)',
          'Req object properties (params, query, body, headers, ip)',
          'Res object methods (send, json, status, set, redirect, download)',
          'Application-level vs Router-level middleware',
          'Built-in middleware (express.json, express.urlencoded, express.static)',
          'Third-party essential middleware (cors, morgan)',
          'Modular Express Router structure'
        ],
        practicalKnowledge: [
          'Structuring Express routers cleanly per resource domain',
          'Writing custom request logging and request duration tracking middleware'
        ],
        interviewKnowledge: [
          'How Express middleware stack execution order works under the hood (the next() function call chain)',
          'Difference between app.use() and app.all()'
        ],
        task: {
          id: 'express-t1',
          title: 'Modular User Management REST API with Express Router',
          description: 'Build a modular Express.js REST API service for User Management with custom logging middleware, validation, and CRUD routing.',
          requirements: [
            'Organize code into controllers, routes, and middleware folders',
            'Implement custom request logger middleware displaying method, URL, status code, and execution duration in ms',
            'Implement CRUD endpoints: POST /api/users, GET /api/users, GET /api/users/:id, PUT /api/users/:id, DELETE /api/users/:id',
            'Handle 404 Route Not Found gracefully'
          ],
          evaluationCriteria: [
            'Clean route controller separation',
            'Proper HTTP status codes returned (200, 201, 400, 404)'
          ]
        }
      },
      {
        id: 'express-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Error Handling, Validation & Security',
        objective: 'Master Global Error Middleware, Joi/Zod schema validation, express-validator, rate-limiting, and Helmet security.',
        topics: [
          'Global Error Handling middleware (4 parameters: err, req, res, next)',
          'Custom Operational Error class hierarchy (AppError, BadRequestError, NotFoundError)',
          'Input validation using Zod / express-validator',
          'Security headers with Helmet middleware',
          'Rate limiting with express-rate-limit',
          'CORS configuration (origin, credentials, methods)',
          'Response compression with compression middleware',
          'Async error wrapper pattern (express-async-errors or async handler wrapper)'
        ],
        practicalKnowledge: [
          'Catching uncaught async errors automatically without boilerplate try/catch blocks',
          'Enforcing strict payload validation schemas on incoming POST/PUT requests'
        ],
        interviewKnowledge: [
          'Why Express requires 4 parameters for error-handling middleware',
          'How Helmet headers (HSTS, Content-Security-Policy, X-Frame-Options) protect web apps'
        ],
        task: {
          id: 'express-t2',
          title: 'Production-Grade API Shell with Security & Schema Validation',
          description: 'Build an Enterprise-grade Express API boilerplate complete with Zod request validation, custom AppError handling, Helmet security headers, and IP rate limiting.',
          requirements: [
            'Create AppError class extending Error with statusCode, status, and isOperational flags',
            'Write Zod validation middleware wrapper validateSchema(schema)',
            'Set up rate limiter (100 requests per 15 mins per IP)',
            'Include global error handling middleware returning standardized JSON error payloads'
          ],
          evaluationCriteria: [
            'Validation errors return 400 with detailed field-level issue lists',
            'Operational vs Programming errors distinguished cleanly'
          ]
        }
      },
      {
        id: 'express-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Microservices & Production Tuning',
        objective: 'Master Express performance tuning, OpenAPI/Swagger docs, microservice gateway patterns, and clustering.',
        topics: [
          'OpenAPI 3.0 / Swagger API Documentation integration',
          'API Versioning strategies (URI path vs Header vs Query param)',
          'Graceful Shutdown handling in Express apps',
          'Express API Gateway & Proxying (express-http-proxy)',
          'Memory leak detection in Express middleware pipelines',
          'High-throughput optimization (disabling x-powered-by, benchmarking with autocannon)',
          'MNC Express production architecture interview scenarios'
        ],
        practicalKnowledge: [
          'Building automated Swagger UI API documentation from JSDoc comments',
          'Implementing zero-downtime deployments with PM2 / Docker health checks'
        ],
        interviewKnowledge: [
          'How Express compares to Fastify / NestJS in terms of request processing overhead',
          'Designing idempotent API endpoints for payment and order processing'
        ],
        task: {
          id: 'express-t3',
          title: 'Enterprise API Gateway & Microservice Proxy Engine',
          description: 'Build an Enterprise Express.js API Gateway that handles request routing, auth token forwarding, rate limiting, and automated Swagger documentation.',
          requirements: [
            'Gateway routes requests /api/v1/users and /api/v1/orders to upstream service stubs',
            'Integrate Swagger UI at /api-docs endpoint',
            'Implement request correlation ID middleware (X-Correlation-ID) attached to all logs',
            'Simulate circuit breaker or fallback response when upstream microservice fails'
          ],
          evaluationCriteria: [
            'Correlation IDs propagated across service requests',
            'Graceful fallback returned when upstream service times out'
          ]
        }
      }
    ]
  },
  {
    id: 'sql',
    name: 'SQL / MySQL',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Relational database design, DDL/DML, Joins, Indexing, Transactions, ACID, and Query Optimization.',
    phases: [
      {
        id: 'sql-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Fundamentals & Queries',
        objective: 'Master DDL, DML, WHERE filtering, Joins (INNER, LEFT, RIGHT, FULL), Aggregations, and GROUP BY.',
        topics: [
          'Relational database concepts & Table schemas',
          'Data Types (VARCHAR, INT, DATETIME, DECIMAL, BOOLEAN, ENUM)',
          'DDL statements (CREATE TABLE, ALTER TABLE, DROP TABLE, TRUNCATE)',
          'DML statements (INSERT, UPDATE, DELETE)',
          'SELECT statements & Filtering (WHERE, LIKE, IN, BETWEEN, IS NULL)',
          'Ordering & Pagination (ORDER BY, LIMIT, OFFSET)',
          'Join Types (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN)',
          'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)',
          'GROUP BY clause & HAVING filtering',
          'Primary Keys, Foreign Keys & Referential Integrity (CASCADE, SET NULL)'
        ],
        practicalKnowledge: [
          'Designing normalized relational schemas (1NF, 2NF, 3NF)',
          'Writing complex multi-table SQL joins'
        ],
        interviewKnowledge: [
          'Difference between WHERE and HAVING clauses',
          'Difference between DELETE, TRUNCATE, and DROP'
        ],
        task: {
          id: 'sql-t1',
          title: 'E-Commerce Database Schema & Analytical Queries',
          description: 'Design a relational schema for an E-Commerce system (Users, Products, Orders, OrderItems) and write comprehensive analytical SQL queries.',
          requirements: [
            'Write DDL script creating normalized tables with Primary/Foreign keys',
            'Insert seed data for users, products, orders, and order_items',
            'Write SQL query: Total revenue generated per product category',
            'Write SQL query: Top 5 customers with highest total purchase amount',
            'Write SQL query: Find users who placed orders in the last 30 days but never purchased product X'
          ],
          evaluationCriteria: [
            'Foreign key constraints explicitly defined with ON DELETE CASCADE / RESTRICT',
            'Queries use efficient JOIN and GROUP BY syntax'
          ]
        }
      },
      {
        id: 'sql-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Indexing, Transactions & ACID',
        objective: 'Master B-Tree Indexes, Composite Indexes, Transactions (START TRANSACTION, COMMIT, ROLLBACK), ACID properties, and Subqueries.',
        topics: [
          'Index types (B-Tree, Hash, Clustered vs Non-Clustered index)',
          'Composite Indexes & Leftmost Prefix Rule',
          'Transactions & ACID Properties (Atomicity, Consistency, Isolation, Durability)',
          'Transaction Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable)',
          'Concurrency Anomalies (Dirty Read, Non-Repeatable Read, Phantom Read)',
          'Database Locks (Shared locks vs Exclusive locks, Row locks vs Table locks)',
          'Subqueries (Scalar, Column, Correlated subqueries)',
          'Common Table Expressions (CTEs) & WITH clause',
          'Window Functions (ROW_NUMBER, RANK, DENSE_RANK, NTILE, LEAD, LAG)'
        ],
        practicalKnowledge: [
          'Creating strategic composite indexes to speed up multi-column queries',
          'Using database transactions for money transfer and inventory deduction operations'
        ],
        interviewKnowledge: [
          'Explain Clustered vs Non-Clustered index storage in MySQL InnoDB engine',
          'Explain the 4 Transaction Isolation levels and how InnoDB prevents Phantom Reads with Next-Key Locks'
        ],
        task: {
          id: 'sql-t2',
          title: 'Banking Transaction Processing Engine with CTE & Window Functions',
          description: 'Implement a SQL transaction script for funds transfer with ACID safety, and write advanced analytical queries using Window Functions.',
          requirements: [
            'Write atomic funds transfer SQL transaction checking sender balance before deducting',
            'Write query using ROW_NUMBER() and DENSE_RANK() to rank customers by monthly spend',
            'Write CTE query calculating running total balance per account over time',
            'Demonstrate rollback on insufficient funds condition'
          ],
          evaluationCriteria: [
            'Transaction checks balance and handles failure cleanly with ROLLBACK',
            'Window functions correctly partitioned by account ID'
          ]
        }
      },
      {
        id: 'sql-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Optimization & Architecture',
        objective: 'Master EXPLAIN analyze query execution plans, Index cardinality, Table partitioning, Stored Procedures, and Connection Pooling.',
        topics: [
          'EXPLAIN & EXPLAIN ANALYZE output interpretation (type: ref vs range vs ALL, rows, filtered, Extra)',
          'Identifying and fixing Full Table Scans (type: ALL)',
          'Covering Indexes concept',
          'Table Partitioning strategies (Range, List, Hash partitioning)',
          'Stored Procedures, Triggers & Database Views',
          'MySQL InnoDB Architecture (Buffer Pool, Redo Log, Undo Log)',
          'Connection Pooling & Connection leak prevention',
          'Sharding vs Read Replicas vs Master-Slave replication concepts',
          'MNC SQL performance optimization interview scenarios'
        ],
        practicalKnowledge: [
          'Reading EXPLAIN plan output to debug slow 10-second queries',
          'Designing covering indexes to allow Index-Only Scans'
        ],
        interviewKnowledge: [
          'How MySQL InnoDB Redo Log and Undo Log guarantee Crash Recovery (Durability and Atomicity)',
          'Sharding key selection criteria for high-scale databases'
        ],
        task: {
          id: 'sql-t3',
          title: 'High-Scale SQL Query Optimization Defense',
          description: 'Diagnose and rewrite 3 slow SQL query scenarios using EXPLAIN ANALYZE, composite indexes, and covering indexes, complete with architectural explanation.',
          requirements: [
            'Analyze slow unindexed query on 1,000,000 row table',
            'Add composite covering index to transform execution plan from type: ALL to type: ref / index',
            'Write stored procedure for bulk invoice generation',
            'Provide step-by-step written defense explaining how Buffer Pool caches pages'
          ],
          evaluationCriteria: [
            'Query execution cost reduced by >90%',
            'EXPLAIN output clearly demonstrates index usage'
          ]
        }
      }
    ]
  },
  {
    id: 'mongodb',
    name: 'MongoDB / Mongoose',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Document database modeling, CRUD, BSON, Aggregation Pipeline, Indexing, and Replica Sets.',
    phases: [
      {
        id: 'mongodb-p1',
        phaseNumber: 1,
        title: 'Phase 1 — CRUD & Data Modeling',
        objective: 'Master MongoDB document structure, BSON, CRUD operations, Query operators, and basic Mongoose Schema design.',
        topics: [
          'Document DB vs Relational DB concepts',
          'BSON data types (ObjectId, Date, Decimal128, Array)',
          'MongoDB CRUD operations (insertOne, insertMany, find, updateOne, deleteOne)',
          'Query Operators ($eq, $gt, $lt, $in, $nin, $and, $or, $exists)',
          'Update Operators ($set, $unset, $inc, $push, $pull, $addToSet)',
          'Projections & Field filtering',
          'Mongoose Schema definition & Data Types',
          'Mongoose Validation (built-in & custom validators)',
          'Mongoose Documents, Queries & Exec()'
        ],
        practicalKnowledge: [
          'Modeling 1-to-1, 1-to-N (embedding vs referencing) relationships',
          'Writing Mongoose schemas with strict field validation rules'
        ],
        interviewKnowledge: [
          'When to Embed vs when to Reference documents in MongoDB',
          'How ObjectId is constructed (Timestamp + Random value + Counter)'
        ],
        task: {
          id: 'mongodb-t1',
          title: 'Blog & Comments Data Engine with Mongoose Validation',
          description: 'Design Mongoose schemas for User, Post, and Comment resources using hybrid embedding and referencing data modeling patterns.',
          requirements: [
            'Model Post schema embedding top 5 recent comments while referencing author User',
            'Implement schema pre-save hook to generate post slug from title',
            'Write CRUD operations with strict validation error handling',
            'Write query retrieving posts with populated Author details using .populate()'
          ],
          evaluationCriteria: [
            'Embedding vs Referencing chosen appropriately',
            'Mongoose pre-save hook handles slugification'
          ]
        }
      },
      {
        id: 'mongodb-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Aggregation Pipeline & Indexing',
        objective: 'Master Aggregation Pipeline stages ($match, $group, $project, $lookup, $unwind), Single/Compound Indexes, and Mongoose Middleware.',
        topics: [
          'Aggregation Pipeline architecture',
          'Pipeline stages ($match, $group, $project, $sort, $limit, $skip)',
          'Advanced stages ($lookup for joins, $unwind for arrays, $addFields, $facet)',
          'Single field indexes & Compound indexes',
          'Multikey indexes (indexing arrays)',
          'Text indexes & Geospatial 2dsphere indexes',
          'Index strategies (ESR rule: Equality, Sort, Range)',
          'Mongoose middleware (pre/post hooks for save, validate, remove, find)',
          'Mongoose Virtuals & Custom Instance/Static methods'
        ],
        practicalKnowledge: [
          'Building complex analytics aggregation pipelines (e.g. sales reports per region)',
          'Applying the ESR (Equality, Sort, Range) rule when designing compound MongoDB indexes'
        ],
        interviewKnowledge: [
          'Explain $lookup join performance implications and how to optimize it with indexes',
          'Explain executionStats in explain("executionStats") output (totalDocsExamined vs nReturned)'
        ],
        task: {
          id: 'mongodb-t2',
          title: 'Sales Analytics Pipeline & Compound Index Optimizer',
          description: 'Build an analytics endpoint using MongoDB Aggregation Pipeline ($match, $group, $lookup, $unwind, $project) with ESR-compliant indexing.',
          requirements: [
            'Build aggregation pipeline calculating total revenue, average order value, and item counts per product category',
            'Join Order collection with Customer details via $lookup',
            'Create compound index following ESR rule on orders collection',
            'Run explain() to verify totalDocsExamined matches nReturned'
          ],
          evaluationCriteria: [
            'Aggregation pipeline uses indexes in initial $match stage',
            'Zero in-memory sort warnings'
          ]
        }
      },
      {
        id: 'mongodb-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Replication, Sharding & Transactions',
        objective: 'Master Replica Sets (Primary, Secondary, Arbiter), Write Concern / Read Preference, Sharding, Multi-Document Transactions, and WiredTiger.',
        topics: [
          'Replica Set architecture & Oplog replication mechanism',
          'Write Concern (w: 1, w: "majority", j: true)',
          'Read Preference (primary, primaryPreferred, secondary, nearest)',
          'Sharding architecture (Mongos router, Config servers, Shards)',
          'Shard Key selection strategies (Hashed vs Range shard key, avoiding jumbo chunks)',
          'Multi-Document ACID Transactions (session.startTransaction)',
          'WiredTiger Storage Engine (B-Tree, Cache management, Checkpoints)',
          'MNC MongoDB production scale interview questions'
        ],
        practicalKnowledge: [
          'Implementing multi-document transactions across multiple collections using Mongoose sessions',
          'Selecting optimal Shard Keys for high-throughput write workloads'
        ],
        interviewKnowledge: [
          'How MongoDB election process works when Primary node fails (Raft-like consensus)',
          'Difference between Write Concern w: 1 and w: majority regarding data durability'
        ],
        task: {
          id: 'mongodb-t3',
          title: 'Multi-Document Transaction Engine & Replica Set Fault Tolerance Defense',
          description: 'Implement a MongoDB multi-document transaction script (Order checkout + Inventory update + Wallet deduction) with explicit session handling and failure rollback.',
          requirements: [
            'Start client session and execute transaction across 3 collections',
            'Include abortTransaction() in catch block on failure',
            'Configure writeConcern: { w: "majority", wtimeout: 5000 }',
            'Write architectural defense explaining MongoDB Replica Set oplog replication and sharding chunk splits'
          ],
          evaluationCriteria: [
            'Transaction guarantees all 3 updates complete or all rollback',
            'Session cleanly ended in finally block'
          ]
        }
      }
    ]
  },
  {
    id: 'rest-api',
    name: 'REST APIs / HTTP',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'HTTP protocol fundamentals, REST architectural constraints, Status Codes, API Versioning, WebSockets, and Rate Limiting.',
    phases: [
      {
        id: 'rest-p1',
        phaseNumber: 1,
        title: 'Phase 1 — HTTP Fundamentals & REST Principles',
        objective: 'Master HTTP methods, Request/Response headers, Status Codes, REST constraints, and JSON payload design.',
        topics: [
          'HTTP Protocol architecture & Request/Response lifecycle',
          'HTTP Methods (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD)',
          'Safe vs Idempotent HTTP methods',
          'HTTP Status Codes taxonomy (2xx Success, 3xx Redirection, 4xx Client Error, 5xx Server Error)',
          'Essential Headers (Content-Type, Authorization, Accept, Cache-Control, User-Agent)',
          '6 Core REST Architectural Constraints (Client-Server, Stateless, Cacheable, Uniform Interface, Layered System, Code-on-Demand)',
          'URI naming conventions & Resource-oriented API design',
          'Query Parameters vs Path Parameters vs Body payloads'
        ],
        practicalKnowledge: [
          'Designing clean RESTful URI paths (e.g. GET /api/v1/users/:id/orders)',
          'Selecting exact appropriate status codes (201 Created, 204 No Content, 401 Unauthorized, 403 Forbidden, 409 Conflict, 422 Unprocessable Entity)'
        ],
        interviewKnowledge: [
          'Difference between PUT (full replacement) and PATCH (partial update)',
          'What makes REST stateless and why server sessions violate pure statelessness'
        ],
        task: {
          id: 'rest-t1',
          title: 'Resource-Oriented REST API Specification & Implementation',
          description: 'Design and build a fully RESTful HTTP API service for an E-Commerce Cart & Order system conforming strictly to REST constraints.',
          requirements: [
            'Implement GET /api/v1/products, GET /api/v1/products/:id',
            'Implement POST /api/v1/cart/items (returns 201 Created with Location header)',
            'Implement PATCH /api/v1/cart/items/:id (partial quantity update)',
            'Implement DELETE /api/v1/cart/items/:id (returns 204 No Content)',
            'Return standard RFC 7807 problem details JSON format for 4xx/5xx errors'
          ],
          evaluationCriteria: [
            'All endpoints use correct HTTP verbs and status codes',
            'URIs rely on nouns, not verbs'
          ]
        }
      },
      {
        id: 'rest-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Advanced API Patterns & Idempotency',
        objective: 'Master API Versioning, Pagination strategies (Cursor vs Offset), Error Formatting, HATEOAS, and Idempotency Keys.',
        topics: [
          'API Versioning strategies (URL path /v1/, Custom Header, Accept header)',
          'Offset-based Pagination vs Cursor-based Pagination',
          'Filtering, Sorting & Field Selection (?fields=id,name&sort=-createdAt)',
          'Idempotency Keys implementation for payment POST endpoints',
          'HATEOAS (Hypermedia As The Engine Of Application State) basics',
          'CORS preflight requests (OPTIONS verb, Access-Control-Allow-*)',
          'API Rate Limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window Log)',
          'ETag & Conditional Headers (If-None-Match, If-Modified-Since) for HTTP caching'
        ],
        practicalKnowledge: [
          'Implementing Cursor-based pagination using Base64 encoded cursors for high-scale feeds',
          'Implementing Idempotent POST endpoints using Redis token locking'
        ],
        interviewKnowledge: [
          'Why Cursor pagination outperforms Offset pagination on large datasets',
          'How CORS preflight request flow works step-by-step'
        ],
        task: {
          id: 'rest-t2',
          title: 'Idempotent Payment Endpoint & Cursor Pagination Engine',
          description: 'Build an advanced REST API module implementing Idempotency-Key handling for financial POST requests and Cursor-based pagination for feeds.',
          requirements: [
            'POST /api/v1/payments endpoint requiring Idempotency-Key header',
            'Store idempotency response in cache; return cached response if key re-sent',
            'GET /api/v1/feed endpoint returning cursor-paginated data (limit & starting_after cursor)',
            'Include ETag generation header for conditional 304 Not Modified responses'
          ],
          evaluationCriteria: [
            'Duplicate requests with same Idempotency-Key return identical response without re-processing',
            'Cursor pagination handles new items cleanly without missing/duplicate records'
          ]
        }
      },
      {
        id: 'rest-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Real-Time Protocols & Enterprise Architecture',
        objective: 'Master WebSockets (WS/WSS), Server-Sent Events (SSE), HTTP/2 & HTTP/3 multiplexing, gRPC comparisons, and MNC API design.',
        topics: [
          'WebSockets protocol lifecycle (HTTP Upgrade handshake, frame format, duplex communication)',
          'Server-Sent Events (SSE) (EventSource, text/event-stream format, auto-reconnect)',
          'HTTP/1.1 vs HTTP/2 (Multiplexing, Header compression HPACK, Server Push)',
          'HTTP/3 (QUIC protocol over UDP)',
          'REST vs GraphQL vs gRPC protocol trade-offs',
          'API Gateway responsibilities (Authentication offloading, TLS termination, Rate limiting)',
          'MNC API Architecture interview questions'
        ],
        practicalKnowledge: [
          'Building real-time notification endpoint using Server-Sent Events (SSE)',
          'Building WebSocket server with ping/pong heartbeat connection monitoring'
        ],
        interviewKnowledge: [
          'When to choose WebSockets vs SSE vs Long Polling vs gRPC',
          'How HTTP/2 Multiplexing solves HTTP/1.1 Head-of-Line Blocking'
        ],
        task: {
          id: 'rest-t3',
          title: 'Real-Time Notification System (SSE + WebSockets) & Protocol Defense',
          description: 'Build a real-time notification engine using both WebSockets and Server-Sent Events, complete with connection lifecycle management and protocol architectural defense document.',
          requirements: [
            'Implement SSE endpoint /api/v1/events broadcasting server events',
            'Implement WebSocket server ws:// handling bidirectional messaging',
            'Include client heartbeat ping/pong mechanism to prune dead sockets',
            'Write technical document comparing REST, SSE, WebSockets, and gRPC for MNC interview'
          ],
          evaluationCriteria: [
            'Dead WebSocket connections pruned cleanly within 30 seconds',
            'SSE headers formatted correctly (Content-Type: text/event-stream)'
          ]
        }
      }
    ]
  },
  {
    id: 'jwt-rbac',
    name: 'JWT Authentication + RBAC',
    category: 'technical',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Stateless authentication, JWT structure, Access/Refresh Token rotation, RBAC middleware, OAuth2, and OWASP security.',
    phases: [
      {
        id: 'jwt-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Stateless Auth & JWT Basics',
        objective: 'Master JWT structure (Header, Payload, Signature), signing algorithms (HS256 vs RS256), hashing, and cookie/bearer storage.',
        topics: [
          'Authentication vs Authorization concepts',
          'Session-based Auth (stateful) vs Token-based Auth (stateless)',
          'JWT 3 components (Header, Claims Payload, Signature)',
          'Signing algorithms (Symmetric HS256 vs Asymmetric RS256)',
          'Standard JWT Claims (iss, sub, aud, exp, nbf, iat, jti)',
          'Password Hashing (bcrypt, argon2, salt rounds)',
          'Token Storage options (localStorage vs HttpOnly SameSite Cookies)',
          'Bearer Token Authorization header format'
        ],
        practicalKnowledge: [
          'Hashing passwords securely with bcrypt salt rounds (cost factor 10-12)',
          'Verifying and decoding JWT tokens safely handling expiration exceptions'
        ],
        interviewKnowledge: [
          'Why storing JWT tokens in localStorage makes applications vulnerable to XSS attacks',
          'Difference between Symmetric (HS256) and Asymmetric (RS256) token signing'
        ],
        task: {
          id: 'jwt-t1',
          title: 'Stateless JWT Auth Engine with HttpOnly Cookie Storage',
          description: 'Build a Node.js/Express authentication module featuring user registration, bcrypt password hashing, JWT generation, and secure HttpOnly cookie delivery.',
          requirements: [
            'POST /api/auth/register (hashes password with bcrypt)',
            'POST /api/auth/login (verifies credentials, generates JWT signed with secret)',
            'Deliver JWT inside HttpOnly, Secure, SameSite=Strict cookie',
            'Build authGuard middleware verifying JWT on protected routes'
          ],
          evaluationCriteria: [
            'Passwords never stored in plain text',
            'Auth middleware attached req.user on valid token'
          ]
        }
      },
      {
        id: 'jwt-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Refresh Tokens & RBAC Guard Pipeline',
        objective: 'Master Dual-Token strategy (Short-lived Access Token + Long-lived Refresh Token), Token Rotation, Revocation, and RBAC.',
        topics: [
          'Dual Token pattern (Access Token 15m + Refresh Token 7d)',
          'Refresh Token Rotation & Reuse Detection algorithm',
          'Token Blacklisting & Revocation using Redis',
          'Role-Based Access Control (RBAC) data model (Users, Roles, Permissions)',
          'Hierarchical RBAC (Admin > Manager > User)',
          'Permission-Based Access Control (PBAC / ABAC basics)',
          'Authorization Middleware pipeline (checkRole, checkPermission)',
          'CSRF Defense when using Cookies (Double Submit Cookie / CSRF Tokens)'
        ],
        practicalKnowledge: [
          'Implementing silent access token refresh flow',
          'Writing scalable checkPermission(...permissions) middleware'
        ],
        interviewKnowledge: [
          'How to invalidate a stateless JWT before its expiration date (Redis blacklist / token versioning)',
          'How Refresh Token Reuse Detection works to protect compromised user accounts'
        ],
        task: {
          id: 'jwt-t2',
          title: 'Enterprise Dual-Token Auth System with RBAC Guards',
          description: 'Build a production authentication engine with Access Token rotation, Refresh Token reuse detection in Redis, and Role-Based Access Guards.',
          requirements: [
            'POST /api/auth/refresh endpoint issuing new Access & Refresh tokens while invalidating old Refresh Token',
            'Detect reused Refresh Tokens and revoke all tokens for that user session family',
            'Implement requireRoles(\'ADMIN\', \'SELLER\') and requirePermissions(\'WRITE_PRODUCT\') middleware',
            'Protect administrative endpoints with RBAC guards'
          ],
          evaluationCriteria: [
            'Token reuse immediately invalidates entire token family in Redis',
            'Unauthorized role access returns 403 Forbidden'
          ]
        }
      },
      {
        id: 'jwt-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / OAuth2, OIDC & Security Auditing',
        objective: 'Master OAuth 2.0 flows (Authorization Code + PKCE), OpenID Connect (OIDC), SSO, Multi-Tenant Security, and OWASP Auth guidelines.',
        topics: [
          'OAuth 2.0 Roles (Resource Owner, Client, Authorization Server, Resource Server)',
          'OAuth 2.0 Grant Types (Authorization Code with PKCE, Client Credentials)',
          'OpenID Connect (OIDC) & ID Tokens vs Access Tokens',
          'Single Sign-On (SSO) principles',
          'Multi-Tenant RBAC isolation',
          'OWASP Top 10 Auth Vulnerabilities (Broken Object Level Auth - BOLA / IDOR)',
          'MNC Auth architecture & Security Defense interview scenarios'
        ],
        practicalKnowledge: [
          'Preventing Insecure Direct Object References (IDOR/BOLA) by scoped query ownership checks',
          'Configuring PKCE (Proof Key for Code Exchange) code verifier and challenge'
        ],
        interviewKnowledge: [
          'Difference between OAuth 2.0 (Delegated Authorization) and OIDC (Authentication)',
          'How PKCE protects SPA applications against Authorization Code interception attacks'
        ],
        task: {
          id: 'jwt-t3',
          title: 'BOLA/IDOR Security Audit & Multi-Tenant RBAC Defense',
          description: 'Build an API service resistant to BOLA/IDOR attacks with multi-tenant tenant_id scoping and write a comprehensive OAuth2/PKCE architectural defense document.',
          requirements: [
            'Implement endpoint GET /api/v1/tenants/:tenantId/documents/:docId verifying user belongs to tenantId AND owns document or has ADMIN role',
            'Write automated tests attempting cross-tenant resource access (ensuring 403/404)',
            'Write technical document explaining OAuth 2.0 PKCE flow for MNC interview'
          ],
          evaluationCriteria: [
            'Cross-tenant resource access strictly blocked',
            'IDOR protection verified across all CRUD endpoints'
          ]
        }
      }
    ]
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'technical',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'App Router, Server Components, SSR/SSG/ISR, Server Actions, and Next.js middleware.',
    phases: [
      {
        id: 'next-p1',
        phaseNumber: 1,
        title: 'Phase 1 — App Router & Rendering Strategies',
        objective: 'Master Next.js App Router directory structure, Server Components vs Client Components, SSR, SSG, and ISR.',
        topics: [
          'App Router layout hierarchy (layout.tsx, page.tsx, loading.tsx, error.tsx, not-found.tsx)',
          'React Server Components (RSC) vs Client Components (\'use client\')',
          'Static Site Generation (SSG) & generateStaticParams',
          'Server-Side Rendering (SSR) & dynamic = \'force-dynamic\'',
          'Incremental Static Regeneration (ISR) & revalidate tag/time',
          'Next.js Navigation (Link, useRouter, redirect, usePathname)',
          'Image Optimization (next/image) & Font Optimization (next/font)',
          'Environment variables (NEXT_PUBLIC_ prefix)'
        ],
        practicalKnowledge: [
          'Deciding when to use Server Components vs Client Components',
          'Implementing ISR for product catalog pages with 60-second revalidation'
        ],
        interviewKnowledge: [
          'Benefits of React Server Components (reduced client bundle size, direct DB access)',
          'How ISR updates static pages in background without full site rebuilds'
        ],
        task: {
          id: 'next-t1',
          title: 'E-Commerce Storefront with App Router & ISR',
          description: 'Build a Next.js App Router store featuring dynamic product pages with ISR, static landing pages, and client cart drawer.',
          requirements: [
            'Create layout with header, footer, and navigation',
            'Build /products page fetching data inside Server Component',
            'Build /products/[id] with generateStaticParams and revalidate: 60',
            'Build client-side cart drawer toggle with \'use client\''
          ],
          evaluationCriteria: [
            'Zero unnecessary \'use client\' directives used',
            'Product detail pages render statically'
          ]
        }
      },
      {
        id: 'next-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Server Actions, Middleware & Optimization',
        objective: 'Master Next.js Server Actions, Middleware, Route Handlers, Cache Management, and Deployment.',
        topics: [
          'Server Actions (\'use server\') for form mutations',
          'useActionState & useFormStatus hooks',
          'Next.js Middleware (middleware.ts for Auth redirects)',
          'Route Handlers (route.ts for REST endpoints)',
          'Next.js Data Cache, Request Memoization & revalidatePath / revalidateTag',
          'SEO Optimization (Metadata API, sitemap.ts, robots.ts)',
          'Performance profiling & Core Web Vitals optimization'
        ],
        practicalKnowledge: [
          'Protecting route groups using Next.js middleware JWT verification',
          'Handling form mutations cleanly using Server Actions without API boilerplate'
        ],
        interviewKnowledge: [
          'How Next.js 4-tier Caching Layer works (Request Memoization, Data Cache, Full Route Cache, Router Cache)',
          'Security best practices for Next.js Server Actions'
        ],
        task: {
          id: 'next-t2',
          title: 'Authenticated Portal with Server Actions & Middleware Guards',
          description: 'Build an authenticated portal with Next.js Middleware route guards, Server Action form updates, and revalidatePath cache revalidation.',
          requirements: [
            'Implement middleware.ts protecting /dashboard/* routes based on session cookie',
            'Implement Server Action updateProfile(formData) validating with Zod',
            'Use revalidatePath(\'/dashboard/profile\') after successful mutation',
            'Configure dynamic metadata for SEO'
          ],
          evaluationCriteria: [
            'Unauthenticated users redirected to /login by middleware',
            'Server actions handle mutations and return structured response'
          ]
        }
      }
    ]
  },
  {
    id: 'redux-toolkit',
    name: 'Redux Toolkit',
    category: 'technical',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'Centralized state management, slices, extraReducers, createAsyncThunk, RTK Query, and selectors.',
    phases: [
      {
        id: 'rtk-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Core Store, Slices & Thunks',
        objective: 'Master configureStore, createSlice, Immer immutability, Typed hooks, and createAsyncThunk.',
        topics: [
          'Redux core principles (Single Source of Truth, Read-only state, Pure reducers)',
          'Redux Toolkit motivation over legacy Redux',
          'configureStore & Middleware setup',
          'createSlice (actions, reducers, initialState)',
          'Immer integration for mutable-style draft updates',
          'Typed Redux Hooks (useAppDispatch, useAppSelector)',
          'Async logic with createAsyncThunk',
          'Handling pending, fulfilled, rejected states in extraReducers',
          'Reselect library & createSelector for memoized state queries'
        ],
        practicalKnowledge: [
          'Structuring slice files for complex domain domains (CartSlice, AuthSlice)',
          'Writing memoized selectors to avoid unnecessary component re-renders'
        ],
        interviewKnowledge: [
          'How Immer JS enables writing mutating logic (state.value += 1) safely in RTK reducers',
          'Why selectors should be memoized using createSelector'
        ],
        task: {
          id: 'rtk-t1',
          title: 'Shopping Cart & User Auth State Engine with RTK',
          description: 'Build a Redux Toolkit state store for an e-commerce platform managing user authentication and shopping cart items.',
          requirements: [
            'Create authSlice with loginUser async thunk',
            'Create cartSlice with addItem, removeItem, updateQuantity reducers',
            'Write memoized selector selectCartTotal calculating total price',
            'Set up store with TypeScript RootState and AppDispatch types'
          ],
          evaluationCriteria: [
            'Selectors use createSelector for memoization',
            'Async thunk handles error states properly'
          ]
        }
      },
      {
        id: 'rtk-p2',
        phaseNumber: 2,
        title: 'Phase 2 — RTK Query & Advanced Patterns',
        objective: 'Master RTK Query API creation, auto-generated hooks, cache invalidation tags, and custom middleware.',
        topics: [
          'RTK Query overview & createApi',
          'fetchBaseQuery configuration',
          'Endpoints definition (queries vs mutations)',
          'Auto-generated hooks (useGetProductsQuery, useUpdateProductMutation)',
          'Cache Tag invalidation (providesTags, invalidatesTags)',
          'Optimistic UI Updates with onQueryStarted',
          'Redux Middleware creation (e.g. error logging / analytics middleware)',
          'Redux Persist vs Custom Storage Sync'
        ],
        practicalKnowledge: [
          'Configuring tag-based automatic cache refetching after CRUD mutations',
          'Implementing Optimistic Updates for instant UI feedback before server confirmation'
        ],
        interviewKnowledge: [
          'How RTK Query manages cache lifecycle and deduplicates simultaneous requests',
          'Difference between query endpoints and mutation endpoints'
        ],
        task: {
          id: 'rtk-t2',
          title: 'RTK Query API Layer with Optimistic Updates & Tag Invalidation',
          description: 'Build an RTK Query data fetching service with cache tag invalidation and optimistic updates for a task management application.',
          requirements: [
            'Create apiSlice with fetchBaseQuery to backend API',
            'Implement getTasks query and addTask/deleteTask mutations',
            'Set up providesTags: [\'Tasks\'] and invalidatesTags: [\'Tasks\']',
            'Implement optimistic update for deleteTask endpoint'
          ],
          evaluationCriteria: [
            'UI updates immediately on delete before server responds',
            'Server failure triggers automatic rollback'
          ]
        }
      }
    ]
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'technical',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'In-memory data structures, caching patterns, Key Expiration, Pub/Sub, Rate Limiting, and Session Management.',
    phases: [
      {
        id: 'redis-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Data Structures & Caching Patterns',
        objective: 'Master Redis data types (Strings, Hashes, Lists, Sets, Sorted Sets), TTL expiration, and Cache-Aside pattern.',
        topics: [
          'In-Memory database architecture vs Disk DBs',
          'Redis CLI commands (SET, GET, DEL, EXISTS, EXPIRE, TTL)',
          'Data Types: Strings, Hashes (HSET/HGETALL), Lists (LPUSH/RPOP), Sets (SADD/SMEMBERS), Sorted Sets (ZADD/ZRANGE)',
          'Key Expiration strategies & Memory Eviction policies (LRU, LFU)',
          'Cache-Aside (Lazy Loading) pattern',
          'Write-Through vs Write-Back caching patterns',
          'Cache Stampede (Thundering Herd) problem & Cache Penetration / Breakdown'
        ],
        practicalKnowledge: [
          'Connecting ioredis / node-redis client in Express apps',
          'Implementing Cache-Aside middleware for database query results with TTL'
        ],
        interviewKnowledge: [
          'Difference between Cache Breakdown (hot key expires) and Cache Penetration (non-existent key queried repeatedly)',
          'How Redis single-threaded event loop handles thousands of concurrent requests'
        ],
        task: {
          id: 'redis-t1',
          title: 'High-Throughput Express Query Caching Layer',
          description: 'Build a Redis caching middleware for Express that caches expensive database queries with automatic TTL invalidation.',
          requirements: [
            'Connect ioredis client with connection retry strategy',
            'Write cacheMiddleware(ttlSeconds) storing JSON responses in Redis',
            'Implement cache invalidation on POST/PUT/DELETE mutations',
            'Handle Redis connection failure gracefully (fallback to direct DB query)'
          ],
          evaluationCriteria: [
            'Cached endpoints return responses in <5ms',
            'Redis downtime does not break the application'
          ]
        }
      },
      {
        id: 'redis-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Rate Limiting, Pub/Sub & Persistence',
        objective: 'Master Sliding Window Rate Limiting, Pub/Sub messaging, Distributed Locks (Redlock), and Redis Persistence (RDB/AOF).',
        topics: [
          'Sliding Window Rate Limiter using Redis Sorted Sets (ZSET)',
          'Redis Pub/Sub (PUBLISH, SUBSCRIBE, UNSUBSCRIBE)',
          'Session Store management in Redis',
          'Distributed Locks using Redlock algorithm / SET NX PX',
          'Redis Persistence mechanisms: RDB (Snapshots) vs AOF (Append-Only File)',
          'Redis Sentinel (High Availability) vs Redis Cluster (Sharding)'
        ],
        practicalKnowledge: [
          'Implementing accurate sliding window rate limiter in Redis',
          'Acquiring distributed locks to prevent race conditions during high-volume flash sales'
        ],
        interviewKnowledge: [
          'How SET key value NX PX milliseconds works as an atomic distributed lock',
          'Trade-offs between RDB (fast recovery, potential data loss) and AOF (higher durability, larger file size)'
        ],
        task: {
          id: 'redis-t2',
          title: 'Sliding Window Rate Limiter & Distributed Flash Sale Lock',
          description: 'Build a Redis-backed Sliding Window Rate Limiter middleware and a distributed locking module for flash sale inventory reservation.',
          requirements: [
            'Implement slidingWindowRateLimiter using Redis ZSET (max 10 requests per minute per IP)',
            'Implement reserveInventoryWithLock(productId, userId) using SET NX PX atomic lock',
            'Demonstrate prevention of over-selling during concurrent flash sale requests'
          ],
          evaluationCriteria: [
            'Rate limiter correctly blocks 11th request within 60-second window',
            'Distributed lock prevents race conditions on inventory deduction'
          ]
        }
      }
    ]
  },
  {
    id: 'git-github',
    name: 'Git / GitHub',
    category: 'technical',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'Version control, branching strategies, rebase, cherry-pick, conflict resolution, and GitHub workflows.',
    phases: [
      {
        id: 'git-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Core Commands & Branching',
        objective: 'Master Git architecture (Working Dir, Staging Area, Local Repo, Remote), branching, merging, and stash.',
        topics: [
          'Git internal architecture (Blobs, Trees, Commits, Annotations)',
          'Basic commands (init, clone, add, status, commit, diff)',
          'Branching & Merging (fast-forward vs 3-way merge)',
          'Remote management (remote add, fetch, pull, push)',
          'Git Stash (stash push, pop, list, drop)',
          'Undoing changes (git restore, git checkout, git reset --soft/mixed/hard)',
          '.gitignore patterns & best practices'
        ],
        practicalKnowledge: [
          'Resolving merge conflicts in code files cleanly',
          'Using git stash to save uncommitted work when switching feature branches'
        ],
        interviewKnowledge: [
          'Difference between git reset --soft, --mixed, and --hard',
          'Difference between git fetch and git pull'
        ],
        task: {
          id: 'git-t1',
          title: 'Branching Workflow & Merge Conflict Resolution',
          description: 'Create a Git repository simulation with feature branches, intentional merge conflicts, and clean resolution.',
          requirements: [
            'Create main branch and 2 parallel feature branches feature/auth and feature/ui',
            'Modify same file lines in both feature branches',
            'Merge feature/auth into main',
            'Attempt merging feature/ui, resolve conflict manually, and finalize merge commit'
          ],
          evaluationCriteria: [
            'Commit history clearly shows conflict resolution',
            'Clean commit messages conforming to Conventional Commits standard'
          ]
        }
      },
      {
        id: 'git-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Interactive Rebase, Cherry-Pick & Workflows',
        objective: 'Master Git Rebase, Interactive Rebase (squash/fixup), Cherry-pick, Git Flow, and GitHub Pull Request workflows.',
        topics: [
          'Git Rebase vs Git Merge (Linear history vs Merge commits)',
          'Interactive Rebase (git rebase -i HEAD~N: reword, squash, fixup, drop)',
          'Git Cherry-Pick (applying specific commits across branches)',
          'Git Reflog (recovering deleted branches/commits)',
          'Git Flow vs Trunk-Based Development workflows',
          'GitHub Pull Requests, Code Review best practices, and Branch Protection rules',
          'Git Hooks (Husky, pre-commit, commit-msg linting)'
        ],
        practicalKnowledge: [
          'Squashing 5 dirty development commits into 1 clean atomic commit before PR submission',
          'Recovering accidentally deleted commits using git reflog'
        ],
        interviewKnowledge: [
          'When NOT to use git rebase (the Golden Rule of Rebase: never rebase public shared branches)',
          'How git reflog differs from git log'
        ],
        task: {
          id: 'git-t2',
          title: 'Commit Cleanup via Interactive Rebase & Husky Pre-commit Hook',
          description: 'Perform interactive rebase to squash multiple commits into an atomic feature commit, and configure Husky pre-commit linting.',
          requirements: [
            'Create branch with 4 dirty commits ("WIP", "fix typo", "adds auth", "bugfix")',
            'Use git rebase -i to squash into single clean commit "feat(auth): implement JWT login flow"',
            'Set up Husky pre-commit hook to run npm run lint before allowing commits'
          ],
          evaluationCriteria: [
            'Git log shows single clean commit message',
            'Pre-commit hook rejects invalid code formatting'
          ]
        }
      }
    ]
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'technical',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'Containerization, Dockerfile optimization, Docker Compose, Multi-stage builds, Volumes, and Networks.',
    phases: [
      {
        id: 'docker-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Containers & Dockerfile Fundamentals',
        objective: 'Master VM vs Container concepts, Docker Architecture, Image building, Container lifecycle, and Port mapping.',
        topics: [
          'Virtual Machines vs Containers (Hypervisor vs OS Kernel sharing)',
          'Docker Architecture (Daemon, Client, Images, Containers, Registry)',
          'Dockerfile instructions (FROM, WORKDIR, COPY, RUN, CMD, ENTRYPOINT, EXPOSE, ENV)',
          'Container lifecycle commands (docker run, ps, stop, start, rm, rmi, logs, exec)',
          'Port Mapping (-p host:container)',
          'Environment variables passing (-e flag & .env file)',
          '.dockerignore usage'
        ],
        practicalKnowledge: [
          'Writing efficient Dockerfiles for Node.js applications',
          'Executing shell commands inside running containers with docker exec -it'
        ],
        interviewKnowledge: [
          'Difference between CMD and ENTRYPOINT instructions',
          'How Docker image layer caching works and how to order Dockerfile lines for fast builds'
        ],
        task: {
          id: 'docker-t1',
          title: 'Containerized Node.js Express Application',
          description: 'Write a Dockerfile and containerize a Node.js Express REST API, exposing ports and verifying live container execution.',
          requirements: [
            'Write optimized Dockerfile using alpine base image',
            'Configure .dockerignore excluding node_modules and logs',
            'Build image tagged my-express-app:v1',
            'Run container mapping host port 8080 to container port 3000',
            'Verify endpoints via curl or Postman'
          ],
          evaluationCriteria: [
            'Dockerfile copies package.json first to leverage layer caching',
            'Container runs as non-root node user for security'
          ]
        }
      },
      {
        id: 'docker-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Multi-Stage Builds & Docker Compose',
        objective: 'Master Multi-stage Dockerfiles for minimal production image sizes, Docker Compose orchestration, Volumes, and Networks.',
        topics: [
          'Multi-stage Docker builds (Build stage vs Production runtime stage)',
          'Drastic image size reduction (from 1GB to <150MB)',
          'Docker Compose (docker-compose.yml syntax, version, services, ports, env_file)',
          'Docker Volumes (Named volumes, Bind mounts) for database persistence',
          'Docker Networks (Bridge, Host, Overlay) for inter-container communication',
          'Health checks (HEALTHCHECK instruction)',
          'Container security best practices (non-root user, read-only filesystem)'
        ],
        practicalKnowledge: [
          'Writing docker-compose.yml orchestrating Express API, React Frontend, MongoDB, and Redis',
          'Using Named Volumes to persist MongoDB data across container restarts'
        ],
        interviewKnowledge: [
          'Why Multi-stage builds produce smaller, more secure production images',
          'Difference between Bind Mounts (dev hot-reload) and Named Volumes (prod DB persistence)'
        ],
        task: {
          id: 'docker-t2',
          title: 'Multi-Container Full Stack Environment Orchestration',
          description: 'Orchestrate a multi-container environment (Node API + MongoDB + Redis) using Multi-stage Dockerfile and Docker Compose.',
          requirements: [
            'Write multi-stage Dockerfile compiling TypeScript Node app to minimal dist image',
            'Write docker-compose.yml declaring api, mongodb, and redis services',
            'Set up named volume for mongodb data persistence',
            'Set up bridge network allowing API service to connect to mongodb and redis by service name'
          ],
          evaluationCriteria: [
            'Final API image size <150MB',
            'docker compose up successfully boots all 3 services seamlessly'
          ]
        }
      }
    ]
  },
  {
    id: 'html-css',
    name: 'HTML / CSS',
    category: 'technical',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'Semantic HTML5, CSS Flexbox, CSS Grid, Responsive Design, CSS Variables, and Web Vitals.',
    phases: [
      {
        id: 'html-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Semantic HTML5 & Flexbox/Grid Layouts',
        objective: 'Master Semantic HTML tags, Box Model, Flexbox positioning, CSS Grid, and Media Queries.',
        topics: [
          'Semantic HTML5 elements (header, nav, main, section, article, asid, footer)',
          'CSS Box Model (content, padding, border, margin, box-sizing: border-box)',
          'Flexbox deep dive (flex-direction, justify-content, align-items, flex-grow, flex-shrink, flex-basis)',
          'CSS Grid deep dive (grid-template-columns, grid-template-rows, gap, auto-fit, auto-fill, minmax)',
          'Positioning (static, relative, absolute, fixed, sticky)',
          'Responsive Design & Mobile-First Media Queries (@media)',
          'CSS Specificity calculation & Cascade rules'
        ],
        practicalKnowledge: [
          'Building complex responsive dashboard layouts using CSS Grid and Flexbox',
          'Creating mobile-first responsive navigation header menus'
        ],
        interviewKnowledge: [
          'How CSS Specificity is calculated (Inline > ID > Class/Attribute/Pseudo > Element)',
          'Difference between auto-fit and auto-fill in CSS Grid'
        ],
        task: {
          id: 'html-t1',
          title: 'Responsive Dashboard Shell (Vanilla CSS Grid & Flexbox)',
          description: 'Build a complex responsive dashboard layout using semantic HTML5, CSS Grid for main layout, and Flexbox for component alignment.',
          requirements: [
            'Mobile-first responsive layout (Sidebar collapses into toggle menu on mobile)',
            'Use CSS Grid for main page structure (Header, Sidebar, Main Content, Widget Grid)',
            'Use Flexbox inside widget cards for alignment',
            'Zero layout shift across desktop, tablet, and mobile breakpoints'
          ],
          evaluationCriteria: [
            '100% W3C valid semantic HTML5 markup',
            'Responsive without horizontal scrollbars'
          ]
        }
      },
      {
        id: 'html-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Modern CSS, Accessibility & Web Vitals',
        objective: 'Master CSS Custom Properties (Variables), Animations/Transitions, ARIA Accessibility, and Core Web Vitals.',
        topics: [
          'CSS Custom Properties (--primary-color, var())',
          'CSS Transitions & Keyframe Animations (@keyframes, transform, opacity for 60fps)',
          'Web Accessibility (WCAG guidelines, ARIA attributes: aria-label, aria-expanded, role)',
          'Keyboard Navigation & Visible Focus Rings (:focus-visible)',
          'Core Web Vitals (LCP: Largest Contentful Paint, CLS: Cumulative Layout Shift, INP: Interaction to Next Paint)',
          'CSS Architecture (BEM naming convention vs CSS Modules)'
        ],
        practicalKnowledge: [
          'Building dark mode theme toggle using CSS Custom Properties',
          'Ensuring 100% keyboard accessibility for modals and dropdown menus'
        ],
        interviewKnowledge: [
          'Why animating transform and opacity is GPU-accelerated while animating width/top triggers layout reflow',
          'How to optimize Cumulative Layout Shift (CLS) by reserving image aspect ratio dimensions'
        ],
        task: {
          id: 'html-t2',
          title: 'Accessible Dark/Light Theme System & Micro-Interactions',
          description: 'Build a dark/light theme switching system using CSS Custom Properties with 60fps GPU-accelerated micro-animations and ARIA accessibility.',
          requirements: [
            'Implement CSS custom properties theme system toggling via data-theme attribute',
            'Create animated modal dialog with smooth backdrop fade in',
            'Add proper ARIA roles (role="dialog", aria-modal="true", aria-labelledby)',
            'Trap keyboard focus inside modal when open'
          ],
          evaluationCriteria: [
            'Modal passes WCAG 2.1 AA accessibility audit',
            'Animations run at smooth 60fps without triggering layout reflow'
          ]
        }
      }
    ]
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'technical',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'Utility-first CSS, custom configuration, design tokens, dark mode, responsive utilities, and plugin development.',
    phases: [
      {
        id: 'tw-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Utility Fundamentals & Responsive UI',
        objective: 'Master Tailwind utility classes, Flexbox/Grid helpers, spacing, typography, colors, and responsive prefixes.',
        topics: [
          'Utility-first CSS paradigm advantages',
          'Layout & Flex/Grid utilities (flex, grid, gap-*, col-span-*)',
          'Spacing, Sizing & Typography (p-*, m-*, w-*, h-*, text-*, font-*)',
          'Color palette, Gradients & Opacity (bg-*, text-*, border-*, bg-gradient-to-r)',
          'Responsive Variants (sm:, md:, lg:, xl:, 2xl:)',
          'Hover, Focus & Active States (hover:, focus:, active:, group-hover:)',
          'Borders, Shadows & Glassmorphism (border-*, shadow-*, backdrop-blur-*)'
        ],
        practicalKnowledge: [
          'Rapidly styling complex component cards without writing custom CSS files',
          'Using group-hover: to trigger child animations on parent hover'
        ],
        interviewKnowledge: [
          'How Tailwind JIT (Just-In-Time) compiler scans source code files to generate minimal CSS bundles',
          'Why Tailwind avoids class name collision issues inherent in global CSS'
        ],
        task: {
          id: 'tw-t1',
          title: 'Premium Glassmorphic Product Card Component',
          description: 'Build a modern responsive glassmorphic product card component using Tailwind CSS utility classes.',
          requirements: [
            'Apply glassmorphism effects (backdrop-blur-md bg-white/10 border border-white/20)',
            'Implement responsive layout adjustments for mobile vs desktop',
            'Add hover state micro-interactions (scale-105 shadow-2xl transition-all duration-300)',
            'Use group-hover utility to reveal action button on card hover'
          ],
          evaluationCriteria: [
            'Zero custom CSS files written',
            'Pixel-perfect dark mode styling'
          ]
        }
      },
      {
        id: 'tw-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Custom Config, Components & Plugins',
        objective: 'Master tailwind.config.js extension, Custom Colors, Theme Tokens, @apply directive, Dark Mode strategies, and Plugins.',
        topics: [
          'tailwind.config.js configuration & theme extension',
          'Customizing Color Palettes, Fonts & Breakpoints',
          'Dark Mode strategies (class vs media strategy)',
          'Extracting reusable components (@layer components & @apply)',
          'Writing custom Tailwind Plugins (addUtilities, addComponents)',
          'Merging Tailwind classes safely (clsx + tailwind-merge pattern)'
        ],
        practicalKnowledge: [
          'Configuring brand color design tokens in tailwind.config.js',
          'Creating cn(...) helper combining clsx and tailwind-merge for React component prop styling'
        ],
        interviewKnowledge: [
          'When to use @apply vs when to keep inline utility classes',
          'How tailwind-merge resolves conflicting utility classes (e.g. px-2 px-4 -> px-4)'
        ],
        task: {
          id: 'tw-t2',
          title: 'Design System Tokens Config & Class Merger Engine',
          description: 'Configure custom brand theme tokens in tailwind.config.js and create a React component using clsx and tailwind-merge.',
          requirements: [
            'Configure custom colors (brand-50 to brand-900) in tailwind config',
            'Build cn() class utility wrapper using clsx and tailwind-merge',
            'Build reusable Button component accepting variant and className override props',
            'Demonstrate class conflict resolution (e.g. default bg-brand-500 correctly overridden by passed bg-red-500)'
          ],
          evaluationCriteria: [
            'Custom theme tokens work across utilities',
            'Class merge resolves conflicts cleanly without specificity issues'
          ]
        }
      }
    ]
  },
  {
    id: 'bullmq',
    name: 'BullMQ',
    category: 'technical',
    priority: 'NORMAL',
    phaseCount: 1,
    description: 'Redis-backed message queue processing, background workers, delayed jobs, retries, and rate limiting.',
    phases: [
      {
        id: 'bull-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Queue Processing & Background Workers',
        objective: 'Master BullMQ Queue instantiation, Worker creation, Job producers/consumers, Job retries, and Delayed jobs.',
        topics: [
          'Asynchronous background job processing motivation',
          'BullMQ Architecture (Producer -> Redis Queue -> Worker)',
          'Creating Queues and adding jobs (queue.add(name, data, opts))',
          'Worker creation & job processing handler (new Worker(queueName, processor))',
          'Job options: retries, backoff strategies (exponential vs fixed)',
          'Delayed jobs & Scheduled execution',
          'Repeatable jobs (Cron pattern in BullMQ)',
          'Job events (completed, failed, progress listeners)'
        ],
        practicalKnowledge: [
          'Offloading slow email sending or PDF generation tasks to BullMQ background workers',
          'Configuring exponential backoff retry strategies for flaky third-party API calls'
        ],
        interviewKnowledge: [
          'How BullMQ leverages Redis data structures (Streams / Sorted Sets / Hashes) to guarantee atomic job processing',
          'Difference between Job concurrency in BullMQ vs multithreading'
        ],
        task: {
          id: 'bull-t1',
          title: 'Asynchronous Email & Report Processing Worker',
          description: 'Build a Node.js background worker system using BullMQ and Redis to process asynchronous email sending and report generation jobs with retries.',
          requirements: [
            'Initialize Queue emailQueue connected to Redis',
            'Add endpoint POST /api/reports queuing report generation job with exponential backoff retry (3 attempts)',
            'Write Worker processor that simulates PDF rendering and updates job progress',
            'Listen to completed and failed job events and log audit output'
          ],
          evaluationCriteria: [
            'HTTP endpoint returns 202 Accepted immediately without waiting for worker task',
            'Worker handles retries automatically on simulated failures'
          ]
        }
      }
    ]
  },
  {
    id: 'aws-basics',
    name: 'AWS Basics',
    category: 'technical',
    priority: 'NORMAL',
    phaseCount: 1,
    description: 'Cloud fundamentals, EC2 instance deployment, S3 object storage, IAM policies, and CloudWatch logs.',
    phases: [
      {
        id: 'aws-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Cloud Fundamentals & Core Services',
        objective: 'Master EC2 instance provisioning, S3 bucket management, IAM roles/policies, Security Groups, and CloudWatch.',
        topics: [
          'Cloud Computing concepts (IaaS vs PaaS vs SaaS)',
          'AWS Global Infrastructure (Regions & Availability Zones)',
          'EC2 (Elastic Compute Cloud): Instance types, SSH access, Security Groups',
          'S3 (Simple Storage Service): Buckets, Objects, Presigned URLs, CORS',
          'IAM (Identity & Access Management): Users, Roles, Policies, Principle of Least Privilege',
          'CloudWatch: Logs, Metrics & Alarms',
          'AWS CLI usage & SDK Integration (@aws-sdk/client-s3)'
        ],
        practicalKnowledge: [
          'Generating secure S3 Presigned URLs for direct client image uploads',
          'Configuring EC2 Security Groups restricting open inbound ports'
        ],
        interviewKnowledge: [
          'Difference between IAM Roles (temporary credentials for AWS services) and IAM Users',
          'How S3 Presigned URLs enable secure file uploads without exposing AWS secret keys to frontend clients'
        ],
        task: {
          id: 'aws-t1',
          title: 'S3 Presigned URL File Upload Service & IAM Policy Design',
          description: 'Build a Node.js API service that generates AWS S3 Presigned URLs for secure client-side file uploads, complete with least-privilege IAM policy design.',
          requirements: [
            'Integrate @aws-sdk/client-s3 with Node.js Express',
            'Implement POST /api/upload/presigned-url returning short-lived upload URL (expires in 15 mins)',
            'Write IAM Policy JSON granting strictly PutObject permission on specific bucket path',
            'Document step-by-step EC2 deployment process with NGINX reverse proxy'
          ],
          evaluationCriteria: [
            'Presigned URL allows direct upload without passing binary through Express server',
            'IAM policy follows principle of least privilege'
          ]
        }
      }
    ]
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'technical',
    priority: 'NORMAL',
    phaseCount: 1,
    description: 'API testing, Collections, Environment Variables, Automated Test scripts, and Mock Servers.',
    phases: [
      {
        id: 'postman-p1',
        phaseNumber: 1,
        title: 'Phase 1 — API Automation & Collection Testing',
        objective: 'Master Postman Collections, Environment Variables, Pre-request scripts, Test assertions, and Newman CLI.',
        topics: [
          'Postman Workspace & Collection organization',
          'Environment & Global Variables ({{baseUrl}}, {{authToken}})',
          'Pre-request Scripts (setting dynamic timestamps, HMAC signatures)',
          'Test Scripts & pm.test() assertions (pm.response.to.have.status(200))',
          'Chaining API requests (extracting JWT from login response into environment variable)',
          'Postman Mock Servers',
          'Newman CLI for automated CI/CD Postman collection execution'
        ],
        practicalKnowledge: [
          'Writing automated test scripts verifying JSON schema structure and status codes',
          'Chaining Auth login requests to populate bearer tokens automatically across entire API suites'
        ],
        interviewKnowledge: [
          'How Pre-request and Test scripts execute in Postman sandbox execution pipeline',
          'Using Newman CLI to execute Postman collection test suites in GitHub Actions'
        ],
        task: {
          id: 'postman-t1',
          title: 'Automated Postman Test Suite & Newman Execution',
          description: 'Create a Postman Collection JSON export with environment variables, chained authentication request, and automated test assertions.',
          requirements: [
            'Request 1: POST /login -> auto-saves response token into pm.environment.set("jwt", token)',
            'Request 2: GET /protected -> uses Bearer {{jwt}} and asserts status 200 and schema validation',
            'Add tests verifying response time < 500ms',
            'Export Collection JSON and test runner commands via Newman'
          ],
          evaluationCriteria: [
            'Login request automatically sets auth token for subsequent requests',
            'All pm.test assertions execute cleanly'
          ]
        }
      }
    ]
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'technical',
    priority: 'NORMAL',
    phaseCount: 1,
    description: 'Serverless deployment, Git integration, Environment Variables, Edge Functions, and Preview deployments.',
    phases: [
      {
        id: 'vercel-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Serverless Deployment & Edge Infrastructure',
        objective: 'Master Vercel deployment pipeline, vercel.json config, Environment variables, Serverless functions, and Preview builds.',
        topics: [
          'Vercel Platform architecture & Global Edge Network',
          'Connecting Git repositories for automated CI/CD deployments',
          'Environment Variables configuration (Development, Preview, Production scopes)',
          'vercel.json configuration (headers, rewrites, redirects)',
          'Vercel Serverless Functions vs Edge Functions',
          'Preview Deployments & Branch deployments',
          'Domain binding & SSL certificate automated provisioning'
        ],
        practicalKnowledge: [
          'Configuring vercel.json rewrites for single-page application routing',
          'Managing environment variable secrets safely across preview and production environments'
        ],
        interviewKnowledge: [
          'Difference between Serverless Functions (Node.js runtime) and Edge Functions (V8 lightweight runtime at edge nodes)',
          'How Vercel Preview deployments accelerate pull request code reviews'
        ],
        task: {
          id: 'vercel-t1',
          title: 'Vercel Production Deployment & SPA Rewrite Configuration',
          description: 'Configure a project for Vercel production deployment complete with vercel.json rewrites, headers, and environment variable scopes.',
          requirements: [
            'Create vercel.json file with routing rewrites for SPA client routing',
            'Configure Security Headers in vercel.json (X-Content-Type-Options, X-Frame-Options)',
            'Document environment variable management for production vs preview',
            'Verify deployment readiness without build failures'
          ],
          evaluationCriteria: [
            'vercel.json routes cleanly to index.html',
            'Security headers applied'
          ]
        }
      }
    ]
  },
  {
    id: 'render',
    name: 'Render',
    category: 'technical',
    priority: 'NORMAL',
    phaseCount: 1,
    description: 'Web service hosting, Docker container deployments, Background Workers, Managed PostgreSQL, and Auto-deploys.',
    phases: [
      {
        id: 'render-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Web Services & Database Provisioning',
        objective: 'Master Render Web Services, Docker deployment on Render, Environment Groups, Managed Postgres/Redis, and Health Checks.',
        topics: [
          'Render Platform overview & service types (Web Services, Background Workers, Cron Jobs)',
          'Deploying Node.js Express APIs & Docker containers on Render',
          'Environment Groups for sharing secrets across services',
          'Render Managed PostgreSQL & Managed Redis provisioning',
          'Health Check paths & Auto-deploy on Git push',
          'Handling free-tier spinning down (cold starts) and keep-alive pingers'
        ],
        practicalKnowledge: [
          'Deploying containerized Express + PostgreSQL apps on Render',
          'Configuring custom Health Check HTTP endpoints for zero-downtime health monitoring'
        ],
        interviewKnowledge: [
          'How Render Web Services compare to Vercel Serverless (persistent server process vs on-demand serverless execution)',
          'Configuring Render blueprint render.yaml files for Infrastructure-as-Code'
        ],
        task: {
          id: 'render-t1',
          title: 'Render Web Service Deployment & Blueprint Architecture',
          description: 'Design a Render Blueprint render.yaml file declaring a Web Service API connected to Managed PostgreSQL database.',
          requirements: [
            'Create render.yaml blueprint file defining Web Service and Database',
            'Configure environment variables binding DB connection string dynamically',
            'Specify buildCommand and startCommand',
            'Set up healthCheckPath: /health'
          ],
          evaluationCriteria: [
            'Blueprint file follows valid Render spec',
            'Health check endpoint returns 200 OK status'
          ]
        }
      }
    ]
  },
  {
    id: 'npm',
    name: 'npm',
    category: 'technical',
    priority: 'NORMAL',
    phaseCount: 1,
    description: 'Package management, semantic versioning, scripts, npx, lockfiles, and publishing.',
    phases: [
      {
        id: 'npm-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Package Management & Build Scripts',
        objective: 'Master package.json structure, Semantic Versioning (SemVer), dependencies vs devDependencies, package-lock.json, and npx.',
        topics: [
          'package.json anatomy & Essential fields',
          'Semantic Versioning (SemVer: Major.Minor.Patch, ^ caret, ~ tilde)',
          'dependencies vs devDependencies vs peerDependencies',
          'package-lock.json & npm ci for deterministic builds',
          'npm scripts automation & lifecycle hooks (pre/post scripts)',
          'npx command usage for executing binary packages without global installation',
          'npm audit & fixing security vulnerabilities'
        ],
        practicalKnowledge: [
          'Using npm ci in CI/CD pipelines to guarantee exact lockfile dependency reproduction',
          'Writing custom lifecycle scripts (e.g. prebuild, build, postbuild)'
        ],
        interviewKnowledge: [
          'Difference between npm install and npm ci',
          'Difference between ^1.2.3 (allows minor/patch updates) and ~1.2.3 (allows patch updates only)'
        ],
        task: {
          id: 'npm-t1',
          title: 'Deterministic Dependency Setup & Custom Lifecycle Automation',
          description: 'Configure package.json with custom automated build scripts, strict SemVer dependencies, and audit security resolution.',
          requirements: [
            'Configure scripts for dev, build, lint, and prebuild',
            'Demonstrate usage of npx for one-off tool execution',
            'Explain package-lock.json integrity hash security checks',
            'Run npm audit and document vulnerability remediation steps'
          ],
          evaluationCriteria: [
            'Pre/post lifecycle hooks trigger in correct sequence',
            'Clean lockfile without version resolution conflicts'
          ]
        }
      }
    ]
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'technical',
    priority: 'NORMAL',
    phaseCount: 1,
    description: 'Responsive Grid system, utility classes, components, and customizable Sass variables.',
    phases: [
      {
        id: 'bs-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Grid System & Component Architecture',
        objective: 'Master Bootstrap 12-column grid system, container classes, flex utilities, components (Navbar, Modal, Cards), and Sass customization.',
        topics: [
          'Bootstrap 12-column Grid system (container, row, col-*, breakpoint modifiers)',
          'Flexbox utility classes (d-flex, justify-content-*, align-items-*)',
          'Spacing utilities (m-*, p-*, mx-auto)',
          'Core UI Components (Navbar, Cards, Modal, Toast, Accordion, Badges)',
          'Form controls & validation styling (is-valid, is-invalid)',
          'Customizing Bootstrap Sass variables ($primary, $theme-colors)'
        ],
        practicalKnowledge: [
          'Rapidly building responsive admin dashboards using Bootstrap 5 grid layout',
          'Overriding default Bootstrap Sass variables to apply custom brand colors'
        ],
        interviewKnowledge: [
          'How Bootstrap 12-column grid system calculates percentage widths using CSS flexbox',
          'Difference between Container and Container-fluid'
        ],
        task: {
          id: 'bs-t1',
          title: 'Bootstrap Admin Dashboard Grid & Component Layout',
          description: 'Build a responsive admin dashboard UI layout using Bootstrap 5 Grid, Flex utilities, Cards, and Modal components.',
          requirements: [
            'Create 12-column grid layout adapting from 1 column on mobile to 3 columns on desktop',
            'Implement Navbar with dropdown menu',
            'Implement interactive Modal dialog triggered by card action button',
            'Style form inputs with is-invalid validation states'
          ],
          evaluationCriteria: [
            'Responsive grid behaves predictably across breakpoint triggers (sm, md, lg)',
            'Bootstrap JavaScript components initialized properly'
          ]
        }
      }
    ]
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'technical',
    priority: 'NORMAL',
    phaseCount: 1,
    description: 'React animation library, motion components, AnimatePresence, layout animations, and gesture controls.',
    phases: [
      {
        id: 'fm-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Motion Components & Page Transitions',
        objective: 'Master motion.div, initial/animate/exit props, AnimatePresence, spring transitions, hover/tap gestures, and layout animations.',
        topics: [
          'motion component wrappers (motion.div, motion.button)',
          'Core props: initial, animate, exit, transition',
          'Transition options: duration, ease, type: "spring", stiffness, damping',
          'AnimatePresence for unmounting component exit animations',
          'Variants for clean declarative animation states',
          'Gesture animations (whileHover, whileTap, drag)',
          'Layout animations (layout prop for smooth DOM position changes)'
        ],
        practicalKnowledge: [
          'Creating smooth page transition wrapper components in React',
          'Animating dynamic list items inserting/deleting cleanly with AnimatePresence'
        ],
        interviewKnowledge: [
          'Why Framer Motion uses FLIP (First, Last, Invert, Play) technique under the hood for layout animations',
          'Why AnimatePresence requires immediate child components to have unique key props'
        ],
        task: {
          id: 'fm-t1',
          title: 'Animated Modal & Dynamic Re-orderable List',
          description: 'Build a React component suite using Framer Motion featuring smooth page entrance, modal slide-in with backdrop, and dynamic list exit animations.',
          requirements: [
            'Build AnimatedModal component using motion.div and AnimatePresence',
            'Build list component where adding/deleting items smoothly animates layout changes with layout prop',
            'Add whileHover={{ scale: 1.05 }} and whileTap={{ scale: 0.95 }} interactive feedback on buttons'
          ],
          evaluationCriteria: [
            'Modal exit animation completes before DOM removal',
            'List layout transitions run smoothly without visual jitter'
          ]
        }
      }
    ]
  }
];
