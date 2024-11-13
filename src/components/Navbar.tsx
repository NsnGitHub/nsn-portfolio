import "../styles/Navbar.css";
import Contact from "./Contact";
import Logo from "./Logo";
import Settings from "./Settings";

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <ul className="navbar__list">
        <li className="navbar__logo">
          <Logo />
        </li>
        <li className="navbar__projects">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar__resume">Resume</li>
        <li className="navbar__contact-settings">
          <span className="navbar__contact">
            <Contact />
          </span>
          <Settings />
        </li>
      </ul>
    </nav>
  );
}
