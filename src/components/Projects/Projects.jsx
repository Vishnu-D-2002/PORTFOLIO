import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Projects.css";

const Projects = ({ projects }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [category, setCategory] = useState("all");
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  const screenWidth = window.innerWidth;

  let cardsToShow, numIndicators;
  if (screenWidth < 755) {
    cardsToShow = 1;
  } else if (screenWidth >= 755 && screenWidth < 1140) {
    cardsToShow = 2;
  } else {
    cardsToShow = 3;
  }

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.type === category);

  const totalCards = filteredProjects.length;
  numIndicators = Math.ceil(totalCards / cardsToShow);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const updateIndexWithLoop = (newIndex) => {
    setStartIndex((prevIndex) => (newIndex + totalCards) % totalCards);
  };

  const handleIndicatorClick = (index) => {
    const newIndex = index * cardsToShow;
    updateIndexWithLoop(newIndex);
  };

  const isActive = (index) => {
    const start = index * cardsToShow;
    const end = start + cardsToShow;
    return startIndex >= start && startIndex < end;
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(animationTimeoutRef.current);
    };

    const handleMouseLeave = () => {
      startAnimation();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const startAnimation = () => {
    const container = containerRef.current;

    const animate = () => {
      nextSlide();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationTimeoutRef.current = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 3000);
  };

  useEffect(() => {
    const container = containerRef.current;
    startAnimation();

    return () => {
      clearTimeout(animationTimeoutRef.current);
      cancelAnimationFrame(animationRef.current);
    };
  }, [startIndex]);

  return (
    <section id="projects">
      <h1 id="conttitle">Projects</h1>
      <div className="sliderContainer" ref={containerRef}>
        <div className="categories">
          <button
            className={category === "all" ? "active" : ""}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          <button
            className={category === "fullstack" ? "active" : ""}
            onClick={() => setCategory("fullstack")}
          >
            Full Stack
          </button>
          <button
            className={category === "miniproject" ? "active" : ""}
            onClick={() => setCategory("miniproject")}
          >
            Mini Project
          </button>
        </div>
        
        <div className="containerProject">
          {Array.from({ length: cardsToShow }).map((_, index) => {
            const projectIndex = (startIndex + index) % totalCards;
            return (
              <div key={index} className="cardProject">
                <div className="BoxProject">
                  <img
                    src={filteredProjects[projectIndex].image}
                    alt={`Project ${projectIndex + 1}`}
                  />
                </div>
                <div className="detailsProject">
                  <h2>{filteredProjects[projectIndex].title}</h2>
                  <p>{filteredProjects[projectIndex].description}</p>
                  <div>
                    <h3>
                      <strong>Tools Used:</strong>
                    </h3>{" "}
                    {filteredProjects[projectIndex].toolsUsed.join(", ")}
                  </div>
                  <div className="buttons">
                    <a
                      href={filteredProjects[projectIndex].sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn1"
                    >
                      Source Code
                    </a>
                    <a
                      href={filteredProjects[projectIndex].liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn1"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {totalCards > 1 && (
          <>
            <button className="sliderButton left" onClick={prevSlide}>
              <FaArrowLeft />
            </button>
            <button className="sliderButton right" onClick={nextSlide}>
              <FaArrowRight />
            </button>
          </>
        )}
        <div className="indicators">
          {Array.from({ length: numIndicators }).map((_, index) => (
            <span
              key={index}
              className={`indicator ${isActive(index) ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
