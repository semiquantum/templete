/**
 * ============================================================================
 * MONOGRAPH JOURNAL — CORE APPLICATION SCRIPT
 * Modern, high-performance vanilla ES6 architecture
 * Features: Multi-theme engine, dynamic taxonomy filtering, live full-text search,
 * interactive reading drawer, focus trapping, safe local storage, reading list.
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Editorial Article Dataset (12 In-Depth Dispatches)
     -------------------------------------------------------------------------- */
  const ARTICLES = [
    {
      id: "art-1",
      title: "The Architecture of Autonomous Thought: What Happens When Software Understands Intent?",
      subtitle: "Why the transition from static retrieval models to goal-seeking cognitive loops requires a complete rethinking of software systems.",
      category: "Artificial Intelligence",
      categorySlug: "ai",
      readMinutes: 8,
      timestamp: 1787558400000, // Aug 24, 2026
      dateStr: "Aug 24, 2026",
      views: 14200,
      isCover: true,
      isSpotlight: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Fig 1.1 — Continuous latent vector topology and emergent multi-agent feedback systems. Monograph Visual Labs.",
      author: {
        name: "Dr. Elena Vance",
        role: "Principal Systems Architect & Research Fellow",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        bio: "Dr. Elena Vance leads foundational research into deterministic agentic runtime environments and has authored over twenty papers on distributed neural routing."
      },
      excerpt: "As algorithmic foundations transition from static retrieval models to goal-seeking cognitive loops, engineering teams are dismantling decades of abstraction to build systems that anticipate, critique, and self-correct.",
      content: `
        <p>For more than half a century, computer science operated on a fundamental premise: machines execute instructions, whereas humans synthesize intent. Even during the early waves of generative machine learning, software was primarily treated as an ultra-fast transformation pipeline—mapping inputs to statistical distributions.</p>
        
        <p>Today, that boundary is dissolving rapidly. The emerging generation of autonomous cognitive architectures does not simply parse requests; it deliberates over goals, formulates iterative hypotheses, and orchestrates actions across vast software ecosystems.</p>

        <h2>The Shift from Deterministic Pipelines to Intent Topologies</h2>
        <p>When an engineer writes code for a traditional compiler, every branch and conditional is rigid. In contrast, an intent-driven system receives high-level criteria—such as <em>"Optimize database throughput for unpredictable geographic spikes while maintaining p99 latency below 40ms"</em>—and autonomously creates, evaluates, and modifies temporary pipelines.</p>

        <div class="reader-takeaways-box">
          <div class="takeaways-title">Key Architectural Shifts</div>
          <ul class="takeaways-list">
            <li><strong>Continuous Feedback Loops:</strong> Dynamic multi-agent critics constantly score actions against formal verification boundaries.</li>
            <li><strong>Latent State Caching:</strong> Moving beyond raw tokens toward hierarchical semantic graphs preserved across long-horizon executions.</li>
            <li><strong>Self-Healing Abstractions:</strong> Automated code generation acting within sandboxed runtime environments with immediate rollback telemetry.</li>
          </ul>
        </div>

        <blockquote class="reader-blockquote">
          “Software is no longer a static sequence of instructions etched into memory; it has become an adaptable, goal-directed organ operating within an informational ecosystem.”
          <cite class="blockquote-cite">— Dr. Elena Vance, Monograph Systems Symposium 2026</cite>
        </blockquote>

        <h2>Rethinking Interface Metaphors</h2>
        <p>This architectural inflection directly challenges conventional user interfaces. The classic paradigm of buttons, dropdowns, and granular forms was created because users had to manually map their intent to rigid parameters. When systems comprehend intent, the user's role elevates from operator to strategic curator and validator.</p>

        <div class="reader-code-snippet">
// Exemplary Autonomous Feedback Loop Definition
interface IntentNode {
  goalCriteria: MetricDefinition[];
  hypotheses: PipelineVariant[];
  criticEngine: FormalVerificationEngine;
  executeWithFallback: (ctx: ExecutionContext) => Promise<TelemetryReport>;
}
        </div>

        <p>As we design the next decade of digital tools, our metric of engineering excellence will not simply be how many compute operations we can pack into a microsecond, but how harmoniously our systems align with ambiguous human goals.</p>
      `
    },
    {
      id: "art-2",
      title: "The Post-Cloud Infrastructure: Reclaiming Local Compute & Edge Determinism",
      subtitle: "Why modern distributed systems are reversing the centralized cloud pendulum in favor of peer-to-peer data sovereignty.",
      category: "Systems & Architecture",
      categorySlug: "systems",
      readMinutes: 6,
      timestamp: 1787472000000, // Aug 23, 2026
      dateStr: "Aug 23, 2026",
      views: 9800,
      isSpotlight: true,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 2.4 — Distributed edge synchronization nodes across regional physical topologies.",
      author: {
        name: "Julian Thorne",
        role: "Staff Distributed Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        bio: "Julian Thorne specializes in high-throughput conflict-free replicated data types (CRDTs) and local-first application architecture."
      },
      excerpt: "Bandwidth is cheap, but latency is bounded by the speed of light. Modern distributed systems are reversing the centralized cloud pendulum, prioritizing edge-first databases and local-first runtimes.",
      content: `
        <p>The centralized cloud architecture transformed software development in the 2010s by liberating engineering teams from managing bare-metal servers. Yet twenty years into this cloud era, organizations are colliding with fundamental physical and economic bottlenecks.</p>
        
        <p>Speed-of-light constraints mean round-trip latency to centralized data centers cannot be reduced beyond fixed physical limits. Meanwhile, data sovereignty regulations and spiraling cloud infrastructure bills are catalyzing a profound paradigm shift: <strong>Local-First Architecture</strong>.</p>

        <h2>The Deterministic Edge</h2>
        <p>In a local-first system, the primary source of truth resides on the user's local hardware—whether that is a browser sandbox, an edge gateway, or a smartphone neural engine. Network connectivity is treated not as a prerequisite for computation, but as an asynchronous background synchronization channel.</p>

        <div class="reader-takeaways-box">
          <div class="takeaways-title">Foundational Pillars of Local-First Systems</div>
          <ul class="takeaways-list">
            <li><strong>Zero-Latency Interaction:</strong> Reads and mutations occur against local memory structures instantly.</li>
            <li><strong>CRDT Synchronization:</strong> Conflict-free replicated data types mathematically guarantee eventual convergence without locking.</li>
            <li><strong>True Offline Capability:</strong> Applications retain 100% operational fidelity regardless of network degradation.</li>
          </ul>
        </div>

        <blockquote class="reader-blockquote">
          “The fastest query is the one that never touches a network cable.”
          <cite class="blockquote-cite">— Distributed Computing Principles, Issue 89</cite>
        </blockquote>

        <p>By treating local devices as first-class compute entities rather than dumb presentation terminals, we build software that is faster, more resilient, and fundamentally respectful of user autonomy.</p>
      `
    },
    {
      id: "art-3",
      title: "The Typography of Restraint: Why Editorial Web Design is Experiencing a Renaissance",
      subtitle: "Rejecting generic component frameworks in pursuit of high-craft typographic rhythm, proportion, and reading comfort.",
      category: "Design & Craft",
      categorySlug: "design",
      readMinutes: 5,
      timestamp: 1787385600000, // Aug 22, 2026
      dateStr: "Aug 22, 2026",
      views: 11400,
      isSpotlight: true,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 3.2 — Baseline grid alignments and harmonic typographic scales in digital publication.",
      author: {
        name: "Claire Moreau",
        role: "Head of Editorial Design, Studio Typo",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
        bio: "Claire Moreau is a typographer and digital craftswoman whose work focuses on fluid baseline grids and classical proportion systems on the web."
      },
      excerpt: "Rejecting cookie-cutter dashboard aesthetics, a new generation of designers is embracing editorial typography, harmonic scale systems, and intentional whitespace to elevate digital reading.",
      content: `
        <p>For nearly a decade, web design was largely constrained by generic UI component libraries and homogenized dashboard templates. Websites across disparate industries began to look identical: rounded cards with subtle drop shadows, vibrant purple gradients, and generic sans-serif typography.</p>
        
        <p>Today, we are witnessing a powerful counter-movement. Designers and engineers are rediscovering centuries-old editorial traditions: vertical rhythm, proportional typographic scales, tailored serif typefaces, and the expressive power of intentional whitespace.</p>

        <h2>The Ergonomics of Reading</h2>
        <p>Digital reading is not passive consumption; it is an active cognitive process. The reader's eye relies on micro-typographic cues—x-height consistency, optical kerning, and calibrated line lengths (ideally between 60 to 75 characters per line)—to maintain flow without cognitive fatigue.</p>

        <blockquote class="reader-blockquote">
          “Good typography is invisible when you are reading, yet unforgettable when you reflect upon the clarity of the thoughts conveyed.”
          <cite class="blockquote-cite">— Claire Moreau</cite>
        </blockquote>

        <p>By returning to typographic fundamentals, we create digital environments that honor the reader's attention rather than competing for it with endless visual noise.</p>
      `
    },
    {
      id: "art-4",
      title: "Cognitive Load and the Disappearing Interface: Designing for Ambient Intelligence",
      subtitle: "Exploring how subtle micro-interactions and ambient cues can convey complex system states without overwhelming users.",
      category: "Artificial Intelligence",
      categorySlug: "ai",
      readMinutes: 7,
      timestamp: 1787299200000, // Aug 21, 2026
      dateStr: "Aug 21, 2026",
      views: 7300,
      isSpotlight: true,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 4.1 — Ambient state signaling through soft luminance transitions.",
      author: {
        name: "David K. Chen",
        role: "Interaction Designer & Cognitive Scientist",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        bio: "David K. Chen investigates the intersection of human cognitive ergonomics, auditory telemetry, and spatial interaction."
      },
      excerpt: "When software understands context, UI buttons become liabilities. We explore how calm computing, haptic cues, and ambient awareness allow users to manage deep workflows without modal fatigue.",
      content: `
        <p>Mark Weiser introduced the concept of <em>"Calm Technology"</em> in 1995, proposing that the most profound technologies are those that disappear into the fabric of everyday life. Thirty years later, the sheer volume of notifications and modals in modern software has produced unprecedented cognitive fragmentation.</p>

        <h2>Designing the Ambient Layer</h2>
        <p>Ambient interfaces shift information from the focal center of attention to the periphery. Instead of an abrupt modal dialog demanding immediate action, system status can be communicated via subtle changes in background tint, gentle auditory murmurs, or micro-spatial motion.</p>

        <div class="reader-takeaways-box">
          <div class="takeaways-title">Principles of Ambient Interaction</div>
          <ul class="takeaways-list">
            <li><strong>Peripheral Awareness:</strong> Display state without demanding immediate focus.</li>
            <li><strong>Graceful Escalation:</strong> Move from peripheral suggestion to direct prompt only upon critical failure.</li>
            <li><strong>Reversible Commands:</strong> Eliminate confirmation modals through universal undo buffers.</li>
          </ul>
        </div>
      `
    },
    {
      id: "art-5",
      title: "The Next Era of Computational Literacy: Programming with Natural Mental Models",
      subtitle: "Why the syntax of code is yielding to declarative goal specification and dynamic dialect generation.",
      category: "Future of Work",
      categorySlug: "work",
      readMinutes: 6,
      timestamp: 1787212800000, // Aug 20, 2026
      dateStr: "Aug 20, 2026",
      views: 8900,
      isSpotlight: false,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 5.3 — Dynamic code synthesis tree mapped to declarative goal specifications.",
      author: {
        name: "Amina Al-Mansoor",
        role: "Research Director, Future of Tooling",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
        bio: "Amina Al-Mansoor studies how natural language semantics reshape the discipline of computer programming and human-computer symbiosis."
      },
      excerpt: "Coding is no longer about memorizing idiosyncratic syntax and compiler flags. The new computational literacy demands rigorous systems thinking, domain taxonomy, and declarative precision.",
      content: `
        <p>For sixty years, learning to program meant mastering arbitrary syntax rules—balancing brackets, managing memory pointers, and deciphering cryptic compiler flags. The core intellectual value, however, was never the syntax; it was <em>computational thinking</em>: decomposing problems into modular sub-routines, identifying edge cases, and reasoning about state transformations.</p>

        <h2>The Rise of Declarative Dialects</h2>
        <p>As synthesis models bridge human semantics to machine code, engineers can express complex algorithms using precise declarative domain languages. The engineer's primary craft shifts from syntax typist to system architect and formal verifier.</p>
      `
    },
    {
      id: "art-6",
      title: "The Epistemology of Synthetic Memory: Trust, Verification & the Digital Record",
      subtitle: "When generative media can replicate any historical artifact, how do we authenticate collective cultural memory?",
      category: "Digital Culture",
      categorySlug: "culture",
      readMinutes: 9,
      timestamp: 1787126400000, // Aug 19, 2026
      dateStr: "Aug 19, 2026",
      views: 13100,
      isSpotlight: false,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 6.1 — Cryptographic provenance hashes overlaid on historical media archives.",
      author: {
        name: "Dr. Silas Sterling",
        role: "Senior Fellow, Digital Ethics Institute",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
        bio: "Dr. Silas Sterling writes on epistemic security, cryptographic verification protocols, and media archaeology."
      },
      excerpt: "When generative media can convincingly forge any audio recording or document, humanity must reinvent the foundations of proof. We examine cryptographic provenance and zero-knowledge identity.",
      content: `
        <p>Throughout modern history, visual and audio recordings served as reliable legal and cultural evidence. If an event was captured on photographic film or magnetic tape, it was assumed to have physically occurred in the real world.</p>

        <p>The ubiquity of photorealistic generative synthesis has completely shattered this epistemic baseline. The presence of video evidence is no longer proof of reality. To preserve historical truth, society is rapidly constructing cryptographic provenance standards—ensuring that every camera sensor signs its data stream with immutable hardware keys at the exact millisecond of photon capture.</p>
      `
    },
    {
      id: "art-7",
      title: "Designing for Infinite Variety: Parametric UI and Adaptive Components",
      subtitle: "Moving beyond rigid responsive breakpoints into continuous algorithmic layouts that mold to user intent.",
      category: "Design & Craft",
      categorySlug: "design",
      readMinutes: 6,
      timestamp: 1787040000000, // Aug 18, 2026
      dateStr: "Aug 18, 2026",
      views: 6500,
      isSpotlight: false,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 7.4 — Parametric spatial grids responding dynamically to content density.",
      author: {
        name: "Claire Moreau",
        role: "Head of Editorial Design, Studio Typo",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
        bio: "Claire Moreau is a typographer and digital craftswoman whose work focuses on fluid baseline grids and classical proportion systems."
      },
      excerpt: "Responsive design used to mean switching CSS at 768px. Today, parametric layouts adjust container density, typography scale, and visual hierarchy fluidly based on data density and input device.",
      content: `
        <p>Fixed breakpoints (mobile, tablet, desktop) were a temporary crutch created during an era of immature browser layout engines. Modern CSS container queries, subgrid, and fluid mathematical functions (<code>clamp()</code>, <code>calc()</code>) permit a far more sophisticated approach: <strong>continuous parametric design</strong>.</p>
        
        <p>Components can now observe their own spatial constraints and render optimal typographic hierarchies without coupling to global viewport metrics.</p>
      `
    },
    {
      id: "art-8",
      title: "Building Deterministic State Machines in an Era of Probabilistic AI",
      subtitle: "How to constrain non-deterministic neural outputs using formal finite state machines and schema validators.",
      category: "Systems & Architecture",
      categorySlug: "systems",
      readMinutes: 7,
      timestamp: 1786953600000, // Aug 17, 2026
      dateStr: "Aug 17, 2026",
      views: 9200,
      isSpotlight: false,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 8.2 — Finite state machine boundary wrapping probabilistic inference output.",
      author: {
        name: "Julian Thorne",
        role: "Staff Distributed Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        bio: "Julian Thorne specializes in high-throughput conflict-free replicated data types and local-first application architecture."
      },
      excerpt: "Probabilistic models are inherently fuzzy, while critical production infrastructure demands 100% determinism. We outline the architectural patterns that keep stochastic intelligence safely bounded.",
      content: `
        <p>Neural networks excel at pattern recognition and associative reasoning precisely because they are probabilistic. However, financial transactions, database migrations, and medical workflows require strict determinism.</p>
        
        <p>The solution is not to demand perfection from language models, but to encase them inside rigid finite state machine (FSM) harnesses that guarantee schema compliance and prevent invalid state transitions.</p>
      `
    },
    {
      id: "art-9",
      title: "The Philosophy of Deep Work in Hyper-Collaborative Remote Teams",
      subtitle: "Navigating asynchronous communication, focus preservation, and the myth of instant presence.",
      category: "Future of Work",
      categorySlug: "work",
      readMinutes: 5,
      timestamp: 1786867200000, // Aug 16, 2026
      dateStr: "Aug 16, 2026",
      views: 8100,
      isSpotlight: false,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 9.1 — Solitary cognitive focus in distributed asynchronous environments.",
      author: {
        name: "Amina Al-Mansoor",
        role: "Research Director, Future of Tooling",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
        bio: "Amina Al-Mansoor studies how natural language semantics reshape the discipline of computer programming and human collaboration."
      },
      excerpt: "Instant messaging created the illusion of high velocity while destroying the multi-hour focus blocks required for complex problem-solving. How leading engineering teams enforce async-first culture.",
      content: `
        <p>Real-time chat tools were sold as collaboration boosters, but they often functioned as cognitive distraction firehoses. True intellectual breakthroughs in engineering and architecture require prolonged, uninterrupted deep focus.</p>

        <p>Progressive organizations are establishing strict asynchronous documentation standards, turning communication into deliberate, structured essays rather than fragmented stream-of-consciousness pings.</p>
      `
    },
    {
      id: "art-10",
      title: "Algorithmic Sovereignty: The Geopolitics of Foundation Models",
      subtitle: "How national compute clusters, sovereign datasets, and export controls are redefining global tech policy.",
      category: "Digital Culture",
      categorySlug: "culture",
      readMinutes: 8,
      timestamp: 1786780800000, // Aug 15, 2026
      dateStr: "Aug 15, 2026",
      views: 10400,
      isSpotlight: false,
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 10.3 — Global submarine cable networks and sovereign AI data centers.",
      author: {
        name: "Dr. Silas Sterling",
        role: "Senior Fellow, Digital Ethics Institute",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
        bio: "Dr. Silas Sterling writes on epistemic security, cryptographic verification protocols, and media archaeology."
      },
      excerpt: "Foundational AI models are no longer merely commercial software products; they are strategic national assets on par with energy grids and telecommunications infrastructure.",
      content: `
        <p>The concentration of ultra-large compute clusters in a handful of geographic corridors has transformed artificial intelligence into a core pillar of international geopolitics. Nations worldwide are funding domestic sovereign infrastructure to safeguard cultural nuance and data independence.</p>
      `
    },
    {
      id: "art-11",
      title: "Memory-Efficient Neural Routing: Small Models, Big Reasoning",
      subtitle: "Why 3-billion-parameter specialized models running locally are outperforming monolithic cloud giants on specific tasks.",
      category: "Artificial Intelligence",
      categorySlug: "ai",
      readMinutes: 7,
      timestamp: 1786694400000, // Aug 14, 2026
      dateStr: "Aug 14, 2026",
      views: 12200,
      isSpotlight: false,
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 11.2 — Quantized weight matrices running deterministically on consumer silicon.",
      author: {
        name: "Dr. Elena Vance",
        role: "Principal Systems Architect & Research Fellow",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        bio: "Dr. Elena Vance leads foundational research into deterministic agentic runtime environments."
      },
      excerpt: "Bigger is not always better. Quantization breakthroughs, mixture-of-experts (MoE) routing, and localized domain fine-tuning enable incredible performance on consumer hardware.",
      content: `
        <p>The brute-force scaling race of parameter counts is reaching thermodynamic and financial thresholds. The forefront of machine learning engineering has shifted toward extreme efficiency: sparse activation, INT4 quantization, and intelligent multi-model orchestration.</p>
      `
    },
    {
      id: "art-12",
      title: "Resilient Protocol Design: Building Systems That Degrade Gracefully",
      subtitle: "Designing distributed architectures that survive partial partition, network jitter, and component failure.",
      category: "Systems & Architecture",
      categorySlug: "systems",
      readMinutes: 6,
      timestamp: 1786608000000, // Aug 13, 2026
      dateStr: "Aug 13, 2026",
      views: 7800,
      isSpotlight: false,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Fig 12.1 — Dynamic circuit breaker telemetry during simulated node partitions.",
      author: {
        name: "Julian Thorne",
        role: "Staff Distributed Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        bio: "Julian Thorne specializes in high-throughput conflict-free replicated data types and local-first architecture."
      },
      excerpt: "Systems will fail; the only question is how gracefully. We dissect the design of circuit breakers, bulkhead isolation, and backpressure algorithms in mission-critical networks.",
      content: `
        <p>The hallmark of mature engineering is not the unrealistic assumption that services will achieve 100.00% uptime, but the architecture of graceful degradation. When downstream dependencies fail, well-designed systems seamlessly fall back to cached states and reduced-fidelity modes.</p>
      `
    }
  ];

  /* --------------------------------------------------------------------------
     2. Informational Static Text Database (Footer & Publication Modals)
     -------------------------------------------------------------------------- */
  const INFO_PAGES = {
    "about": {
      title: "About Monograph Journal",
      body: `
        <p><strong>MONOGRAPH</strong> is an independent editorial journal established in 2024 to document the evolving frontiers of software systems architecture, cognitive computing, human-centered product craft, and the cultural implications of artificial intelligence.</p>
        <p>We publish thoughtful dispatches and long-form investigative essays authored by practicing engineers, systems architects, typographers, and computational researchers. Our goal is to provide a calm, intellectually rigorous alternative to the sensationalism of mainstream technology news.</p>
        <h3>Editorial Values</h3>
        <p>We prioritize deep technical accuracy, ethical clarity, timeless typographic craftsmanship, and strict reader privacy. Monograph does not run third-party advertising, clickbait tracking networks, or sponsored editorial placement.</p>
      `
    },
    "editorial-board": {
      title: "Editorial Standards & Peer Review",
      body: `
        <p>Every essay published in Monograph undergoes a rigorous two-stage editorial review process:</p>
        <p><strong>1. Technical Verification:</strong> Code examples, architectural topologies, and algorithmic claims are reviewed by practicing engineers in the relevant specialization.</p>
        <p><strong>2. Editorial & Clarity Polish:</strong> Our editorial board works alongside authors to refine clarity of expression, eliminate jargon, and ensure accessible prose without compromising intellectual depth.</p>
        <p>Corrections and retractions are published transparently in our quarterly errata dispatches.</p>
      `
    },
    "masthead": {
      title: "Masthead & Key Contributors",
      body: `
        <p><strong>Editor-in-Chief:</strong> Marcus Vance-Gao</p>
        <p><strong>Senior Systems Editor:</strong> Julian Thorne</p>
        <p><strong>AI & Cognition Editor:</strong> Dr. Elena Vance</p>
        <p><strong>Design & Typographic Director:</strong> Claire Moreau</p>
        <p><strong>Culture & Policy Fellow:</strong> Dr. Silas Sterling</p>
        <p><strong>Tooling & Engineering Lead:</strong> Amina Al-Mansoor</p>
        <p>Monograph is published in digital editions bi-weekly from Zurich, San Francisco, and London.</p>
      `
    },
    "submissions": {
      title: "Author Submissions & Pitching Guide",
      body: `
        <p>We welcome unsolicited essay pitches from engineers, researchers, and designers. Ideal submissions offer non-obvious technical insights, post-mortems of real-world distributed systems, or critical perspectives on user interface design.</p>
        <p>To submit a pitch, include an outline (max 400 words), your background, and links to relevant research. Typical essay lengths range from 1,200 to 3,500 words.</p>
      `
    },
    "rss": {
      title: "RSS & Syndication Feeds",
      body: `
        <p>Monograph provides full-text, clean RSS and JSON syndication feeds for all published dispatches. No truncation, no paywalls.</p>
        <p><strong>Main Feed (All Topics):</strong> <code>https://monograph.journal/feed.xml</code></p>
        <p><strong>Artificial Intelligence:</strong> <code>https://monograph.journal/feed/ai.xml</code></p>
        <p><strong>Systems & Architecture:</strong> <code>https://monograph.journal/feed/systems.xml</code></p>
        <p><strong>Design & Craft:</strong> <code>https://monograph.journal/feed/design.xml</code></p>
      `
    },
    "privacy": {
      title: "Editorial Privacy Guarantee",
      body: `
        <p>At Monograph, we believe your reading habits are private. We do not sell your personal data, employ invasive cross-site tracking pixels, or monetize your reading history.</p>
        <p><strong>Local Storage:</strong> Your reading bookmarks, theme preference (Light, Sepia, Dark), and font size settings are stored strictly in your local browser storage.</p>
        <p><strong>Newsletter:</strong> If you subscribe to our newsletter, your email address is used solely to deliver the weekly dispatch. You can unsubscribe at any time with a single click.</p>
      `
    },
    "terms": {
      title: "Terms of Service",
      body: `
        <p>All essays published on Monograph are intended for educational and intellectual exploration. While we strive for absolute technical accuracy, systems implementations should always be thoroughly validated within your specific production environment.</p>
        <p>Unless otherwise indicated, original text is published under our open intellectual access standards.</p>
      `
    },
    "accessibility": {
      title: "Accessibility Statement",
      body: `
        <p>Monograph is committed to ensuring digital accessibility for all people, including those with disabilities. We aim to conform with WCAG 2.1 Level AA guidelines.</p>
        <p>Features include:</p>
        <p>• High-contrast Sepia and Dark reading themes.<br>• Dynamic font scaling (85% to 135%) without layout breakage.<br>• Full keyboard navigability and focus trapping across all dialogs.<br>• Respect for <code>prefers-reduced-motion</code> user preferences.<br>• Semantic HTML5 structure and ARIA live status indicators.</p>
      `
    },
    "licensing": {
      title: "Open Licensing & Attribution",
      body: `
        <p>Excerpts and quotations from Monograph essays may be reproduced freely for non-commercial educational and research purposes with proper attribution to the author and a link back to the original dispatch.</p>
        <p>Code snippets contained within technical dispatches are released under the MIT License.</p>
      `
    },
    "press": {
      title: "Press Kit & Media Assets",
      body: `
        <p>Journalists, podcasters, and conference curators are welcome to download our official media kit, including high-resolution vector logos, editorial headshots, and brand guidelines.</p>
        <p>For press inquiries or interview requests with Monograph authors, reach out to our editorial communications desk.</p>
      `
    }};

  /* --------------------------------------------------------------------------
     3. Application State & Storage Helpers
     -------------------------------------------------------------------------- */
  class MonographApp {
    constructor() {
      this.articles = ARTICLES;
      this.currentCategory = "All";
      this.searchQuery = "";
      this.sortBy = "latest";
      this.currentPage = 1;
      this.pageSize = 6;
      this.lastFocusedElement = null;
      this.isPlayingAudio = false;
      this.activeAudioSource = null;
      this.activeArticleId = null;
      this.speechVoices = [];

      // Safe LocalStorage Initializations
      this.currentTheme = this.safeGetStorage("monograph_theme", "light");
      if (!["light", "sepia", "dark"].includes(this.currentTheme)) {
        this.currentTheme = "light";
      }

      this.fontScale = parseFloat(this.safeGetStorage("monograph_font_scale", "1"));
      if (isNaN(this.fontScale) || this.fontScale < 0.85 || this.fontScale > 1.35) {
        this.fontScale = 1;
      }

      let rawBookmarks = [];
      try {
        const stored = this.safeGetStorage("monograph_bookmarks", "[]");
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          rawBookmarks = parsed.filter(id => typeof id === 'string' && this.articles.some(a => a.id === id));
        }
      } catch (e) {
        rawBookmarks = [];
      }
      this.bookmarks = new Set(rawBookmarks);

      this.init();
    }

    /* Safe LocalStorage wrappers */
    safeGetStorage(key, fallback) {
      try {
        const val = localStorage.getItem(key);
        return val !== null && val !== undefined ? val : fallback;
      } catch (e) {
        console.warn("Storage access restricted:", e);
        return fallback;
      }
    }

    safeSetStorage(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.warn("Storage write restricted:", e);
      }
    }

    /* ------------------------------------------------------------------------
       4. Initialization Flow
       ------------------------------------------------------------------------ */
    init() {
      this.applyTheme(this.currentTheme);
      this.applyFontScale(this.fontScale);
      this.updateDateDisplay();
      this.updateCategoryCounts();
      this.updateBookmarkBadges();

      this.renderFeaturedGrid();
      this.renderArticlesFeed();
      this.renderBookmarksDrawer();

      this.initSpeechEngine();
      this.bindEvents();
      this.handleGlobalImageErrors();
      this.checkUrlDeepLink();
    }

    initSpeechEngine() {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        try {
          this.speechVoices = window.speechSynthesis.getVoices() || [];
          if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => {
              this.speechVoices = window.speechSynthesis.getVoices() || [];
            };
          }
        } catch (e) {
          console.warn("SpeechSynthesis voices initialization warning:", e);
        }
      }
    }

    /* ------------------------------------------------------------------------
       5. Dynamic Category Counts Calculation
       ------------------------------------------------------------------------ */
    updateCategoryCounts() {
      const counts = {
        "All": this.articles.length,
        "Artificial Intelligence": 0,
        "Systems & Architecture": 0,
        "Design & Craft": 0,
        "Future of Work": 0,
        "Digital Culture": 0
      };

      this.articles.forEach(art => {
        if (counts[art.category] !== undefined) {
          counts[art.category]++;
        }
      });

      const mapId = {
        "All": "count-all",
        "Artificial Intelligence": "count-ai",
        "Systems & Architecture": "count-systems",
        "Design & Craft": "count-design",
        "Future of Work": "count-work",
        "Digital Culture": "count-culture"
      };

      Object.keys(mapId).forEach(cat => {
        const el = document.getElementById(mapId[cat]);
        if (el) el.textContent = counts[cat] || 0;
      });
    }

    /* ------------------------------------------------------------------------
       6. Theme Management Engine
       ------------------------------------------------------------------------ */
    applyTheme(theme) {
      this.currentTheme = theme;
      document.documentElement.setAttribute("data-theme", theme);
      this.safeSetStorage("monograph_theme", theme);

      // Update meta theme color
      const metaTheme = document.getElementById("meta-theme-color");
      if (metaTheme) {
        const colors = { light: "#FBF9F5", sepia: "#F5EFE6", dark: "#121316" };
        metaTheme.setAttribute("content", colors[theme] || "#FBF9F5");
      }

      // Update active state on all theme buttons
      document.querySelectorAll("[data-theme-set]").forEach(btn => {
        const isMatch = btn.getAttribute("data-theme-set") === theme;
        btn.classList.toggle("active", isMatch);
        btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
      });
    }

    /* ------------------------------------------------------------------------
       7. Font Size Resizer Engine
       ------------------------------------------------------------------------ */
    applyFontScale(scale) {
      this.fontScale = Math.min(Math.max(scale, 0.85), 1.35);
      document.documentElement.style.setProperty("--reader-font-multiplier", this.fontScale.toFixed(2));
      this.safeSetStorage("monograph_font_scale", this.fontScale.toFixed(2));

      const indicator = document.getElementById("font-size-indicator");
      if (indicator) {
        indicator.textContent = `${Math.round(this.fontScale * 100)}%`;
      }
    }

    /* ------------------------------------------------------------------------
       8. Date & Reading Progress
       ------------------------------------------------------------------------ */
    updateDateDisplay() {
      const dateEl = document.getElementById("current-date");
      if (dateEl) dateEl.textContent = "August 2026";

      document.querySelectorAll(".hero-issue-no").forEach((el) => {
        el.textContent = "Featured Story • August 2026";
      });
    }

    initScrollProgress() {
      const progressBar = document.getElementById("reading-progress-bar");
      const header = document.getElementById("site-header");
      
      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        
        if (progressBar) {
          progressBar.style.width = `${progress}%`;
        }

        if (header) {
          header.classList.toggle("scrolled", scrollTop > 40);
        }
      }, { passive: true });
    }

    /* ------------------------------------------------------------------------
       9. Image Fallback Handling (SVG Placeholder)
       ------------------------------------------------------------------------ */
    handleGlobalImageErrors() {
      const fallbackSvg = encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <rect width="800" height="500" fill="#EAE5DB"/>
          <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Newsreader, serif" font-size="32" fill="#141517" font-weight="600">MONOGRAPH</text>
          <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="14" fill="#838896">Editorial Image Dispatch</text>
        </svg>
      `);
      const fallbackSrc = `data:image/svg+xml;charset=utf-8,${fallbackSvg}`;

      document.addEventListener("error", (e) => {
        if (e.target && e.target.tagName === "IMG" && !e.target.dataset.fallbackApplied) {
          e.target.dataset.fallbackApplied = "true";
          e.target.src = fallbackSrc;
        }
      }, true);
    }

    /* ------------------------------------------------------------------------
       10. Filter & Search Query Engine
       ------------------------------------------------------------------------ */
    getFilteredArticles() {
      const q = this.searchQuery.trim().toLowerCase();

      return this.articles.filter(article => {
        const matchCategory = this.currentCategory === "All" || article.category === this.currentCategory;
        if (!q) return matchCategory;

        const matchTitle = (article.title || "").toLowerCase().includes(q);
        const matchSubtitle = (article.subtitle || "").toLowerCase().includes(q);
        const matchExcerpt = (article.excerpt || "").toLowerCase().includes(q);
        const matchAuthor = (article.author?.name || "").toLowerCase().includes(q);
        const matchCategoryText = (article.category || "").toLowerCase().includes(q);
        const matchContent = (article.content || "").toLowerCase().includes(q);

        return matchCategory && (matchTitle || matchSubtitle || matchExcerpt || matchAuthor || matchCategoryText || matchContent);
      }).sort((a, b) => {
        if (this.sortBy === "popular") return (b.views || 0) - (a.views || 0);
        if (this.sortBy === "reading-time") return a.readMinutes - b.readMinutes;
        if (this.sortBy === "alphabetical") return a.title.localeCompare(b.title);
        return b.timestamp - a.timestamp;
      });
    }

    /* ------------------------------------------------------------------------
       11. Spotlight Grid Rendering
       ------------------------------------------------------------------------ */
    renderFeaturedGrid() {
      const container = document.getElementById("featured-stories-grid");
      if (!container) return;

      // Spotlight always follows the active taxonomy/search state. This keeps
      // the taxonomy section connected to the editorial content below it.
      const filtered = this.getFilteredArticles();
      const pool = filtered.length ? filtered : this.articles;
      const picks = pool.slice(0, 6);
      const major = picks[0];
      const secondary1 = picks[1] || picks[0];
      const secondary2 = picks[2] || picks[0];
      const listicles = picks.slice(3, 6);

      if (!major) {
        container.innerHTML = `<div class="spotlight-empty"><h3>No spotlight stories available</h3><p>Try clearing the current filters or search terms.</p></div>`;
        return;
      }

      const card = (art, majorCard = false) => `
        <article class="editorial-card ${majorCard ? 'editorial-card--major' : 'editorial-card--secondary'}" data-article-id="${art.id}">
          ${majorCard ? `<div class="card-image-wrap read-article-btn" data-article-id="${art.id}" tabindex="0" role="button" aria-label="Read ${art.title}">
            <img src="${art.image}" alt="${art.title}" class="card-img" loading="lazy" width="600" height="340">
          </div>` : ''}
          <div class="card-content">
            <div class="card-meta-row">
              <span class="pill ${majorCard ? 'pill--accent' : 'pill--outline'} pill--sm">${art.category}</span>
              <span class="card-time-stat">${art.readMinutes} min read</span>
            </div>
            <h3 class="card-title read-article-btn" data-article-id="${art.id}" tabindex="0" role="button">${art.title}</h3>
            <p class="card-excerpt">${art.excerpt}</p>
            <div class="card-footer">
              <div class="card-author-snippet">
                <img src="${art.author.avatar}" alt="${art.author.name}" class="card-author-avatar" width="28" height="28">
                <span class="card-author-name">${art.author.name}</span>
              </div>
              <button type="button" class="bookmark-action-btn ${this.bookmarks.has(art.id) ? 'bookmarked' : ''}" data-article-id="${art.id}" aria-label="Bookmark ${art.title}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>
        </article>`;

      const listMarkup = listicles.length ? listicles.map((art, idx) => `
        <div class="listicle-item read-article-btn" data-article-id="${art.id}" tabindex="0" role="button" aria-label="Read ${art.title}">
          <span class="listicle-number">0${idx + 1}</span>
          <div class="listicle-item__content">
            <div class="listicle-item__meta">${art.category} • ${art.readMinutes}m</div>
            <h4 class="listicle-item__title">${art.title}</h4>
          </div>
        </div>`).join('') : '';

      container.innerHTML = `
        ${card(major, true)}
        <div class="editorial-grid__stack">
          ${card(secondary1)}
          ${card(secondary2)}
        </div>
        <div class="editorial-grid__listicle">
          <div class="listicle-header"><span class="listicle-title">Trending &amp; Essential</span></div>
          <div class="listicle-items">${listMarkup}</div>
        </div>`;

      const note = document.getElementById("spotlight-filter-note");
      if (note) {
        if (this.currentCategory !== "All" || this.searchQuery.trim()) {
          const bits = [];
          if (this.currentCategory !== "All") bits.push(this.currentCategory);
          if (this.searchQuery.trim()) bits.push(`“${this.searchQuery.trim()}”`);
          note.textContent = `Showing ${filtered.length} matching ${filtered.length === 1 ? 'story' : 'stories'} for ${bits.join(' · ')}.`;
        } else {
          note.textContent = "Curated highlights from the full editorial archive.";
        }
      }
    }

    /* ------------------------------------------------------------------------
       12. Chronological Feed Rendering & Pagination
       ------------------------------------------------------------------------ */
    renderArticlesFeed() {
      const feedContainer = document.getElementById("articles-feed-container");
      const emptyState = document.getElementById("articles-empty-state");
      const paginationWrap = document.getElementById("feed-pagination");
      const summaryText = document.getElementById("feed-count-summary");
      const statusText = document.getElementById("filter-status-text");
      const resetBtn = document.getElementById("reset-filter-btn");

      if (!feedContainer) return;

      const filtered = this.getFilteredArticles();
      const total = filtered.length;
      const visibleCount = Math.min(this.currentPage * this.pageSize, total);
      const visibleArticles = filtered.slice(0, visibleCount);

      // Update Filter Status Bar
      const isFiltered = this.currentCategory !== "All" || this.searchQuery.trim() !== "";
      if (resetBtn) resetBtn.style.display = isFiltered ? "inline-flex" : "none";

      if (statusText) {
        if (isFiltered) {
          const parts = [];
          if (this.currentCategory !== "All") parts.push(`in "${this.currentCategory}"`);
          if (this.searchQuery.trim()) parts.push(`matching "${this.searchQuery.trim()}"`);
          statusText.textContent = `Found ${total} dispatch${total === 1 ? "" : "es"} ${parts.join(" ")}`;
        } else {
          statusText.textContent = `Displaying all ${total} dispatches`;
        }
      }

      // Handle Empty State
      if (total === 0) {
        feedContainer.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        if (paginationWrap) paginationWrap.style.display = "none";
        return;
      }

      if (emptyState) emptyState.style.display = "none";

      // Render Feed Items
      feedContainer.innerHTML = visibleArticles.map(art => `
        <article class="feed-article-card" data-article-id="${art.id}">
          <div class="feed-card-thumb-wrap read-article-btn" data-article-id="${art.id}" tabindex="0" role="button" aria-label="Read ${art.title}">
            <img src="${art.image}" alt="${art.title}" class="feed-card-thumb" loading="lazy" width="300" height="190">
          </div>
          <div class="feed-card-body">
            <div class="feed-card-header">
              <div class="feed-card-meta">
                <span class="pill pill--sm">${art.category}</span>
                <span class="stat-bullet" aria-hidden="true">•</span>
                <time datetime="${new Date(art.timestamp).toISOString().split('T')[0]}" class="card-time-stat">${art.dateStr}</time>
                <span class="stat-bullet" aria-hidden="true">•</span>
                <span class="card-time-stat">${art.readMinutes} min read</span>
              </div>
              <h3 class="feed-card-title read-article-btn" data-article-id="${art.id}" tabindex="0" role="button">${art.title}</h3>
              <p class="feed-card-summary">${art.excerpt}</p>
            </div>
            <div class="feed-card-footer">
              <div class="card-author-snippet">
                <img src="${art.author.avatar}" alt="${art.author.name}" class="card-author-avatar" width="28" height="28">
                <span class="card-author-name">${art.author.name}</span>
              </div>
              <div class="hero-actions">
                <button type="button" class="btn btn--outline btn--sm read-article-btn" data-article-id="${art.id}">
                  <span>Read Dispatch</span>
                </button>
                <button type="button" class="bookmark-action-btn ${this.bookmarks.has(art.id) ? 'bookmarked' : ''}" data-article-id="${art.id}" aria-label="Bookmark ${art.title}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      `).join("");

      // Pagination Controls
      if (paginationWrap) {
        paginationWrap.style.display = total > this.pageSize ? "flex" : "none";
        const loadMoreBtn = document.getElementById("load-more-btn");
        if (loadMoreBtn) {
          loadMoreBtn.style.display = visibleCount < total ? "inline-flex" : "none";
        }
      }

      if (summaryText) {
        summaryText.textContent = `Showing ${visibleCount} of ${total} dispatches`;
      }
    }

    /* ------------------------------------------------------------------------
       13. Bookmarks Management & Drawer
       ------------------------------------------------------------------------ */
    toggleBookmark(articleId) {
      if (this.bookmarks.has(articleId)) {
        this.bookmarks.delete(articleId);
        this.showToast("Removed from reading list");
      } else {
        this.bookmarks.add(articleId);
        this.showToast("Saved to reading list");
      }

      this.safeSetStorage("monograph_bookmarks", JSON.stringify(Array.from(this.bookmarks)));
      this.updateBookmarkBadges();
      this.renderBookmarksDrawer();

      // Update all active bookmark icons on page
      document.querySelectorAll(`.bookmark-action-btn[data-article-id="${articleId}"]`).forEach(btn => {
        btn.classList.toggle("bookmarked", this.bookmarks.has(articleId));
      });

      const readerBtn = document.getElementById("reader-bookmark-btn");
      if (readerBtn && readerBtn.dataset.currentArticleId === articleId) {
        readerBtn.classList.toggle("bookmarked", this.bookmarks.has(articleId));
      }
    }

    updateBookmarkBadges() {
      const count = this.bookmarks.size;
      const badge = document.getElementById("bookmark-count-badge");
      const counter = document.getElementById("drawer-bookmark-counter");
      if (badge) {
        badge.textContent = count;
        badge.setAttribute("aria-label", `${count} saved articles`);
      }
      if (counter) {
        counter.textContent = `${count} item${count === 1 ? "" : "s"}`;
      }
    }

    renderBookmarksDrawer() {
      const container = document.getElementById("bookmarks-list-container");
      const clearBtn = document.getElementById("clear-all-bookmarks-btn");
      if (!container) return;

      if (this.bookmarks.size === 0) {
        container.innerHTML = `
          <div class="bookmarks-empty">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto var(--space-xs); display:block;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            <p>Your saved reading list is currently empty.</p>
            <p style="margin-top: 4px;">Click the bookmark icon on any dispatch to save it for offline reading.</p>
          </div>
        `;
        if (clearBtn) clearBtn.style.display = "none";
        return;
      }

      const bookmarkedArticles = this.articles.filter(a => this.bookmarks.has(a.id));
      container.innerHTML = bookmarkedArticles.map(art => `
        <div class="bookmark-item-card" data-article-id="${art.id}">
          <div style="flex: 1;">
            <span class="pill pill--outline pill--sm" style="margin-bottom: 4px;">${art.category}</span>
            <button type="button" class="bookmark-item-title read-article-btn" data-article-id="${art.id}">
              ${art.title}
            </button>
            <div style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-muted); margin-top: 2px;">
              ${art.author.name} • ${art.readMinutes}m
            </div>
          </div>
          <button type="button" class="bookmark-remove-btn" data-remove-bookmark="${art.id}" aria-label="Remove ${art.title} from reading list" title="Remove from list">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      `).join("");

      if (clearBtn) clearBtn.style.display = "block";
    }

    /* ------------------------------------------------------------------------
       14. Accessible Modal & Drawer Management with Focus Traps
       ------------------------------------------------------------------------ */
    trapFocus(modalElement) {
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements.length) return;
      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        }
      };

      modalElement._focusTrapHandler = handleKeyDown;
      modalElement.addEventListener('keydown', handleKeyDown);
    }

    releaseFocusTrap(modalElement) {
      if (modalElement && modalElement._focusTrapHandler) {
        modalElement.removeEventListener('keydown', modalElement._focusTrapHandler);
        modalElement._focusTrapHandler = null;
      }
    }

    openModal(modalId, focusSelector) {
      const modal = document.getElementById(modalId);
      if (!modal) return;

      this.lastFocusedElement = document.activeElement;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");

      this.trapFocus(modal);

      setTimeout(() => {
        const target = focusSelector ? modal.querySelector(focusSelector) : modal.querySelector('button, input');
        if (target && target.focus) target.focus();
      }, 50);
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal || !modal.classList.contains("open")) return;

      if (modalId === "article-reader-modal" && this.isPlayingAudio && this.activeAudioSource === "reader") {
        this.stopAudioPlayer();
      }

      this.releaseFocusTrap(modal);
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");

      // Check if any other modal is open before removing body lock
      const anyOpen = document.querySelectorAll(".article-reader-modal.open, .search-modal.open, .bookmarks-drawer.open, .mobile-nav-drawer.open, .info-modal.open").length > 0;
      if (!anyOpen) {
        document.body.classList.remove("modal-open");
      }

      if (this.lastFocusedElement && this.lastFocusedElement.focus) {
        this.lastFocusedElement.focus();
      }
    }

    /* ------------------------------------------------------------------------
       15. Article Reader Modal
       ------------------------------------------------------------------------ */
    openArticleReader(articleId) {
      const article = this.articles.find(a => a.id === articleId);
      if (!article) return;

      this.activeArticleId = article.id;

      const contentContainer = document.getElementById("reader-content-body");
      const footerNav = document.getElementById("reader-footer-nav");
      const toolbarTitle = document.getElementById("reader-toolbar-title");
      const bookmarkBtn = document.getElementById("reader-bookmark-btn");
      const readerAudioBtn = document.getElementById("reader-audio-toggle");
      const readerPlayIcon = document.querySelector(".reader-audio-play-icon");
      const readerPauseIcon = document.querySelector(".reader-audio-pause-icon");

      const isThisPlaying = this.isPlayingAudio && (this.activeAudioSource === 'reader' || this.activeAudioSource === article.id);
      if (readerAudioBtn) readerAudioBtn.classList.toggle("playing", isThisPlaying);
      if (readerPlayIcon) readerPlayIcon.style.display = isThisPlaying ? "none" : "block";
      if (readerPauseIcon) readerPauseIcon.style.display = isThisPlaying ? "block" : "none";

      if (toolbarTitle) toolbarTitle.textContent = article.title;

      if (bookmarkBtn) {
        bookmarkBtn.dataset.currentArticleId = article.id;
        bookmarkBtn.classList.toggle("bookmarked", this.bookmarks.has(article.id));
      }

      // Next Recommendation
      const currentIdx = this.articles.findIndex(a => a.id === article.id);
      const nextArticle = this.articles[(currentIdx + 1) % this.articles.length];

      if (contentContainer) {
        contentContainer.innerHTML = `
          <header class="reader-header">
            <div class="reader-meta-top">
              <span class="pill pill--accent">${article.category}</span>
              <span class="stat-bullet">•</span>
              <time datetime="${new Date(article.timestamp).toISOString().split('T')[0]}">${article.dateStr}</time>
              <span class="stat-bullet">•</span>
              <span>${article.readMinutes} min read</span>
            </div>

            <h1 class="reader-article-title" id="reader-article-title">${article.title}</h1>
            <p class="reader-article-lead">${article.subtitle || article.excerpt}</p>

            <div class="author-meta" style="margin-top: var(--space-lg);">
              <img src="${article.author.avatar}" alt="${article.author.name}" class="author-avatar" width="44" height="44">
              <div class="author-info">
                <span class="author-name">${article.author.name}</span>
                <span class="author-role">${article.author.role}</span>
              </div>
            </div>

            <figure class="reader-hero-figure">
              <img src="${article.image}" alt="${article.title}" class="reader-hero-img">
              ${article.imageCaption ? `<figcaption class="reader-hero-caption">${article.imageCaption}</figcaption>` : ''}
            </figure>
          </header>

          <div class="reader-body-text">
            ${article.content}
          </div>

          <div class="reader-author-bio-card">
            <img src="${article.author.avatar}" alt="${article.author.name}" class="reader-author-avatar" width="60" height="60">
            <div class="reader-author-details">
              <h4>Written by ${article.author.name}</h4>
              <p>${article.author.bio}</p>
            </div>
          </div>
        `;
      }

      if (footerNav) {
        footerNav.innerHTML = `
          <div style="background-color: var(--bg-subtle); border-top: 1px solid var(--border-subtle); padding: var(--space-xl) var(--space-lg); border-radius: var(--radius-lg); margin-top: var(--space-3xl);">
            <span class="section-kicker">Next Dispatch in Series</span>
            <h3 style="font-family: var(--font-serif); font-size: var(--text-xl); margin: var(--space-xs) 0 var(--space-sm); cursor: pointer;" class="read-article-btn" data-article-id="${nextArticle.id}">
              ${nextArticle.title}
            </h3>
            <p style="font-size: var(--text-xs); color: var(--text-secondary); margin-bottom: var(--space-md);">${nextArticle.excerpt}</p>
            <button type="button" class="btn btn--primary btn--sm read-article-btn" data-article-id="${nextArticle.id}">
              <span>Read Next Dispatch (${nextArticle.readMinutes} min)</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        `;
      }

      // Update URL hash smoothly without jump
      try {
        history.replaceState(null, "", `#article-${article.id}`);
      } catch (e) {}

      this.openModal("article-reader-modal", "#reader-close-btn");

      // Scroll reader container to top
      const readerContainer = document.getElementById("reader-container");
      if (readerContainer) readerContainer.scrollTop = 0;
    }

    closeArticleReader() {
      this.closeModal("article-reader-modal");
      try {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      } catch (e) {}
    }

    checkUrlDeepLink() {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#article-")) {
        const id = hash.replace("#article-", "");
        if (this.articles.some(a => a.id === id)) {
          this.openArticleReader(id);
        }
      }
    }

    /* ------------------------------------------------------------------------
       16. Search Modal Engine
       ------------------------------------------------------------------------ */
    renderSearchModalResults(query) {
      const resultsContainer = document.getElementById("search-modal-results");
      if (!resultsContainer) return;

      const q = (query || "").trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = `
          <div style="text-align: center; padding: var(--space-xl) var(--space-md); color: var(--text-muted); font-size: var(--text-xs);">
            <p>Type keywords to search dispatches across title, author, category, or essay content.</p>
          </div>
        `;
        return;
      }

      const matches = this.articles.filter(article => {
        const matchTitle = (article.title || "").toLowerCase().includes(q);
        const matchSubtitle = (article.subtitle || "").toLowerCase().includes(q);
        const matchExcerpt = (article.excerpt || "").toLowerCase().includes(q);
        const matchAuthor = (article.author?.name || "").toLowerCase().includes(q);
        const matchCategory = (article.category || "").toLowerCase().includes(q);
        const matchContent = (article.content || "").toLowerCase().includes(q);
        return matchTitle || matchSubtitle || matchExcerpt || matchAuthor || matchCategory || matchContent;
      });

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div style="text-align: center; padding: var(--space-xl) var(--space-md); color: var(--text-muted); font-size: var(--text-xs);">
            <p>No dispatches found matching "${query}".</p>
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = matches.map(art => `
        <button type="button" class="search-result-item" data-article-id="${art.id}" aria-label="Read ${art.title}">
          <img src="${art.image}" alt="${art.title}" class="search-result-thumb" loading="lazy" width="64" height="48">
          <div class="search-result-info">
            <h4 class="search-result-title">${art.title}</h4>
            <div class="search-result-meta">${art.category} • ${art.author.name} • ${art.readMinutes} min read</div>
          </div>
        </button>
      `).join("");
    }

    /* ------------------------------------------------------------------------
       17. Informational Modal (Footer Links)
       ------------------------------------------------------------------------ */
    openInfoModal(key) {
      const page = INFO_PAGES[key];
      if (!page) return;

      const titleEl = document.getElementById("info-modal-title");
      const bodyEl = document.getElementById("info-modal-body");

      if (titleEl) titleEl.textContent = page.title;
      if (bodyEl) bodyEl.innerHTML = page.body;

      this.openModal("info-modal", "#info-modal-close");
    }

    /* ------------------------------------------------------------------------
       18. Audio Player with Speech Synthesis Voice Engine
       ------------------------------------------------------------------------ */
    toggleAudioPlayer(source = 'hero') {
      const heroBar = document.querySelector(".hero-audio-bar");
      const heroPlayIcon = document.querySelector(".audio-play-icon");
      const heroPauseIcon = document.querySelector(".audio-pause-icon");
      const heroBtnSpan = document.querySelector("#hero-audio-toggle span:not(.audio-duration-tag)");

      const readerBtn = document.getElementById("reader-audio-toggle");
      const readerPlayIcon = document.querySelector(".reader-audio-play-icon");
      const readerPauseIcon = document.querySelector(".reader-audio-pause-icon");

      const resetUI = () => {
        if (heroBar) heroBar.classList.remove("playing");
        if (heroPlayIcon) heroPlayIcon.style.display = "block";
        if (heroPauseIcon) heroPauseIcon.style.display = "none";
        if (heroBtnSpan) heroBtnSpan.textContent = "Listen to Dispatch";

        if (readerBtn) readerBtn.classList.remove("playing");
        if (readerPlayIcon) readerPlayIcon.style.display = "block";
        if (readerPauseIcon) readerPauseIcon.style.display = "none";
      };

      // If already playing this requested source, pause/stop
      if (this.isPlayingAudio && (this.activeAudioSource === source || (source === 'reader' && this.activeAudioSource === this.activeArticleId))) {
        this.isPlayingAudio = false;
        this.activeAudioSource = null;
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
        resetUI();
        this.showToast("Audio narration paused");
        return;
      }

      // If switching sources or starting fresh, clear any running speech
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      }
      resetUI();

      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        this.showToast("Speech synthesis is not supported in this browser");
        return;
      }

      let textToRead = "";
      let toastMsg = "Playing audio narration...";

      if (source === 'hero') {
        const lead = this.articles && this.articles.length > 0 ? this.articles[0] : null;
        const title = lead ? lead.title : "Architecting Autonomous Systems in the Era of Agentic Intelligence";
        const author = lead && lead.author ? lead.author.name : "Dr. Elena Vance";
        const excerpt = lead ? lead.excerpt : "Curated dispatches on technology and thought.";
        textToRead = `Monograph Journal. Issue 142. August 2026 Edition. Curated Dispatches on Technology and Thought. Lead Dispatch: ${title}. By ${author}. ${excerpt}`;
        toastMsg = "Playing Issue 142 audio narration...";
      } else {
        const articleId = typeof source === 'string' && source !== 'reader' ? source : this.activeArticleId;
        const article = this.articles.find(a => a.id === articleId) || this.articles[0];
        const cleanContent = article.content ? article.content.replace(/<[^>]*>?/gm, ' ') : "";
        textToRead = `Monograph Dispatch: ${article.title}. Authored by ${article.author.name}. ${article.excerpt}. ${cleanContent}`;
        toastMsg = `Narrating: ${article.title.substring(0, 32)}...`;
      }

      this.isPlayingAudio = true;
      this.activeAudioSource = source === 'hero' ? 'hero' : (this.activeArticleId || 'reader');

      if (source === 'hero') {
        if (heroBar) heroBar.classList.add("playing");
        if (heroPlayIcon) heroPlayIcon.style.display = "none";
        if (heroPauseIcon) heroPauseIcon.style.display = "block";
        if (heroBtnSpan) heroBtnSpan.textContent = "Pause Dispatch Audio";
      } else {
        if (readerBtn) readerBtn.classList.add("playing");
        if (readerPlayIcon) readerPlayIcon.style.display = "none";
        if (readerPauseIcon) readerPauseIcon.style.display = "block";
      }

      this.showToast(toastMsg);

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      const availableVoices = (this.speechVoices && this.speechVoices.length > 0) 
        ? this.speechVoices 
        : (window.speechSynthesis.getVoices() || []);

      if (availableVoices && availableVoices.length > 0) {
        const enVoice = availableVoices.find(v => v.lang && v.lang.startsWith("en") && (
          v.name.includes("Natural") || 
          v.name.includes("Google") || 
          v.name.includes("Neural") || 
          v.name.includes("Samantha") || 
          v.name.includes("Daniel") || 
          v.name.includes("Arthur") ||
          v.name.includes("English")
        )) || availableVoices.find(v => v.lang && v.lang.startsWith("en"));
        if (enVoice) utterance.voice = enVoice;
      }

      utterance.onend = () => {
        this.isPlayingAudio = false;
        this.activeAudioSource = null;
        resetUI();
        this.showToast("Audio narration complete");
      };

      utterance.onerror = (e) => {
        console.warn("SpeechSynthesis utterance error:", e);
        this.isPlayingAudio = false;
        this.activeAudioSource = null;
        resetUI();
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error("SpeechSynthesis speak error:", err);
        this.isPlayingAudio = false;
        this.activeAudioSource = null;
        resetUI();
      }
    }

    stopAudioPlayer() {
      if (this.isPlayingAudio) {
        this.isPlayingAudio = false;
        this.activeAudioSource = null;
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
        const heroBar = document.querySelector(".hero-audio-bar");
        const heroPlayIcon = document.querySelector(".audio-play-icon");
        const heroPauseIcon = document.querySelector(".audio-pause-icon");
        const heroBtnSpan = document.querySelector("#hero-audio-toggle span:not(.audio-duration-tag)");
        const readerBtn = document.getElementById("reader-audio-toggle");
        const readerPlayIcon = document.querySelector(".reader-audio-play-icon");
        const readerPauseIcon = document.querySelector(".reader-audio-pause-icon");

        if (heroBar) heroBar.classList.remove("playing");
        if (heroPlayIcon) heroPlayIcon.style.display = "block";
        if (heroPauseIcon) heroPauseIcon.style.display = "none";
        if (heroBtnSpan) heroBtnSpan.textContent = "Listen to Dispatch";
        if (readerBtn) readerBtn.classList.remove("playing");
        if (readerPlayIcon) readerPlayIcon.style.display = "block";
        if (readerPauseIcon) readerPauseIcon.style.display = "none";
      }
    }

    /* ------------------------------------------------------------------------
       19. Toast Notification System
       ------------------------------------------------------------------------ */
    showToast(message) {
      const container = document.getElementById("toast-container");
      if (!container) return;

      const toast = document.createElement("div");
      toast.className = "toast-msg";
      toast.setAttribute("role", "status");
      toast.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${message}</span>
      `;

      container.appendChild(toast);
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 3000);
    }

    /* ------------------------------------------------------------------------
       20. Reset All Filters Helper
       ------------------------------------------------------------------------ */
    resetAllFilters() {
      this.currentCategory = "All";
      this.searchQuery = "";
      this.currentPage = 1;

      const inlineInput = document.getElementById("inline-search-input");
      const inlineClear = document.getElementById("inline-search-clear");
      if (inlineInput) inlineInput.value = "";
      if (inlineClear) inlineClear.style.display = "none";

      document.querySelectorAll(".cat-pill").forEach(p => {
        const isAll = p.getAttribute("data-category") === "All";
        p.classList.toggle("active", isAll);
        p.setAttribute("aria-selected", isAll ? "true" : "false");
      });

      this.renderFeaturedGrid();
      this.renderArticlesFeed();
      this.showToast("Filters reset to all dispatches");
    }

    /* ------------------------------------------------------------------------
       21. Event Listeners & Delegations
       ------------------------------------------------------------------------ */
    bindEvents() {
      this.initScrollProgress();

      // Theme Switcher buttons
      document.querySelectorAll("[data-theme-set]").forEach(btn => {
        btn.addEventListener("click", () => {
          this.applyTheme(btn.getAttribute("data-theme-set"));
        });
      });

      // Font Size Controls
      const fontDec = document.getElementById("font-decrease");
      const fontInc = document.getElementById("font-increase");
      const readerFontDec = document.getElementById("reader-font-decrease");
      const readerFontInc = document.getElementById("reader-font-increase");

      if (fontDec) fontDec.addEventListener("click", () => this.applyFontScale(this.fontScale - 0.08));
      if (fontInc) fontInc.addEventListener("click", () => this.applyFontScale(this.fontScale + 0.08));
      if (readerFontDec) readerFontDec.addEventListener("click", () => this.applyFontScale(this.fontScale - 0.08));
      if (readerFontInc) readerFontInc.addEventListener("click", () => this.applyFontScale(this.fontScale + 0.08));

      // Audio Toggle in Hero
      const audioBtn = document.getElementById("hero-audio-toggle");
      if (audioBtn) {
        audioBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleAudioPlayer('hero');
        });
      }

      // Audio Toggle in Article Reader Modal
      const readerAudioBtn = document.getElementById("reader-audio-toggle");
      if (readerAudioBtn) {
        readerAudioBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleAudioPlayer('reader');
        });
      }

      // Category Pill Tabs
      const pillsContainer = document.getElementById("category-pills-list");
      if (pillsContainer) {
        pillsContainer.addEventListener("click", (e) => {
          const btn = e.target.closest(".cat-pill");
          if (!btn) return;

          const category = btn.getAttribute("data-category");
          this.currentCategory = category;
          this.currentPage = 1;

          document.querySelectorAll(".cat-pill").forEach(p => {
            const isMatch = p === btn;
            p.classList.toggle("active", isMatch);
            p.setAttribute("aria-selected", isMatch ? "true" : "false");
          });

          this.renderFeaturedGrid();
          this.renderArticlesFeed();
        });
      }

      // Inline Search Box
      const inlineInput = document.getElementById("inline-search-input");
      const inlineClear = document.getElementById("inline-search-clear");
      if (inlineInput) {
        inlineInput.addEventListener("input", (e) => {
          this.searchQuery = e.target.value;
          this.currentPage = 1;
          if (inlineClear) {
            inlineClear.style.display = this.searchQuery ? "flex" : "none";
          }
          this.renderFeaturedGrid();
          this.renderArticlesFeed();
        });
      }

      if (inlineClear) {
        inlineClear.addEventListener("click", () => {
          if (inlineInput) inlineInput.value = "";
          this.searchQuery = "";
          inlineClear.style.display = "none";
          this.currentPage = 1;
          this.renderFeaturedGrid();
          this.renderArticlesFeed();
          if (inlineInput) inlineInput.focus();
        });
      }

      // Reset Filter Buttons
      const resetBtn = document.getElementById("reset-filter-btn");
      const emptyResetBtn = document.getElementById("empty-state-reset-btn");
      if (resetBtn) resetBtn.addEventListener("click", () => this.resetAllFilters());
      if (emptyResetBtn) emptyResetBtn.addEventListener("click", () => this.resetAllFilters());

      // View Results: jump directly from taxonomy controls to the live feed.
      const viewResultsBtn = document.getElementById("view-filter-results-btn");
      if (viewResultsBtn) {
        viewResultsBtn.addEventListener("click", () => {
          const target = document.getElementById("latest-dispatches");
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }

      // Arrow-key navigation for taxonomy pills.
      document.querySelectorAll(".cat-pill").forEach((pill, index, pills) => {
        pill.addEventListener("keydown", (e) => {
          if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e.key)) return;
          e.preventDefault();
          const dir = (e.key === "ArrowRight" || e.key === "ArrowDown") ? 1 : -1;
          const next = pills[(index + dir + pills.length) % pills.length];
          next.focus();
          next.click();
        });
      });

      // Feed Sorting
      const sortSelect = document.getElementById("feed-sort-select");
      if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
          this.sortBy = e.target.value;
          this.currentPage = 1;
          this.renderArticlesFeed();
        });
      }

      // Load More Button
      const loadMoreBtn = document.getElementById("load-more-btn");
      if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
          this.currentPage++;
          this.renderArticlesFeed();
        });
      }

      // Back to Top Button (Smooth & Respects Reduced Motion)
      const backToTopBtn = document.getElementById("back-to-top-btn");
      if (backToTopBtn) {
        backToTopBtn.addEventListener("click", (e) => {
          e.preventDefault();
          const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({
            top: 0,
            behavior: prefersReduced ? "auto" : "smooth"
          });
        });
      }

      // Bookmarks Drawer Triggers
      const bookmarksBtn = document.getElementById("bookmarks-trigger");
      const bookmarksClose = document.getElementById("bookmarks-drawer-close");
      const bookmarksBackdrop = document.getElementById("bookmarks-drawer-backdrop");
      const clearAllBookmarks = document.getElementById("clear-all-bookmarks-btn");

      if (bookmarksBtn) {
        bookmarksBtn.addEventListener("click", () => {
          this.openModal("bookmarks-drawer", "#bookmarks-drawer-close");
        });
      }
      if (bookmarksClose) bookmarksClose.addEventListener("click", () => this.closeModal("bookmarks-drawer"));
      if (bookmarksBackdrop) bookmarksBackdrop.addEventListener("click", () => this.closeModal("bookmarks-drawer"));

      if (clearAllBookmarks) {
        clearAllBookmarks.addEventListener("click", () => {
          this.bookmarks.clear();
          this.safeSetStorage("monograph_bookmarks", "[]");
          this.updateBookmarkBadges();
          this.renderBookmarksDrawer();
          document.querySelectorAll(".bookmark-action-btn").forEach(btn => btn.classList.remove("bookmarked"));
          this.showToast("All bookmarks cleared");
        });
      }

      // Mobile Nav Drawer Triggers
      const mobileToggle = document.getElementById("mobile-menu-toggle");
      const mobileClose = document.getElementById("mobile-nav-close");
      const mobileBackdrop = document.getElementById("mobile-nav-backdrop");

      if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
          const isOpen = mobileToggle.getAttribute("aria-expanded") === "true";
          if (isOpen) {
            this.closeModal("mobile-nav-drawer");
            mobileToggle.setAttribute("aria-expanded", "false");
          } else {
            this.openModal("mobile-nav-drawer", "#mobile-nav-close");
            mobileToggle.setAttribute("aria-expanded", "true");
          }
        });
      }

      if (mobileClose) {
        mobileClose.addEventListener("click", () => {
          this.closeModal("mobile-nav-drawer");
          if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
        });
      }

      if (mobileBackdrop) {
        mobileBackdrop.addEventListener("click", () => {
          this.closeModal("mobile-nav-drawer");
          if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
        });
      }

      // Close mobile nav on link click
      document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", () => {
          this.closeModal("mobile-nav-drawer");
          if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
        });
      });

      // Search Modal Triggers
      const searchTrigger = document.getElementById("search-modal-trigger");
      const mobileSearchTrigger = document.getElementById("mobile-search-trigger");
      const searchCloseKbd = document.getElementById("search-modal-close-kbd");
      const searchBackdrop = document.getElementById("search-modal-backdrop");
      const modalSearchInput = document.getElementById("modal-search-input");

      const openSearch = () => {
        this.openModal("search-modal", "#modal-search-input");
        if (modalSearchInput) {
          modalSearchInput.value = "";
          this.renderSearchModalResults("");
        }
      };

      if (searchTrigger) searchTrigger.addEventListener("click", openSearch);
      if (mobileSearchTrigger) {
        mobileSearchTrigger.addEventListener("click", () => {
          this.closeModal("mobile-nav-drawer");
          if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
          setTimeout(openSearch, 200);
        });
      }

      if (searchCloseKbd) searchCloseKbd.addEventListener("click", () => this.closeModal("search-modal"));
      if (searchBackdrop) searchBackdrop.addEventListener("click", () => this.closeModal("search-modal"));

      if (modalSearchInput) {
        modalSearchInput.addEventListener("input", (e) => {
          this.renderSearchModalResults(e.target.value);
        });
      }

      // Quick Tag filters in Search Modal
      document.querySelectorAll(".quick-tag").forEach(tag => {
        tag.addEventListener("click", () => {
          const val = tag.getAttribute("data-tag");
          if (modalSearchInput) {
            modalSearchInput.value = val;
            this.renderSearchModalResults(val);
          }
        });
      });

      // Keyboard Shortcut (Ctrl+K or Cmd+K to search, Esc to close modals)
      window.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          openSearch();
        } else if (e.key === "Escape") {
          this.closeModal("article-reader-modal");
          this.closeModal("search-modal");
          this.closeModal("bookmarks-drawer");
          this.closeModal("mobile-nav-drawer");
          this.closeModal("info-modal");
          if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
        }
      });

      // Reader Modal Controls
      const readerCloseBtn = document.getElementById("reader-close-btn");
      const readerCloseX = document.getElementById("reader-close-x");
      const readerBackdrop = document.getElementById("reader-backdrop");
      const readerBookmark = document.getElementById("reader-bookmark-btn");
      const readerShare = document.getElementById("reader-share-btn");

      if (readerCloseBtn) readerCloseBtn.addEventListener("click", () => this.closeArticleReader());
      if (readerCloseX) readerCloseX.addEventListener("click", () => this.closeArticleReader());
      if (readerBackdrop) readerBackdrop.addEventListener("click", () => this.closeArticleReader());

      if (readerBookmark) {
        readerBookmark.addEventListener("click", () => {
          const id = readerBookmark.dataset.currentArticleId;
          if (id) this.toggleBookmark(id);
        });
      }

      if (readerShare) {
        readerShare.addEventListener("click", () => {
          const url = window.location.href;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(() => {
              this.showToast("Article link copied to clipboard");
            }).catch(() => {
              this.showToast("Copied article link");
            });
          } else {
            this.showToast("Copied article link");
          }
        });
      }

      // Info Modal Close
      const infoClose = document.getElementById("info-modal-close");
      const infoBackdrop = document.getElementById("info-modal-backdrop");
      if (infoClose) infoClose.addEventListener("click", () => this.closeModal("info-modal"));
      if (infoBackdrop) infoBackdrop.addEventListener("click", () => this.closeModal("info-modal"));

      // Global Event Delegation for Dynamic Click & Keyboard Triggers
      document.addEventListener("click", (e) => {
        // Global Audio Trigger for outer waveform click
        const waveformTrigger = e.target.closest(".audio-waveform-visual");
        if (waveformTrigger) {
          e.preventDefault();
          this.toggleAudioPlayer('hero');
          return;
        }

        // Read Article Trigger
        const readBtn = e.target.closest(".read-article-btn");
        if (readBtn) {
          const id = readBtn.getAttribute("data-article-id");
          if (id) {
            this.closeModal("search-modal");
            this.closeModal("bookmarks-drawer");
            this.openArticleReader(id);
          }
          return;
        }

        // Bookmark Trigger
        const bookmarkBtn = e.target.closest(".bookmark-action-btn");
        if (bookmarkBtn) {
          const id = bookmarkBtn.getAttribute("data-article-id");
          if (id) this.toggleBookmark(id);
          return;
        }

        // Remove single bookmark in drawer
        const removeBtn = e.target.closest("[data-remove-bookmark]");
        if (removeBtn) {
          const id = removeBtn.getAttribute("data-remove-bookmark");
          if (id) this.toggleBookmark(id);
          return;
        }

        // Search modal result item click
        const searchItem = e.target.closest(".search-result-item");
        if (searchItem) {
          const id = searchItem.getAttribute("data-article-id");
          if (id) {
            this.closeModal("search-modal");
            this.openArticleReader(id);
          }
          return;
        }

        // Footer category links -> switch category, scroll to #topics
        const footerCat = e.target.closest(".footer-cat-link");
        if (footerCat) {
          e.preventDefault();
          const cat = footerCat.getAttribute("data-category");
          if (cat) {
            this.currentCategory = cat;
            this.currentPage = 1;
            document.querySelectorAll(".cat-pill").forEach(p => {
              const isMatch = p.getAttribute("data-category") === cat;
              p.classList.toggle("active", isMatch);
              p.setAttribute("aria-selected", isMatch ? "true" : "false");
            });
            this.renderFeaturedGrid();
            this.renderArticlesFeed();
            const topicsSection = document.getElementById("topics");
            if (topicsSection) {
              topicsSection.scrollIntoView({ behavior: "smooth" });
            }
          }
          return;
        }

        // Informational triggers (About, Editorial Board, Privacy, etc.)
        const infoTrigger = e.target.closest(".footer-info-trigger, [data-info-key]");
        if (infoTrigger) {
          e.preventDefault();
          const infoKey = infoTrigger.getAttribute("data-info-key") || infoTrigger.getAttribute("data-info");
          if (infoKey) {
            this.openInfoModal(infoKey);
          }
          return;
        }
      });

      // Keyboard Accessibility for Enter/Space on Custom Interactive Elements
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          const target = e.target;
          if (target.classList.contains("read-article-btn") && target.tagName !== "BUTTON" && target.tagName !== "A") {
            e.preventDefault();
            const id = target.getAttribute("data-article-id");
            if (id) this.openArticleReader(id);
          }
        }
      });

      // URL Hash Change Handler
      window.addEventListener("hashchange", () => {
        this.checkUrlDeepLink();
      });

      // Newsletter Form Submission Validation
      const newsForm = document.getElementById("newsletter-form");
      if (newsForm) {
        newsForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const emailInput = document.getElementById("newsletter-email");
          const feedback = document.getElementById("newsletter-feedback-msg");
          const submitBtn = document.getElementById("newsletter-submit-btn");

          if (!emailInput || !feedback || !submitBtn) return;

          const val = emailInput.value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!val) {
            feedback.className = "form-feedback-msg error";
            feedback.textContent = "Please provide your email address.";
            emailInput.classList.add("invalid");
            emailInput.focus();
            return;
          }

          if (!emailRegex.test(val)) {
            feedback.className = "form-feedback-msg error";
            feedback.textContent = "Please enter a valid email format (e.g. name@company.com).";
            emailInput.classList.add("invalid");
            emailInput.focus();
            return;
          }

          emailInput.classList.remove("invalid");
          submitBtn.disabled = true;
          submitBtn.querySelector(".btn-text").textContent = "Subscribing...";
          submitBtn.querySelector(".btn-spinner").style.display = "inline-block";

          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.querySelector(".btn-text").textContent = "Subscribed!";
            submitBtn.querySelector(".btn-spinner").style.display = "none";
            feedback.className = "form-feedback-msg success";
            feedback.textContent = `Welcome to Monograph! A confirmation email has been dispatched to ${val}.`;
            emailInput.value = "";
            this.showToast("Subscribed to Weekly Dispatch");
          }, 600);
        });
      }
    }
  }

  // Launch Monograph on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    window.monographApp = new MonographApp();
  });
})();
