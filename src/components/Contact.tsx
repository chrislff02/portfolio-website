function Contact() {
  return (
    <section className="contact" id="contact">
      {/* Section Command */}
      <p className="section-command">&gt; OPEN CONTACT.EXE</p>

      <div className="contact-section">
        {/* Contact Heading */}
        <h2>LET'S CONNECT</h2>

        <h3>
          I'm open to new opportunities, collaborations, and new projects.
        </h3>

        {/* Contact Links */}
        <div className="contact-links">
          <a href="mailto:chrislff02@gmail.com" className="retro-button">
            EMAIL ME
          </a>

          <a
            href="https://github.com/chrislff02"
            target="_blank"
            rel="noreferrer"
            className="retro-button"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/christian-leonard-franco-fernandez-a68684348"
            target="_blank"
            rel="noreferrer"
            className="retro-button"
          >
            LINKEDIN
          </a>
        </div>

        {/* Footer */}
        <p className="contact-footer">
          &gt; END OF FILE<span className="cursor">_</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
