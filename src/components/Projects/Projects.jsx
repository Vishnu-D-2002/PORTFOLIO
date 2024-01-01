import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const cardsToShow = 3;

const Projects = ({ projects }) => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const totalCards = projects.length;

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
      container.style.transition = 'none';
      cancelAnimationFrame(animationRef.current);
    };

    const handleMouseLeave = () => {
      container.style.transition = 'transform 0.5s ease';
      startAnimation();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const startAnimation = () => {
    const container = containerRef.current;

    const animate = () => {
      nextSlide();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const container = containerRef.current;
    const handle = setTimeout(() => startAnimation(), 3000);

    return () => {
      clearTimeout(handle);
      cancelAnimationFrame(animationRef.current);
    };
  }, [startIndex]);

  return (
    <section id='projects'>
      <h1 id='project-title'>Projects</h1>
      <div className="sliderContainer" ref={containerRef}>
        <div className="containerProject">
          {Array.from({ length: cardsToShow }).map((_, index) => (
            <div key={index} className="cardProject">
              <div className="BoxProject">
                <img
                  src={projects[(startIndex + index) % totalCards].image}
                  alt={`Project ${startIndex + index + 1}`}
                />
              </div>
              <div className="detailsProject">
                <h2>{projects[(startIndex + index) % totalCards].title}</h2>
                <p>{projects[(startIndex + index) % totalCards].description}</p>
                <div>
                  <h3>
                    <strong>Tools Used:</strong>
                  </h3>{' '}
                  {projects[(startIndex + index) % totalCards].toolsUsed.join(', ')}
                </div>
                <div className="buttons">
                  <a href={projects[(startIndex + index) % totalCards].sourceCode} target="_blank" rel="noopener noreferrer" className='btn1'>
                    Source Code
                  </a>
                  <a href={projects[(startIndex + index) % totalCards].liveDemo} target="_blank" rel="noopener noreferrer" className='btn1'>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalCards > cardsToShow && (
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
          {Array.from({ length: Math.ceil(totalCards / cardsToShow) }).map((_, index) => (
            <span
              key={index}
              className={`indicator ${isActive(index) ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
