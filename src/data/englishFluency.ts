import type { EnglishPhase } from '../types';

export const englishPhases: EnglishPhase[] = [
  {
    id: 'eng-p1',
    phaseNumber: 1,
    title: 'Phase 1 — Basic Speaking Flow',
    objective: 'Build vocal confidence, eliminate mental translation hesitation, speak continuously, and master basic HR interview responses.',
    topics: [
      'Self Introduction with clarity and volume',
      'Describing Education & College achievements',
      'Explaining Daily Routine & Personal Hobbies',
      'Expressing Likes, Dislikes & Personal Preferences',
      'Narrating Past Experiences & College Projects',
      'Articulating Future Career Goals & Aspirations',
      'Describing People, Places & Working Environments',
      'Asking & Answering Conversation Questions naturally',
      'Common Daily Work Sentences & Transition Words',
      'Connecting Sentences (Because, However, Therefore, In addition)',
      'Speaking without translating every word from native language',
      'Continuing to speak smoothly despite minor grammar mistakes',
      'Basic HR Interview Question Frameworks'
    ],
    sentenceFrameworks: [
      {
        context: 'Starting a Conversation',
        pattern: 'Hi [Name], hope you are doing well today. I wanted to catch up regarding...',
        example: 'Hi Priya, hope you are doing well today. I wanted to catch up regarding the project requirements.'
      },
      {
        context: 'Continuing a Conversation',
        pattern: 'That sounds interesting! Building on what you just said...',
        example: 'That sounds interesting! Building on what you just said, we could also add Redis caching.'
      },
      {
        context: 'Asking Someone to Repeat',
        pattern: 'Could you please repeat that last point? I want to make sure I caught everything.',
        example: 'Could you please repeat that last point? I want to make sure I caught everything accurately.'
      },
      {
        context: 'Asking for Clarification',
        pattern: 'Could you clarify what you mean by [topic]?',
        example: 'Could you clarify what you mean by the role-based permission requirements?'
      },
      {
        context: 'Saying I Don\'t Understand',
        pattern: 'I am not quite following that part. Could you explain it once again?',
        example: 'I am not quite following the database migration part. Could you explain it once again?'
      },
      {
        context: 'Asking for Help',
        pattern: 'Would you have 10 minutes to help me debug this issue?',
        example: 'Would you have 10 minutes to help me debug this JWT refresh token issue?'
      },
      {
        context: 'Giving an Opinion',
        pattern: 'In my view, the best approach would be to...',
        example: 'In my view, the best approach would be to use Next.js App Router for better SEO.'
      },
      {
        context: 'Agreeing',
        pattern: 'I completely agree with that point because...',
        example: 'I completely agree with that point because TypeScript will catch bugs during compile time.'
      },
      {
        context: 'Disagreeing Respectfully',
        pattern: 'I see your point, but another perspective to consider is...',
        example: 'I see your point, but another perspective to consider is the memory overhead of Redux for small components.'
      },
      {
        context: 'Saying I Don\'t Know',
        pattern: 'I haven\'t worked directly with that specific tool yet, but based on my knowledge of...',
        example: 'I haven\'t worked directly with Kubernetes yet, but based on my knowledge of Docker containers...'
      },
      {
        context: 'Correcting Myself',
        pattern: 'What I meant to say was...',
        example: 'What I meant to say was asynchronous functions return a Promise, not a plain value.'
      },
      {
        context: 'Explaining Something Simply',
        pattern: 'Put simply, [Concept] works by taking [Input] and transforming it into [Output].',
        example: 'Put simply, a REST API works by taking client HTTP requests and returning JSON data.'
      }
    ],
    hrInterviewAnswers: [
      {
        question: 'Tell me about yourself',
        keyPoints: [
          'Name & current role / status',
          'Core technical stack highlights (React, Node, MongoDB, MySQL)',
          'Key project achievements (Cartify, FarmGuard)',
          'Passion for Full-Stack Development and MNC growth'
        ],
        sampleAnswer: 'Hello! I am SURESHKUMAR P, a passionate Full-Stack Developer with hands-on experience in the MERN stack, TypeScript, and relational databases. I recently completed my Full-Stack Developer Trainee experience at Alchem Digital, where I built scalable REST APIs and responsive UI components. One of my flagship projects is Cartify, an e-commerce platform featuring JWT authentication, RBAC, and Redis caching. I thrive on solving complex technical challenges and I am excited to bring my full-stack expertise to your engineering team.',
        tips: 'Keep your response around 90-120 seconds. Speak loudly, maintain a natural pace, and highlight your core technical stack early.'
      },
      {
        question: 'Tell me about your education',
        keyPoints: [
          'Degree & Computer Science foundation',
          'Key technical subjects mastered (DSA, DBMS, Web Development)',
          'Practical projects developed during college'
        ],
        sampleAnswer: 'I completed my education with a strong focus on Computer Science fundamentals. During my academic journey, I built a solid foundation in Data Structures, Database Management Systems, and Object-Oriented Programming. Beyond coursework, I dedicated significant time to practical project building, developing applications like FarmGuard and an Exam Proctoring System, which helped bridge academic theory with production software practices.',
        tips: 'Focus on practical learning and project building rather than just listing marks or grades.'
      },
      {
        question: 'Tell me about your technical skills',
        keyPoints: [
          'Frontend expertise (React, Next.js, Tailwind)',
          'Backend expertise (Node.js, Express, REST APIs)',
          'Databases & Tools (MongoDB, MySQL, Redis, Docker, Git)'
        ],
        sampleAnswer: 'My technical stack spans both frontend and backend development. On the frontend, I specialize in React.js, Next.js, TypeScript, and Tailwind CSS to build fast, responsive user interfaces. On the backend, I work extensively with Node.js, Express.js, RESTful API architecture, and authentication mechanisms like JWT and RBAC. For data management, I am comfortable with both SQL databases like MySQL and NoSQL databases like MongoDB, alongside Redis for caching.',
        tips: 'Categorize your skills clearly: Frontend, Backend, Databases, Tools.'
      },
      {
        question: 'Tell me about your flagship project (Cartify)',
        keyPoints: [
          'Problem statement & purpose',
          'Architecture & role-based workflows (Buyer, Seller, Admin)',
          'Key technical implementations (JWT, Redis caching, MySQL)'
        ],
        sampleAnswer: 'Cartify is a comprehensive full-stack e-commerce marketplace I engineered to handle multi-role workflows for Buyers, Sellers, and Admins. On the backend, I built REST APIs using Node.js and Express, integrated MySQL for relational data persistence, and implemented Redis caching to accelerate product search throughput. I also implemented stateless JWT authentication with Role-Based Access Control to secure protected routes.',
        tips: 'Structure your answer using the STAR method: Situation, Task, Action, Result.'
      },
      {
        question: 'Why did you choose Computer Science / Software Engineering?',
        keyPoints: [
          'Passion for problem solving',
          'Joy of seeing ideas turn into functional software',
          'Continuous learning nature of tech'
        ],
        sampleAnswer: 'I chose Computer Science because I have always been fascinated by problem-solving and how software can transform ideas into real-world applications used by thousands of people. Writing code gives me the unique ability to analyze complex challenges, break them down logically, and build scalable solutions. The fast-paced evolution of technology also keeps me continuously motivated to learn.',
        tips: 'Be genuine and convey enthusiasm.'
      },
      {
        question: 'What are your key strengths?',
        keyPoints: [
          'Strong technical problem solving',
          'Fast learner & adaptability',
          'Ownership and dedication'
        ],
        sampleAnswer: 'My greatest strength is my technical adaptability and structured problem-solving approach. When faced with a new technology or complex bug, I quickly read documentation, break the problem into smaller components, and isolate the root cause. Additionally, I take strong ownership of my work, ensuring code quality, security, and performance meet high standards.',
        tips: 'Back up your strengths with short real-world examples.'
      },
      {
        question: 'What is your weakness and how are you improving it?',
        keyPoints: [
          'Real non-fatal weakness (e.g. over-analyzing initial designs)',
          'Active steps taken to improve',
          'Positive transformation outcome'
        ],
        sampleAnswer: 'Earlier in my projects, I sometimes spent too much time trying to make initial code architectures perfect before writing the first prototype. I realized this slowed down initial delivery. To overcome this, I adopted an iterative approach where I first build a working, tested minimum viable feature, and then refactor and optimize performance systematically. This has greatly improved my development speed.',
        tips: 'Never say "I have no weaknesses". Choose a genuine area of growth and show proactive self-improvement.'
      },
      {
        question: 'What are your career goals?',
        keyPoints: [
          'Short-term: Excel as a Full-Stack Engineer in an MNC',
          'Long-term: Architect high-scale distributed systems and mentor junior engineers'
        ],
        sampleAnswer: 'In the short term, my goal is to join an innovative engineering team at a leading MNC as a Full-Stack Developer, where I can contribute to production applications and deepen my expertise in cloud deployment and microservices. Long term, I aspire to grow into a Senior Full-Stack Architect role, designing high-scale distributed systems and mentoring upcoming software engineers.',
        tips: 'Align your personal career goals with company growth.'
      },
      {
        question: 'Why should we hire you?',
        keyPoints: [
          'Strong alignment with job technical stack',
          'Proven project track record (Cartify, Alchem Digital)',
          'High enthusiasm and continuous drive to deliver quality code'
        ],
        sampleAnswer: 'You should hire me because I bring a strong, practical alignment with your required technical stack—React, Node.js, TypeScript, and SQL/NoSQL databases. Through my hands-on trainee experience at Alchem Digital and projects like Cartify, I have demonstrated that I don\'t just write code; I build secure, high-performance web applications with real-world architecture. I am eager to hit the ground running and add immediate value to your team.',
        tips: 'Confidently summarize your unique value proposition.'
      },
      {
        question: 'Why do you want this job at our company?',
        keyPoints: [
          'Admiration for company\'s engineering culture / product scale',
          'Opportunity to work on high-impact projects',
          'Match between company tech stack and career aspirations'
        ],
        sampleAnswer: 'I want this role because your company is renowned for building high-scale, resilient software solutions and fostering a culture of engineering excellence. The opportunity to work alongside talented engineers on high-impact projects aligns perfectly with my ambition to grow as a Full-Stack Developer. I am excited about contributing my MERN stack skills to your team\'s upcoming initiatives.',
        tips: 'Customize with specific positive details about the targeted company.'
      }
    ],
    task: {
      id: 'eng-t1',
      title: '5-Minute Spoken English HR Interview Simulation',
      description: 'Record or practice speaking out loud for 5 minutes continuously, answering basic HR questions ("Tell me about yourself", "Project overview", "Strengths & Weaknesses") with clear pronunciation, high volume, and zero long pauses.',
      requirements: [
        'Answer "Tell me about yourself" smoothly in 90 seconds without reading from notes',
        'Explain Cartify project overview in 60 seconds with vocal enthusiasm',
        'Answer "Strengths & Weaknesses" in 90 seconds using structured frameworks',
        'Maintain continuous vocal flow with less than 2 seconds of hesitation between thoughts'
      ],
      evaluationCriteria: [
        'Vocal volume loud and audible',
        'Spoke continuously without breaking sentence flow'
      ]
    }
  },
  {
    id: 'eng-p2',
    phaseNumber: 2,
    title: 'Phase 2 — Natural + Professional Communication',
    objective: 'Master spontaneous technical storytelling, opinion framing, problem/solution narratives, architectural explanations, and workplace meeting speech.',
    topics: [
      'Storytelling techniques for technical problem solving',
      'Framing professional opinions with confidence',
      'Articulating clear Reasons behind architectural choices',
      'Comparing technologies (e.g. SQL vs MongoDB, React vs Next.js)',
      'Structuring Problem -> Root Cause -> Solution narratives',
      'Offering constructive Suggestions in team discussions',
      'Handling follow-up questions and unexpected prompt switches',
      'Explaining complex technical concepts to non-technical stakeholders',
      'Explaining bugs and resolution steps professionally',
      'Workplace Communication: Daily Standups & Sprint Meetings',
      'Asking teammates for assistance without sounding helpless',
      'Giving project status updates and communicating deadline risks',
      'Recruiter & HR negotiation conversations'
    ],
    sentenceFrameworks: [
      {
        context: 'Expressing an Opinion',
        pattern: 'In my opinion, choosing [Option A] gives us better [Advantage] compared to [Option B].',
        example: 'In my opinion, choosing PostgreSQL gives us better transactional data integrity compared to MongoDB.'
      },
      {
        context: 'Stating Main Reason',
        pattern: 'The main reason we selected [Technology] is because it provides...',
        example: 'The main reason we selected Redis is because it provides sub-millisecond in-memory read response times.'
      },
      {
        context: 'Drawing from Experience',
        pattern: 'From my experience building [Project], I noticed that...',
        example: 'From my experience building Cartify, I noticed that caching product queries reduced database load significantly.'
      },
      {
        context: 'Checking Understanding',
        pattern: 'As far as I understand the requirement, we need to...',
        example: 'As far as I understand the requirement, we need to implement rate limiting on all public endpoints.'
      },
      {
        context: 'Clarifying Meaning',
        pattern: 'What I mean is, instead of doing [X], we can optimize it by...',
        example: 'What I mean is, instead of re-fetching on every keystroke, we can optimize it using debouncing.'
      },
      {
        context: 'Rephrasing Explanation',
        pattern: 'Let me explain it another way: think of [Concept] as...',
        example: 'Let me explain it another way: think of Docker containers as lightweight, portable execution boxes.'
      },
      {
        context: 'Handling Uncertainty',
        pattern: 'I am not completely sure about [Detail], but I will verify and get back to you shortly.',
        example: 'I am not completely sure about the exact AWS pricing tier, but I will verify and get back to you shortly.'
      },
      {
        context: 'Confirming Question Intent',
        pattern: 'If I understand your question correctly, you are asking whether...',
        example: 'If I understand your question correctly, you are asking whether JWT tokens can be revoked before expiration.'
      },
      {
        context: 'Explaining Technical Approach',
        pattern: 'I would approach this problem by first [Step 1], then [Step 2], and finally [Step 3].',
        example: 'I would approach this problem by first writing unit tests, then building the controller, and finally adding authentication guards.'
      },
      {
        context: 'Describing a Technical Challenge',
        pattern: 'The main challenge we faced was [Problem], which was causing [Negative Impact].',
        example: 'The main challenge we faced was database query latency, which was causing page load delays of 3 seconds.'
      },
      {
        context: 'Explaining a Solution',
        pattern: 'The way I solved it was by implementing [Solution], which reduced [Metric] by [X%].',
        example: 'The way I solved it was by implementing composite indexes in MySQL, which reduced query execution time by 85%.'
      }
    ],
    hrInterviewAnswers: [],
    task: {
      id: 'eng-t2',
      title: '10-Minute Spontaneous Professional Technical Pitch',
      description: 'Deliver a 10-minute spontaneous professional speech explaining a complex technical bug, technology trade-off (SQL vs NoSQL), and daily standup update without scripts.',
      requirements: [
        'Deliver 3-minute technical comparison between SQL and NoSQL databases using sentence patterns',
        'Narrate 3-minute story of a complex bug you solved in Cartify using Problem-Root Cause-Solution structure',
        'Deliver 2-minute mock Daily Standup update (Yesterday, Today, Blockers)',
        'Maintain professional tone, steady speech cadence, and confident vocal projection'
      ],
      evaluationCriteria: [
        'Used professional sentence frameworks naturally',
        'Spontaneous flow maintained without long silent gaps'
      ]
    }
  },
  {
    id: 'eng-p3',
    phaseNumber: 3,
    title: 'Phase 3 — MNC Interview Fluency & Defense Simulation',
    objective: 'Achieve total fluency under high-pressure MNC technical cross-examination, behavioral grilling, and professional debate.',
    topics: [
      'Simulated MNC HR & Technical Interview rounds',
      'Project Architecture Deep-Dive Defense',
      'Handling Technical Cross-Questioning & Rapid-fire rounds',
      'Resume Claim Verification & Defense under scrutiny',
      'Answering Behavioral STAR Questions (Conflict, Failure, Pressure)',
      'Handling Situational Questions ("What would you do if...")',
      'Participating in Technical Group Discussions',
      'Navigating Professional Disagreements with Senior Engineers',
      'Giving & Receiving Technical Feedback gracefully',
      'Explaining complex architectural trade-offs simply under pressure',
      'Continuous speech recovery when momentarily stuck on a question',
      'MNC Workplace Professional Communication Standards'
    ],
    sentenceFrameworks: [
      {
        context: 'Handling Cross-Questioning',
        pattern: 'That is a valid question. The reason we chose [Approach] over [Alternative] despite [Drawback] was...',
        example: 'That is a valid question. The reason we chose JWT over Sessions despite token size was stateless horizontal scalability.'
      },
      {
        context: 'Recovering When Stuck',
        pattern: 'That is an interesting problem. Let me take a brief moment to structure my thoughts on how to tackle this...',
        example: 'That is an interesting problem. Let me take a brief moment to structure my thoughts on how to tackle this algorithm...'
      },
      {
        context: 'Explaining Failure',
        pattern: 'When that issue occurred, my initial assumption was [X]. However, after inspecting the logs, I learned that...',
        example: 'When that issue occurred, my initial assumption was network latency. However, after inspecting logs, I learned it was a connection pool leak.'
      }
    ],
    hrInterviewAnswers: [],
    task: {
      id: 'eng-t3',
      title: 'Full MNC English Simulation & Technical Defense',
      description: 'Conduct a comprehensive 15-minute simulated MNC interview defense covering HR questions, project architecture grilling, and rapid-fire technical cross-examination.',
      requirements: [
        'Deliver 5-minute deep-dive pitch of Cartify system architecture',
        'Answer 5 rapid-fire technical cross-examination questions without breaking composure',
        'Respond to 2 behavioral scenario questions using STAR technique',
        'Maintain high confidence, clear articulation, zero filler words ("um", "ah"), and natural fluency throughout'
      ],
      evaluationCriteria: [
        'Filler words minimized (<3 per minute)',
        'Handled cross-questioning with poise and technical clarity'
      ]
    }
  }
];
