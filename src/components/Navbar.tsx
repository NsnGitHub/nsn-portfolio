import { useThemeContext } from "../hooks/useTheme";
import "../styles/Navbar.css";
import Contact from "./Contact";
import Logo from "./Logo";
import Settings from "./Settings";

export default function Navbar() {
  const { theme } = useThemeContext();

  return (
    <nav className={`navbar ${theme === "light" ? "navbar--light" : "navbar--dark"}`}>
      <ul className="navbar__list">
        <li className="navbar__logo">
          <Logo />
        </li>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
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
