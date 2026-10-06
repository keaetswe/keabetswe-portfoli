import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Download,
  Mail,
  Menu,
  Microscope,
  Phone,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';

const competencies = [
  'Analytical thinking',
  'Problem-solving',
  'Information technology',
  'Software testing',
  'Research & analysis',
  'Communication',
  'Team collaboration',
  'Attention to detail',
  'Structured thinking',
  'Time management',
  'Adaptability',
  'Continuous learning',
];

const projects = [
  {
    number: '01',
    title: 'Quality assurance sprint',
    type: 'Practice project · Software quality',
    description:
      'A structured testing exercise focused on exploring a digital product, documenting findings, and turning observations into clear, actionable feedback.',
    tools: ['Test planning', 'Exploratory testing', 'Defect reporting'],
    icon: Microscope,
    accent: 'mint',
  },
  {
    number: '02',
    title: 'Research & insight brief',
    type: 'Practice project · Information gathering',
    description:
      'A concise research workflow that gathers information, identifies useful patterns, and presents findings in a way that supports better decisions.',
    tools: ['Desk research', 'Information analysis', 'Written communication'],
    icon: Sparkles,
    accent: 'coral',
  },
  {
    number: '03',
    title: 'People, process & systems',
    type: 'Practice project · Business technology',
    description:
      'A business-process mapping exercise connecting people, technology, and administration to reveal opportunities for clearer and more reliable workflows.',
    tools: ['Process thinking', 'Systems awareness', 'Team collaboration'],
    icon: BriefcaseBusiness,
    accent: 'blue',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Keabetswé Seloane home">
          <span className="brand-mark">KS</span>
          <span className="brand-name">Keabetswé Seloane</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Strengths</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Information technology student</p>
            <h1>Curious mind.<br /><em>Quality mindset.</em></h1>
            <p className="hero-intro">
              I&apos;m Keabetswé — an aspiring software QA tester who enjoys understanding how things work, finding what can be improved, and helping make digital experiences more reliable.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a
                className="button button-outline"
                href="/Keabetswe_Seloane_CV.pdf"
                download="Keabetswe_Seloane_CV.pdf"
                aria-label="Download CV as PDF"
              >
                Download CV <Download size={16} />
              </a>
            </div>
            <a className="text-link hero-hello" href="mailto:betsswekea@gmail.com">Say hello <span>↗</span></a>
            <div className="hero-note"><span className="note-dot" /> Based in Johannesburg, South Africa</div>
          </div>
          <div className="hero-visual" aria-label="Profile introduction">
            <div className="portrait-card">
              <div className="portrait-glow" />
              <div className="portrait-initials">KS</div>
              <div className="portrait-caption"><span>01</span><span>Always learning</span></div>
            </div>
            <div className="floating-card floating-card-top"><span className="card-icon"><Check size={15} /></span><span>Detail-oriented<br /><strong>by nature</strong></span></div>
            <div className="floating-card floating-card-bottom"><span className="card-icon card-icon-coral"><Sparkles size={15} /></span><span>Open to<br /><strong>opportunity</strong></span></div>
            <div className="visual-stamp">IT<br /><span>+</span><br />QA</div>
          </div>
        </section>

        <section className="ticker" aria-label="Professional focus areas">
          <div className="ticker-track"><span>SOFTWARE QUALITY</span><i>✳</i><span>RESEARCH & ANALYSIS</span><i>✳</i><span>PEOPLE & PROCESS</span><i>✳</i><span>CONTINUOUS LEARNING</span><i>✳</i><span>SOFTWARE QUALITY</span></div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-grid">
            <h2>Making room for<br /><em>better questions.</em></h2>
            <div className="about-copy">
              <p className="large-copy">I bring a calm, practical approach to new challenges — combining technology with business and administrative thinking.</p>
              <p>As an Information Technology and Communication student at Rosebank College, I am building a strong foundation in systems, testing, research, and problem-solving. I am at my best when I can learn quickly, work thoughtfully, and contribute to a team that cares about doing things well.</p>
              <a className="text-link" href="#contact">Get to know me <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-label light-label"><span>02</span><span>What I bring</span></div>
          <div className="skills-heading"><h2>Strengths that<br /><em>move work forward.</em></h2><p>From the first question to the final detail, I bring curiosity, accountability, and a willingness to keep learning.</p></div>
          <div className="skill-grid">{competencies.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span><strong>{skill}</strong></div>)}</div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-label"><span>03</span><span>Selected work</span></div>
          <div className="work-heading"><h2>Small projects,<br /><em>real intention.</em></h2><p>A selection of practice-led work that reflects the way I think: observe carefully, organise clearly, improve continuously.</p></div>
          <div className="project-list">{projects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.number}><div className={`project-art ${project.accent}`}><Icon size={31} strokeWidth={1.5} /><span>{project.number}</span></div><div className="project-content"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tool-list">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div><ArrowUpRight className="project-arrow" size={21} /></article>; })}</div>
        </section>

        <section className="journey section-pad" id="journey">
          <div className="section-label"><span>04</span><span>My journey</span></div>
          <div className="journey-grid">
            <div><h2>Building a foundation<br /><em>with purpose.</em></h2><p className="journey-intro">My academic path brings together technology, business, and the human side of how organisations work.</p></div>
            <div className="timeline">
              <div className="timeline-item"><div className="timeline-marker" /><div><p className="timeline-date">February 2024 — Present</p><h3>Information Technology and Communication</h3><p>Rosebank College · Current studies focused on developing technical and problem-solving capabilities.</p></div></div>
              <div className="timeline-item"><div className="timeline-marker" /><div><p className="timeline-date">Professional development</p><h3>Business & organisational context</h3><p>Business Information Systems, IT Project Management, Business Management, Office Administration, Human Computer Interaction, and Work Integrated Learning.</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-inner"><div className="section-label light-label"><span>05</span><span>Start a conversation</span></div><h2>Let&apos;s make something<br /><em>work better.</em></h2><p>Whether you&apos;re looking for a thoughtful intern, a curious learner, or simply want to connect, my inbox is open.</p><div className="contact-actions"><a className="button button-light" href="mailto:betssweka@gmail.com">Send an email <Send size={16} /></a><a className="contact-detail" href="tel:+2763529829"><Phone size={16} /> +27 63 521 9829</a></div><a className="cv-download-link" href="/Keabetswe_Seloane_CV.pdf" download="Keabetswe_Seloane_CV.pdf"><Download size={15} /> Download my CV (PDF)</a></div>
          <div className="contact-side"><div className="contact-orbit">KS</div><p>Available for<br /><strong>new opportunities</strong></p><a href="mailto:betssweka@gmail.com">betssweka@gmail.com <ArrowUpRight size={14} /></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">KS</span><span>Keabetswé Seloane</span></div><p>Information Technology Student · Aspiring Software QA Tester</p><div className="footer-links"><a href="#top">Back to top <ChevronDown size={15} className="rotate-up" /></a><a href="mailto:betssweka@gmail.com"><Mail size={15} /> Email</a><a href="tel:+2763529829"><Phone size={15} /> Call</a><a href="/Keabetswe_Seloane_CV.pdf" download="Keabetswe_Seloane_CV.pdf"><Download size={15} /> CV</a></div></footer>
    </div>
  );
}

export default App;
