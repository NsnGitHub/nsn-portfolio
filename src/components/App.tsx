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
              title="nsn-updates"
              techStackList={["Java", "Spring", "Junit 5", "TypeScript", "React", "TailwindCSS"]}
              description={[
                "This project is a full stack social media platform designed for simplicity and core social features. Users can post updates, follow others, like content, and manage their own posts.",
                "The backend is built with Java and Spring Boot, exposing a RESTful API for client interactions. Key technologies inclide: PostgreSQL for persistent storage accessed via Hibernate and Spring Data JPA, JWT-based authentication implemented as a custom HTTP only filter using Spring Security, WebSocket integration for real-time notifications, A centralizated exception handling mechanism for consistent error responses, Comphresensive testing using SpringBootTest and TestContainers.",
                "The frontend is built with TypeScript, React, and TailwindCSS, delivering a modern user experience.",
                "This project gave me hands-on experience building out a web application, as a solo developer it allowed me to explore any technology or feature I wanted to. Most importantly, it highlighted the importance of system design and planning, as I spent a lot of time regretting certain design choices that I made in the past.",
              ]}
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
          </Reveal>

          <Reveal>
            <h2 className="project__container__title">
              <div className="line"></div>Some Cool Group Projects<div className="line"></div>
            </h2>
          </Reveal>

          <Carousel>
            <Project
              title="Embedded Plant Caretaker"
              techStackList={["C", "Python"]}
              description={[
                "This project focused on building an automated plant care system using embedded technologies.",
                "The system was powered by a BeagleBone Green and had many sensors integrated, including an RHT03 temperature and humidity sensor, a STEMMA soil moisture sensor, and a water pump for irragation.",
                "Data was collected via I2C by a dedicated sampling thread and then transmitted to a web server using UDP.",
                "The web interface allowed users to set custom thresholds for temperature, humidity, and soil moisture levels. Another communication thread monitored these thresholds and activated the water pump when necessary, enabling remote plant care automation.",
              ]}
              image={{ src: "/nsn-dev.png", alt: "Test" }}
            />
            <Project
              title="Autonomous Driving Jetson Nano"
              techStackList={["Python", "PyTorch"]}
              description={[
                "As part of a final project for an Artificial Intillegence course at BCIT, I developed an autonomous driving system deployed on an NVIDIA Jetson Nano and a SparkFun robot kit equipped with a camera and motorized wheels.",
                "The goal was to enable the robot to nagivate a track autonomously while obeying any stop signs through computer vision coupled with deep learning.",
                "The navigation was implemented using OpenCV to track a line on the ground. The camera feed was processed using grayscale conversion, Gaussian blur, colour thresholding, and contour detection. To reduce computational load, I reduced the image capture rate to 10 FPS, and only used a cropped lower portion of the image, allowing the robot to focus on the most relevant part of its path.",
                "I ended up using AlexCNN over a self-developed TensorFlow-based model, to improve prediction accuracy.",
                "The end result was a robot able to navigate a circuit while stopping at every stop sign, and I received 95% in the course.",
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
