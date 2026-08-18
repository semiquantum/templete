// Developer Portfolio - Interactive JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        // Close menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Active Navigation Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.nav-links a[href*=' + sectionId + ']');

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // 3. Hero Code Snippet Tab Switcher
    const codeSnippets = {
        ts: `<span class="kw">interface</span> <span class="fn">Engineer</span> {
  name: <span class="str">'Alex Chen'</span>;
  role: <span class="str">'Senior Full Stack Architect'</span>;
  stack: [<span class="str">'TypeScript'</span>, <span class="str">'Next.js'</span>, <span class="str">'Go'</span>, <span class="str">'GraphQL'</span>];
  status: <span class="str">'🟢 Available for high-impact projects'</span>;
}

<span class="kw">async function</span> <span class="fn">buildScaleableSystem</span>(): <span class="fn">Promise</span>&lt;<span class="kw">void</span>&gt; {
  <span class="kw">const</span> app = <span class="kw">await</span> <span class="fn">deployMicroservices</span>({ uptime: <span class="num">0.9999</span> });
  console.<span class="fn">log</span>(<span class="str">'Ready to solve complex engineering challenges!'</span>);
}`,
        py: `<span class="kw">class</span> <span class="fn">AIArchitect</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.name = <span class="str">"Alex Chen"</span>
        self.specialties = [<span class="str">"Distributed Systems"</span>, <span class="str">"LLM Infrastructure"</span>, <span class="str">"FastAPI"</span>]

    <span class="kw">def</span> <span class="fn">optimize_performance</span>(self, latency_ms: <span class="num">45</span>):
        <span class="cm"># Reduce P99 latency by 65%</span>
        <span class="kw">return</span> f<span class="str">"Optimized pipeline down to {latency_ms}ms"</span>`,
        go: `<span class="kw">package</span> main

<span class="kw">import</span> <span class="str">"fmt"</span>

<span class="kw">type</span> <span class="fn">Developer</span> <span class="kw">struct</span> {
	Name <span class="kw">string</span>
	Core <span class="kw">string</span>
}

<span class="kw">func</span> <span class="fn">main</span>() {
	dev := Developer{Name: <span class="str">"Alex Chen"</span>, Core: <span class="str">"High-Concurrency Engines"</span>}
	fmt.<span class="fn">Println</span>(dev.Name, <span class="str">"building resilient backend services."</span>)
}`
    };

    const tabBtns = document.querySelectorAll('.window-tab');
    const codeDisplay = document.getElementById('codeSnippetDisplay');

    if (tabBtns && codeDisplay) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const lang = btn.getAttribute('data-lang');
                if (codeSnippets[lang]) {
                    codeDisplay.innerHTML = codeSnippets[lang];
                }
            });
        });
    }

    // 4. Interactive Code Inspector Project Modal
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalContentBody');
    const modalClose = document.getElementById('modalCloseBtn');

    const projectDetailsData = {
        1: {
            title: "CloudScale - Distributed Microservices Mesh",
            tech: "Go, Kubernetes, gRPC, Prometheus, Docker",
            metrics: "Handles 1.2M req/sec with < 8ms P99 latency across multi-region deployment.",
            desc: "Designed and deployed a resilient zero-trust microservice mesh architecture serving millions of daily concurrent API calls. Features dynamic autoscaling, blue-green deployment pipelines, and real-time observability telemetry.",
            codeSample: `// Microservice Traffic Router Engine
func (r *Router) HandleStream(stream gRPC.Stream) error {
    ctx := stream.Context()
    span := tracer.StartSpan("Router.HandleStream")
    defer span.End()

    for {
        msg, err := stream.Recv()
        if err == io.EOF { return nil }
        metrics.RecordLatency(time.Since(start))
    }
}`
        },
        2: {
            title: "DevPulse - Real-time Developer Analytics Platform",
            tech: "TypeScript, Next.js 14, WebSockets, ClickHouse, Tailwind",
            metrics: "Reduced metrics processing lag from 4.2s to 120ms.",
            desc: "Built a high-performance telemetry dashboard visualizer for engineering teams to monitor code velocity, deployment frequency, and system error tracebacks in real-time.",
            codeSample: `export async function StreamAnalytics(repoId: string) {
  const socket = new WebSocket(\`wss://api.devpulse.io/v1/stream/\${repoId}\`);
  socket.onmessage = (event) => {
    const telemetry = JSON.parse(event.data);
    updateMetricsGrid(telemetry);
  };
}`
        },
        3: {
            title: "KubeFlow CLI - Intelligent DevOps Automation",
            tech: "Rust, Tokio, WebAssembly, AWS SDK",
            metrics: "Saved over 150+ developer-hours per month across enterprise clients.",
            desc: "A lightweight, blazingly fast CLI tool developed in Rust to automate multi-cloud Kubernetes deployment cluster health audits and security compliance verification.",
            codeSample: `pub async fn audit_cluster_security(client: &KubeClient) -> Result<AuditReport> {
    let pods = client.list_pods().await?;
    let vulnerabilities = scan_container_images(&pods).await?;
    Ok(AuditReport::generate(vulnerabilities))
}`
        }
    };

    window.openProjectModal = function(id) {
        const data = projectDetailsData[id];
        if (data && modal && modalBody) {
            modalBody.innerHTML = `
                <div class="section-tag mono">CODE_INSPECTOR // DETAILS</div>
                <h2 style="font-size: 1.6rem; margin-bottom: 8px;">${data.title}</h2>
                <p style="color: var(--primary-cyan); font-family: var(--font-mono); font-size: 0.88rem; margin-bottom: 16px;">${data.tech}</p>
                <div style="background: var(--bg-card); padding: 14px; border-radius: 8px; border-left: 3px solid var(--accent-emerald); margin-bottom: 20px;">
                    <strong style="color: var(--accent-emerald);">⚡ Performance Metric:</strong> ${data.metrics}
                </div>
                <p style="color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;">${data.desc}</p>
                <h4 style="font-family: var(--font-mono); font-size: 0.9rem; margin-bottom: 8px; color: var(--text-main);">// Technical Core Implementation:</h4>
                <pre style="background: #020617; padding: 16px; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.85rem; color: #34d399; overflow-x: auto;"><code>${escapeHtml(data.codeSample)}</code></pre>
            `;
            modal.classList.add('active');
        }
    };

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    // 5. Interactive Live CLI Terminal
    const termInput = document.getElementById('terminalInput');
    const termOutput = document.getElementById('terminalOutput');

    const commands = {
        help: `Available commands:
  <span class="text-cyan">skills</span>      - View tech stack & frameworks
  <span class="text-cyan">projects</span>    - List featured engineering repositories
  <span class="text-cyan">about</span>       - Print bio and experience summary
  <span class="text-cyan">contact</span>     - Display email & social links
  <span class="text-cyan">sudo hire</span>   - Unlock instant recruiter contact mode
  <span class="text-cyan">clear</span>       - Clear terminal screen`,
        skills: `TECH STACK MATRIX:
  • Languages:   TypeScript, Go, Python, Rust, SQL
  • Frontend:    React, Next.js, Vue, Tailwind CSS
  • Backend:     Node.js, Express, FastAPI, gRPC, GraphQL
  • Cloud/Ops:   AWS, Kubernetes, Docker, Terraform, CI/CD`,
        projects: `FEATURED REPOSITORIES:
  1. [CloudScale] - Distributed Microservices Mesh (Go/K8s)
  2. [DevPulse]   - Real-time Analytics Engine (TypeScript/Next.js)
  3. [KubeFlow]   - Rust DevOps CLI Automation Tool`,
        about: `Alex Chen | Senior Full-Stack Architect
12+ years of experience engineering scalable backend services and modern frontend interfaces. Specializing in high-concurrency systems and developer tooling.`,
        contact: `CONTACT CHANNELS:
  • Email:    alex.chen.dev@example.com
  • GitHub:   github.com/alexchen-dev
  • LinkedIn: linkedin.com/in/alexchen-tech`,
        'sudo hire': `<span class="text-emerald">✔ PERMISSION GRANTED! Initiating direct contact protocol...</span>
Send your email to alex.chen.dev@example.com with subject "Hiring Inquiry" for priority response within 2 hours!`
    };

    window.runCmd = function(cmdStr) {
        if (!termOutput) return;
        
        // Print command prompt
        const promptLine = document.createElement('div');
        promptLine.className = 'terminal-line';
        promptLine.innerHTML = `<span class="text-cyan">alex@dev-box:~$</span> ${cmdStr}`;
        termOutput.appendChild(promptLine);

        const cleanCmd = cmdStr.trim().toLowerCase();
        
        if (cleanCmd === 'clear') {
            termOutput.innerHTML = '';
            return;
        }

        const respLine = document.createElement('div');
        respLine.className = 'terminal-line';
        respLine.style.marginBottom = '12px';

        if (commands[cleanCmd]) {
            respLine.innerHTML = commands[cleanCmd].replace(/\n/g, '<br>');
        } else {
            respLine.innerHTML = `<span style="color: var(--accent-rose);">Command not found: "${escapeHtml(cmdStr)}". Type <span class="text-cyan">help</span> for command list.</span>`;
        }

        termOutput.appendChild(respLine);
        termOutput.scrollTop = termOutput.scrollHeight;
    };

    if (termInput) {
        termInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = termInput.value;
                if (val.trim() !== '') {
                    runCmd(val);
                    termInput.value = '';
                }
            }
        });
    }

    // 6. Form Submission Handling
    const contactForm = document.getElementById('developerContactForm');
    const formStatus = document.getElementById('formStatusMsg');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.className = 'form-status success';
            formStatus.innerHTML = `🟢 Message transmitted successfully! Alex will reply to your email shortly.`;
            formStatus.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 6000);
        });
    }

    // Helper
    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});
