import React from 'react';
import './About.css';

function About() {
  return (
    <section id='about' className='about-section'>
      <div className='content'>
        <p className="lightning-text">
          Welcome to my portfolio! I'm <span>VISHNU</span>, a passionate and dedicated <span>FULL STACK DEVELOPER</span>. With a background in <span>ELECTRONICS AND COMMUNICATION ENGINEERING</span>, I thrive on turning ideas into reality through creativity and innovation.
        </p>
        <p>
          I believe in going above and beyond to exceed expectations. I'm driven by a commitment to delivering work that not only meets but exceeds standards.
        </p>
        <p>
          I value collaboration and believe in the power of teamwork. Effective communication and cooperation are key to successful projects.
        </p>
        <p>
          In the fast-paced world of <span>FULL STACK DEVELOPER</span>, I understand the importance of staying updated with the latest trends and technologies. I am dedicated to continuous learning and improvement.
        </p>
      </div>
      <div className='image-area'>
        <div className='img-wrapper'>
          <img src='/images/vishnu.png' alt='vishnu' />
          <h2>VISHNU</h2>
          <ul>
            <li><a href='https://github.com/Vishnu-D-2002?tab=repositories' target='_blank'><i className='fab fa-github'></i></a></li>
            <li><a href='mailto:vishnuduraisamy2002@gmail.com' target='_blank'><i className='fab fa-google'></i></a></li>
            <li><a href='https://wa.me/+918778847843' target='_blank'><i className='fab fa-whatsapp'></i></a></li>
            <li><a href='https://www.linkedin.com/in/vishnu-d-1453aa246/' target='_blank'><i className='fab fa-linkedin'></i></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
