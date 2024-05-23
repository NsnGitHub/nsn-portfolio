import { useEffect, useState } from "react";
import "../styles/LiquidBackground.css";
import { useThemeContext } from "../hooks/useTheme";

type Position = {
  x: number;
  y: number;
};

type Circle = {
  size: number;
  positionX: number;
  positionY: number;
  velocityX: number;
  velocityY: number;
};

const getCircleSize = () => {
  const windowSize = window.innerWidth;
  const circleWidth = Math.floor(windowSize / 4);

  if (circleWidth < 175) {
    return 175;
  }

  return circleWidth;
};

const generateRandomPosition = (sizeOfCircle: number) => {
  const randX = Math.random() * window.innerWidth - sizeOfCircle;
  const randY = Math.random() * window.innerHeight - sizeOfCircle;
  return { x: randX, y: randY };
};

const randomSpeedAndDirection = () => {
  const randomSpeed = Math.random() + 0.65;
  const randomDirection = Math.random() > 0.5 ? 1 : -1;
  return randomSpeed * randomDirection;
};

export default function LiquidBackgroundV2() {
  const [circles, setCircles] = useState<Circle[]>([]);
  const { theme } = useThemeContext();

  useEffect(() => {
    const initCircles = () => {
      const newCircles = [];
      const circleSize = getCircleSize();

      for (let i = 0; i < 7; i++) {
        const randomPosition: Position = generateRandomPosition(circleSize);
        const circle: Circle = {
          size: circleSize,
          positionX: randomPosition.x,
          positionY: randomPosition.y,
          velocityX: randomSpeedAndDirection(),
          velocityY: randomSpeedAndDirection(),
        };
        newCircles.push(circle);
      }
      setCircles(newCircles);
    };

    const update = () => {
      setCircles((prev) => {
        return prev.map((circle) => {
          const updateCircle = { ...circle };
          updateCircle.positionX += updateCircle.velocityX;
          updateCircle.positionY += updateCircle.velocityY;

          if (updateCircle.positionX > window.innerWidth - updateCircle.size) {
            updateCircle.positionX = window.innerWidth - updateCircle.size;
            updateCircle.velocityX *= -1;
          }

          if (updateCircle.positionX <= 0) {
            updateCircle.velocityX *= -1;
            updateCircle.positionX = 0;
          }

          if (updateCircle.positionY > window.innerHeight - updateCircle.size) {
            updateCircle.positionY = window.innerHeight - updateCircle.size;
            updateCircle.velocityY *= -1;
          }

          if (updateCircle.positionY <= 0) {
            updateCircle.velocityY *= -1;
            updateCircle.positionY = 0;
          }

          return updateCircle;
        });
      });

      requestAnimationFrame(update);
    };

    initCircles();
    const updateId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(updateId);
  }, []);

  return (
    <div className={`lqb__container ${theme === "light" ? "lqb--light" : "lqb--dark"}`}>
      <div className={`lqb__blurFilter ${theme === "light" ? "lqb__blurFilter--light" : "lqb__blurFilter--dark"}`}>
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`lqb__circle ${
              // Conditions to get 2 blue, 2 purple, 2 pink circles in 7 circles total
              index === 0
                ? theme === "light"
                  ? "lqb__circle--light"
                  : "lqb__circle--dark"
                : // purples
                index % 3 === 0
                ? "lqb__circle--purple"
                : // pinks and blues
                index % 3 === 1
                ? "lqb__circle--pink"
                : "lqb__circle--blue"
            }`}
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              transform: `translate(${circle.positionX}px, ${circle.positionY}px)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
