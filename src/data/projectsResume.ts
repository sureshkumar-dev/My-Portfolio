import type { ProjectTrack } from '../types';

export const projectTracks: ProjectTrack[] = [
  {
    id: 'cartify',
    title: 'Cartify — E-Commerce Marketplace',
    type: 'project',
    companyOrContext: 'Flagship Full-Stack Portfolio Project',
    role: 'Lead Full-Stack Developer & Architect',
    summary: 'A multi-vendor e-commerce marketplace supporting Buyer, Seller, and Admin roles with JWT authentication, RBAC, Redis query caching, and MySQL transactional data integrity.',
    problemStatement: 'Modern multi-vendor e-commerce platforms struggle with high database query latency during peak traffic, complex multi-role authorization enforcement (Buyers vs Sellers vs Admins), and maintaining data consistency during simultaneous order checkouts.',
    purpose: 'To build a high-performance, secure, multi-tenant e-commerce platform that isolates user roles, accelerates catalog search throughput via Redis caching, and guarantees ACID compliance during payment and order state transitions.',
    features: [
      'Buyer Workflow: Product search, debounced filtering, cart management, order checkout, order status tracking',
      'Seller Workflow: Product inventory management, catalog updates, sales analytics dashboard',
      'Admin Workflow: User management, seller approval, platform analytics, system audit logs',
      'Stateless JWT Authentication with Refresh Token rotation',
      'Role-Based Access Control (RBAC) protecting sensitive API routes',
      'Redis Cache-Aside caching layer for product catalog search queries',
      'Transactional MySQL order processing preventing inventory over-selling'
    ],
    architecture: 'Layered Monolithic REST API Architecture: React.js SPA Frontend -> NGINX Reverse Proxy -> Express.js API Gateway -> JWT Auth & RBAC Middleware -> Controller Layer -> Service Business Logic -> Redis Cache & MySQL Relational DB',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'TypeScript',
      'MySQL',
      'Redis',
      'JWT',
      'Tailwind CSS',
      'Docker'
    ],
    techSelectionRationale: [
      { tech: 'React.js & TypeScript', reason: 'Provides high UI component modularity, strict compile-time type safety for complex cart state, and seamless SPA user experience.' },
      { tech: 'Node.js & Express.js', reason: 'Offers high-concurrency non-blocking I/O ideal for handling frequent REST API queries from buyers browsing catalog products.' },
      { tech: 'MySQL', reason: 'Ensures strict ACID transactional guarantees for financial orders and relational integrity between Users, Products, Orders, and Items.' },
      { tech: 'Redis', reason: 'Eliminates redundant MySQL queries by caching frequently read product search results in memory with 60-second TTL expiration.' },
      { tech: 'JWT & RBAC', reason: 'Enables stateless authentication horizontal scaling while enforcing strict granular role permissions across API endpoints.' }
    ],
    dbDesign: 'Normalized 3NF MySQL Relational Schema: users (id, name, email, password_hash, role_enum), products (id, seller_id FK, name, price, stock, category_id FK), orders (id, buyer_id FK, total_amount, status_enum, created_at), order_items (id, order_id FK, product_id FK, quantity, price), categories (id, name)',
    apiFlow: [
      'POST /api/v1/auth/login -> Validates credentials, issues HttpOnly Refresh Cookie + Access Token JSON',
      'GET /api/v1/products?search=phone -> Express checks Redis cache key `products:search:phone`; if hit returns cached JSON instantly; if miss queries MySQL, populates Redis, returns 200',
      'POST /api/v1/orders/checkout -> Auth guard validates JWT -> RBAC checks BUYER role -> Begins MySQL Transaction -> Checks stock -> Deducts stock -> Inserts Order & OrderItems -> Commits Transaction -> Invalidates Redis product cache -> Returns 201 Created'
    ],
    authAuthz: 'Dual-Token JWT Authentication (15-min Access Token in Bearer header + 7-day Refresh Token in HttpOnly cookie). Authorization enforced via requireRole(\'ADMIN\', \'SELLER\') and requirePermission(\'MANAGE_CATALOG\') Express middleware guards.',
    exactContribution: [
      'Architected and implemented the entire Node.js Express REST API backend and MySQL relational schema',
      'Designed and integrated the Redis caching layer using Cache-Aside strategy, reducing catalog query latency from 180ms to <8ms',
      'Implemented stateless dual-token JWT authentication with automatic Refresh Token rotation and Redis session blacklist',
      'Built responsive React + Tailwind CSS dashboard interfaces for Buyer cart workflows and Seller inventory management'
    ],
    challengesBugs: [
      {
        challenge: 'Race conditions during simultaneous order checkouts causing negative stock inventory counts',
        solution: 'Wrapped checkout stock validation and deduction inside atomic MySQL InnoDB transactions using SELECT ... FOR UPDATE row-level locking.'
      },
      {
        challenge: 'Stale product pricing displayed to buyers after sellers updated inventory prices',
        solution: 'Implemented active cache invalidation in Express controller; modifying or updating a product automatically purges corresponding Redis cache keys.'
      }
    ],
    security: [
      'Passwords hashed with bcrypt using 12 salt rounds',
      'JWT stored in HttpOnly, Secure, SameSite=Strict cookies to prevent XSS token theft',
      'SQL Injection mitigated 100% using parameterized SQL queries',
      'Rate limiting applied using Express-rate-limit (100 requests per 15 mins per IP)',
      'Helmet security headers enabled to block clickjacking and MIME sniffing'
    ],
    performance: [
      'Redis caching reduced average API response time for product listings from 180ms to <8ms',
      'Composite indexes added to MySQL products table on (category_id, price, status)',
      'React component memoization (React.memo + useMemo) prevented unnecessary cart re-renders'
    ],
    deployment: 'Containerized using Multi-Stage Dockerfile and deployed on Vercel (Frontend SPA) and Render (Node API + Managed MySQL & Redis).',
    tradeOffs: [
      'Chose MySQL over MongoDB because financial order transactions required strict ACID guarantees over schema flexibility.',
      'Chose Monolithic Express API over Microservices to avoid distributed transaction complexity during initial release.'
    ],
    futureImprovements: [
      'Implement BullMQ background queue for sending asynchronous order confirmation emails and SMS notifications',
      'Integrate Stripe API payment gateway for live credit card transaction processing',
      'Add Elasticsearch for full-text product search with fuzzy matching'
    ],
    pitch30s: 'Cartify is a high-performance multi-vendor e-commerce marketplace I built using React, Node.js, Express, MySQL, and Redis. It features multi-role authorization for Buyers, Sellers, and Admins, dual-token JWT authentication, and Redis query caching that reduced product catalog latency from 180ms to under 8ms.',
    pitch2m: 'Cartify is a full-stack multi-vendor e-commerce platform designed to handle complex buyer and seller workflows with speed and transactional security. I architected the backend using Node.js, Express, and TypeScript, backed by a normalized MySQL relational database for strict order integrity. To handle high traffic browsing, I integrated Redis as an in-memory caching layer using the Cache-Aside pattern. On the security side, I implemented stateless dual-token JWT authentication with Refresh Token rotation and granular Role-Based Access Control protecting seller and admin routes. During load testing, I resolved race conditions during checkout using MySQL row-level locks. Cartify demonstrates my ability to engineer production-ready, secure, and scalable web applications.',
    pitch5m: 'Cartify is a flagship full-stack marketplace application engineered for high-concurrency multi-vendor operations. Let me walk you through the system architecture, database design, and key technical challenges.\n\nFirst, architectural layers: The frontend is a React SPA built with TypeScript and Tailwind CSS, providing clean state management and responsive glassmorphic interfaces. The frontend communicates with a modular Node.js Express REST API backend.\n\nSecond, authentication & authorization: Security is built around a dual-token JWT mechanism. Access Tokens expire in 15 minutes and are transmitted in Bearer headers, while long-lived Refresh Tokens are stored in HttpOnly, SameSite cookies. Our authorization pipeline uses custom RBAC middleware guards that verify roles (Buyer, Seller, Admin) before granting access to controllers.\n\nThird, database & caching strategy: For data storage, I designed a normalized 3NF MySQL schema with foreign keys and cascade rules across Users, Products, Orders, and OrderItems. To optimize read-heavy product catalog searches, I implemented Redis caching using the Cache-Aside pattern. When a user searches for products, Express checks Redis first. On a cache miss, it queries MySQL, populates Redis with a 60-second TTL, and returns the payload. This reduced catalog latency from 180ms to <8ms.\n\nFourth, critical technical challenge: During stress testing, simultaneous order checkouts for limited-stock items caused race conditions where stock went negative. I resolved this by wrapping stock verification and deduction inside atomic MySQL InnoDB transactions with explicit SELECT ... FOR UPDATE row locks, ensuring thread-safe inventory mutations.\n\nIn summary, Cartify highlights my expertise across frontend design, backend API architecture, database optimization, caching, and production security.',
    interviewQuestions: [
      {
        question: 'Why did you choose MySQL instead of MongoDB for Cartify?',
        answer: 'I selected MySQL because an e-commerce platform handles financial transactions and inventory updates that require strict ACID compliance, relational foreign key constraints, and multi-table consistency. While MongoDB offers schema flexibility, MySQL InnoDB guaranteed atomic order transactions without risk of partial writes.',
        crossQuestioning: 'Follow-up: If your product catalog grew to 50 million items with unstructured properties, how would your architecture adapt?\nResponse: I would adopt a polyglot persistence architecture: keep MySQL for transactional Orders and Payments, but migrate the Product Catalog to MongoDB or Elasticsearch to handle dynamic attributes and fast full-text searching.'
      },
      {
        question: 'How does your Redis cache invalidation work when a seller updates product price?',
        answer: 'I implemented active cache invalidation. In the updateProduct Express controller, after the MySQL update query succeeds, the code executes a Redis key deletion pattern for matching catalog cache keys. This ensures subsequent buyer read queries trigger a fresh MySQL fetch and re-populate Redis with updated pricing.',
        crossQuestioning: 'Follow-up: What if the Redis deletion fails after the MySQL update succeeds?\nResponse: To prevent long-term stale data, all Redis cache keys are stored with a strict TTL expiration (e.g. 60 seconds), serving as a safety net fallback even if active deletion encounters a network error.'
      },
      {
        question: 'How do you prevent unauthorized buyers from accessing seller inventory management endpoints?',
        answer: 'All API routes are protected by a two-stage middleware pipeline: first, authGuard verifies and decodes the JWT token attached to the request; second, requireRole(\'SELLER\', \'ADMIN\') inspects req.user.role and immediately returns 403 Forbidden if the user is a Buyer.',
        crossQuestioning: 'Follow-up: How do you prevent Seller A from editing Seller B\'s products?\nResponse: In addition to role checking, the update controller enforces resource ownership scoping: `WHERE id = productId AND seller_id = req.user.id`. If seller_id doesn\'t match, it returns 404/403, preventing BOLA/IDOR vulnerabilities.'
      }
    ],
    masterTask: {
      id: 'proj-t1',
      title: 'Cartify Deep-Dive Defense & Architectural Mastery Presentation',
      description: 'Deliver a comprehensive 5-minute deep-dive presentation of Cartify, answering all 3 cross-questioning scenarios with technical confidence and zero hesitation.',
      requirements: [
        'Deliver 5-minute system architecture pitch out loud',
        'Defend technical trade-off choice (MySQL vs MongoDB)',
        'Explain Redis Cache-Aside invalidation mechanics step-by-step',
        'Explain BOLA/IDOR protection code pattern for multi-tenant isolation'
      ],
      evaluationCriteria: [
        'Spoke with high technical clarity and confidence',
        'All 3 cross-questioning scenarios answered accurately'
      ]
    }
  },
  {
    id: 'farmguard',
    title: 'FarmGuard — Agricultural Monitoring System',
    type: 'project',
    companyOrContext: 'Full-Stack IoT & Data Monitoring Application',
    role: 'Full-Stack Developer',
    summary: 'An agricultural monitoring system providing real-time crop environmental metrics visualization, automated alert thresholds, and soil analytics dashboards for farmers.',
    problemStatement: 'Farmers lack real-time visibility into soil moisture, temperature fluctuation, and environmental metrics, leading to over-watering, crop loss, and delayed intervention during sudden weather shifts.',
    purpose: 'To empower farmers with real-time environmental monitoring dashboards, historical metric trends, and automated threshold alerts via web and mobile interfaces.',
    features: [
      'Real-time soil moisture and ambient temperature dashboard metrics',
      'Historical environmental analytics charts using Chart.js',
      'Automated threshold alert configurations (email/SMS alerts on critical dryness)',
      'Crop field mapping and multi-sensor node grouping',
      'REST API backend for data ingestion from IoT sensor payloads'
    ],
    architecture: 'React.js Frontend -> Node.js Express API Backend -> MongoDB Time-Series Collection -> Chart.js Data Visualization',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Chart.js',
      'Tailwind CSS'
    ],
    techSelectionRationale: [
      { tech: 'MongoDB', reason: 'High write throughput capacity ideal for continuous time-series sensor metric ingestion.' },
      { tech: 'React.js & Chart.js', reason: 'Enables fluid interactive real-time data visualization charts and responsive metric updates.' }
    ],
    dbDesign: 'MongoDB Collections: sensor_nodes (id, location, crop_type), readings (node_id FK, timestamp, moisture_level, temp_celsius, humidity), alerts (node_id FK, alert_type, status, triggered_at)',
    apiFlow: [
      'POST /api/v1/sensors/data -> Sensor payload ingested -> Validates threshold -> Saves reading -> If moisture < min_threshold triggers alert notification',
      'GET /api/v1/analytics/field/:id -> Aggregates past 24 hours reading averages grouped by hour -> Returns formatted JSON payload for Chart.js rendering'
    ],
    authAuthz: 'JWT Authentication with Farmer and Agricultural Advisor role permissions.',
    exactContribution: [
      'Developed the Node.js Express API ingestion endpoints for incoming sensor metrics',
      'Designed MongoDB Aggregation pipelines calculating hourly and daily environmental metric averages',
      'Built interactive frontend telemetry charts using React and Chart.js'
    ],
    challengesBugs: [
      {
        challenge: 'High volume of sensor readings cluttering database and slowing down historical chart rendering',
        solution: 'Built MongoDB aggregation pipeline that pre-computes hourly metric averages into a consolidated daily summary collection.'
      }
    ],
    security: [
      'API Key authentication for IoT sensor payload ingestion endpoints',
      'Input sanitization validating incoming numeric metric bounds'
    ],
    performance: [
      'MongoDB compound index on (node_id, timestamp DESC) accelerated historical chart queries by 80%',
      'Debounced chart window resizing event handlers'
    ],
    deployment: 'Deployed API on Render and Frontend on Vercel.',
    tradeOffs: [
      'Chose MongoDB over SQL because sensor data payloads vary across sensor node versions.'
    ],
    futureImprovements: [
      'Integrate WebSocket connection for instant live metric streaming updates',
      'Implement Machine Learning crop yield predictive modeling based on historical weather trends'
    ],
    pitch30s: 'FarmGuard is an agricultural monitoring platform built with React, Node.js, and MongoDB. It ingests real-time soil moisture and environmental metrics, displaying interactive analytics charts via Chart.js and triggering automated threshold alerts for farmers.',
    pitch2m: 'FarmGuard addresses critical agricultural challenges by providing farmers with real-time visibility into environmental crop metrics. I developed the full-stack system using React, Node.js, Express, and MongoDB. On the backend, I engineered ingestion endpoints capable of handling frequent sensor telemetry payloads. I used MongoDB aggregation pipelines to calculate hourly and daily average trends, which are rendered on the frontend using Chart.js. I also implemented automated threshold alert logic that notifies farmers when soil moisture drops below safety levels.',
    pitch5m: 'FarmGuard is a full-stack IoT telemetry and agricultural monitoring platform. Let me explain the technical architecture.\n\nThe core challenge in agricultural IoT is processing high-frequency sensor readings without degrading historical analytical query performance. I structured the backend using Node.js and Express, backed by MongoDB.\n\nWhen sensor nodes submit metric payloads (moisture, temperature, humidity), the API validates the readings and saves them into a MongoDB readings collection indexed on node_id and timestamp. If metrics cross critical thresholds, an automated alert workflow is triggered.\n\nTo power frontend interactive charts efficiently, I wrote MongoDB aggregation pipelines using $match, $group, and $project stages that pre-aggregate raw minute-by-minute data into hourly averages. On the frontend, React components consume these aggregated feeds to render fluid trend charts using Chart.js. FarmGuard showcases my ability to work with time-series data aggregation, analytics UI components, and real-time threshold monitoring.',
    interviewQuestions: [
      {
        question: 'How did you handle high-frequency sensor data ingestion in FarmGuard?',
        answer: 'I designed streamlined POST endpoints with light payload validation and compound indexing on (node_id, timestamp) in MongoDB. To prevent query slowdowns, raw readings were periodically aggregated into hourly summaries, keeping the main chart queries extremely fast.',
        crossQuestioning: 'Follow-up: What would you change if telemetry traffic increased to 10,000 requests per second?\nResponse: I would introduce a Redis message queue or Kafka stream buffer in front of MongoDB to absorb spike ingestion traffic and process writes asynchronously via background worker clusters.'
      }
    ],
    masterTask: {
      id: 'proj-t2',
      title: 'FarmGuard Technical Defense & Aggregation Pipeline Breakdown',
      description: 'Deliver a 2-minute technical breakdown of FarmGuard sensor ingestion and MongoDB aggregation pipeline design.',
      requirements: [
        'Explain MongoDB time-series indexing strategy out loud',
        'Detail aggregation pipeline stages ($match, $group, $project)'
      ],
      evaluationCriteria: [
        'Clear explanation of data aggregation performance optimization'
      ]
    }
  },
  {
    id: 'smart-exam',
    title: 'Smart Exam Proctoring System',
    type: 'project',
    companyOrContext: 'Academic & Examination Security Project',
    role: 'Full-Stack & Computer Vision Developer',
    summary: 'An online examination proctoring application featuring automated face detection anomaly alerts, active tab switching detection, and secure exam submission handling.',
    problemStatement: 'Online examinations suffer from academic dishonesty through tab switching, unauthorized secondary individuals in room, or candidates looking away from screen during tests.',
    purpose: 'To provide educational institutions with an automated, secure online examination platform that monitors candidate focus, logs integrity violation events, and generates proctor audit logs.',
    features: [
      'Real-time webcam video stream monitoring & anomaly detection',
      'Browser focus tracking (detects tab switching and window minimizing)',
      'Automated strike counter (auto-submits exam upon reaching 3 violation strikes)',
      'Timed quiz interface with auto-save question progress',
      'Admin Proctor Dashboard displaying candidate violation audit trails'
    ],
    architecture: 'React.js Frontend (Webcam API + Page Visibility API) -> Express.js REST API Backend -> MongoDB Database',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'Tailwind CSS'
    ],
    techSelectionRationale: [
      { tech: 'React.js', reason: 'Allows seamless integration with HTML5 MediaDevices Webcam API and Page Visibility events without full page reloads.' },
      { tech: 'Node.js & MongoDB', reason: 'Efficiently logs lightweight event violation records in real-time.' }
    ],
    dbDesign: 'MongoDB Collections: exams (id, title, duration_mins), questions (exam_id FK, prompt, options, correct_idx), attempts (candidate_id FK, exam_id FK, status, strike_count, violation_logs array)',
    apiFlow: [
      'POST /api/v1/proctor/violation -> Client detects tab blur -> Sends violation event -> Server increments strike counter in DB -> Returns remaining strikes',
      'POST /api/v1/exams/submit -> Evaluates candidate answers -> Calculates score -> Finalizes attempt status'
    ],
    authAuthz: 'Role-Based Authentication (Student vs Proctor / Admin).',
    exactContribution: [
      'Built the React examination candidate interface with browser Page Visibility API event listeners',
      'Implemented the violation strike logging backend and automated submission triggers',
      'Designed the Proctor Admin Dashboard displaying candidate integrity scores'
    ],
    challengesBugs: [
      {
        challenge: 'Accidental browser tab loss causing immediate false-positive exam termination',
        solution: 'Implemented a 3-strike tolerance rule with warning modal popups before triggering hard auto-submission.'
      }
    ],
    security: [
      'Disabled copy/paste, right-click, and keyboard shortcut events during exam mode',
      'JWT protected proctor scoring API routes'
    ],
    performance: [
      'Client-side event debouncing on rapid blur/focus events',
      'Optimized lightweight JSON payloads for instant violation logging'
    ],
    deployment: 'Deployed on Vercel and Render.',
    tradeOffs: [
      'Chose client-side visibility event detection for immediate response speed over heavy video streaming server analysis.'
    ],
    futureImprovements: [
      'Integrate WebRTC for live multi-candidate video streaming to human proctors',
      'Add TensorFlow.js client-side head pose estimation for accurate gaze tracking'
    ],
    pitch30s: 'Smart Exam Proctoring System is an online examination security web app built with React, Node.js, and MongoDB. It monitors candidate integrity by detecting browser tab switches and webcam anomalies, automatically issuing violation strikes and generating proctor audit logs.',
    pitch2m: 'The Smart Exam Proctoring System was designed to enforce integrity during remote online examinations. I developed the application using React, Node.js, Express, and MongoDB. On the frontend, I utilized the browser Page Visibility API and HTML5 MediaDevices to track candidate focus and detect unauthorized actions like tab switching or minimizing windows. When a violation occurs, the system logs the incident to the MongoDB backend and increments a strike counter, automatically submitting the exam if the threshold is breached. I also created an Admin Dashboard for proctors to review candidate audit trails.',
    pitch5m: 'The Smart Exam Proctoring System is an automated examination security platform built to maintain academic integrity in remote testing environments. Let me break down the technical design.\n\nThe application consists of three main modules: Candidate Examination Engine, Integrity Monitoring Layer, and Proctor Admin Dashboard.\n\nThe candidate engine is built in React, managing timed quiz progress with localStorage backup to prevent data loss on network blinks. The integrity layer attaches listeners to window blur and visibilitychange events, disabling right-click, text selection, and developer shortcuts.\n\nWhen a candidate switches tabs, the event trigger immediately dispatches a payload to the Express API endpoint POST /api/v1/proctor/violation. The backend records the violation timestamp and increments candidate strike count in MongoDB. If strikes reach 3, the backend forces exam status to SUBMITTED_VIOLATION. The proctor dashboard gives administrators real-time visibility into active candidate strike counts and event logs.',
    interviewQuestions: [
      {
        question: 'How did you prevent candidates from bypassing browser tab switching detection?',
        answer: 'I combined multiple browser events including document.visibilityState, window.onblur, and mouseleave events. Additionally, keyboard shortcuts (Alt+Tab, Ctrl+C, Ctrl+V, F12) were intercepted and blocked via event.preventDefault().',
        crossQuestioning: 'Follow-up: Could a candidate bypass this by opening a secondary browser window on another monitor?\nResponse: Client-side event listeners track window focus loss regardless of secondary monitors. However, for complete security, integrating client-side AI head pose estimation (TensorFlow.js) would detect when a candidate gazes away from the primary screen.'
      }
    ],
    masterTask: {
      id: 'proj-t3',
      title: 'Smart Exam Proctoring Technical Defense',
      description: 'Deliver a 2-minute technical pitch explaining browser security event listening and violation strike tracking architecture.',
      requirements: [
        'Explain Page Visibility API integration out loud',
        'Defend 3-strike tolerance rule design choice'
      ],
      evaluationCriteria: [
        'Clear explanation of frontend security event handling'
      ]
    }
  },
  {
    id: 'alchem-digital',
    title: 'Alchem Digital — Full-Stack Developer Trainee',
    type: 'experience',
    companyOrContext: 'Alchem Digital',
    role: 'Full-Stack Developer Trainee',
    summary: 'Trainee experience focused on building production-grade MERN stack web applications, REST API development, component libraries, and collaborative Agile workflows.',
    problemStatement: 'Adapting to fast-paced production team standards, delivering clean modular code, adhering to strict API contracts, and participating in daily Agile scrums.',
    purpose: 'To gain real-world software engineering experience building client-facing web applications using modern React, Node.js, Express, and database technologies.',
    features: [
      'Developed reusable React UI component libraries conforming to design specs',
      'Built modular Express.js REST API controllers with input validation',
      'Integrated MongoDB and MySQL database persistence layers',
      'Participated in daily Agile standups, code reviews, and Git feature branch workflows'
    ],
    architecture: 'Production MERN Stack Architecture with Git Flow version control.',
    techStack: [
      'React.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'Git',
      'Tailwind CSS'
    ],
    techSelectionRationale: [
      { tech: 'MERN Stack & TypeScript', reason: 'Industry-standard stack for building scalable full-stack web applications quickly.' }
    ],
    dbDesign: 'Production relational and document schemas adhering to 3NF and normalized MongoDB document patterns.',
    apiFlow: [
      'Agile Sprint Workflow: Jira Ticket -> Git Feature Branch -> Express Controller & React UI -> Code Review -> Merge to Staging'
    ],
    authAuthz: 'JWT Authentication and RBAC route protection.',
    exactContribution: [
      'Engineered REST API endpoints for user profile and content management modules',
      'Refactored legacy React class components into modern functional components with hooks',
      'Fixed priority bugs identified during QA sprint testing phases'
    ],
    challengesBugs: [
      {
        challenge: 'Adapting to established team codebases with strict linting and PR code review guidelines',
        solution: 'Adopted disciplined Git Flow branching, clear commit messages, and automated pre-commit linting.'
      }
    ],
    security: [
      'Enforced input validation across all trainee API pull requests',
      'Stored secret API keys in environment variables'
    ],
    performance: [
      'Optimized frontend React component re-renders using React.memo',
      'Added database indexes to eliminate slow API query response times'
    ],
    deployment: 'Vercel and Render staging environments.',
    tradeOffs: [
      'Prioritized strict code review compliance and clean architecture over rapid messy coding.'
    ],
    futureImprovements: [
      'Deepen knowledge of Kubernetes and microservices orchestration in future roles'
    ],
    pitch30s: 'As a Full-Stack Developer Trainee at Alchem Digital, I built production-grade MERN stack web features, developed modular Express REST APIs, refactored React components, and collaborated in an Agile team environment using Git feature branch workflows.',
    pitch2m: 'During my time as a Full-Stack Developer Trainee at Alchem Digital, I gained valuable hands-on experience building production web applications in an Agile team environment. I worked across the full MERN stack, writing clean REST API endpoints in Node.js and Express while building responsive React UI components. I actively participated in sprint planning, code reviews, and daily standups. My work helped improve component reusability, eliminate database query bottlenecks, and fix priority bugs before staging deployments.',
    pitch5m: 'My Full-Stack Developer Trainee experience at Alchem Digital was instrumental in shaping my professional software engineering practices. Let me summarize my key contributions and learnings.\n\nFirst, Technical Execution: I was responsible for developing end-to-end features using React, TypeScript, Node.js, and Express. I built modular REST API controllers, integrated schema validation using Zod, and connected controllers to MongoDB and MySQL databases.\n\nSecond, Frontend Modernization: I refactored legacy component modules into clean functional React components utilizing custom hooks, useMemo, and useCallback to reduce unnecessary re-renders.\n\nThird, Engineering Workflow: I worked in a structured Agile scrum framework, taking Jira user stories from concept to deployment. I used Git feature branch workflows, submitted detailed Pull Requests, addressed code review feedback, and ensured all code passed automated CI linting checks. This experience taught me how to write clean, maintainable production code that aligns with team standards.',
    interviewQuestions: [
      {
        question: 'What was your biggest technical takeaway from your Alchem Digital trainee experience?',
        answer: 'My biggest takeaway was learning how to write production-grade code designed for readability, testability, and maintainability. I learned that writing working code is only step one; structuring code cleanly with separation of concerns, strict type safety, and proper error handling is what makes code production-ready.',
        crossQuestioning: 'Follow-up: How did you handle constructive criticism during Pull Request code reviews?\nResponse: I viewed PR code reviews as an incredible learning opportunity. I carefully reviewed feedback, asked clarifying questions when needed, implemented requested refactorings promptly, and adopted those lessons into my future coding practices.'
      }
    ],
    masterTask: {
      id: 'proj-t4',
      title: 'Alchem Digital Trainee Defense Pitch',
      description: 'Deliver a 2-minute professional pitch detailing your trainee contributions, Agile workflow experience, and technical growth at Alchem Digital.',
      requirements: [
        'Explain Agile scrum sprint participation out loud',
        'Highlight code review and PR refactoring experience'
      ],
      evaluationCriteria: [
        'Professional tone highlighting team collaboration and production readiness'
      ]
    }
  },
  {
    id: 'hitakey-infosys',
    title: 'Hitakey Infosys — Data Analyst Intern',
    type: 'experience',
    companyOrContext: 'Hitakey Infosys',
    role: 'Data Analyst Intern',
    summary: 'Internship focused on SQL data analysis, database query optimization, data cleaning, and business intelligence report generation.',
    problemStatement: 'Raw business operational datasets contained duplicate records, missing null fields, and unindexed slow SQL queries, hindering accurate business reporting.',
    purpose: 'To extract actionable business insights from operational datasets through data cleaning, SQL query analysis, and data visualization report generation.',
    features: [
      'Wrote complex SQL queries involving multi-table JOINs, GROUP BY aggregations, and Subqueries',
      'Cleaned raw datasets, handling null values and removing duplicate entries',
      'Designed SQL queries for monthly sales trend reporting and customer categorization',
      'Assisted in query performance tuning by identifying unindexed foreign key columns'
    ],
    architecture: 'Relational Database SQL Data Analysis & Reporting Pipeline.',
    techStack: [
      'SQL',
      'MySQL',
      'Data Analysis',
      'Excel',
      'Data Cleaning',
      'Data Visualization'
    ],
    techSelectionRationale: [
      { tech: 'SQL & MySQL', reason: 'Industry-standard relational language for querying structured enterprise datasets efficiently.' }
    ],
    dbDesign: 'Enterprise relational schemas (Sales, Customers, Products, Transactions).',
    apiFlow: [
      'Raw Data -> SQL Cleaning Script -> Aggregation Query -> Business Intelligence Dashboard'
    ],
    authAuthz: 'Database Read-only Role Permissions.',
    exactContribution: [
      'Executed data cleaning scripts resolving missing values in transaction records',
      'Wrote SQL analytical queries calculating monthly customer retention and product category sales',
      'Recommended adding indexes on high-cardinality foreign key columns to speed up reporting queries'
    ],
    challengesBugs: [
      {
        challenge: 'Analytical queries taking over 15 seconds to execute on multi-million row sales table',
        solution: 'Identified missing index on transaction_date column and assisted in creating B-Tree indexes that reduced execution time to under 1 second.'
      }
    ],
    security: [
      'Adhered to data privacy policies handling sanitized customer datasets'
    ],
    performance: [
      'Optimized SQL queries by replacing subqueries with efficient INNER JOINs'
    ],
    deployment: 'Internal database environment.',
    tradeOffs: [
      'Focused on read-heavy analytical query optimization rather than application feature development.'
    ],
    futureImprovements: [
      'Expand data analytics skills with Python pandas and automated ETL pipeline tools'
    ],
    pitch30s: 'As a Data Analyst Intern at Hitakey Infosys, I analyzed operational datasets using advanced SQL queries, cleaned raw transaction data, created sales reporting aggregations, and helped optimize slow relational queries with indexes.',
    pitch2m: 'During my Data Analyst Internship at Hitakey Infosys, I focused on turning raw enterprise datasets into actionable business intelligence using SQL. I wrote complex analytical queries utilizing multi-table JOINs, subqueries, and window functions to generate sales trend reports. I also performed data cleaning to resolve null values and duplicate records. A major highlight was identifying query execution bottlenecks on large transaction tables and recommending composite indexes that dramatically improved query speeds.',
    pitch5m: 'My internship at Hitakey Infosys strengthened my relational database mastery and data-driven problem-solving skills. Let me summarize my experience.\n\nFirst, Data Cleaning & Integrity: I worked with raw relational datasets, writing SQL scripts to handle missing values, format dates, and eliminate duplicate records, ensuring clean input data for executive reporting.\n\nSecond, Advanced SQL Analysis: I constructed multi-table SQL queries using INNER/LEFT JOINs, GROUP BY aggregations, and window functions to extract monthly revenue trends, customer lifetime value, and top-performing product categories.\n\nThird, Query Optimization: I analyzed slow reporting queries using EXPLAIN execution plans, identified unindexed columns in large transaction tables, and assisted in creating indexes that cut query execution times significantly. This internship laid a strong foundation for my backend database design skills as a Full-Stack Developer.',
    interviewQuestions: [
      {
        question: 'How does your Data Analyst experience at Hitakey Infosys help you as a Full-Stack Developer?',
        answer: 'It gave me a deep, fundamental understanding of relational database performance, indexing, and query execution. As a Full-Stack Developer, this allows me to write highly optimized database queries, design clean 3NF database schemas, and prevent performance bottlenecks before code reaches production.',
        crossQuestioning: 'Follow-up: Give an example of a SQL query optimization you performed.\nResponse: I refactored a correlated subquery that executed once for every row in a 500,000-row table into a single JOIN with a GROUP BY CTE, which reduced execution time from 12 seconds to under 400 milliseconds.'
      }
    ],
    masterTask: {
      id: 'proj-t5',
      title: 'Hitakey Infosys Data Analysis Defense',
      description: 'Deliver a 2-minute pitch explaining how SQL data analysis experience enhances your Full-Stack Developer database design capabilities.',
      requirements: [
        'Explain transition from Data Analysis to Full-Stack Engineering',
        'Highlight complex SQL query optimization experience out loud'
      ],
      evaluationCriteria: [
        'Clear articulation of database optimization skills'
      ]
    }
  }
];
