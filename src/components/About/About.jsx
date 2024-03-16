import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="content">
        <p className="lightning-text">
          Hey there, Welcome to my digital corner. I'm <span>Vishnu</span>, a
          relentless seeker of innovation and a passionate{" "}
          <span>Full Stack Developer</span> hailing from the realm of{" "}
          <span>Electronics and Communication Engineering</span>.
        </p>
        <p>
          Journey with me as we explore the endless possibilities of code and
          creativity. With every line of code, I weave tales of functionality
          and elegance, turning dreams into reality.
        </p>
        <p>
          In this fast-paced digital universe, I strive to push boundaries and
          stay ahead of the curve. So, are you ready to embark on an
          exhilarating journey of innovation with me, the sky's the limit!
        </p>
      </div>
      
      <div className="image-area">
        <div className="img-wrapper">
          <img
            src="https://i.postimg.cc/437hC7c4/Blue-Watercolor-Minimalist-Quote-Instagram-Post-20240121-090123-0000.png"
            alt="vishnu"
          />
          <h2>VISHNU</h2>
          <ul className="social-links">
            <li>
              <a href="https://github.com/Vishnu-D-2002" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="mailto:vishnuduraisamy2002@gmail.com" target="_blank">
                <i className="fab fa-google"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/+918778847843" target="_blank">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vishnu-d-1453aa246/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
