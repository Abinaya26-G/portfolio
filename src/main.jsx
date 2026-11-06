import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BrainCircuit, BriefcaseBusiness,
  Check, Code2, Download, ExternalLink, Github, GraduationCap, Linkedin,
  Mail, MapPin, Menu, Phone, Sparkles, Terminal, X, Zap
} from 'lucide-react'
import './styles.css'

const profile = {
  name: 'Abinaya Gowthaman',
  shortName: 'Abinaya',
  email: 'abinayagowthaman004@gmail.com',
  phone: '+91 9384755020',
  linkedin: 'https://linkedin.com/in/abinaya-g-bb00a5327',
  github: 'https://github.com/Abinaya26-G',
}

const projects = [
  {
    number: '01',
    name: 'TN Government Scheme AI Assistant',
    category: 'Generative AI · RAG',
    description: 'An AI assistant that helps users explore Tamil Nadu government schemes, understand eligibility guidance, required documents and application steps, with source-oriented responses.',
    stack: ['React', 'FastAPI', 'Gemini', 'Sentence Transformers', 'ChromaDB'],
    link: 'https://tn-scheme-ai.vercel.app',
    linkLabel: 'Live application',
    github: 'https://github.com/Abinaya26-G/TN-Scheme-AI',
    accent: 'violet',
    icon: BrainCircuit,
  },
  {
    number: '02',
    name: 'RepoChat AI',
    category: 'AI Engineering · LLM',
    description: 'A repository question-answering application designed to help developers understand codebases by asking questions in natural language.',
    stack: ['Python', 'FastAPI', 'LLMs', 'RAG'],
    link: 'https://repochat-ai-one.vercel.app',
    linkLabel: 'Live application',
    github: 'https://github.com/Abinaya26-G/repochat-ai',
    accent: 'blue',
    icon: Terminal,
  },
  {
    number: '03',
    name: 'ConnectHub',
    category: 'Java Full Stack',
    description: 'A real-time room-based chat application built with a React frontend and Spring Boot backend, using JWT authentication and WebSocket messaging.',
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'STOMP'],
    link: 'https://connect-hub-orpin-sigma.vercel.app/',
    linkLabel: 'Live application',
    github: 'https://github.com/Abinaya26-G/ConnectHub',
    accent: 'cyan',
    icon: Code2,
  },
  {
    number: '04',
    name: 'Notes App',
    category: 'Java Full Stack · DevOps',
    description: 'A notes management web application with authentication and note operations, supported by a CI/CD workflow using Jenkins, Maven and Docker Compose.',
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Jenkins', 'Docker'],
    link: 'http://13.51.207.216/',
    linkLabel: 'Live application',
    github: 'https://github.com/Abinaya26-G',
    accent: 'pink',
    icon: Code2,
  },
]

const skillGroups = [
  { title: 'Backend development', icon: Code2, items: ['Java', 'Spring Boot', 'Spring Security', 'Python', 'FastAPI', 'REST APIs', 'Microservices'] },
  { title: 'AI & Generative AI', icon: BrainCircuit, items: ['RAG', 'LLMs', 'Gemini', 'ChromaDB', 'Sentence Transformers'] },
  { title: 'Frontend development', icon: Sparkles, items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Databases & messaging', icon: Terminal, items: ['PostgreSQL', 'MySQL', 'Redis', 'Kafka', 'SQL'] },
  { title: 'Tools & DevOps', icon: Zap, items: ['AWS', 'Docker', 'Jenkins', 'Maven', 'Git', 'GitHub', 'Linux', 'Shell Scripting', 'Postman'] },
  { title: 'Computer science', icon: GraduationCap, items: ['Data Structures & Algorithms', 'OOP', 'DBMS'] },
]

const experiences = [
  {
    role: 'Full Stack Web Development Intern',
    company: 'iTECH Academy',
    location: 'Tirunelveli',
    period: 'May 2026 – June 2026',
    points: [
      'Developed FastAPI backend endpoints for a document-based question-answering application.',
      'Implemented document chunking and embedding generation, storing vectorized text chunks in a vector database for semantic retrieval.',
      'Integrated retrieved document context into a RAG pipeline to generate context-aware answers.'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'NEHA SOLUTIONS',
    location: 'Pollachi, Tamil Nadu',
    period: 'June 2025 – July 2025',
    points: [
      'Designed and developed backend modules for the RentEase rental application using Java, Spring Boot and REST APIs.',
      'Implemented JWT-based authentication and role-based access control (RBAC).',
      'Developed and tested RESTful authentication APIs using Postman.'
    ]
  }
]

const certificates = [
  { name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', issuer: 'Oracle', year: '2025', tag: 'AI Foundations' },
  { name: 'SQL (Advanced) Certificate', issuer: 'HackerRank', year: 'Completed', tag: 'SQL' },
  { name: 'Python Certification', issuer: 'Issuer / credential details to be confirmed', year: 'Completed', tag: 'Python' },
  { name: 'Oracle Autonomous Database Cloud 2025 Certified Professional', issuer: 'Oracle', year: '2025', tag: 'Cloud Database' },
]

const achievements = [
  { metric: '210+', title: 'LeetCode problems solved', detail: 'Consistent problem-solving practice across data structures and algorithms.' },
  { metric: '01', title: 'Code Debugging event coordinator', detail: 'Coordinated a code debugging event as part of the college symposium.' },
  { metric: '01', title: 'PPT Presentation event coordinator', detail: 'Coordinated a presentation event as part of the college symposium.' },
  { metric: 'VS Code', title: 'Interview Mode extension published', detail: 'Published a Visual Studio Code extension for a 45-minute interview setup. Marketplace link can be added once provided.' },
]

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

function ResumeLinks({ compact = false }) {
  return <div className={compact ? 'resume-links compact' : 'resume-links'}>
    <a className="button button-primary" href="/resumes/java-resume.pdf" download>
      <Download size={16} /> Java Resume
    </a>
    <a className="button button-secondary" href="/resumes/ai-resume.pdf" download>
      <Download size={16} /> AI / Python Resume
    </a>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const navItems = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Certificates', '#certificates'], ['Achievements', '#achievements'], ['Contact', '#contact']]

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="header">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">AG</span><span>Abinaya<span className="brand-dot">.</span></span></a>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-resume" href="/resumes/java-resume.pdf" download onClick={closeMenu}><Download size={14}/> Resume</a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="availability-line" /></div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>{profile.name}<span className="hero-period">.</span></h1>
          <div className="hero-role"><span>Java Full Stack Developer</span><i>+</i><span>AI Engineer</span></div>
          <p className="hero-description">I build full-stack applications and AI-powered solutions, combining backend engineering with practical Generative AI workflows.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#contact">Let's connect <ArrowRight size={16}/></a>
          </div>
          <ResumeLinks />
          <div className="hero-meta"><span><MapPin size={14}/> India · Open to relocation</span><span><GraduationCap size={15}/> B.E. Computer Science & Engineering</span></div>
        </div>
        <div className="hero-art" aria-label="Developer profile graphic">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="hero-glow" />
          <div className="code-window">
            <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>developer.ts</span><span className="window-lock">•••</span></div>
            <div className="code-content">
              <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
              <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">'Abinaya'</span>,</div>
              <div><span className="line-no">03</span>&nbsp;&nbsp;roles: [</div>
              <div><span className="line-no">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Java Developer'</span>,</div>
              <div><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'AI Engineer'</span></div>
              <div><span className="line-no">06</span>&nbsp;&nbsp;],</div>
              <div><span className="line-no">07</span>&nbsp;&nbsp;focus: <span className="code-green">'Building'</span>,</div>
              <div><span className="line-no">08</span>&nbsp;&nbsp;learning: <span className="code-green">'Always'</span></div>
              <div><span className="line-no">09</span>{'}'};</div>
              <div className="code-cursor"><span className="line-no">10</span><span className="code-purple">return</span> <span className="code-blue">impact</span><span className="cursor">_</span></div>
            </div>
          </div>
          <div className="float-chip chip-java"><Code2 size={15}/> Java · Spring Boot</div>
          <div className="float-chip chip-ai"><BrainCircuit size={15}/> Python · GenAI</div>
          <div className="hero-orb-label">BUILD <span>·</span> LEARN <span>·</span> SHIP</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
      </section>

      <section className="section-wrap about-section" id="about">
        <SectionHeading eyebrow="01 / ABOUT ME" title="A little about my journey." description="Curious by nature. Driven by building things that solve real problems." />
        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">I'm a Computer Science and Engineering student passionate about <strong>software development</strong> and <strong>Artificial Intelligence</strong>.</p>
            <p>My work spans Java and Spring Boot backend development, React-based interfaces, and Python-powered AI applications. I enjoy taking an idea from its core logic to a working application, learning the tools and engineering practices needed along the way.</p>
            <p>I'm currently looking for opportunities where I can contribute, keep learning, and grow as a software engineer.</p>
            <div className="about-tags"><span>Problem solver</span><span>Continuous learner</span><span>Builder mindset</span></div>
          </div>
          <div className="education-card">
            <div className="card-icon"><GraduationCap size={21}/></div>
            <span className="eyebrow">EDUCATION</span>
            <h3>B.E. Computer Science and Engineering</h3>
            <p>AAA College of Engineering & Technology</p>
            <p className="muted">Sivakasi, Tamil Nadu</p>
            <div className="education-score"><span>CGPA</span><strong>8.17<span></span></strong></div>
            <span className="score-note"></span>
          </div>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <SectionHeading eyebrow="02 / TECH STACK" title="Tools I work with." description="A growing toolkit across full-stack engineering, AI development and deployment." />
        <div className="skills-grid">
          {skillGroups.map(group => {
            const Icon = group.icon
            return <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={18}/></span><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>
          })}
        </div>
      </section>

      <section className="section-wrap projects-section" id="projects">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Things I've built." description="A selection of applications that demonstrate my work across Java full stack development and AI engineering." />
        <div className="projects-grid">
          {projects.map(project => {
            const Icon = project.icon
            return <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-symbol"><Icon size={21}/></span></div>
              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
              <div className="project-links"><a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={15}/></a><a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a></div>
            </article>
          })}
        </div>
        <p className="project-note"><span className="note-dot"/> Project links are provided for review. Please verify each deployment is active before sharing this portfolio with recruiters.</p>
      </section>

      <section className="section-wrap experience-section" id="experience">
        <SectionHeading eyebrow="04 / EXPERIENCE" title="Learning by building." description="Internship experience across full-stack web development and Python-based AI application development." />
        <div className="experience-list">
          {experiences.map((item, index) => <article className="experience-card" key={item.company}>
            <div className="experience-marker"><BriefcaseBusiness size={18}/></div>
            <div className="experience-content">
              <div className="experience-top"><div><h3>{item.role}</h3><p>{item.company} <span>·</span> {item.location}</p></div><span className="experience-period">{item.period}</span></div>
              <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </section>

      <section className="section-wrap certificates-section" id="certificates">
        <SectionHeading eyebrow="05 / CERTIFICATIONS" title="Learning, validated." description="Certifications and learning milestones across AI, cloud, databases and programming." />
        <div className="cert-list">
          {certificates.map((cert, index) => <article className="cert-row" key={cert.name}><div className="cert-index">0{index + 1}</div><div className="cert-icon"><Award size={20}/></div><div className="cert-info"><h3>{cert.name}</h3><p>{cert.issuer} <span>·</span> {cert.year}</p></div><span className="cert-tag">{cert.tag}</span></article>)}
        </div>
        <p className="small-note">Certificate credential links and scanned copies can be added after you share them.</p>
      </section>

      <section className="section-wrap achievements-section" id="achievements">
        <SectionHeading eyebrow="06 / BEYOND THE CODE" title="Achievements & involvement." description="A little about how I practice, participate and contribute beyond project work." />
        <div className="achievement-grid">
          {achievements.map((item, index) => <article className="achievement-card" key={item.title}><span className="achievement-index">0{index + 1}</span><strong className="achievement-metric">{item.metric}</strong><h3>{item.title}</h3><p>{item.detail}</p></article>)}
        </div>
      </section>

      <section className="section-wrap resume-section" id="resume">
        <div className="resume-panel"><div><span className="eyebrow">07 / RESUME</span><h2>Let's make the next step easy.</h2><p>Choose the resume that best matches the role you're hiring for.</p></div><div className="resume-panel-actions"><a className="button button-primary" href="/resumes/java-resume.pdf" download><Download size={16}/> Java Full Stack Resume</a><a className="button button-secondary" href="/resumes/ai-resume.pdf" download><Download size={16}/> AI / Python Resume</a></div></div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <SectionHeading eyebrow="08 / GET IN TOUCH" title="Have an opportunity in mind?" description="I'm open to full-time, internship and entry-level opportunities in software development and AI engineering." />
        <div className="contact-panel">
          <div className="contact-copy"><span className="contact-orb"><Mail size={23}/></span><h3>Let's build something meaningful.</h3><p>Feel free to reach out for opportunities, collaborations or a conversation about technology.</p><a className="button button-primary" href={`mailto:${profile.email}?subject=Opportunity%20for%20Abinaya`}><Mail size={16}/> Send me an email <ArrowUpRight size={15}/></a></div>
          <div className="contact-details">
            <a href={`mailto:${profile.email}`}><span><Mail size={17}/></span><div><small>EMAIL</small><strong>{profile.email}</strong></div><ArrowUpRight size={15}/></a>
            <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><span><Phone size={17}/></span><div><small>PHONE</small><strong>{profile.phone}</strong></div><ArrowUpRight size={15}/></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={17}/></span><div><small>LINKEDIN</small><strong>Connect professionally</strong></div><ArrowUpRight size={15}/></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span><Github size={17}/></span><div><small>GITHUB</small><strong>Explore my repositories</strong></div><ArrowUpRight size={15}/></a>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer"><a href="#home" className="brand"><span className="brand-mark">AG</span><span>Abinaya<span className="brand-dot">.</span></span></a><span>Designed & built with curiosity.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
