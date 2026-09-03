function Skills() {
  return (
    <section className="skills" id="skills">
      {/* Section Command */}
      <p className="section-command">&gt; OPEN SKILLS.SYS</p>

      {/* Programming Languages */}
      <div className="skills-section">
        <h2>LANGUAGES</h2>

        <div className="skills-list">
          <span>C</span>
          <span>Java</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>PHP</span>
          <span>SQL</span>
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="skills-section">
        <h2>FRAMEWORKS / LIBRARIES</h2>

        <div className="skills-list">
          <span>React</span>
          <span>Bootstrap</span>
          <span>Node.js</span>
          <span>PyTorch</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
        </div>
      </div>

      {/* Development Tools */}
      <div className="skills-section">
        <h2>TOOLS</h2>

        <div className="skills-list">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>SQLite</span>
          <span>Eclipse</span>
          <span>Android Studio</span>
        </div>
      </div>

      {/* Core Concepts */}
      <div className="skills-section">
        <h2>CONCEPTS</h2>

        <div className="skills-list">
          <span>OOP</span>
          <span>Data Structures</span>
          <span>Algorithms</span>
          <span>REST APIs</span>
          <span>Machine Learning</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
