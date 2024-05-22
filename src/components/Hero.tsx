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
          Formerly a business student with dreams of conquering the accounting world... but decided to build cool
          applications instead. Currently a fourth-year student studying Computing Science @ Simon Fraser University.
        </p>
        <Contact />
        <button className="hero__button">Check out my projects</button>
      </main>
    </>
  );
}
