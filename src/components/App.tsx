import { useThemeContext } from "../hooks/useTheme";
import "../styles/App.css";
import Carousel from "./Carousel";
import Hero from "./Hero";
import LiquidBackgroundV2 from "./LiquidBackground-v2";
import Navbar from "./Navbar";
import Project from "./Project";
import Reveal from "./Reveal";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`${theme === "light" ? "light" : "dark"}`}>
      <LiquidBackgroundV2 />
      <Navbar />
      <Hero />

      <div className="app__container">
        <div className="project__container">
          <Reveal>
            <Project
              title="nsn-portfolio1"
              techStackList={["React", "TypeScript", "HTML", "CSS"]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
          </Reveal>

          <Reveal>
            <Project
              title="nsn-portfolio2"
              techStackList={["React", "TypeScript", "HTML", "CSS"]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
          </Reveal>

          <Reveal>
            <Project
              title="nsn-portfolio3"
              techStackList={["React", "TypeScript", "HTML", "CSS"]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
          </Reveal>

          <Carousel>
            <Project
              title="nsn-portfolio1"
              techStackList={["React", "TypeScript", "HTML", "CSS"]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
            <Project
              title="nsn-portfolio2"
              techStackList={["React", "TypeScript", "HTML", "CSS"]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              image={null}
            />
            <Project
              title="nsn-portfolio3"
              techStackList={["React", "TypeScript", "HTML", "CSS"]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
