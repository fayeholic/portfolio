import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';

const skills = [
  ['Programming', 'Python, JavaScript, HTML, CSS'],
  ['Database', 'MySQL, SQL'],
  ['Systems', 'Windows, Linux, Kali Linux'],
  ['IT Support', 'Hardware, software and user support'],
  ['Administration', 'Users, permissions, services, networking'],
  ['Tools', 'VS Code, Git, GitHub, VirtualBox'],
];

const projects = [
  {
    number: '01', title: 'Hostel Laundry Management System',
    tags: ['MySQL', 'Web Development', 'SDLC'],
    description: 'A web-based system that brings laundry bookings and complaint handling into one practical workflow for hostel residents and administrators.',
    points: ['Designed the MySQL database for users, machines, bookings and complaints.', 'Diagnosed application and database issues in a collaborative Waterfall SDLC process.'],
  },
  {
    number: '02', title: 'System Administration & Linux Lab',
    tags: ['Linux', 'Kali Linux', 'VirtualBox'],
    description: 'Hands-on system administration practice focused on reliable day-to-day operations and structured troubleshooting.',
    points: ['Managed users, groups, permissions, processes and services.', 'Used command-line tools for monitoring, networking and troubleshooting.'],
  },
  {
    number: '03', title: 'Python Programming Projects',
    tags: ['Python', 'Problem Solving'],
    description: 'A collection of small applications built to strengthen programming foundations and debugging discipline.',
    points: ['Applied functions, loops, lists, dictionaries and file handling.', 'Focused on readable logic, debugging and practical problem-solving.'],
  },
];

const development = [
  ['PSDC Cybersecurity & AI for Smart Industry', 'Industry applications of cybersecurity and artificial intelligence.'],
  ['My5G Tour - Kuala Lumpur', "Malaysia's 5G ecosystem, use cases and emerging digital applications."],
  ['Industry Partner Engagement', 'Employer expectations, workplace readiness and career development.'],
];

const certifications = [
  'Google IT Support Professional Certificate', 'AWS Cloud Computing Foundations', 'AWS Responsible AI',
  'Functions in Python - Training Week 2026', 'Power BI: The Powerful Tool for Data Storytelling',
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nurfifi Afiqah, home">NA<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a>
          <a className="nav-contact" href="mailto:nurfifiafiqah8@gmail.com">Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available 30 Nov 2026 - 16 Apr 2027</p>
          <h1>I build, troubleshoot<br />and keep learning<span>.</span></h1>
          <p className="hero-intro">I&apos;m <strong>Nurfifi Afiqah</strong>, an Information Technology student specialising in software and application development, with practical experience across IT support, Linux and databases.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={18} /></a>
            <a className="button button-secondary" href="/Nurfifi_Afiqah_IT_Internship_Resume.pdf" download>Download résumé <Download size={18} /></a>
          </div>
        </div>
        <aside className="profile-card" aria-label="Profile summary">
          <div className="portrait-frame"><img src="/profile.jpg" alt="Nurfifi Afiqah" /><span className="portrait-code">IT / 2026</span></div>
          <div className="profile-meta"><p><MapPin size={16} /> Bayan Lepas, Pulau Pinang</p><p><GraduationCap size={16} /> Politeknik Balik Pulau</p></div>
          <div className="profile-stat"><div><span>CGPA</span><strong>3.46</strong><small>/ 4.00</small></div><div><span>Recognition</span><strong>Dean&apos;s List</strong><small>Semesters 3 & 4</small></div></div>
        </aside>
      </section>

      <section className="about-grid section" id="about">
        <div className="section-label">01 / About</div>
        <div className="about-copy">
          <h2>Curious about how systems work—and how to make them work better.</h2>
          <p>I enjoy moving between code, databases and operating systems to understand problems from more than one angle. My academic work and industry programmes have built a foundation in technical support, application troubleshooting, cybersecurity, AI and 5G.</p>
          <p>I&apos;m now looking for an IT internship where I can contribute, learn from experienced teams and turn classroom knowledge into dependable real-world solutions.</p>
        </div>
        <div className="education-card"><GraduationCap size={24} /><span>Diploma in Information Technology</span><strong>Software & Application Development</strong><p>Aug 2024 - Present</p></div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading"><div className="section-label">02 / Selected work</div><h2>Projects that show<br />how I think.</h2></div>
        <div className="project-list">
          {projects.map((project) => <article className="project-card" key={project.number}>
            <span className="project-number">{project.number}</span><div>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <ul>{project.points.map((point) => <li key={point}><CheckCircle2 size={16} />{point}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading"><div className="section-label light">03 / Toolkit</div><h2>Ready to contribute<br />from day one.</h2></div>
        <div className="skill-grid">
          {skills.map(([title, value], index) => <div className="skill-item" key={title}>
            {index === 0 ? <TerminalSquare /> : index === 1 ? <Server /> : index === 2 ? <ShieldCheck /> : <Sparkles />}
            <span>{title}</span><p>{value}</p>
          </div>)}
        </div>
      </section>

      <section className="section growth-section">
        <div className="growth-column"><div className="section-label">04 / Industry exposure</div><div className="timeline">
          {development.map(([title, detail]) => <div className="timeline-item" key={title}><span /><div><h3>{title}</h3><p>{detail}</p></div></div>)}
        </div></div>
        <div className="growth-column"><div className="section-label">05 / Certifications</div><div className="cert-list">
          {certifications.map((item) => <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>)}
        </div></div>
      </section>

      <footer id="contact">
        <p className="eyebrow"><span className="status-dot" /> Open to IT internship opportunities</p>
        <h2>Let&apos;s build something<br />useful together<span>.</span></h2>
        <div className="footer-links"><a href="mailto:nurfifiafiqah8@gmail.com"><Mail size={18} /> nurfifiafiqah8@gmail.com</a><a href="https://linkedin.com/in/nurfifiafiqah" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} /></a></div>
        <div className="footer-bottom"><span>Nurfifi Afiqah Binti Mat Nor</span><span>Malay · English</span><span>© 2026</span></div>
      </footer>
    </main>
  );
}
