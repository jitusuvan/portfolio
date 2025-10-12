import { Zap, Download } from 'lucide-react';

const HeroSection = () => {
  return (
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
          <h2 className="hero-subtitle">
            Frontend Developer & UI/UX Enthusiast
          </h2>
          <p className="hero-description">
            I build modern, responsive web applications using React.js,
            JSX/TSX, and Vite. Passionate about clean UI, smooth UX, and
            performance-first development.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">7+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">4+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn-primary">
              <Download size={18} />
              Download CV
            </button>
            <button className="btn-secondary">View Projects</button>
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
              <div className="floating-icon" style={{ top: "10%", left: "15%" }}>⚛️</div>
              <div className="floating-icon" style={{ top: "20%", right: "10%" }}>🚀</div>
              <div className="floating-icon" style={{ bottom: "15%", left: "10%" }}>💻</div>
              <div className="floating-icon" style={{ bottom: "25%", right: "15%" }}>🎨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;