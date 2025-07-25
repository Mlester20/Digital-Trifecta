import { useEffect, useState } from "react";
import { navLinks } from "../constants"

const NavBar = () => {

  //track if user scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled)
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
      <a href="#hero" className="logo">
        Digital Trifecta
      </a>

      <nav className="desktop">
        <ul>
          {navLinks.map(({link, name}) => (
            <li key={name} className="group">
              <a href={link}>
                <span> {name} </span>
                <span className="underline"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#contact" className="contact-brn group">
          <div className="inner">
            <span>Contact Us</span>
          </div>
      </a>

      </div>
    </header>
  );
}

export default NavBar