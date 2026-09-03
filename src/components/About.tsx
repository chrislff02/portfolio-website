function About() {
  return (
    <section className="about" id="about">
      {/* Section Command */}
      <p className="section-command">&gt; OPEN ABOUT.TXT</p>

      <div className="about-container">
        {/* Quick Info */}
        <div className="about-info">
          <p>
            <span>NICKNAMES</span>
            Chris/Franco
          </p>

          <p>
            <span>ROLE</span>
            Software Developer
          </p>

          <p>
            <span>FOCUS</span>
            Software Dev / Web Dev / Machine Learning / Data & Analytics
          </p>
        </div>

        {/* About Text */}
        <div className="about-text">
          <h2>ABOUT</h2>

          <p>
            I'm a computer scientist passionate about building practical and
            creative applications while continuously expanding my knowledge of
            new technologies and development practices.
          </p>

          {/* Current Activities */}
          <h2>CURRENTLY</h2>

          <p>&gt; Practicing algorithms</p>
          <p>&gt; Developing new projects</p>
        </div>
      </div>
    </section>
  );
}

export default About;
