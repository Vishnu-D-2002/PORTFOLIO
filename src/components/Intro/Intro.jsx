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

  return (
    <section id='intro'>
      <div id='left-content'>
        <h1 id='title'>Hi, I'm {titleText}</h1><br />
        <h1 id='fsd'>{fsdText}</h1>
        <p id='para'>
            I'm a Full Stack Developer with expertise in creating websites and apps using a technology stack called MERN (MongoDB, Express.js, React, Node.js). I work on both the visible parts and the behind-the-scenes parts. My goal is to make user-friendly and efficient applications by writing smart and organized code. I enjoy learning about new technologies and collaborating with teams to build innovative solutions. Let's create something awesome together!
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
