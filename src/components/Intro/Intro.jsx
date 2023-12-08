import React, { useEffect, useState } from 'react';
import './Intro.css';

function Intro() {
  const [titleText, setTitleText] = useState("Hi, I'm VISHNU");
  const [fsdText, setFsdText] = useState("FULL STACK DEVELOPER (MERN)");

  const animateTitle = (text, setText) => {
    setText('');
    text.split('').forEach((letter, index) => {
      setTimeout(() => {
        setText(prevText => prevText + letter);
      }, index * 300);
    });
  };

  useEffect(() => {
    animateTitle("Hi, I'm VISHNU", setTitleText);
    animateTitle('FULL STACK DEVELOPER (MERN)', setFsdText);

    const intervalId = setInterval(() => {
      animateTitle("Hi, I'm VISHNU", setTitleText);
      animateTitle('FULL STACK DEVELOPER (MERN)', setFsdText);
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='intro'>
      <div id='left-content'>
        <h1 id='title'>{titleText}</h1><br />
        <h1 id='fsd'>{fsdText}</h1>
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
