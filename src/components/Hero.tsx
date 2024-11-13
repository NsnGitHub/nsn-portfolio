import { useThemeContext } from "../hooks/useTheme";
import "../styles/Hero.css";
import Contact from "./Contact";

export default function Hero() {
  const { theme } = useThemeContext();

  return (
    <>
      <section className="hero" id="hero">
        <h1>Hi there, I'm Anson.</h1>
        <p>
          Was once a business student aspiring to excel in accounting. But then decided to build cool and impactful
          applications with code instead. Currently a fourth-year student studying Computing Science @ Simon Fraser
          University.
        </p>
        <Contact />
        <button className={`hero__button ${theme === "light" ? "hero__button--light" : "hero__button--dark"}`}>
          Check out my projects
        </button>
      </section>
    </>
  );
}
