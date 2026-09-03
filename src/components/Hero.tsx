import PortraitCanvas from "./PortraitCanvas";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        {/* Portrait */}
        <div className="hero-image">
          <PortraitCanvas />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <p className="hero-status">&gt; SYSTEM READY</p>

          <h1 className="hero-name">
            CHRISTIAN LEONARD FRANCO FERNANDEZ
            <span className="cursor">_</span>
          </h1>

          <h2 className="hero-title">SOFTWARE DEVELOPER</h2>

          <p className="hero-description">
            Builder of practical applications and software projects
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="retro-button">
              VIEW PROJECTS
            </a>

            <a href="#contact" className="retro-button">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
