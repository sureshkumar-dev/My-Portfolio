import type { InterviewQuestion } from '../types';

export const interviewQuestions: InterviewQuestion[] = [
  // TECHNICAL
  {
    id: 'q-tech-js-1',
    title: 'JavaScript Event Loop & Microtask Queue vs Macrotask Queue',
    category: 'Technical',
    subCategory: 'JavaScript',
    question: 'Explain the internal working of the JavaScript Event Loop, Call Stack, Microtask Queue, and Macrotask Queue with execution order examples.',
    keyAnswerPoints: [
      'Single-threaded V8 Call Stack executes synchronous code first',
      'Web APIs offload async timers and I/O tasks',
      'Microtask Queue (Promises, process.nextTick, queueMicrotask) has higher priority than Macrotask Queue (setTimeout, setInterval, setImmediate)',
      'Event loop drains the entire Microtask Queue before processing the next single Macrotask'
    ],
    detailedAnswer: 'JavaScript operates on a single-threaded event-driven concurrency model. When code executes, synchronous tasks are pushed onto the Call Stack. Asynchronous calls (such as fetch or setTimeout) are registered with Web APIs. When completed, their callbacks are placed in queues.\n\nThe Microtask Queue holds Promise callbacks, process.nextTick, and queueMicrotask. The Macrotask (Callback) Queue holds setTimeout, setInterval, and I/O callbacks.\n\nCrucially, after the Call Stack becomes empty, the Event Loop drains EVERY task in the Microtask Queue before moving to pick ONE task from the Macrotask Queue. This cycle repeats continuously.',
    codeSnippet: `console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n// Output: 1, 4, 3, 2`
  },
  {
    id: 'q-tech-react-1',
    title: 'React Fiber Architecture & Reconciliation Algorithm',
    category: 'Technical',
    subCategory: 'React.js',
    question: 'How does React Fiber differ from the legacy Stack reconciler, and how does it enable Concurrent React features?',
    keyAnswerPoints: [
      'Stack reconciler was synchronous and recursive, locking the main thread during heavy updates',
      'Fiber introduces a linked-list unit of work data structure (child, sibling, return pointers)',
      'Work is divided into 2 phases: Render/Reconciliation (interruptible, asynchronous) and Commit (synchronous DOM mutations)',
      'Enables Concurrent features like useTransition and useDeferredValue to prioritize urgent user inputs over heavy background renders'
    ],
    detailedAnswer: 'React Fiber is a ground-up rewrite of React\'s reconciliation engine. The legacy stack reconciler executed component updates synchronously. On large component trees, this caused dropped frames and sluggish UI inputs.\n\nFiber represents every React element as a Fiber Node containing child, sibling, and return pointers. This transforms reconciliation into a loop over linked nodes that can pause, resume, yield to the browser main thread, or abort low-priority work.\n\nReconciliation happens in two phases: Phase 1 (Render) builds the work-in-progress tree asynchronously. Phase 2 (Commit) applies DOM changes synchronously, ensuring DOM state stays consistent without partial paints.',
    codeSnippet: `// Concurrent priority in React 18\nconst [isPending, startTransition] = useTransition();\nstartTransition(() => {\n  setHeavyFilterState(query); // Non-blocking low priority\n});`
  },
  {
    id: 'q-tech-node-1',
    title: 'Node.js Cluster vs Worker Threads',
    category: 'Technical',
    subCategory: 'Node.js',
    question: 'Compare Node.js Cluster module with Worker Threads. When should you use each in a production architecture?',
    keyAnswerPoints: [
      'Cluster forks separate OS processes sharing the same HTTP port (master-worker model)',
      'Worker Threads run multiple JS execution threads inside a SINGLE process sharing V8 heap memory via SharedArrayBuffer',
      'Use Cluster for scaling HTTP web servers across CPU cores to handle more concurrent network requests',
      'Use Worker Threads for CPU-bound tasks (image processing, encryption, heavy math) without blocking the main event loop'
    ],
    detailedAnswer: 'Node.js is single-threaded by default, but provides two distinct mechanisms for multi-core scaling:\n\n1. Cluster Module: Spawns independent Node.js OS processes. Each worker process has its own V8 instance, memory, and Event Loop. The master process load-balances incoming TCP network connections across worker processes. Ideal for scaling Express HTTP request capacity.\n\n2. Worker Threads Module: Spawns lightweight threads within a single Node.js process. Worker threads share the process memory space, making data transfer extremely fast via SharedArrayBuffer or MessageChannel. Ideal for CPU-intensive tasks like crypto hashing or video transcoding without thread IPC overhead.',
    codeSnippet: `// Worker Threads\nimport { Worker, isMainThread, parentPort } from 'worker_threads';\nif (isMainThread) {\n  const worker = new Worker('./worker.js');\n  worker.on('message', result => console.log(result));\n} else {\n  parentPort?.postMessage(heavyCalc());\n}`
  },

  // CS FUNDAMENTALS
  {
    id: 'q-cs-dsa-1',
    title: 'System Design of LRU Cache',
    category: 'CS',
    subCategory: 'DSA',
    question: 'How do you design a Least Recently Used (LRU) Cache with O(1) time complexity for both get() and put() operations?',
    keyAnswerPoints: [
      'Combine a HashMap and a Doubly Linked List',
      'HashMap stores key -> LinkedList Node pointer for O(1) lookup',
      'Doubly Linked List maintains access ordering (Head = Most Recent, Tail = Least Recent)',
      'Moving a node to head and evicting from tail run in O(1) pointer updates'
    ],
    detailedAnswer: 'To achieve O(1) for get and put in an LRU Cache, we combine two data structures:\n1. A Doubly Linked List with dummy head and tail nodes. The head represents the most recently used item, while the tail represents the least recently used item.\n2. A Hash Map mapping keys to Doubly Linked List node references.\n\nWhen get(key) is called: We look up the node in O(1) from the HashMap, remove it from its current list position, and insert it at the Head. Return node value.\n\nWhen put(key, value) is called: If key exists, update value and move node to Head. If new key and capacity is reached, delete tail node from both HashMap and Linked List, then insert new node at Head.',
    codeSnippet: `class LRUCache {\n  private map = new Map<number, Node>();\n  private head = new Node(0,0);\n  private tail = new Node(0,0);\n  // O(1) get & put implementation...\n}`
  },
  {
    id: 'q-cs-dbms-1',
    title: 'ACID Properties & Transaction Isolation Levels',
    category: 'CS',
    subCategory: 'DBMS',
    question: 'Define ACID properties and explain the 4 standard SQL Transaction Isolation levels along with concurrency anomalies.',
    keyAnswerPoints: [
      'Atomicity (all or nothing), Consistency (valid state transitions), Isolation (independent transactions), Durability (persisted post-commit)',
      '4 Isolation Levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable',
      'Anomalies: Dirty Read (reading uncommitted data), Non-Repeatable Read (re-reading modified committed data), Phantom Read (new rows appearing in range query)',
      'MySQL InnoDB default is Repeatable Read using Next-Key Locks to prevent Phantom Reads'
    ],
    detailedAnswer: 'ACID properties guarantee relational database transaction reliability:\n- Atomicity: All operations complete successfully or the entire transaction rolls back.\n- Consistency: Invariants and constraints enforced across commits.\n- Isolation: Concurrent transactions do not interfere with each other.\n- Durability: Committed updates survive system crashes via write-ahead logging (Redo Log).\n\nTransaction Isolation Levels:\n1. Read Uncommitted: Lowest level. Vulnerable to Dirty Reads, Non-Repeatable Reads, and Phantom Reads.\n2. Read Committed: Prevents Dirty Reads. Uses short-term locks on reads.\n3. Repeatable Read: Prevents Dirty & Non-Repeatable Reads. MySQL InnoDB uses MVCC snapshots + Next-Key locks.\n4. Serializable: Highest level. Strict 2-Phase Locking or Serializable Snapshot Isolation. Prevents all anomalies at the cost of concurrency speed.',
    codeSnippet: `SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSTART TRANSACTION;\n-- queries...\nCOMMIT;`
  },

  // RESUME
  {
    id: 'q-res-cartify-1',
    title: 'Cartify Architecture & Redis Caching Defense',
    category: 'Resume',
    subCategory: 'Projects',
    question: 'In your Cartify project, how did you implement Redis caching and ensure cache consistency during seller inventory price changes?',
    keyAnswerPoints: [
      'Used Cache-Aside pattern (Check Redis -> On Miss query MySQL & set Redis TTL 60s)',
      'Active cache invalidation triggered in updateProduct controller',
      'Pattern key deletion for products:search:* keys when product state mutates',
      'Fallback safety net: strict 60-second TTL on all cache keys'
    ],
    detailedAnswer: 'In Cartify, I implemented Redis caching using the Cache-Aside pattern for read-heavy product searches. When a buyer executes a query, Express checks Redis key `products:search:<query>`. If present, cached JSON returns in <8ms. On a miss, it queries MySQL, populates Redis with a 60s TTL, and returns 200.\n\nTo prevent buyers from seeing stale prices after a seller updates inventory, I implemented Active Cache Invalidation. Inside the updateProduct controller, upon successful MySQL UPDATE commit, the service executes a key purge matching product search cache keys. Additionally, the 60-second TTL acts as a fallback guarantee against network edge failures during deletion.',
    codeSnippet: `// Express Controller Cache-Aside\nconst cached = await redis.get(cacheKey);\nif (cached) return res.json(JSON.parse(cached));\nconst products = await db.query(...);\nawait redis.setex(cacheKey, 60, JSON.stringify(products));`
  },

  // HR & BEHAVIORAL
  {
    id: 'q-hr-star-1',
    title: 'Handling Technical Conflict in a Team (STAR Method)',
    category: 'HR',
    subCategory: 'Behavioral',
    question: 'Describe a situation where you had a technical disagreement with a team member. How did you resolve it?',
    keyAnswerPoints: [
      'Situation: Disagreement on database selection (MongoDB vs MySQL) for project feature',
      'Task: Agree on an optimal architectural decision without delaying sprint deadline',
      'Action: Conducted objective benchmarking, created a trade-off matrix, presented data to team',
      'Result: Team adopted solution based on empirical data; project delivered on schedule'
    ],
    detailedAnswer: 'Situation: During a collaborative sprint, a team member wanted to use MongoDB for a new user order module, while I believed MySQL was necessary for transactional data consistency.\n\nTask: My goal was to resolve the disagreement constructively without creating friction or missing our project milestone.\n\nAction: Instead of debating opinions, I suggested a data-driven approach. I built two small proof-of-concept prototypes and created a technical trade-off matrix evaluating transactional safety, schema flexibility, and query complexity. I presented the findings in a team meeting.\n\nResult: The team unanimously agreed that MySQL\'s ACID guarantees were essential for order integrity. We implemented MySQL and delivered the feature 2 days ahead of deadline. This experience reinforced the value of data-backed collaborative decisions.',
    codeSnippet: undefined
  }
];
