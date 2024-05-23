import { useThemeContext } from "../hooks/useTheme";
import "../styles/Hero.css";
import Contact from "./Contact";
import LiquidBackgroundV2 from "./LiquidBackground-v2";

export default function Hero() {
  const { theme } = useThemeContext();

  return (
    <>
      <LiquidBackgroundV2 />
      <main className={`hero ${theme === "light" ? "hero--light" : "hero--dark"}`}>
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
      </main>
    </>
  );
}
