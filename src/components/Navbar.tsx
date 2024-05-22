import "../styles/Navbar.css";
import Contact from "./Contact";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__logo">
          <Logo />
        </li>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li className="navbar__contact">
          <Contact />
        </li>
      </ul>
    </nav>
  );
}
