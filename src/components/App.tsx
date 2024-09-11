import { useThemeContext } from "../hooks/useTheme";
import "../styles/App.css";
import Hero from "./Hero";
import LiquidBackgroundV2 from "./LiquidBackground-v2";
import Navbar from "./Navbar";
import Project from "./Project";
import Reveal from "./Reveal";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`${theme === "light" ? "light" : "dark"}`}>
      <LiquidBackgroundV2 />
      <Navbar />
      <Hero />

      <Reveal>
        <Project />
      </Reveal>

      <Reveal>
        <Project />
      </Reveal>

      <Reveal>
        <Project />
      </Reveal>

      <Reveal></Reveal>
    </div>
  );
}

export default App;
