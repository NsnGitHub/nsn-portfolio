import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, DotIcon, DotFilledIcon } from "@radix-ui/react-icons";
import "../styles/Carousel.css";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0);
  const length = React.Children.count(children);

  const nextProject = () => {
    setCurrent((prev) => (prev == length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrent((prev) => (prev == 0 ? length - 1 : prev - 1));
  };

  if (length == 0) {
    return <></>;
  }

  return (
    <section className="carousel">
      <div className="carousel__container">
        <ArrowLeftIcon
          height="3rem"
          width="3rem"
          onClick={prevProject}
          className="carousel__controls--large"
        ></ArrowLeftIcon>

        {React.Children.map(children, (child, index) => (
          <div className={index === current ? "slide--active" : "slide"} key={index}>
            {index === current && child}
          </div>
        ))}

        <ArrowRightIcon
          height="3rem"
          width="3rem"
          onClick={nextProject}
          className="carousel__controls--large"
        ></ArrowRightIcon>

        <div className="carousel__controls--small">
          <ArrowLeftIcon height="3rem" width="3rem" onClick={nextProject}></ArrowLeftIcon>
          <ArrowRightIcon height="3rem" width="3rem" onClick={prevProject}></ArrowRightIcon>
        </div>
      </div>

      <div className="carousel__pagination_dots">
        {Array(length)
          .fill(null)
          .map((value, index) => (index == current ? <DotFilledIcon /> : <DotIcon />))}
      </div>
    </section>
  );
}
