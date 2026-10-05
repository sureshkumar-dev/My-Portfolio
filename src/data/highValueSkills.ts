import type { Skill } from '../types';

export const highValueSkills: Skill[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'high-value',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Core problem-solving foundation for MNC coding rounds and algorithmic problem solving.',
    phases: [
      {
        id: 'dsa-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Core Linear Structures & Two-Pointers',
        objective: 'Master Big-O analysis, Arrays, Strings, HashMaps, HashSets, Two Pointers, Sliding Window, Sorting, Searching, Stacks, and Queues.',
        topics: [
          'Big O Notation (Time & Space Complexity analysis)',
          'Array operations & In-Place manipulation',
          'String algorithms & String immutability',
          'HashMap & HashSet (O(1) lookup & Collision resolution)',
          'Two Pointers technique (Opposite directions & Same direction)',
          'Sliding Window technique (Fixed size & Dynamic size)',
          'Sorting algorithms (Merge Sort, Quick Sort, Counting Sort)',
          'Binary Search fundamentals (Search space reduction)',
          'Stack (LIFO) & Monotonic Stack pattern',
          'Queue (FIFO) & Circular Queue'
        ],
        practicalKnowledge: [
          'Identifying optimal O(N) sliding window algorithms over naive O(N^2) nested loops',
          'Using HashMaps to reduce lookup time from linear to constant'
        ],
        interviewKnowledge: [
          'How QuickSort average case O(N log N) degrades to worst case O(N^2) and how Randomized QuickSort prevents it',
          'How Monotonic Stack solves "Next Greater Element" problems in O(N)'
        ],
        task: {
          id: 'dsa-t1',
          title: 'Optimal Subarray & String Pattern Solver',
          description: 'Solve 3 core Phase 1 algorithm problems (Longest Substring Without Repeating Characters, Two Sum Input Array Sorted, Valid Parentheses) and provide time/space complexity analysis.',
          requirements: [
            'Implement Longest Substring Without Repeating Characters in O(N) time using Sliding Window + Set',
            'Implement Two Sum II (Sorted Array) in O(N) time using Two Pointers',
            'Implement Valid Parentheses using Stack in O(N) time',
            'Include written Big-O space and time complexity justification for each solution'
          ],
          evaluationCriteria: [
            'All algorithms meet optimal target time complexity',
            'Edge cases (empty string, 1 element) handled cleanly'
          ]
        }
      },
      {
        id: 'dsa-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Non-Linear Structures, Recursion & Greedy',
        objective: 'Master Linked Lists, Binary Search variants, Recursion, Binary Trees, BST, Heaps/Priority Queues, Greedy strategies, Intervals, Prefix Sum, and Matrix traversals.',
        topics: [
          'Singly & Doubly Linked List (Reversal, Fast & Slow pointers)',
          'Advanced Binary Search (Search in Rotated Sorted Array, Find Peak)',
          'Recursion fundamentals & Call Stack execution',
          'Binary Tree Traversals (In-order, Pre-order, Post-order, Level-order BFS)',
          'Binary Search Tree (BST) properties & Validation',
          'Heap / Priority Queue (Min-Heap, Max-Heap, Top K elements)',
          'Greedy Algorithms (Interval Scheduling, Fractional Knapsack)',
          'Intervals merging & Intersection',
          'Prefix Sum array technique',
          'Matrix 2D Array Traversals (Spiral matrix, Rotate image)'
        ],
        practicalKnowledge: [
          'Detecting cycles in linked lists using Floyd\'s Tortoise and Hare algorithm',
          'Using Min-Heap to find Kth largest element in O(N log K)'
        ],
        interviewKnowledge: [
          'Difference between BFS (Queue-based level order) and DFS (Stack/Recursion depth first) on trees',
          'When Greedy algorithms guarantee optimal global solution vs when Dynamic Programming is required'
        ],
        task: {
          id: 'dsa-t2',
          title: 'Tree Traversal, Heap & Interval Management Engine',
          description: 'Implement key Phase 2 algorithms (Merge Intervals, Validate Binary Search Tree, Kth Largest Element in an Array) with optimal space-time trade-offs.',
          requirements: [
            'Implement Merge Intervals in O(N log N) by sorting by start time',
            'Implement Validate BST checking recursive min/max boundaries in O(N)',
            'Implement Find Kth Largest Element using Min-Heap in O(N log K)',
            'Write unit tests verifying edge cases'
          ],
          evaluationCriteria: [
            'Tree validation correctly uses min/max bound tracking',
            'Heap implementation maintains K size constraint'
          ]
        }
      },
      {
        id: 'dsa-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Graphs, Backtracking, DP & Interview Defense',
        objective: 'Master Graph BFS/DFS, Topological Sort, Backtracking, Dynamic Programming (1D & 2D), Advanced Patterns, Complexity Optimization, and Timed Explanations.',
        topics: [
          'Graph representations (Adjacency Matrix vs Adjacency List)',
          'Graph Traversals: BFS & DFS',
          'Topological Sort (Kahn\'s Algorithm BFS & DFS stack)',
          'Shortest Path algorithms (Dijkstra\'s Algorithm basics)',
          'Backtracking (Subsets, Permutations, N-Queens pattern)',
          'Dynamic Programming 1D (Climbing Stairs, House Robber, Coin Change)',
          'Dynamic Programming 2D (0/1 Knapsack, Longest Common Subsequence, Edit Distance)',
          'DP Optimization (Memoization Top-down vs Tabulation Bottom-up & Space reduction)',
          'Timed Coding Practice & Articulating algorithmic thought process out loud'
        ],
        practicalKnowledge: [
          'Detecting cycles in directed graphs (Course Schedule problem) using Topological Sort',
          'Reducing 2D DP space complexity from O(N*M) to O(M) using rolling row arrays'
        ],
        interviewKnowledge: [
          'Explaining the 4 steps of solving DP problems: Define State, Base Cases, Recurrence Relation, Space Optimization',
          'How Dijkstra\'s algorithm utilizes Priority Queue to achieve O((V + E) log V)'
        ],
        task: {
          id: 'dsa-t3',
          title: 'Graph Cycle Detector & DP Optimization Defense',
          description: 'Build solutions for Course Schedule (Graph Topological Sort) and Coin Change (Dynamic Programming), complete with a recorded/written MNC technical defense.',
          requirements: [
            'Implement Course Schedule (Detect cycle in directed graph) using Kahn\'s BFS Topological Sort',
            'Implement Coin Change using Bottom-up Tabulation DP in O(Amount * N)',
            'Optimize Coin Change space complexity',
            'Provide step-by-step interview defense script explaining Recurrence Relation out loud'
          ],
          evaluationCriteria: [
            'Topological sort handles disconnected graph components',
            'DP handles impossible amount scenarios by returning -1'
          ]
        }
      }
    ]
  },
  {
    id: 'oop',
    name: 'Object-Oriented Programming',
    category: 'high-value',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Object-oriented design, SOLID principles, Design Patterns, and Domain-Driven Design.',
    phases: [
      {
        id: 'oop-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Core OOP Pillars & Class Design',
        objective: 'Master Encapsulation, Abstraction, Inheritance, Polymorphism, Access Modifiers, and Class Relationships.',
        topics: [
          '4 Pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism)',
          'Classes, Objects, Constructors & Destructors',
          'Access Modifiers (public, private, protected, readonly)',
          'Method Overloading vs Method Overriding',
          'Abstract Classes vs Interfaces',
          'Composition over Inheritance principle',
          'UML Class Diagram reading & notation'
        ],
        practicalKnowledge: [
          'Encapsulating private internal class state using getters and setters',
          'Applying Polymorphism to write flexible handler methods'
        ],
        interviewKnowledge: [
          'Why Composition is preferred over Deep Inheritance hierarchies (Fragile Base Class problem)',
          'Difference between Abstract Classes and Interfaces'
        ],
        task: {
          id: 'oop-t1',
          title: 'Payment Gateway Class Hierarchy (Polymorphic Design)',
          description: 'Design an Object-Oriented Payment Processing Library applying Encapsulation, Abstraction, and Polymorphism across multiple payment types.',
          requirements: [
            'Create abstract class PaymentProcessor with abstract method processPayment(amount)',
            'Implement concrete classes CreditCardPayment, PaypalPayment, CryptoPayment',
            'Encapsulate sensitive card numbers using private properties',
            'Write PaymentService class accepting any PaymentProcessor instance polymorphically'
          ],
          evaluationCriteria: [
            'Adding a new payment method requires zero modification to PaymentService',
            'Private data strictly encapsulated'
          ]
        }
      },
      {
        id: 'oop-p2',
        phaseNumber: 2,
        title: 'Phase 2 — SOLID Principles & Classic Design Patterns',
        objective: 'Master SOLID Principles (SRP, OCP, LSP, ISP, DIP) and Gang of Four Design Patterns (Singleton, Factory, Strategy, Observer).',
        topics: [
          'Single Responsibility Principle (SRP)',
          'Open/Closed Principle (OCP)',
          'Liskov Substitution Principle (LSP)',
          'Interface Segregation Principle (ISP)',
          'Dependency Inversion Principle (DIP)',
          'Creational Patterns: Singleton, Factory Method, Abstract Factory',
          'Structural Patterns: Adapter, Decorator, Facade',
          'Behavioral Patterns: Strategy, Observer, Command'
        ],
        practicalKnowledge: [
          'Refactoring tightly coupled code to adhere to Dependency Inversion using Dependency Injection',
          'Implementing the Observer pattern for event-driven notification dispatching'
        ],
        interviewKnowledge: [
          'Give concrete real-world examples for each SOLID principle',
          'Explain Singleton pattern pitfalls in multithreaded environments and unit testing'
        ],
        task: {
          id: 'oop-t2',
          title: 'SOLID Refactoring & Design Pattern Suite',
          description: 'Refactor a monolithic order processing code snippet to conform strictly to SOLID principles and apply Strategy and Observer patterns.',
          requirements: [
            'Refactor tight coupling using Strategy pattern for shipping cost calculation',
            'Implement Observer pattern for order status updates (EmailNotifier, SMSNotifier listeners)',
            'Enforce Dependency Inversion by injecting interfaces instead of concrete classes'
          ],
          evaluationCriteria: [
            'Code respects all 5 SOLID principles',
            'New shipping strategies can be added without modifying existing calculation code'
          ]
        }
      },
      {
        id: 'oop-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Domain-Driven Design & Enterprise Architecture',
        objective: 'Master Domain-Driven Design (DDD) concepts (Entities, Value Objects, Aggregates, Repositories), Clean Architecture, and Legacy Refactoring.',
        topics: [
          'Domain-Driven Design (DDD) fundamentals',
          'Entities vs Value Objects (Identity vs Attribute equality)',
          'Aggregates & Aggregate Roots',
          'Domain Events & Domain Services',
          'Hexagonal / Onion / Clean Architecture layers',
          'Refactoring Legacy Code strategies',
          'MNC OOP & System Design interview scenarios'
        ],
        practicalKnowledge: [
          'Structuring domain models with immutable Value Objects (e.g. Money, EmailAddress)',
          'Decoupling business logic from database infrastructure using Repository interfaces'
        ],
        interviewKnowledge: [
          'Difference between an Entity (has unique ID lifecycle) and a Value Object (immutable, defined solely by value)',
          'How Clean Architecture protects domain core business logic from framework lock-in'
        ],
        task: {
          id: 'oop-t3',
          title: 'DDD E-Commerce Order Aggregate & Clean Architecture Model',
          description: 'Design an E-Commerce Order Aggregate Root following Domain-Driven Design principles, complete with immutable Value Objects.',
          requirements: [
            'Create Value Objects Email, Address, Money (with currency validation)',
            'Create Order Aggregate Root managing OrderLineItems and enforcing business invariants',
            'Emit Domain Event OrderPlacedEvent when order is finalized',
            'Write architectural document mapping domain layer to repository interface'
          ],
          evaluationCriteria: [
            'Value objects immutable',
            'Order aggregate prevents invalid state transitions (e.g. adding items to shipped order)'
          ]
        }
      }
    ]
  },
  {
    id: 'dbms',
    name: 'Database Management Systems',
    category: 'high-value',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'Database architecture, ER modeling, Normalization, Concurrency Control, CAP Theorem, and Distributed Databases.',
    phases: [
      {
        id: 'dbms-p1',
        phaseNumber: 1,
        title: 'Phase 1 — ER Modeling & Normalization',
        objective: 'Master Entity-Relationship (ER) modeling, Functional Dependencies, and Normalization forms (1NF, 2NF, 3NF, BCNF).',
        topics: [
          'DBMS Architecture (Storage Manager + Query Processor)',
          'ER Diagrams: Entities, Attributes, Relationships, Cardinality (1:1, 1:N, M:N)',
          'Relational Model & Relational Algebra (Select, Project, Join, Union)',
          'Functional Dependencies & Attribute Closure',
          '1st Normal Form (1NF: Atomic values)',
          '2nd Normal Form (2NF: Elimination of Partial dependencies)',
          '3rd Normal Form (3NF: Elimination of Transitive dependencies)',
          'Boyce-Codd Normal Form (BCNF)'
        ],
        practicalKnowledge: [
          'Converting unnormalized spreadsheets into 3NF normalized SQL database schemas',
          'Identifying and resolving partial and transitive functional dependencies'
        ],
        interviewKnowledge: [
          'Step-by-step breakdown of how to normalize a schema from 1NF to 3NF',
          'When intentional Denormalization is acceptable for read-heavy performance optimization'
        ],
        task: {
          id: 'dbms-t1',
          title: 'Database Normalization Engine (1NF to 3NF)',
          description: 'Take a raw unnormalized data table (Orders with embedded items and customer addresses) and step-by-step decompose into 3NF relational schemas.',
          requirements: [
            'Identify Functional Dependencies in raw schema',
            'Show 1NF representation (eliminate repeating groups)',
            'Show 2NF representation (eliminate partial dependencies)',
            'Show 3NF representation (eliminate transitive dependencies)',
            'Write final DDL SQL script with Primary & Foreign keys'
          ],
          evaluationCriteria: [
            'Schema free of transitive dependencies',
            'Referential integrity constraints properly established'
          ]
        }
      },
      {
        id: 'dbms-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Concurrency Control & Locking Protocols',
        objective: 'Master Schedules (Serializability), Concurrency Control, Lock Types, Two-Phase Locking (2PL), and Deadlock Handling.',
        topics: [
          'Transactions & Conflict Serializability',
          'Precedence Graphs for testing serializability',
          'Lock-Based Protocols: Shared (S) vs Exclusive (X) locks',
          'Two-Phase Locking (2PL: Growing phase & Shrinking phase)',
          'Strict 2PL & Rigorous 2PL',
          'Deadlocks in DBMS: Detection (Wait-For Graph), Prevention (Wait-Die, Wound-Wait), and Recovery',
          'Timestamp-Based Concurrency Control',
          'Multiversion Concurrency Control (MVCC) fundamentals'
        ],
        practicalKnowledge: [
          'Analyzing SQL deadlock logs and reordering transaction updates to prevent deadlocks',
          'Understanding how MVCC enables non-blocking consistent read snapshots in MySQL InnoDB and PostgreSQL'
        ],
        interviewKnowledge: [
          'How 2PL guarantees Conflict Serializability but does NOT prevent Deadlocks',
          'Difference between Wait-Die (non-preemptive) and Wound-Wait (preemptive) deadlock prevention strategies'
        ],
        task: {
          id: 'dbms-t2',
          title: 'Conflict Serializability Analyzer & Deadlock Prevention Defense',
          description: 'Analyze multi-transaction execution schedules for conflict serializability using Precedence Graphs and document deadlock prevention strategies.',
          requirements: [
            'Construct Precedence Graph for given 3-transaction schedule',
            'Determine if schedule is Conflict Serializable by checking for graph cycles',
            'Write simulation showing how Wait-Die algorithm resolves transaction deadlock attempt',
            'Provide written explanation of MVCC snapshot isolation'
          ],
          evaluationCriteria: [
            'Precedence graph construction mathematically accurate',
            'Deadlock resolution logic verified'
          ]
        }
      },
      {
        id: 'dbms-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Distributed Databases & CAP Theorem',
        objective: 'Master CAP Theorem, PACELC Theorem, Distributed Transactions (2PC), Eventual Consistency, and Sharding.',
        topics: [
          'CAP Theorem (Consistency, Availability, Partition Tolerance)',
          'PACELC Theorem (Trade-offs during Normal operation vs Partition)',
          'Distributed Systems: Eventual Consistency vs Strong Consistency',
          'Two-Phase Commit (2PC) protocol (Prepare phase & Commit phase)',
          'Saga Pattern for distributed transactions across microservices',
          'Distributed Indexing & Sharding strategies',
          'MNC DBMS Architecture interview scenarios'
        ],
        practicalKnowledge: [
          'Choosing between CP vs AP databases based on application requirements (e.g. Banking = CP, Social Feed = AP)',
          'Designing Saga orchestrators for multi-service transactions'
        ],
        interviewKnowledge: [
          'Why true 100% CA systems cannot exist in distributed network environments',
          'How 2PC protocol handles coordinator node failure during the commit phase'
        ],
        task: {
          id: 'dbms-t3',
          title: 'Distributed Saga Transaction Orchestrator & CAP Defense',
          description: 'Design a Saga pattern orchestrator with compensating transactions for distributed order fulfillment across 3 microservices, complete with CAP theorem defense document.',
          requirements: [
            'Define saga execution steps: Reserve Inventory -> Charge Payment -> Create Shipment',
            'Write compensating rollback handlers for each step (e.g. Cancel Payment on shipment failure)',
            'Write architectural defense analyzing CP vs AP trade-offs for MNC interview'
          ],
          evaluationCriteria: [
            'Compensating actions execute in reverse order on failure',
            'CAP theorem analysis demonstrates clear understanding of network partitions'
          ]
        }
      }
    ]
  },
  {
    id: 'computer-networks',
    name: 'Computer Networks',
    category: 'high-value',
    priority: 'MASTER',
    phaseCount: 3,
    description: 'OSI model, TCP/IP stack, Socket programming, TCP handshake, TLS/SSL, Load Balancing, and Network Security.',
    phases: [
      {
        id: 'net-p1',
        phaseNumber: 1,
        title: 'Phase 1 — OSI Model & Protocol Stack',
        objective: 'Master OSI 7 Layers, TCP/IP 4 Layer model, IP Addressing, Subnetting, DNS resolution, and ICMP/Ping.',
        topics: [
          'OSI 7 Layers (Physical, Data Link, Network, Transport, Session, Presentation, Application)',
          'TCP/IP 4 Layer Model',
          'Encapsulation & Decapsulation of Data Packets (Header framing)',
          'IP Addressing: IPv4 vs IPv6, Subnetting (CIDR notation /24)',
          'MAC Addresses vs IP Addresses & ARP (Address Resolution Protocol)',
          'DNS (Domain Name System) resolution hierarchy (Root -> TLD -> Authoritative server -> Recursive resolver)',
          'ICMP protocol (Ping & Traceroute mechanics)'
        ],
        practicalKnowledge: [
          'Tracing DNS lookup resolution steps from browser cache to authoritative nameservers',
          'Reading IP headers and calculating CIDR subnet ranges'
        ],
        interviewKnowledge: [
          'Explain exact sequence of network events when typing "https://google.com" in browser address bar',
          'Difference between Layer 4 (Transport: TCP/UDP) and Layer 7 (Application: HTTP) Load Balancers'
        ],
        task: {
          id: 'net-t1',
          title: 'URL Resolution Trace & Network Packet Analyzer',
          description: 'Document the exact step-by-step network packet flow when accessing a web URL, detailing ARP, DNS, TCP, and HTTP encapsulation headers.',
          requirements: [
            'Write detailed trace document detailing: Browser DNS cache check -> Recursive resolver -> Root/TLD query -> ARP lookup for Gateway MAC -> TCP SYN handshake -> HTTP GET request',
            'Specify headers added at Application, Transport (TCP ports), Network (IP addrs), and Data Link (MAC addrs) layers'
          ],
          evaluationCriteria: [
            'All 7 OSI layers accounted for correctly',
            'DNS lookup steps precise'
          ]
        }
      },
      {
        id: 'net-p2',
        phaseNumber: 2,
        title: 'Phase 2 — TCP Internals, TLS/SSL & Transport Protocols',
        objective: 'Master TCP 3-Way Handshake, Connection Teardown (FIN/ACK), Sliding Window, Congestion Control, TLS 1.3 Handshake, and UDP.',
        topics: [
          'TCP 3-Way Handshake (SYN, SYN-ACK, ACK, Sequence numbers)',
          'TCP Connection Teardown (FIN, ACK, TIME_WAIT state)',
          'TCP Reliability mechanisms: Sequence/Ack numbers, Retransmission Timeouts (RTO)',
          'TCP Flow Control (Sliding Window & Receiver Window size)',
          'TCP Congestion Control (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)',
          'UDP (User Datagram Protocol) connectionless characteristics',
          'TLS/SSL 1.2 vs 1.3 Handshake (Asymmetric key exchange -> Symmetric session key generation)'
        ],
        practicalKnowledge: [
          'Analyzing TCP socket states (ESTABLISHED, CLOSE_WAIT, TIME_WAIT) using netstat / ss commands',
          'Choosing between TCP (reliable data transfer) vs UDP (low latency streaming/gaming)'
        ],
        interviewKnowledge: [
          'Why TCP TIME_WAIT state exists (prevents delayed packets from corrupting new connections)',
          'How TLS 1.3 reduces handshake latency from 2 RTTs to 1 RTT (or 0-RTT resumption)'
        ],
        task: {
          id: 'net-t2',
          title: 'TCP Socket Handshake Simulator & TLS 1.3 Trace Defense',
          description: 'Build a Node.js TCP Socket server/client simulation demonstrating connection handshake, sequence numbers, and write a TLS 1.3 handshake breakdown.',
          requirements: [
            'Write custom TCP server using net module in Node.js',
            'Log sequence number progression and connection teardown events',
            'Provide step-by-step written breakdown of TLS 1.3 Handshake (ClientHello + KeyShare -> ServerHello + EncryptedExtensions -> Finished)'
          ],
          evaluationCriteria: [
            'TCP socket handles connection state transitions cleanly',
            'TLS 1.3 key exchange mechanics explained accurately'
          ]
        }
      },
      {
        id: 'net-p3',
        phaseNumber: 3,
        title: 'Phase 3 — Master / Load Balancers, CDN Edge & Network Security',
        objective: 'Master Layer 4 vs Layer 7 Load Balancing, CDN Edge Caching, Reverse Proxies (NGINX), HTTP/2 & HTTP/3, and DDoS Mitigation.',
        topics: [
          'Layer 4 (IP/Port) vs Layer 7 (HTTP Header/URL) Load Balancing algorithms (Round Robin, Least Connections, IP Hash)',
          'Content Delivery Networks (CDN) architecture & Edge Caching',
          'Reverse Proxies vs Forward Proxies (NGINX configuration)',
          'HTTP/1.1 vs HTTP/2 Multiplexing vs HTTP/3 QUIC (UDP)',
          'Network Security: Firewalls, NAT (Network Address Translation), VPNs',
          'DDoS (Distributed Denial of Service) attack vectors (SYN Flood, HTTP Flood) & Mitigation',
          'MNC Networking interview scenarios'
        ],
        practicalKnowledge: [
          'Configuring NGINX as a Layer 7 Reverse Proxy with SSL termination and round-robin load balancing',
          'Configuring CDN Cache-Control headers (s-maxage, stale-while-revalidate)'
        ],
        interviewKnowledge: [
          'Difference between Forward Proxy (protects clients) and Reverse Proxy (protects servers)',
          'How HTTP/3 over QUIC solves TCP Head-of-Line blocking over lossy networks'
        ],
        task: {
          id: 'net-t3',
          title: 'NGINX Reverse Proxy Configuration & CDN Edge Architecture Defense',
          description: 'Write an NGINX reverse proxy configuration file with load balancing, SSL termination, and rate limiting, accompanied by a CDN architectural defense.',
          requirements: [
            'Write nginx.conf configuring upstream cluster of 3 API servers with round-robin load balancing',
            'Configure rate limiting zone (limit_req_zone)',
            'Configure SSL certificate termination settings',
            'Write technical defense explaining CDN edge cache invalidation strategy for MNC interview'
          ],
          evaluationCriteria: [
            'NGINX config syntactically valid',
            'Load balancing and SSL termination settings follow modern security best practices'
          ]
        }
      }
    ]
  },
  {
    id: 'operating-systems',
    name: 'Operating Systems',
    category: 'high-value',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'Processes, Threads, CPU Scheduling, Memory Management, Virtual Memory, Paging, and IPC.',
    phases: [
      {
        id: 'os-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Processes, Threads & CPU Scheduling',
        objective: 'Master Process state lifecycle, Process Control Block (PCB), Threads, Context Switching, and CPU Scheduling algorithms.',
        topics: [
          'OS Kernel responsibilities & Dual-Mode operation (User mode vs Kernel mode)',
          'Process concept & Process Control Block (PCB)',
          'Process State transitions (New, Ready, Running, Waiting, Terminated)',
          'Threads: User-Level Threads vs Kernel-Level Threads',
          'Context Switching mechanics & overhead',
          'CPU Scheduling criteria (Throughput, Turnaround time, Waiting time, Response time)',
          'Scheduling Algorithms: FCFS, SJF, Shortest Remaining Time First (SRTF), Round Robin (RR), Priority Scheduling',
          'System Calls (fork, exec, wait, exit)'
        ],
        practicalKnowledge: [
          'Calculating Average Waiting Time for Round Robin and SJF scheduling algorithms',
          'Understanding process creation semantics using fork() and exec()'
        ],
        interviewKnowledge: [
          'What happens during a CPU Context Switch (saving CPU registers, reloading PCB, flushing TLB)',
          'Difference between a Process (isolated memory space) and a Thread (shared memory space)'
        ],
        task: {
          id: 'os-t1',
          title: 'CPU Scheduling Algorithm Simulator',
          description: 'Build a Node.js simulator calculating Average Waiting Time and Turnaround Time for Round Robin (quantum=2) and Shortest Job First (SJF) algorithms.',
          requirements: [
            'Accept array of processes with arrival times and burst times',
            'Implement Round Robin algorithm with time quantum of 2 units',
            'Implement Shortest Job First (SJF) preemptive algorithm',
            'Output Gantt chart timeline and calculated average waiting/turnaround metrics'
          ],
          evaluationCriteria: [
            'Gantt chart calculations mathematically correct',
            'Handles process arrival delays properly'
          ]
        }
      },
      {
        id: 'os-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Memory Management, Virtual Memory & Deadlocks',
        objective: 'Master Virtual Memory, Paging, Page Faults, Page Replacement Algorithms (LRU, FIFO, Optimal), Deadlocks, and IPC.',
        topics: [
          'Memory Management: Contiguous allocation vs Paging',
          'Virtual Memory concept & Page Tables (Logical vs Physical address translation)',
          'Translation Lookaside Buffer (TLB)',
          'Page Faults & Handling workflow',
          'Page Replacement Algorithms: FIFO, Optimal, LRU (Least Recently Used), Clock algorithm',
          'Thrashing concept & Working Set model',
          'Deadlocks 4 Necessary Conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait)',
          'Banker\'s Algorithm for Deadlock Avoidance',
          'Inter-Process Communication (IPC): Shared Memory vs Message Passing, Semaphores & Mutexes'
        ],
        practicalKnowledge: [
          'Simulating LRU page replacement algorithm using HashMap + Doubly Linked List',
          'Preventing deadlocks using Mutex lock ordering guidelines'
        ],
        interviewKnowledge: [
          'Explain the 4 necessary conditions for Deadlock to occur (Coffman conditions)',
          'What is Thrashing and how does the OS Working Set model prevent it'
        ],
        task: {
          id: 'os-t2',
          title: 'LRU Page Replacement & Banker\'s Algorithm Simulator',
          description: 'Implement the LRU Page Replacement algorithm and Banker\'s Algorithm for Deadlock Avoidance with written OS concept explanations.',
          requirements: [
            'Implement LRU Cache / Page replacement in O(1) time using HashMap + Doubly Linked List',
            'Implement Banker\'s Algorithm checking if resource allocation request leaves system in a Safe State',
            'Provide written answers explaining Coffman deadlock conditions for MNC interview'
          ],
          evaluationCriteria: [
            'LRU operations run in true O(1) time complexity',
            'Banker\'s algorithm correctly identifies unsafe allocation states'
          ]
        }
      }
    ]
  },
  {
    id: 'software-testing',
    name: 'Software Testing',
    category: 'high-value',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'Unit testing, Vitest/Jest, Integration testing, E2E testing, TDD/BDD, and code coverage.',
    phases: [
      {
        id: 'test-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Unit Testing & Mocking',
        objective: 'Master Unit Testing fundamentals, Jest/Vitest test runner, Assertions, Test Suites, Spies, Mocks, and Stubs.',
        topics: [
          'Testing Pyramid (Unit Tests > Integration Tests > E2E Tests)',
          'Jest / Vitest syntax (describe, it/test, expect, beforeEach, afterEach)',
          'Matchers (toBe, toEqual, toContain, toThrow, toBeCalledWith)',
          'Mocking functions (vi.fn() / jest.fn())',
          'Mocking modules & API calls (vi.mock(), MSW - Mock Service Worker)',
          'Spies (vi.spyOn()) for tracking existing object method calls',
          'Testing Asynchronous Code (async/await, resolves/rejects)',
          'Code Coverage metrics (Line, Branch, Function, Statement coverage)'
        ],
        practicalKnowledge: [
          'Writing comprehensive unit tests covering happy path and edge case error scenarios',
          'Mocking external database and HTTP calls using Mock Service Worker (MSW)'
        ],
        interviewKnowledge: [
          'Difference between a Mock, a Stub, a Spy, and a Dummy object',
          'Why 100% code coverage does NOT guarantee zero software bugs'
        ],
        task: {
          id: 'test-t1',
          title: 'Unit Test Suite with Vitest & MSW API Mocking',
          description: 'Build a unit test suite for an Express API controller service using Vitest and MSW, achieving >85% code coverage.',
          requirements: [
            'Write unit tests for UserRegistration service covering valid input, duplicate email, and server error scenarios',
            'Use vi.fn() to mock email dispatch service',
            'Use MSW to mock third-party payment gateway API responses',
            'Generate HTML coverage report verifying >85% branch coverage'
          ],
          evaluationCriteria: [
            'Zero actual network calls executed during test runs',
            'Branch coverage target met'
          ]
        }
      },
      {
        id: 'test-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Integration, E2E Testing & TDD Workflow',
        objective: 'Master Integration Testing, End-to-End (E2E) testing with Playwright/Cypress, and Test-Driven Development (TDD).',
        topics: [
          'Integration Testing (testing combined API + DB layers with Supertest)',
          'E2E Testing frameworks (Playwright vs Cypress)',
          'Writing E2E user flows (Login, Search, Add to Cart, Checkout)',
          'Page Object Model (POM) pattern for E2E maintainability',
          'Test-Driven Development (TDD) cycle (Red -> Green -> Refactor)',
          'Behavior-Driven Development (BDD) with Cucumber / Gherkin syntax',
          'Continuous Integration test runner integration (GitHub Actions)'
        ],
        practicalKnowledge: [
          'Writing Supertest integration tests against an in-memory SQLite / MongoDB test instance',
          'Applying the Page Object Model pattern in Playwright E2E tests'
        ],
        interviewKnowledge: [
          'Explain the TDD Red-Green-Refactor cycle with a practical example',
          'Why E2E tests are slower and more flaky than unit tests and how to mitigate flakiness'
        ],
        task: {
          id: 'test-t2',
          title: 'Integration Test Suite (Supertest) & E2E Page Object Model',
          description: 'Build an Integration test suite for Express endpoints using Supertest and design a Playwright E2E test script using Page Object Model.',
          requirements: [
            'Write Supertest integration tests for /api/v1/auth/login and /api/v1/cart',
            'Set up test DB teardown between test cases',
            'Design Playwright E2E Page Object class LoginPage and CartPage',
            'Write TDD demonstration script refactoring code from failing test to passing'
          ],
          evaluationCriteria: [
            'Integration tests run cleanly against isolated test database instance',
            'Page Object Model isolates UI selectors from test assertions'
          ]
        }
      }
    ]
  },
  {
    id: 'api-security',
    name: 'API Security',
    category: 'high-value',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'OWASP Top 10 API Security, Input Sanitization, XSS, CSRF, Rate Limiting, and Cryptography.',
    phases: [
      {
        id: 'sec-p1',
        phaseNumber: 1,
        title: 'Phase 1 — OWASP API Top 10 & Web Vulnerabilities',
        objective: 'Master OWASP API Security Top 10 vulnerabilities (BOLA, Broken Auth, Excess Data Exposure, Rate Limiting, BFLA).',
        topics: [
          'OWASP Top 10 API Vulnerabilities (2023 edition)',
          'Broken Object Level Authorization (BOLA / IDOR)',
          'Broken Authentication & Weak Password Policies',
          'Broken Object Property Level Authorization (Mass Assignment / Data Exposure)',
          'Unrestricted Resource Consumption (Rate Limiting & Memory exhaustion)',
          'Broken Function Level Authorization (BFLA)',
          'Cross-Site Scripting (XSS: Stored, Reflected, DOM-based)',
          'Cross-Site Request Forgery (CSRF) & SameSite Cookie flags',
          'SQL Injection (SQLi) & NoSQL Injection mitigation'
        ],
        practicalKnowledge: [
          'Preventing SQL Injection by using Parameterized Queries / ORM prepared statements',
          'Sanitizing user input strings using DOMPurify / sanitize-html to eliminate XSS'
        ],
        interviewKnowledge: [
          'Why Broken Object Level Authorization (BOLA) is the #1 API security risk',
          'Difference between Stored XSS and Reflected XSS'
        ],
        task: {
          id: 'sec-t1',
          title: 'Vulnerability Remediation Engine (SQLi, XSS & Mass Assignment)',
          description: 'Audit 3 vulnerable code snippets (SQL Injection, XSS, Mass Assignment) and rewrite them to be completely secure.',
          requirements: [
            'Audit raw SQL query concatenation -> rewrite using parameterized SQL queries ($1, $2)',
            'Audit un-sanitized user comment render -> rewrite using HTML sanitization',
            'Audit req.body mass assignment in User update -> rewrite using strict Zod schema whitelist',
            'Provide written report explaining security threat vector for each'
          ],
          evaluationCriteria: [
            'Remediated code snippets pass security audit',
            'Explanations correctly identify OWASP vulnerability category'
          ]
        }
      },
      {
        id: 'sec-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Cryptography, TLS & Enterprise Hardening',
        objective: 'Master Encryption at Rest & Transit, Symmetric (AES) vs Asymmetric (RSA/ECC) encryption, Hashing (SHA-256, Argon2), and Security Audits.',
        topics: [
          'Encryption at Rest (AES-256-GCM) vs Encryption in Transit (TLS 1.3)',
          'Symmetric Encryption (AES) vs Asymmetric Encryption (RSA, ECC)',
          'Cryptographic Hash Functions (SHA-256, SHA-512) & Key Derivation Functions (Argon2, bcrypt, PBKDF2)',
          'Digital Signatures & Non-repudiation',
          'Security Headers (HSTS, CSP: Content-Security-Policy, X-Content-Type-Options)',
          'API Gateway Security Policies & WAF (Web Application Firewall)',
          'Automated Security Scanning tools (Snyk, OWASP ZAP, npm audit)'
        ],
        practicalKnowledge: [
          'Encrypting sensitive database column fields (e.g. SSN / Credit Cards) using AES-256-GCM',
          'Configuring strict Content Security Policy (CSP) headers blocking inline script execution'
        ],
        interviewKnowledge: [
          'Why simple hashing (SHA-256) is insecure for passwords without salt and cost factors (Rainbow Table attacks)',
          'How AES-256-GCM provides both Confidentiality and Authenticity (Authenticated Encryption)'
        ],
        task: {
          id: 'sec-t2',
          title: 'AES-256-GCM Column Encryption Engine & CSP Hardening',
          description: 'Build a Node.js utility module for encrypting sensitive fields using AES-256-GCM and configure strict Express Content Security Policy headers.',
          requirements: [
            'Write encrypt(text, secretKey) and decrypt(cipherObj, secretKey) using crypto.createCipheriv(\'aes-256-gcm\')',
            'Include IV (Initialization Vector) and Auth Tag verification',
            'Configure Helmet Content Security Policy blocking un-trusted external scripts',
            'Write security defense document for MNC interview'
          ],
          evaluationCriteria: [
            'Decryption fails cleanly if Auth Tag is tampered with',
            'CSP headers prevent inline scripts'
          ]
        }
      }
    ]
  },
  {
    id: 'system-design',
    name: 'System Design',
    category: 'high-value',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'High-scale architecture, Scalability, Load Balancing, Caching, Message Queues, Microservices, and Database Sharding.',
    phases: [
      {
        id: 'sd-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Scalability Fundamentals & Architectural Building Blocks',
        objective: 'Master Horizontal vs Vertical Scaling, Load Balancing, Caching Strategies, Database Read Replicas, and Back-of-the-envelope calculations.',
        topics: [
          'Vertical Scaling (Scale-Up) vs Horizontal Scaling (Scale-Out)',
          'Stateless Web Tier & Session Management',
          'Load Balancers (DNS Round Robin, Layer 4, Layer 7)',
          'Caching Layers (Client, CDN, API Gateway, Redis Distributed Cache)',
          'Database Scaling: Read Replicas (Master-Slave) vs Sharding',
          'Back-of-the-envelope estimation (QPS, Storage bandwidth, RAM requirements)',
          'System Design Interview Framework (Requirements -> Estimation -> API Design -> Data Model -> High Level -> Deep Dive)'
        ],
        practicalKnowledge: [
          'Performing back-of-the-envelope estimations for a system with 10 Million Daily Active Users (DAU)',
          'Designing stateless backend services that scale horizontally behind a load balancer'
        ],
        interviewKnowledge: [
          'How to structure a 45-minute System Design interview presentation',
          'Trade-offs between Database Replication lag and Read Consistency'
        ],
        task: {
          id: 'sd-t1',
          title: 'System Design Blueprint: URL Shortener (Bitly)',
          description: 'Create a complete System Design proposal for a high-scale URL Shortener service (Bitly) including back-of-the-envelope calculations, API design, and DB schema.',
          requirements: [
            'Perform Back-of-the-envelope estimation (100M URLs created/day -> calculate write/read QPS & storage for 5 years)',
            'Define REST API endpoints (POST /api/v1/shorten, GET /:shortUrl)',
            'Select Base62 encoding algorithm vs MD5 hashing',
            'Draw High-Level Architecture Diagram (Client -> CDN -> Load Balancer -> Stateless API -> Redis Cache -> MongoDB)'
          ],
          evaluationCriteria: [
            'QPS calculations mathematically accurate',
            'Architecture handles cache-aside read path'
          ]
        }
      },
      {
        id: 'sd-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Distributed Architecture, Message Queues & High Availability',
        objective: 'Master Message Queues (Kafka / RabbitMQ), Event-Driven Architecture, Microservices vs Monolith, Rate Limiting, and Fault Tolerance.',
        topics: [
          'Asynchronous Processing with Message Queues (Kafka, RabbitMQ, SQS)',
          'Event-Driven Architecture (Publish-Subscribe, Event Sourcing, CQRS)',
          'Microservices Architecture vs Monolith (Service Discovery, API Gateway)',
          'Distributed Rate Limiter Design',
          'Fault Tolerance & Resiliency patterns (Circuit Breaker, Bulkhead, Retry with Jitter)',
          'Single Point of Failure (SPOF) elimination',
          'Designing real-world systems (E-Commerce Platform, Notification System, Uber/Ride Sharing basics)'
        ],
        practicalKnowledge: [
          'Designing Event-Driven order processing architectures using Message Queues',
          'Configuring Circuit Breakers (Resilience4j / opossum) to prevent cascading failures'
        ],
        interviewKnowledge: [
          'Difference between Message Queue (task distribution) and Event Streaming (Kafka log replayability)',
          'How Circuit Breaker state machine works (Closed -> Open -> Half-Open)'
        ],
        task: {
          id: 'sd-t2',
          title: 'System Design Architecture: Scalable E-Commerce Platform',
          description: 'Design an Enterprise E-Commerce Platform architecture handling flash sales, decoupled order processing via Message Queue, and Circuit Breakers.',
          requirements: [
            'Draw System Architecture diagram illustrating API Gateway, Auth Service, Product Service, Order Service, Message Queue, and Worker Cluster',
            'Detail Flash Sale Strategy (Redis inventory pre-allocation + queueing order requests)',
            'Include Circuit Breaker failure fallback strategy',
            'Write technical interview defense script answering scalability cross-examination questions'
          ],
          evaluationCriteria: [
            'Eliminates all Single Points of Failure',
            'Message queue decouples slow order processing from user HTTP response'
          ]
        }
      }
    ]
  },
  {
    id: 'ci-cd',
    name: 'CI/CD',
    category: 'high-value',
    priority: 'STRONG',
    phaseCount: 2,
    description: 'Continuous Integration, Continuous Deployment, GitHub Actions, Automated Testing pipelines, and Deployment Strategies.',
    phases: [
      {
        id: 'cicd-p1',
        phaseNumber: 1,
        title: 'Phase 1 — Continuous Integration & GitHub Actions Workflows',
        objective: 'Master CI principles, GitHub Actions YAML syntax, Jobs, Steps, Triggers, Caching, and Secret management.',
        topics: [
          'Continuous Integration (CI) core goals',
          'GitHub Actions Architecture (Workflows, Events/Triggers, Jobs, Steps, Actions, Runners)',
          'Writing workflow YAML files (.github/workflows/ci.yml)',
          'Triggers (on: [push, pull_request, workflow_dispatch])',
          'Environment Secrets & Repository Variables',
          'Caching dependencies (actions/cache for node_modules)',
          'Matrix builds (testing across multiple Node.js versions: 18, 20, 22)',
          'Automated Linting, Type checking & Test execution steps'
        ],
        practicalKnowledge: [
          'Writing GitHub Actions workflow that runs linting, typechecking, and unit tests on every Pull Request',
          'Using dependency caching to speed up CI workflow execution from 3 mins to <45 seconds'
        ],
        interviewKnowledge: [
          'Why CI pipelines should fail fast (running cheapest lint/type check steps before expensive E2E tests)',
          'Difference between GitHub Secrets (encrypted env vars) and Variables'
        ],
        task: {
          id: 'cicd-t1',
          title: 'GitHub Actions Automated Testing CI Pipeline',
          description: 'Build a production GitHub Actions CI workflow YAML script that runs linting, TypeScript compilation, and Vitest unit testing on pull requests.',
          requirements: [
            'Create .github/workflows/ci.yml',
            'Configure trigger on push to main and pull_request to main',
            'Use actions/checkout@v4 and actions/setup-node@v4 with cache: \'npm\'',
            'Define parallel or sequential jobs: lint, type-check, test',
            'Set up failure notifications'
          ],
          evaluationCriteria: [
            'Workflow syntax 100% valid YAML',
            'Dependency caching properly configured'
          ]
        }
      },
      {
        id: 'cicd-p2',
        phaseNumber: 2,
        title: 'Phase 2 — Continuous Deployment & Deployment Strategies',
        objective: 'Master Continuous Deployment (CD), Blue-Green Deployments, Canary Releases, Rolling Updates, and Docker Registry Publishing.',
        topics: [
          'Continuous Delivery vs Continuous Deployment (CD)',
          'Publishing Docker images to GitHub Container Registry (GHCR) / Docker Hub',
          'Deployment Strategies: Rolling Update, Blue-Green Deployment, Canary Release',
          'Infrastructure-as-Code (IaC) introduction (Terraform / CloudFormation concepts)',
          'Automated Database Migration steps in CD pipelines',
          'Rollback strategies & Health check verification post-deploy',
          'GitOps concept (ArgoCD / Flux basics)'
        ],
        practicalKnowledge: [
          'Configuring automated CD workflow that builds Docker images and pushes to GHCR on release tag creation',
          'Designing Blue-Green deployment scripts swapping router targets post health check'
        ],
        interviewKnowledge: [
          'Difference between Blue-Green Deployment (instant traffic switch between identical environments) and Canary Release (gradual % traffic rollout)',
          'How to handle database schema migrations safely during zero-downtime rolling deployments'
        ],
        task: {
          id: 'cicd-t2',
          title: 'Automated Docker Build & Blue-Green CD Release Pipeline',
          description: 'Build a GitHub Actions CD workflow script that builds Docker images, publishes to GHCR, and executes a Blue-Green deployment simulation.',
          requirements: [
            'Write .github/workflows/cd.yml triggered on git tag push v*',
            'Build multi-stage Dockerfile image and push to ghcr.io with tag versioning',
            'Write deployment script outline executing Blue-Green environment swap after container health check succeeds',
            'Include automated rollback step if health check fails'
          ],
          evaluationCriteria: [
            'Docker image tags dynamically derived from git release tag',
            'Rollback step triggers automatically on failed health check'
          ]
        }
      }
    ]
  }
];
