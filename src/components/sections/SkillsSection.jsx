import { skills } from '../../data/portfolioData.js';

const SkillsSection = () => {
  return (
    <section id="skills" className="content-section">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-progress">
              <div 
                className="skill-progress-bar" 
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <span className="skill-percent">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;