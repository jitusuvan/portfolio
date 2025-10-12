import { experiences } from '../../data/portfolioData.js';

const ExperienceSection = () => {
  return (
    <section id="experience" className="content-section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
      </div>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-content">
              <h3 className="experience-role">{exp.role}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <span className="experience-period">{exp.period}</span>
              <p className="experience-desc">{exp.description}</p>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;