import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Certification.css';

function Certification() {
  const certificates =  [
  "https://i.postimg.cc/VvgMXRks/HTML-5.png",
  "https://i.postimg.cc/xjh6CjbX/CSS-3.png",
  "https://i.postimg.cc/nLXbN39m/Bootstrap.png",
  "https://i.postimg.cc/sD0m8j3j/Javascript.png",
  "https://i.postimg.cc/1t1hx0cK/React-JS.png",
  "https://i.postimg.cc/6phBfmrN/MySQL.png",
  "https://i.postimg.cc/Sx2B1tFP/MongoDB.png",
  "https://i.postimg.cc/C5K8w8wR/Node-js.png",
  "https://i.postimg.cc/7hZrZHCs/Full-Stack-Developer.png",
];

  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const totalCards = certificates.length;
  const screenWidth = window.innerWidth;

  let cardsToShow, numIndicators;
  if (screenWidth < 755) {
    cardsToShow = 1;
    numIndicators = 9;
  } else if (screenWidth >= 755 && screenWidth < 1140) {
    cardsToShow = 2;
    numIndicators = 5;
  } else {
    cardsToShow = 3;
    numIndicators = 3;
  }

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
    <section id='certification'>
      <div>
        <h1 id='conttitle'>Certification</h1>
        <div id='cert-cont'>
          <p>Proficient in MongoDB, Express.js, React.js, and Node.js (MERN) stack showcased through hands-on projects.</p>
          <p>Applied MERN stack knowledge to develop dynamic and responsive web applications.</p>
          <p>Demonstrated effective problem-solving skills in addressing development challenges.</p>
          <p>Equipped with industry-relevant skills, poised to contribute to dynamic development teams with a focus on collaborative success.</p>
        </div>
      </div>

      <div className="sliderContainer" ref={containerRef}>
        <div className="containerProject">
          {Array.from({ length: cardsToShow }).map((_, index) => (
            <div key={index} className="cardCertificate">
              <div className="BoxCertificate">
                <img
                  src={certificates[(startIndex + index) % totalCards]}
                  alt={`Certificates ${startIndex + index + 1}`}
                />
                <div className="detailsCertificate">
                  <button
                    className="custom-btn btn-7"
                    onClick={() => window.open(certificates[(startIndex + index) % totalCards], "_blank")}
                  >
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              className={`indicator ${isActive(index) ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );

}

export default Certification;
