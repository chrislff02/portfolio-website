import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [connectOpen, setConnectOpen] = useState(false);

  const lastScrollY = useRef(0);
  const connectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top of the page
      if (currentScrollY < 50) {
        setShowNavbar(true);
      }

      // Hide navbar while scrolling down
      else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
        setConnectOpen(false);
      }

      // Show navbar again while scrolling up
      else {
        setShowNavbar(true);
      }

      // Save current scroll position for next scroll event
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        connectRef.current &&
        !connectRef.current.contains(event.target as Node)
      ) {
        setConnectOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setConnectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav
      className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}
    >
      {/* Logo */}
      <div className="logo">CLFF_</div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>

        {/* Connect Dropdown */}
        <div className="connect-menu" ref={connectRef}>
          <button
            type="button"
            className="connect-button"
            onClick={() => setConnectOpen(!connectOpen)}
            aria-expanded={connectOpen}
            aria-haspopup="true"
          >
            CONNECT
          </button>

          {connectOpen && (
            <div className="connect-dropdown">
              <a href="mailto:chrislff02@gmail.com">&gt; EMAIL</a>

              <a
                href="https://github.com/chrislff02"
                target="_blank"
                rel="noreferrer"
              >
                &gt; GITHUB
              </a>

              <a
                href="https://www.linkedin.com/in/christian-leonard-franco-fernandez-a68684348"
                target="_blank"
                rel="noreferrer"
              >
                &gt; LINKEDIN
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
