"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "systems", label: "Systems" },
  { id: "career", label: "Career" },
  { id: "stack", label: "Stack" },
  { id: "lab", label: "Lab" },
  { id: "credentials", label: "Credentials" },
];

const selectedSystems = [
  {
    index: "01",
    title: "Search modernization + applied AI",
    signal: "Legacy → cloud-native",
    lead: "Modernizing search microservices while bringing AI-assisted relevance and LLM workflows into the system.",
    detail:
      "Current work in Chicago centers on decommissioning legacy platforms, migrating services toward cloud-native architecture, and contributing to intelligent search experiences without compromising reliability.",
    meta: "EPAM Systems · Chicago · 2025—Now",
    stack: "JAVA / SPRING BOOT / SEARCH / AWS / LLM WORKFLOWS",
  },
  {
    index: "02",
    title: "A service for 31 languages",
    signal: "One service → 31 languages",
    lead: "Built a translation service with Lokalise and a companion feedback service for a reusable product experience.",
    detail:
      "The work connected backend service design with internationalization at product scale, giving teams a common translation capability and a direct feedback loop.",
    meta: "EPAM Systems · Pune / Remote · 2021—2022",
    stack: "SPRING FRAMEWORK / MICROSERVICES / LOKALISE / I18N",
  },
  {
    index: "03",
    title: "Financial systems + automation",
    signal: "Manual workflow → intelligent flow",
    lead: "Delivered financial-data features, payment integrations, an Azure NLP assistant, and automated digital-check processing.",
    detail:
      "The portfolio spanned FDX data access, policy-administration payments, cognitive services, and workflow automation. The digital-check concept earned first place in a Principal hackathon.",
    meta: "Principal Financial Group · Pune · 2018—2021",
    stack: "JAVA / AZURE / NLP / FDX / PAYMENTS / AUTOMATION",
  },
];

const career = [
  {
    date: "AUG 2025—NOW",
    role: "Lead Software Engineer",
    company: "EPAM Systems",
    location: "Chicago, IL",
    detail:
      "Modernizing search microservices, decommissioning legacy platforms, and contributing to AI-assisted search and LLM-driven workflows.",
    stack: "Java · Spring Boot · Search · AWS · Applied AI",
  },
  {
    date: "OCT 2024—JUL 2025",
    role: "Lead Software Engineer",
    company: "EPAM Systems",
    location: "Dallas, TX",
    detail:
      "Led offshore development across risk-remediation and healthcare exchange initiatives, delivering features for distributed backend services.",
    stack: "Java · Microservices · Delivery leadership",
  },
  {
    date: "NOV 2022—SEP 2024",
    role: "Lead Software Engineer",
    company: "EPAM Systems",
    location: "Remote",
    detail:
      "Developed backend microservices for an administration platform that connected teams and services with AWS resources.",
    stack: "Spring Framework · AWS · Cloud architecture · Microservices",
  },
  {
    date: "MAR 2021—NOV 2022",
    role: "Senior Software Engineer",
    company: "EPAM Systems",
    location: "Pune / Remote",
    detail:
      "Built a translation service supporting 31 languages with Lokalise and created a backend feedback service for a reusable interface component.",
    stack: "Spring Framework · Service design · Internationalization",
  },
  {
    date: "JUN 2018—MAR 2021",
    role: "Software Analyst",
    company: "Principal Financial Group",
    location: "Pune, India",
    detail:
      "Delivered financial-data and payment features, an Azure NLP chatbot, and digital-check automation that won first place in an internal hackathon.",
    stack: "Java · Azure · NLP · Spring Framework · Payments",
  },
  {
    date: "JUN 2017—JUN 2018",
    role: "Senior Software Engineer",
    company: "Capgemini",
    location: "Pune, India",
    detail:
      "Improved application security with JWT, added bulk cheque processing, and automated escalation workflows for a digital cheque system.",
    stack: "Spring Framework · JWT · REST · SOAP",
  },
  {
    date: "DEC 2015—JUN 2017",
    role: "Software Engineer",
    company: "Capgemini",
    location: "Pune, India",
    detail:
      "Developed batch jobs for payment processing, reporting, dispute tracking, and automated cheque monitoring.",
    stack: "Spring Batch · Java · REST · Reporting",
  },
];

const technologyGroups = [
  {
    number: "01",
    title: "Languages + frameworks",
    items: ["Java", "Spring Boot", "Spring Framework", "Spring Batch", "REST / SOAP", "Gradle"],
  },
  {
    number: "02",
    title: "Cloud + infrastructure",
    items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
  },
  {
    number: "03",
    title: "Messaging + distributed",
    items: ["Kafka", "SQS", "SNS", "Event-driven design", "Redis", "PostgreSQL"],
  },
  {
    number: "04",
    title: "AI + emerging",
    items: ["Claude API", "MCP", "RAG", "Agentic workflows", "Tool calling", "Evaluation workflows"],
  },
];

const labProjects = [
  {
    index: "L/01",
    name: "Gemini ADK with Antigravity",
    description: "A learning lab for Google’s Agent Development Kit, including an ambient expense agent.",
    language: "HTML · 2026",
    href: "https://github.com/Kaushik27/gemini-adk-with-antigravity",
  },
  {
    index: "L/02",
    name: "MCP server demo",
    description: "A Java experiment exploring Model Context Protocol server patterns.",
    language: "JAVA · 2026",
    href: "https://github.com/Kaushik27/mcp-server-demo",
  },
  {
    index: "L/03",
    name: "E-school",
    description: "An early full-stack exploration of an e-school management system.",
    language: "CSS / WEB · ARCHIVE",
    href: "https://github.com/Kaushik27/e-school",
  },
];

const credentials = [
  { name: "Claude Certified Architect — AI Foundations", issuer: "Anthropic", date: "2026" },
  { name: "Engineer AI Agents with Agent Development Kit", issuer: "Google Cloud", date: "2025" },
  { name: "Observability Foundations", issuer: "New Relic", date: "2024" },
  { name: "Solutions Architect — Associate", issuer: "AWS", date: "2022" },
  { name: "Developer — Associate", issuer: "AWS", date: "2021" },
  { name: "Azure Fundamentals", issuer: "Microsoft", date: "2021" },
  { name: "Advanced RPA Professional", issuer: "Automation Anywhere", date: "2019" },
  { name: "Java EE Web Services Developer", issuer: "Oracle / NIIT", date: "2015" },
  { name: "Java SE Programmer", issuer: "Oracle / NIIT", date: "2012" },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kaushik Mandal",
  jobTitle: "Lead Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  worksFor: { "@type": "Organization", name: "EPAM Systems" },
  sameAs: [
    "https://www.linkedin.com/in/kaushik-mandal-11a89b25/",
    "https://github.com/Kaushik27",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Microservices",
    "AWS",
    "Azure",
    "Kubernetes",
    "Applied artificial intelligence",
  ],
};

function SectionIndex({ number, label }: { number: string; label: string }) {
  return (
    <div className="chapter-index" aria-hidden="true">
      <span className="chapter-number">{number}</span>
      <span className="chapter-label">{label}</span>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.45] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("kaushikmandal27@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = "mailto:kaushikmandal27@gmail.com";
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#intro" aria-label="Kaushik Mandal — back to top">
          KM<span>/01</span>
        </a>
        <p className="header-role">Lead Software Engineer · Chicago</p>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="primary-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/kaushik-mandal-11a89b25/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section id="intro" className="hero" data-section="01" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span>FIELD MANUAL / SYSTEMS ARCHITECTURE</span>
            <span>CHICAGO / 2026</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> Building dependable systems</p>
              <h1 id="hero-title">
                <span>KAUSHIK</span>
                <span>MANDAL</span>
              </h1>
              <div className="hero-statement">
                <p>Engineering systems that stay calm under pressure.</p>
                <div>
                  <p className="hero-dek">
                    Lead Software Engineer building cloud-native Java platforms, distributed services, and AI-assisted workflows.
                  </p>
                  <p className="hero-meta">EPAM Systems · Chicago, Illinois</p>
                  <div className="hero-actions">
                    <a className="action action-primary" href="#systems">Explore selected systems <span>↓</span></a>
                    <a className="action action-secondary" href="mailto:kaushikmandal27@gmail.com">Start a conversation <span>↗</span></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="schematic" aria-hidden="true">
              <div className="schematic-heading">
                <span>OPERATING MODEL</span>
                <span>KM—10Y+</span>
              </div>
              <div className="schematic-grid">
                <div className="map-node node-intent"><small>INPUT</small><strong>INTENT</strong></div>
                <div className="map-node node-core"><small>CORE</small><strong>JAVA</strong></div>
                <div className="map-node node-intelligence"><small>LAYER</small><strong>AI</strong></div>
                <div className="map-node node-cloud"><small>RUNTIME</small><strong>CLOUD</strong></div>
                <div className="map-line line-a" />
                <div className="map-line line-b" />
                <div className="map-line line-c" />
                <div className="map-pulse pulse-a" />
                <div className="map-pulse pulse-b" />
              </div>
              <div className="schematic-footer">
                <span>01 / DESIGN</span>
                <span>02 / DISTRIBUTE</span>
                <span>03 / SCALE</span>
              </div>
            </div>
          </div>

          <div className="signal-strip" aria-label="Career highlights">
            <div><strong>10+</strong><span>Years building</span></div>
            <div><strong>31</strong><span>Languages served</span></div>
            <div><strong>#1</strong><span>Hackathon finish</span></div>
            <div><strong>80+</strong><span>Public repositories</span></div>
          </div>
        </section>

        <section id="systems" className="section section-systems" data-section="02" aria-labelledby="systems-title">
          <div className="section-shell">
            <SectionIndex number="02" label="SELECTED SYSTEMS" />
            <div className="section-content">
              <div className="section-heading">
                <p className="section-overline">PROOF / NOT PROMISES</p>
                <h2 id="systems-title">Complex underneath.<br />Calm at the surface.</h2>
                <p>Three public snapshots of the work: modernization, global services, and intelligent automation.</p>
              </div>

              <div className="system-list">
                {selectedSystems.map((system, index) => (
                  <details className="system-row" key={system.title} open={index === 0}>
                    <summary>
                      <span className="system-index">{system.index}</span>
                      <span className="system-title-wrap">
                        <span className="system-signal">{system.signal}</span>
                        <span className="system-title">{system.title}</span>
                        <span className="system-lead">{system.lead}</span>
                      </span>
                      <span className="system-toggle" aria-hidden="true"><span className="closed-label">Open</span><span className="open-label">Close</span> +</span>
                    </summary>
                    <div className="system-detail">
                      <p>{system.detail}</p>
                      <div><span>{system.meta}</span><span>{system.stack}</span></div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="career" className="section section-career" data-section="03" aria-labelledby="career-title">
          <div className="section-shell">
            <SectionIndex number="03" label="CAREER TRACE" />
            <div className="section-content">
              <div className="section-heading section-heading-split">
                <div>
                  <p className="section-overline">2015—NOW / THREE COMPANIES</p>
                  <h2 id="career-title">A decade of<br />compounding judgment.</h2>
                </div>
                <p>From enterprise batch processing to cloud platforms and AI-assisted search—the scope grew, but the operating principle stayed the same: make hard systems understandable and reliable.</p>
              </div>

              <div className="career-ledger">
                {career.map((entry, index) => (
                  <details className="career-entry" key={`${entry.date}-${entry.role}`} open={index === 0}>
                    <summary>
                      <span className="career-date">{entry.date}</span>
                      <span className="career-role"><strong>{entry.role}</strong><span>{entry.company}</span></span>
                      <span className="career-location">{entry.location}</span>
                      <span className="career-toggle" aria-hidden="true">+</span>
                    </summary>
                    <div className="career-detail">
                      <p>{entry.detail}</p>
                      <span>{entry.stack}</span>
                    </div>
                  </details>
                ))}
              </div>

              <aside className="recommendation" aria-label="Professional recommendation">
                <span>PEER SIGNAL / SEP 2024</span>
                <blockquote>“Picks up new technologies quickly.”</blockquote>
                <p>— Senior architect recommendation</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="stack" className="section section-stack" data-section="04" aria-labelledby="stack-title">
          <div className="section-shell">
            <SectionIndex number="04" label="TECHNOLOGY INDEX" />
            <div className="section-content">
              <div className="section-heading stack-heading">
                <p className="section-overline">TOOLS CHANGE / PRINCIPLES TRAVEL</p>
                <h2 id="stack-title">The operating stack.</h2>
                <p>Built around strong service boundaries, observable flows, and deliberately chosen infrastructure.</p>
              </div>

              <div className="technology-grid">
                {technologyGroups.map((group) => (
                  <article className="technology-group" key={group.title}>
                    <span>{group.number}</span>
                    <h3>{group.title}</h3>
                    <p>{group.items.join(" · ")}</p>
                  </article>
                ))}
              </div>

              <p className="stack-footnote">BACKEND DEPTH <span>+</span> CLOUD DELIVERY <span>+</span> APPLIED INTELLIGENCE</p>
            </div>
          </div>
        </section>

        <section id="lab" className="section section-lab" data-section="05" aria-labelledby="lab-title">
          <div className="section-shell">
            <SectionIndex number="05" label="PUBLIC LAB" />
            <div className="section-content">
              <div className="section-heading section-heading-split">
                <div>
                  <p className="section-overline">LEARNING IN PUBLIC</p>
                  <h2 id="lab-title">Experiments<br />with a commit trail.</h2>
                </div>
                <p>The public repositories are a working notebook: current agent tooling beside the Java, cloud, web, and computer-vision experiments that came before it.</p>
              </div>

              <div className="lab-list">
                {labProjects.map((project) => (
                  <a className="lab-project" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                    <span className="lab-index">{project.index}</span>
                    <span className="lab-name">{project.name}</span>
                    <span className="lab-description">{project.description}</span>
                    <span className="lab-language">{project.language}</span>
                    <span className="lab-arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>

              <a className="text-link" href="https://github.com/Kaushik27?tab=repositories" target="_blank" rel="noreferrer">
                Browse 80+ public repositories <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="credentials" className="section section-credentials" data-section="06" aria-labelledby="credentials-title">
          <div className="section-shell">
            <SectionIndex number="06" label="CREDENTIAL LEDGER" />
            <div className="section-content credentials-layout">
              <div className="credentials-intro">
                <p className="section-overline">SELECTED / AI TO JAVA</p>
                <div className="credentials-count" aria-hidden="true">09</div>
                <h2 id="credentials-title">Credentials that map to the work.</h2>
                <p>A curated ledger across AI, cloud, observability, automation, and the Java foundation underneath it.</p>
              </div>

              <ol className="credential-list">
                {credentials.map((credential, index) => (
                  <li key={credential.name}>
                    <span className="credential-index">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{credential.name}</strong>
                    <span>{credential.issuer}</span>
                    <time>{credential.date}</time>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="contact" className="contact" data-section="07" aria-labelledby="contact-title">
          <div className="contact-meta"><span>07 / CONTACT</span><span>CHICAGO / OPEN CHANNEL</span></div>
          <h2 id="contact-title">Ready for the next<br /><em>hard problem.</em></h2>
          <div className="contact-actions">
            <a className="contact-primary" href="mailto:kaushikmandal27@gmail.com">Start a conversation <span>↗</span></a>
            <button type="button" onClick={copyEmail}>{copied ? "Copied to clipboard" : "Copy email"}</button>
          </div>
          <p className="copy-status" aria-live="polite">{copied ? "Email address copied." : ""}</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/kaushik-mandal-11a89b25/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/Kaushik27" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="mailto:kaushikmandal27@gmail.com">Email ↗</a>
          </div>
          <footer>
            <span>KAUSHIK MANDAL</span>
            <span>LEAD SOFTWARE ENGINEER</span>
            <span>CHICAGO</span>
            <span>2026</span>
          </footer>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
