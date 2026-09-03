import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top of the page
      if (currentScrollY < 50) {
        setShowNavbar(true);
      }

      // Hide navbar while scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      // Show navbar again while scrolling up
      else {
        setShowNavbar(true);
      }

      // Save current scroll position for next scroll event
      setLastScrollY(currentScrollY);
    };

    // Listen for page scrolling
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
      </div>
    </nav>
  );
}

export default Navbar;
