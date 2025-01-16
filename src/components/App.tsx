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
        <div className="project__container" id="projects">
          <Reveal>
            <h2 className="project__container__title">
              <div className="line"></div>Personal Projects<div className="line"></div>
            </h2>
          </Reveal>
          <Reveal>
            <Project
              title="nsn-portfolio"
              techStackList={["React", "TypeScript", "HTML", "CSS"]}
              description={[
                "This website started as a mini-project to relearn JavaScript/TypeScript, and it was convenient that I still needed a personal portfolio website.",
                "It showcases some features that I found cool on other websites, which I challenged myself to recreate it on my own. These include \
                an animated logo in the top-left corner, smooth content revealing on scroll, and a dynamic liquid background (which can be seen better on dark mode!), \
                and lastly a carousel to display other features at the bottom of the page.",
              ]}
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
          </Reveal>

          <Reveal>
            <Project
              title="nsn-updates-backend"
              techStackList={["Java", "Spring", "Junit 5"]}
              description={[
                "nsn-updates is a minimal social media application inspired by X (formerly Twitter) as a way to relearn Java and explore frameworks \
              like Spring Boot, Spring Security, and Spring Data JPA.",
                "The platform enables users to create posts, follow users, and interact through likes and notifications. For authentication, \
                the backend uses Spring Security with http-only cookies for managing auth and refresh tokens.",
                "To ensure reliability, JUnit 5 and Testcontainers were used to perform integration tests after every update",
                "The frontend is still a WIP, it's being built with React, TypeScript, and TailwindCSS.",
              ]}
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
          </Reveal>

          <Reveal>
            <h2 className="project__container__title">
              <div className="line"></div>Cool Group Projects<div className="line"></div>
            </h2>
          </Reveal>

          <Carousel>
            <Project
              title="Autonomous Driving Jetson Nano"
              techStackList={["Python", "PyTorch"]}
              description={[
                "Final project an AI course at BCIT. This project involved aspects of computer vision and a convolutional neural network deployed onto a NVDIA Jetson Nano with a SparkFun Robot Kit to make it move along \
                a white line and stop for a set amount of seconds when it detects a stop sign.",
                "If you want to learn more about this project, I linked the Google Slides presentation, so click on the globe icon below.",
              ]}
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
            <Project
              title="Embedded Plant Caretaker"
              techStackList={["C", "Python"]}
              description={[
                "Semester project for an embedded development course. The goal of this project was to have an embedded system that can take care of any plant. \
                It involved a BeagleBone Green, an RHT03 temperature and humidity sensor, a STEMMA soil sensor, and a water pump",
                "The data from both sensors were retrieved via i2c by a sampling thread, this data is then sent to the web server through UDP to display. On the web server, \
                thresholds can be set for when the water pump will activate, this was accomplished by another thread that handles the communication between the BeagleBone and \
                the web server.",
              ]}
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
