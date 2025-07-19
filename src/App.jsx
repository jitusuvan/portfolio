import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Users, Award, Download } from 'lucide-react';

// Mock Lenis for demonstration
const useLenis = () => {
  useEffect(() => {
    let animationFrame;
    let currentScroll = 0;
    let targetScroll = 0;
    const lerp = 0.05;
    
    const handleWheel = (e) => {
      e.preventDefault();
      targetScroll += e.deltaY * 0.8;
      targetScroll = Math.max(0, Math.min(targetScroll, document.documentElement.scrollHeight - window.innerHeight));
    };
    
    const animate = () => {
      currentScroll += (targetScroll - currentScroll) * lerp;
      window.scrollTo(0, currentScroll);
      animationFrame = requestAnimationFrame(animate);
    };
    
    targetScroll = window.scrollY;
    currentScroll = window.scrollY;
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    animate();
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);
};

// Scroll Progress Bar Component
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  
  return (
    <div 
      className="scroll-progress-bar" 
      style={{ width: `${progress}%` }}
    />
  );
};

// Enhanced skills data
const skills = [
  { name: 'React.js', percent: 95, icon: '⚛️' },
  // { name: 'Next.js', percent: 90, icon: '🚀' },
  { name: 'TypeScript', percent: 88, icon: '📘' },
  { name: 'JavaScript ES6+', percent: 95, icon: '⚡' },
  { name: 'Tailwind CSS', percent: 92, icon: '🎨' },
  { name: 'Node.js', percent: 85, icon: '🟢' },
  // { name: 'MongoDB', percent: 80, icon: '🍃' },
  // { name: 'Firebase', percent: 85, icon: '🔥' },
];

// Enhanced projects data
const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory, user authentication, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    image: '🛒'
  },
  {
    title: 'Social Media Dashboard',
    desc: 'Analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking.',
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'Firebase'],
    link: '#',
    github: '#',
    image: '📊'
  },
  {
    title: 'Task Management App',
    desc: 'Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.',
    tech: ['React', 'Redux', 'Socket.io', 'Express'],
    link: '#',
    github: '#',
    image: '📝'
  },
 
];

// Experience data
const experiences = [
  {
    company: 'Humbingo Consultacy Service LLP',
    role: 'Frontend Developer',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.',
    achievements: ['Improved app performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipeline']
  },
  
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  
  useLenis();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <ScrollProgressBar />
   

      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <Zap size={16} />
                Available for freelance
              </div>
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Jitendra Suvan</span>
              </h1>
              <h2 className="hero-subtitle">Senior React Developer & UI/UX Enthusiast</h2>
              <p className="hero-description">
                I craft exceptional digital experiences with modern web technologies. 
                Specializing in React, Next.js, and cutting-edge frontend development.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
              <div className="hero-actions">
                <button className="btn-primary">
                  <Download size={18} />
                  Download CV
                </button>
                <button className="btn-secondary">
                  View Projects
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="profile-container">
                <img 
                  src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" 
                  alt="Profile" 
                  className="profile-image" 
                />
                <div className="profile-ring"></div>
                <div className="floating-icons">
                  <div className="floating-icon" style={{top: '10%', left: '15%'}}>⚛️</div>
                  <div className="floating-icon" style={{top: '20%', right: '10%'}}>🚀</div>
                  <div className="floating-icon" style={{bottom: '15%', left: '10%'}}>💻</div>
                  <div className="floating-icon" style={{bottom: '25%', right: '15%'}}>🎨</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="content-section">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Passionate about creating amazing user experiences</p>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer with 4+ years of experience building modern, 
                scalable web applications. I love turning complex problems into simple, beautiful designs.
              </p>
              <p>
                My expertise spans across React ecosystem, TypeScript, and modern CSS frameworks. 
                I'm always eager to learn new technologies and contribute to open-source projects.
              </p>
              
              <div className="about-highlights">
                <div className="highlight">
                  <Code className="highlight-icon" />
                  <div>
                    <h4>Clean Code</h4>
                    <p>Writing maintainable, scalable code</p>
                  </div>
                </div>
                <div className="highlight">
                  <Palette className="highlight-icon" />
                  <div>
                    <h4>UI/UX Design</h4>
                    <p>Creating beautiful user interfaces</p>
                  </div>
                </div>
                <div className="highlight">
                  <Users className="highlight-icon" />
                  <div>
                    <h4>Team Player</h4>
                    <p>Collaborative and communicative</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skills-container">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.map(skill => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-fill" 
                        style={{width: `${skill.percent}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="experience-section">
            <h3>Work Experience</h3>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-marker"></div>
                  <div className="experience-content">
                    <h4>{exp.role}</h4>
                    <h5>{exp.company}</h5>
                    <span className="experience-period">{exp.period}</span>
                    <p>{exp.description}</p>
                    <ul className="achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} className="project-link">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a href={project.github} className="project-link">
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">Ready to bring your ideas to life</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                I'm always excited to work on new projects and collaborate with amazing people. 
                Let's discuss how we can bring your vision to life!
              </p>
              
              <div className="contact-methods">
                <a href="mailto:jitendrasuvan@gmail.com" className="contact-method">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>jitendrasuvan@gmail.com</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/jitendrasuvan" className="contact-method">
                  <Linkedin className="contact-icon" />
                  <div>
                    <h4>LinkedIn</h4>
                    <p>Connect with me</p>
                  </div>
                </a>
                <a href="https://github.com/jitendrasuvan" className="contact-method">
                  <Github className="contact-icon" />
                  <div>
                    <h4>GitHub</h4>
                    <p>Check out my code</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
                </div>
                <button type="submit" className="btn-primary full-width">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Jitendra Suvan. Crafted with ❤️ using React.</p>
           <button onClick={toggleDarkMode} className="theme-toggle">
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --primary: #6366f1;
          --primary-dark: #4f46e5;
          --secondary: #14b8a6;
          --accent: #f59e0b;
          --gradient: linear-gradient(135deg, #6366f1 0%, #14b8a6 100%);
        }

        [data-theme='dark'] {
          --bg: #0f0f23;
          --bg-secondary: #1a1a3a;
          --bg-tertiary: #252547;
          --text: #ffffff;
          --text-secondary: #a1a1aa;
          --border: #3f3f46;
          --card-bg: rgba(26, 26, 58, 0.8);
          --header-bg: rgba(15, 15, 35, 0.95);
        }

        [data-theme='light'] {
          --bg: #ffffff;
          --bg-secondary: #f8fafc;
          --bg-tertiary: #e2e8f0;
          --text: #1e293b;
          --text-secondary: #64748b;
          --border: #e2e8f0;
          --card-bg: rgba(255, 255, 255, 0.8);
          --header-bg: rgba(255, 255, 255, 0.95);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app-container {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
          transition: all 0.3s ease;
        }

        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: var(--gradient);
          z-index: 9999;
          transition: width 0.3s ease;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--header-bg);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          z-index: 100;
          padding: 1rem 0;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

    .theme-toggle {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text);
  margin-top: 1rem;
  font-size: 1.25rem;
}
.theme-toggle:hover {
  background: var(--primary);
  color: white;
  transform: scale(1.1);
}


        .theme-toggle:hover {
          background: var(--primary);
          color: white;
          transform: scale(1.1);
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          border: none;
        }

        .btn-primary {
          background: var(--gradient);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 2px solid var(--border);
        }

        .btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .full-width {
          width: 100%;
          justify-content: center;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-container {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .profile-image {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--primary);
          position: relative;
          z-index: 2;
        }

        .profile-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid transparent;
          border-radius: 50%;
          background: var(--gradient);
          mask: radial-gradient(circle, transparent 140px, black 142px);
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .floating-icons {
          position: absolute;
          inset: 0;
        }

        .floating-icon {
          position: absolute;
          font-size: 2rem;
          animation: float 3s ease-in-out infinite;
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .content-section {
          padding: 6rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .about-text {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .about-highlights {
          margin-top: 2rem;
        }

        .highlight {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .highlight-icon {
          color: var(--primary);
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .highlight h4 {
          margin-bottom: 0.25rem;
          color: var(--text);
        }

        .highlight p {
          color: var(--text-secondary);
          margin: 0;
        }

        .skills-container h3 {
          margin-bottom: 2rem;
          font-size: 1.5rem;
          color: var(--text);
        }

        .skills-grid {
          display: grid;
          gap: 1rem;
        }

        .skill-card {
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          transition: transform 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-2px);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .skill-icon {
          font-size: 1.25rem;
        }

        .skill-name {
          flex: 1;
          font-weight: 600;
        }

        .skill-percent {
          color: var(--primary);
          font-weight: 700;
        }

        .skill-bar {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          background: var(--gradient);
          border-radius: 3px;
          transition: width 1s ease;
        }

        .experience-section {
          margin-top: 4rem;
        }

        .experience-section h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--text);
        }

        .experience-timeline {
          position: relative;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }

        .experience-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 3rem;
        }

        .experience-marker {
          position: absolute;
          left: 0.5rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--primary);
          border-radius: 50%;
        }

        .experience-content h4 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
          color: var(--text);
        }

        .experience-content h5 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .experience-period {
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .experience-content p {
          margin: 1rem 0;
          color: var(--text-secondary);
        }

        .achievements {
          list-style: none;
          margin-top: 1rem;
        }

         .achievements li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .achievements li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        
        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          transition: transform 0.25s;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .project-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 32px rgba(99, 102, 241, 0.07);
        }
        
        .project-image {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          height: 120px;
        }

        .project-emoji {
          font-size: 3rem;
        }

        .project-content {
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-content h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
          color: var(--primary);
        }

        .project-content p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .project-tech {
          margin-bottom: 1rem;
        }

        .tech-tag {
          display: inline-block;
          background: var(--bg-tertiary);
          color: var(--primary-dark);
          border-radius: 8px;
          font-size: 0.875rem;
          padding: 0.33rem 0.75rem;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .project-links {
          display: flex;
          gap: 1.2rem;
          margin-top: auto;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.33rem;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: color 0.2s;
        }

        .project-link:hover {
          color: var(--accent);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .contact-info h3 {
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .contact-methods {
          margin-top: 2rem;
        }

        .contact-method {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem 0;
          text-decoration: none;
          color: var(--text);
          border-bottom: 1px solid var(--border);
          transition: color 0.15s;
        }
        .contact-method:last-child {
          border-bottom: none;
        }

        .contact-method:hover .contact-icon {
          color: var(--primary);
        }
        .contact-icon {
          font-size: 1.5rem;
          color: var(--accent);
        }

        .contact-method h4 {
          margin: 0;
          font-size: 1.1rem;
        }
        .contact-method p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          width: 100%;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--bg-secondary);
          color: var(--text);
          outline: none;
          transition: border 0.2s;
        }

        .form-input:focus {
          border-color: var(--primary);
        }

        .footer {
          background: var(--header-bg);
          border-top: 1px solid var(--border);
          margin-top: 5rem;
        }

     .footer-content {
  display: flex;
  flex-direction: column;       /* Stack items vertically */
  align-items: center;          /* Center horizontally */
  justify-content: center;      /* Center vertically (optional) */
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
  color: var(--text-secondary);
  font-size: 1rem;
  text-align: center;           /* Center text */
}

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--primary);
        }


        /* Responsive Styles */
        @media (max-width: 992px) {
          .hero-content, .about-grid, .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .main-content, .header-content, .footer-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .profile-container {
            width: 220px;
            height: 220px;
          }
          .profile-image {
            width: 200px;
            height: 200px;
          }
        }

        @media (max-width: 680px) {
          .main-content, .header-content, .footer-content {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .hero-title {
            font-size: 2.1rem;
          }
          .profile-container,
          .profile-image {
            width: 130px;
            height: 130px;
          }
          .section-title {
            font-size: 1.7rem;
          }
          .footer-content {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;