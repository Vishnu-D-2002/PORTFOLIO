import React, { useEffect, useState } from 'react';
import './Intro.css';

function Intro() {
  const [titleText, setTitleText] = useState("VISHNU");
  const [fsdText, setFsdText] = useState("FULL STACK DEVELOPER (MERN)");

  const animateTitle = (text, setText) => {
    setText('');
    text.split('').forEach((letter, index) => {
      setTimeout(() => {
        setText(prevText => prevText + letter);
      }, index * 500);
    });
  };

  useEffect(() => {
    animateTitle("VISHNU", setTitleText);
    animateTitle('FULL STACK DEVELOPER (MERN)', setFsdText);

    const intervalId = setInterval(() => {
      animateTitle("VISHNU", setTitleText);
      animateTitle('FULL STACK DEVELOPER (MERN)', setFsdText);
    }, 14000);

    return () => clearInterval(intervalId);
  }, []);

  const handleResumeClick = () => {
    const resumeUrl = 'https://drive.google.com/file/d/17FBejZc5ga5r0z_qS1Iv3avIBcG16CcC/view?usp=drivesdk';
    
    window.open(resumeUrl, '_blank'); 
  };

  return (
    <section id='intro'>
      <div id='left-content'>
        <h1 id='title'>Hello , I'm {titleText}</h1><br />
        <h1 id='fsd'>{fsdText}</h1>
        <p id='para'>
            I'm very Interested in creating websites and apps using a technology stack called MERN (MongoDB, Express.js, React, Node.js). Let's create something awesome together!<button onClick={handleResumeClick}>Resume</button>
        </p>
      </div>
      <div id='right-content'>
        <div id='end'>
          <img src="/images/vishnu.png" alt="" className='rounded-image' />
        </div>
      </div>
    </section>
  );
}

export default Intro;
