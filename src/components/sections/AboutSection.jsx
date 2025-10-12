import { Code, Palette, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="content-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about creating amazing user experiences
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a passionate frontend developer with 1+ years of experience
            building modern, scalable web applications. I love turning
            complex problems into simple, beautiful designs.
          </p>
          <p>
            My expertise spans across React ecosystem, TypeScript, and
            modern CSS frameworks. I'm always eager to learn new
            technologies and contribute to open-source projects.
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
      </div>
    </section>
  );
};

export default AboutSection;